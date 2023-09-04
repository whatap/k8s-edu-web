---
sidebar_position: 1
---

# 실습 환경 접속 준비

## WINDOWS
### 1. SSH Client 기능 활성화
:::info
이미 윈도우 환경에서 ssh client 기능을 활성화 시킨 상태라면 다음 2번으로 건너뛰세요.
:::
[윈도우 ssh client 활성화 스크린 샷]

### 2. pem 파일 다운로드
이메일에 제공된 pem 파일을 다운로드 받습니다.

### 3. pem 파일 권한 설정
[윈도우 파일 권한 상속 취소 밑 재부여 스크린 샷]

### 4. CMD 실행 및 SSH 접속 명령 실행
```bash
ssh -i pem키파일경로 ubuntu@제공된IP
```
---
## MAC
### 1. pem 파일 다운로드
이메일에 제공된 kp-k8s-edu.pem 파일을 다운로드 받습니다.

### 2. pem 파일 권한 설정
```bash
chmod 400 ~/Downloads/kp-k8s-edu.pem
```

### 3. 터미널 실행 및 SSH 접속 명령 실행
```bash
ssh -i ~/Downloads/kp-k8s-edu.pem ubuntu@제공된IP
```

