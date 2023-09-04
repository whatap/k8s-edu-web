---
sidebar_position: 5
authors: irostub
---
# 모니터링 설치

### WhaTap 회원가입 및 로그인

https://service.whatap.io/account/login

### 계정 언어 설정 변경

![change-lang](./img/change-lang.png)

### WhaTap Kubernetes 모니터링 프로젝트 생성

![create-project](./img/create-project.png)

프로젝트 명 : (자율)

데이터 서버 지역 : Korea-AWS-Seoul

타임 존 : (GMT +9:00) Seoul, Tokyo, Yakutsk

### 컨테이너 런타임 버전 확인

```bash
kubectl get node -o wide
```

![container-runtime-version](./img/container-runtime-version.png)

### 컨테이너 버전에 맞는 YAML 파일 다운로드

![yaml-download](./img/yaml-download.png)

다운로드 한 파일을 control-plane 으로 복사

### WhaTap Kubernetes 모니터링 에이전트 배포

```bash
kubectl apply -f whatap_kube_containerd_1.16.yaml
```

### 컨테이너 맵 확인
다음 사진과 비슷하게 화면이 나온다면 쿠버네티스 모니터링이 설치된 것입니다.
![container-map.png](./img/container-map.png)

### 다음 실습을 위한 로그 모니터링 설정
왼쪽 사이트바의 로그 탭에서 로그 설정 탭을 누릅니다.
![log-setting.png](./img/log-setting.png)

로그 모니터링 활성화 라디오 버튼을 활성화합니다.
![log-enabled.png](./img/log-enabled.png)
