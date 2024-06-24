---
sidebar_position: 2
authors: irostub
---

# 명령형과 선언형 그리고 YAML

쿠버네티스의 리소스를 다루는데는 크게 두가지 방식이 있습니다.

## 명령형
명령형으로 쿠버네티스의 리소스를 다루는 것은 원하는 상태를 만들기 위해 필요한 동작을 지시하는 방법입니다.

예를 들어 다음과 같은 형태로 명령을 실행하는 것을 말합니다.

```bash
kubectl create namespace my-namespace
kubectl edit deployment nginx
kubectl scale deployment nginx --replicas=5
```
명령형 방식은 옵션만 알고 있다면 쉽고 빠르게 원하는 상태를 지시할 수 있으나 다음과 같은 한계를 가지고 있습니다.
:::tip
- 선언형과 비교해 수행할 수 있는 작업이 제한적
- 작업 내역에 대한 히스토리 추적 곤란
- 변경이 일어나는 작업일 때, 기존 선언형으로 생성된 리소스에 대한 정의 파악 곤란
:::

## 선언형

선언형으로 쿠버네티스의 리소스를 다루는 것은 원하는 상태를 직접 모두 기술하는 방법입니다.

보편적으로 yaml 형식으로 리소스에 대해 정의된 파일을 사용하여 `kubectl apply -f my-resource.yaml` 과 같은 형태로 사용을 합니다.

리소스에 대한 yaml 형식은 생성하고 싶은 리소스의 종류에 따라 그 문법이 상이합니다. 여기서는 예시로 Pod 리소스에 대한 예시를 보여드립니다.

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
선언형 방식은 명령형보다 그 문법 체계가 확고하고 보다 많은 정보를 포함함으로 상대적으로 더 어렵습니다.
:::tip

파일로 직접 기술하여 사용하는 만큼 명령형의 단점을 해결해줄 수 있다는 장점이 존재합니다.

이번 세션의 교육에서는 선언형을 위주로 사용하되 직접 yaml 파일을 작성하지 않도록 샘플 yaml 을 제공합니다.
:::
