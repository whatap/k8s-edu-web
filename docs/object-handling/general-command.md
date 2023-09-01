---
sidebar_position: 3
authors: irostub
---

# 기본적인 명령어 사용법

### 리소스 갱신
kubectl apply - 파일이나 stdin 으로 리소스에 대한 구성을 적용합니다. 생성된 리소스가 없는 경우 생성을 하며, 생성된 리소스가 있는 경우 구성을 갱신합니다.
```bash
kubectl apply -f deployment.yaml
```
### 리소스 생성
kubectl create - 리소스를 생성합니다.
```bash
kubectl kubectl create -f deployment.yaml
```
### 리소스 삭제
kubectl delete - 리소스를 삭제합니다.
```bash
kubectl delete -f deployment.yaml
```
### 리소스 상세
kubectl describe - 리소스의 상세를 확인합니다.
```bash
kubectl describe deployment my-deployment
```
### 리소스 노출
kubectl expose - 리소스를 쿠버네티스 서비스를 생성하여 노출합니다.
```bash
kubectl expose deployment my-deployment --type=NodePort --name=my-service
```

