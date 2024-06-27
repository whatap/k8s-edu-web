---
sidebar_position: 2
authors: nhkim
---

# 1부: 쿠버네티스 이해하기

## 컨테이너란 무엇일까요?

컨테이너는 소프트웨어 개발과 배포에서 애플리케이션을 독립적으로 실행할 수 있는 가상 환경입니다. 애플리케이션과 그 의존성을 함께 패키징하여 어디서나 일관되게 실행할 수 있다는 장점이 있습니다. 컨테이너를 실행하고 관리하는 소프트웨어를 컨테이너 런타임이라 하는데, 대표적인 컨테이너 런타임으로는 도커가 있습니다.

![container_vs_vm](/img/hello-k8s/container_vs_vm.png)

:::tip <b>가상 머신과 컨테이너가 다른점은 무엇인가요?</b>

가상 머신은 독립적인 운영체제를 포함하지만, 컨테이너는 호스트 운영체제의 커널을 공유합니다. 이로 인해 컨테이너는 가상 머신에 비해 훨씬 가볍고, 효율적으로 자원을 사용할 수 있습니다.

:::

## 그렇다면 쿠버네티스는 무엇일까요?

### 쿠버네티스의 등장 배경

컨테이너 기술의 발전으로 많은 기업이 마이크로서비스 아키텍처를 도입했습니다. 애플리케이션을 개별 서비스로 나누어 관리함으로써, 각 서비스가 독립적으로 확장되고 장애가 발생해도 전체 시스템에 미치는 영향을 최소화할 수 있기 때문입니다.

그러나, 많게는 수십에서 수백 개의 서비스가 독립적으로 운영되기 때문에, 이를 효과적으로 관리하기 위한 오케스트레이션 도구의 필요성이 커졌습니다. 이러한 배경을 바탕으로 쿠버네티스가 등장하게 되었습니다.

![k8s_advantages](/img/hello-k8s/k8s_advantages.png)

### 쿠버네티스를 사용하는 이유가 있나요?

- **선언적(Declarative) 방식의 배포**: 애플리케이션의 최종 상태를 정의하면 쿠버네티스가 이 상태를 자동으로 구현합니다. 일관된 배포와 관리를 보장하며, 시스템이 스스로 상태를 조정하므로 운영 부담이 줄어듭니다.
- **자동 스케일링(Auto Scaling)**: 리소스 사용량 혹은 트래픽 변동에 따라 자동으로 컨테이너의 수를 조절할 수 있습니다.
- **서비스 디스커버리(Service Discovery)**: 서비스라는 오브젝트를 통해 클러스터 내부에서 실행 중인 애플리케이션에 외부에서 접근할 수 있는 고유한 IP 주소와 DNS 이름을 제공합니다.
- **로드 밸런서(Load Balancer)** : 클러스터 내 애플리케이션의 트래픽을 효율적으로 분산하여 가용성과 성능을 향상시킵니다.
- **자동 복구(Self-Healing)**: 컨테이너가 오류로 다운되거나 문제가 발생하면, 헬스 체크 후 자동으로 새로운 컨테이너를 실행시킬 수 있습니다.
- **제로 다운 타임 배포(Zero Downtime Deployments)**: 애플리케이션을 중단 없이 새로운 버전으로 업데이트하여 사용자 경험을 향상시킵니다.

## 쿠버네티스 오브젝트를 다뤄봅시다

쿠버네티스 오브젝트를 생성하고 관리하기 위해 `kubectl`이라는 CLI 도구를 사용합니다. `kubectl`을 사용하는 방법은 크게 명령형과 선언형 두 가지로 나뉩니다.

### 명령형: 수행할 단계를 지시합니다

원하는 상태를 만들기 위해 필요한 동작을 지시하는 방법으로, 다음과 같은 형태로 명령을 실행합니다.

```bash
kubectl create namespace my-namespace
kubectl edit deployment nginx
kubectl scale deployment nginx --replicas=5
```

명령형 방식은 옵션만 알고 있다면 쉽고 빠르게 원하는 상태를 지시할 수 있지만, 다음과 같은 한계가 있습니다.

- 선언형과 비교해 수행할 수 있는 작업이 제한적입니다.
- 작업 내역에 대한 히스토리 추적이 어렵습니다.
- 변경이 일어나는 작업일 때, 기존에 선언형으로 생성된 리소스에 대한 정의를 파악하기 어렵습니다.

### 선언형: 원하는 결과를 정의합니다

원하는 상태를 직접 모두 기술하는 방법으로, 보편적으로 YAML 형식으로 오브젝트에 대해 정의된 파일을 다음과 같이 적용하여 사용합니다.

```bash
kubectl apply -f my-resource.yaml
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
    - name: nginx
      image: nginx:1.14.2
      ports:
        - containerPort: 80
```

<p style={{color:'gray'}}>*Pod를 생성하기 위한 YAML 예시로, 각 속성은 오브젝트마다 조금씩 다릅니다.</p>

선언형 방식은 명령형보다 그 문법 체계가 확고하고 보다 많은 정보를 포함하기 때문에 상대적으로 더 어렵지만, 파일로 직접 기술하여 사용하는 만큼 명령형의 단점을 해결할 수 있는 방식입니다.

### 무엇을 사용하면 좋을까요?

명령형 방식은 특정 작업을 즉시 수행하고자 할 때 유용하며, 선언형 방식은 반복적이고 지속적인 관리가 필요한 상황에서 더 효과적입니다.

쿠버네티스 오브젝트는 하나의 기법만 사용하여 관리하는 것을 권장합니다. 동일한 오브젝트에 대해 여러 기법을 혼용하는 것은 예상치 못한 동작을 초래할 수 있기 때문입니다. 대부분 선언형 방식을 선호하며, 선언형 방식을 통해 사용자가 최종 상태를 정의하고 시스템이 이를 자동으로 관리하게 됩니다.

### 기본적인 명령어 사용법

- `kubectl apply` : 파일이나 stdin 으로 오브젝트에 대한 구성을 적용합니다. 생성된 오브젝트가 없는 경우 생성을 하며, 생성된 오브젝트가 있는 경우 구성을 갱신합니다.  
  예) `kubectl apply -f deployment.yaml`
- `kubectl create` : 오브젝트를 생성하는 명령어입니다.  
  예) `kubectl create -f deployment.yaml`
- `kubectl delete` : 오브젝트를 삭제하는 명령어입니다.  
  예) `kubectl delete -f deployment.yaml`
- `kubectl describe` : 오브젝트의 상세를 확인하는 명령어입니다.  
  예) `kubectl describe deployment my-deployment`
- `kubectl expose` : 쿠버네티스 서비스를 생성하여 오브젝트를 노출하는 명령어입니다.  
  예) `kubectl expose deployment my-deployment --type=NodePort --name=my-service`

## minikube로 쿠버네티스 시작하기

[minikube](https://minikube.sigs.k8s.io/docs/)는 쿠버네티스를 쉽게 배우고 개발할 수 있도록 하는 데 중점을 둔 로컬 쿠버네티스입니다.
단일 노드의 쿠버네티스 클러스터를 가상 환경 또는 컨테이너로 실행하여 쿠버네티스의 다양한 기능을 로컬 환경에서 사용할 수 있게 합니다.

다음 명령어를 실행하여 minikube 컨테이너가 존재하는지 확인할 수 있습니다.

```bash
docker ps -a
```

![docker-ps-a](/img/hello-k8s/docker-ps-a.png)

만약 minikube가 존재하기 않거나 컨테이너의 STATUS가 Exited라면, 다음 명령어를 실행하여 다시 컨테이너를 다시 실행합니다.

![docker-ps-a-exited](/img/hello-k8s/docker-ps-a-exit.png)

```jsx
minikube start
```

![minikube_start](/img/hello-k8s/minikube_start.png)

## Pod

쿠버네티스에서 가장 작은 배포 단위를 Pod(파드)라고 합니다. 각각의 Pod는 유니크한 IP를 가지고 있으며, Pod는 하나 이상의 컨테이너로 구성될 수 있습니다.

- 두 개 이상의 컨테이너가 존재하는 경우는 보통 하나의 주 프로그램과 그 프로그램의 보조 역할을 하는 프로그램이 있는 경우가 많습니다.
- Pod 안에 존재하는 컨테이너는 리소스를 공유합니다.
- 같은 Pod 안에 있는 컨테이너 간에는 `localhost`를 사용하여 서로 통신할 수 있습니다.

![introduce_pod](/img/hello-k8s/introduce_pod.png)

### Pod 생성해보기

1. `apply` 명령어를 통해 YAML 파일에 정의된 Pod를 실행합니다.

   ```bash
   kubectl apply -f https://raw.githubusercontent.com/whatap/k8s-edu-storage/master/k8s-object/nginx-pod.yaml
   ```

   ```yaml
   apiVersion: v1
   kind: Pod
   metadata:
     name: nginx
     labels:
       app: nginx
   spec:
     containers:
       - name: nginx
         image: nginx:1.25
         ports:
           - containerPort: 8080
   ```

2. `get` 명령어를 통해 Pod가 생성되었는지 확인합니다.

   ```bash
   kubectl get pod
   ```

   ![introduce_pod_get](/img/hello-k8s/introduce_pod_get.png)

   `-o wide` 옵션을 사용하면 더 자세한 정보를 출력할 수 있습니다.

## ReplicaSet

Pod를 항상 일정한 개수로 실행하는 역할을 합니다. ReplicaSet은 Pod를 항상 모니터링 하고 있다가, 존재하는 Pod의 수가 ReplicaSet을 생성할 때 설정한 Pod의 수보다 더 적으면 새롭게 Pod를 생성합니다.

일반적으로는 ReplicaSet의 상위 개념인 Deployment를 통해 Pod를 관리합니다.

## Deployment

ReplicaSet의 상위 개념으로, Deployment를 통해 특정 버전으로 배포된 애플리케이션을 새로운 버전으로 다운 타임 없이 안정적으로 배포할 수 있습니다.

- 설정한 Pod의 수를 유지하기 위해 내부적으로는 ReplicaSet을 사용합니다.
- Deployment는 애플리케이션의 롤아웃 및 롤백과 같은 고급 기능을 제공하여 새로운 버전의 애플리케이션을 안정적으로 배포할 수 있습니다.  
<p style={{color:'gray'}}>*롤아웃(rollout): 소프트웨어 업데이트나 변경 사항을 시스템에 점진적으로 적용하고 배포하는 과정</p>

### Deployment 생성해보기

1. `apply` 명령어를 통해 YAML 파일에 정의된 Deployment를 실행합니다.

   ```bash
   kubectl apply -f https://raw.githubusercontent.com/whatap/k8s-edu-storage/master/k8s-object/tomcat-deployment.yaml
   ```

   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: tomcat-deployment
   spec:
     replicas: 2 #원하는 복제본 수를 지정합니다.
     selector:
       matchLabels: #Deployment를 통해 관리할 Pod의 라벨을 지정합니다.
         app: tomcat
     template: # Deployment를 통해 실행될 Pod를 정의합니다.
       metadata:
         labels:
           app: tomcat
       spec:
         containers:
           - name: tomcat
             image: tomcat:10
             ports:
               - containerPort: 8080
   ```

2. `get` 명령어를 통해 Deployment와 Pod가 생성되었는지 확인합니다.

   ```bash
   kubectl get deployment
   ```

   ![introduce_deploy_get](/img/hello-k8s/introduce_deploy_get.png)

   ```bash
   kubectl get pod
   ```

   ![introduce_deploy_get_pod](/img/hello-k8s/introduce_deploy_get_pod.png)

3. `delete` 명령어를 통해 Deployment로 배포된 Pod 중 하나를 삭제합니다.

   ```bash
   kubectl delete pod {POD_NAME}
   ```

   ![introduce_deploy_delete_pod](/img/hello-k8s/introduce_deploy_delete_pod.png)

4. 다시 Pod 목록을 조회하면 새로운 Pod가 자동으로 생성된 것을 확인할 수 있습니다.

   ```bash
   kubectl get pod
   ```

   ![introduce_deploy_get_deleted_pod](/img/hello-k8s/introduce_deploy_get_deleted_pod.png)

## Service

Pod에서 실행중인 애플리케이션을 클러스터 내/외부 트래픽에 노출시키는 역할을 합니다. 애플리케이션의 여러 인스턴스가 각기 다른 Pod에서 동작하더라도 서비스를 사용하면 모든 Pod에 대한 단일 DNS 이름과 IP 주소를 갖게 됩니다. 또한 Pod가 종료되거나 새로 생성되더라도 서비스의 IP 주소와 DNS 이름은 변하지 않습니다.

![introduce_svc](/img/hello-k8s/introduce_svc.png)

<ImageWithCaption src="introduce_svc.png" caption="test" />

### Service를 생성해 tomcat을 외부에 노출하기

1. `apply` 명령어를 통해 YAML 파일에 정의된 서비스를 실행합니다.

   ```bash
   kubectl apply -f https://raw.githubusercontent.com/whatap/k8s-edu-storage/master/k8s-object/tomcat-service.yaml
   ```

   ```yaml
   apiVersion: v1
   kind: Service
   metadata:
     name: tomcat-svc
   spec:
     type: NodePort
     selector: #동일한 엔드포인트를 제공할 Pod를 선택합니다.
       app: tomcat
     ports:
       - protocol: TCP
         port: 8080 #서비스가 사용할 포트를 지정합니다.
         targetPort: 8080 #Pod가 실제로 리스닝하고 있는 포트를 지정합니다.
   ```

2. `get` 명령어를 통해 서비스가 생성되었는지 확인합니다.

   ```yaml
   kubectl get service
   ```

   ![introduce_svc_get](/img/hello-k8s/introduce_svc_get.png)

3. 서비스 조회 명령어 뒤에 서비스 이름을 명시하면 해당 서비스의 정보만 조회할 수 있습니다. tomcat-svc가 어떤 포트로 tomcat을 노출 시켰는지 조회합니다.

   ```bash
   kubectl get service tomcat-svc
   ```

   ![introduce_svc_tomcat](/img/hello-k8s/introduce_svc_tomcat.png)

4. minikube 컨테이너 외부로 포트를 노출합니다.

   ```bash
   minikube service tomcat-svc --url
   ```

   ![introduce_svc_expose](/img/hello-k8s/introduce_svc_expose.png)

5. 크롬에 minikube 명령을 실행하여 나온 url을 입력하여 접속하면, 다음과 같이 tomcat 기본 화면이 노출됩니다.

   ![introduce_svc_tomcatpage](/img/hello-k8s/introduce_svc_tomcatpage.png)

6. 터미널에서 `ctrl + c` (window) 또는 `cmd + c` (mac)를 입력하면 노출시킨 서비스를 종료합니다.

## Namespace

네임스페이스는 쿠버네티스 클러스터 내의 리소스를 구분하고 격리하기 위한 쿠버네티스의 오브젝트입니다. 네임스페이스를 사용하면 각 환경에 해당하는 리소스를 효과적으로 관리하고 분리할 수 있습니다.

예를 들어, 개발(**`DEV`**) 환경과 품질 보증(**`QA`**) 환경이 동일한 클러스터에서 실행될 때, **`DEV`**와 **`QA`**라는 두 개의 분리된 네임스페이스를 생성할 수 있습니다.

![introduce_ns](/img/hello-k8s/introduce_ns.png)
