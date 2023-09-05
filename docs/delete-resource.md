---
sidebar_position: 6
---

# 리소스 정리하기

이전 실습 시간에 생성한 리소스들을 삭제합니다.

아래의 명령어를 통해 오브젝트를 삭제하고, 목록을 조회할 수 있습니다.

```bash
kubectl delete {OBJECT_TYPE} {OBJECT_NAME}
```

```bash
kubectl get {OBJECT_TYPE} {OBJECT_NAME}
```

## 파드 삭제하기

```bash
kubectl delete pod nginx
```

```bash
kubectl delete pod busy-pod
```

파드가 삭제되었는지 확인합니다.

```bash
kubectl get pod
```

## 레플리카셋 삭제하기

```bash
kubectl delete replicaset k8s-edu-rs
```

:::tip 레플리카셋 다시 한번 살펴보기

레플리카셋을 통해 생성한 파드는 삭제되어도 레플리카셋에 의해 다시 생성됩니다. 레플리카셋 내부에 있는 파드를 삭제하고 싶다면 레플리카셋 전체를 삭제하거나 replicas 개수 조정을 통해 파드 수를 줄이는 방법이 있습니다.

:::

레플리카셋이 삭제되었는지 확인합니다.

```bash
kubectl get replicaset
```

## 디플로이먼트 삭제

```bash
kubectl delete deployment tomcat-deployment
```

:::tip 디플로이먼트 다시 한번 살펴보기

디플로이먼트도 레플리카셋과 동일하게 파드의 수를 균일하게 관리하는 역할을 합니다. 따라서 디플로이먼트 내부에 있는 파드를 삭제하고 싶다면 레플리카셋과 동일하게 replicas를 조정하거나 디플로이먼트 삭제가 필요합니다.

:::

디플로이먼트가 삭제되었는지 확인합니다.

```bash
kubectl get deployment
```

## 서비스 삭제하기

```bash
kubectl delete service nginx-svc
```

```bash
kubectl delete service tomcat-svc
```

서비스가 삭제되었는지 확인합니다.

```bash
kubectl get service
```

## 네임스페이스 삭제하기

:::caution 주의

네임스페이스를 삭제하면 해당 네임스페이스에 속한 모든 리소스가 삭제되므로 삭제 시 주의가 필요합니다.

:::

```bash
kubectl delete namespace k8s-edu-ondemand-hashtag
```

네임스페이스가 삭제되었는지 확인합니다.

```bash
kubectl get namespace
```
