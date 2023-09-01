---
sidebar_position: 3
authors: irostub
---

# 실습 예제

## Pod 생성 (nginx)

```bash
kubectl apply -f https://raw.githubusercontent.com/whatap/k8s-edu-storage/master/k8s-object/nginx-pod.yaml
```

### 생성된 Pod 확인

```bash
kubectl get pod
```

## Service 생성하여 nginx 외부 노출하기

```bash
kubectl apply -f https://raw.githubusercontent.com/whatap/k8s-edu-storage/master/k8s-object/nginx-service.yaml
```

### Service 가 어떤 포트로 외부 노출 시켰는지 조회하기

```bash
kubectl get service | grep nginx-svc
```

### 노출된 nginx 홈페이지 호출하기

```bash
curl http://127.0.0.1:{위에서 조회한 포트}/
```

### 성공 결과

```html
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
html { color-scheme: light dark; }
body { width: 35em; margin: 0 auto;
font-family: Tahoma, Verdana, Arial, sans-serif; }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>

<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a>.<br/>
Commercial support is available at
<a href="http://nginx.com/">nginx.com</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>
```

## ReplicaSet 생성 (busybox)

```bash
kubectl apply -f https://raw.githubusercontent.com/whatap/k8s-edu-storage/master/k8s-object/busybox-replicaset.yaml
```

### 생성된 ReplicaSet 확인

```yaml
kubectl get replicaset
```

### ReplicaSet 이 정상적으로 역할을 수행하는지 확인

```yaml
kubectl get pod
```

```yaml
kubectl delete pod {podname}
```

## Deployment 생성 (tomcat)

```bash
kubectl apply -f https://raw.githubusercontent.com/whatap/k8s-edu-storage/master/k8s-object/tomcat-deployment.yaml
```

### 생성된 Deployment 확인

```yaml
kubectl get deployment
```

### Deployment 가 정상적으로 역할을 수행하는지 확인

```yaml
kubectl get pod
```

```yaml
kubectl delete pod {podname}
```

## Service 생성하여 tomcat 외부 노출하기

```bash
kubectl apply -f https://raw.githubusercontent.com/whatap/k8s-edu-storage/master/k8s-object/tomcat-service.yaml
```

### 생성된 Service 확인

```yaml
kubectl get service
```

### Service 가 어떤 포트로 외부 노출 시켰는지 조회하기

```bash
kubectl get service | grep tomcat-svc
```

### 노출된 tomcat 홈페이지 호출하기

```bash
curl http://127.0.0.1:{위에서 조회한 포트}/
```

## Namespace 생성
```bash
kubectl apply -f https://raw.githubusercontent.com/whatap/k8s-edu-storage/master/k8s-object/edu-namespace.yaml
```