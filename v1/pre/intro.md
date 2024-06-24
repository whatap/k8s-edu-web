---
sidebar_position: 1
---

# 실습 환경 접속 준비

## Windows
### 1. SSH Client 기능 활성화
:::info
이미 윈도우 환경에서 ssh client 기능을 활성화 시킨 상태라면 다음 2번으로 건너뛰세요.
:::

1. 윈도우 왼쪽 하단의 홈버튼을 눌러 설정에 진입합니다. 그리고 앱을 선택해줍니다.
![ssh-client-setting-01.png](img%2Fssh-client-setting-01.png)
2. 선택적 기능 링크를 누릅니다.
![ssh-client-setting-02.png](img%2Fssh-client-setting-02.png)
3. OpenSSH 클라이언트를 검색하여 이미 설치되어있는지 확인 후 설치 버튼이 있다면 설치해줍니다.
![ssh-client-setting-03.png](img%2Fssh-client-setting-03.png)

### 2. pem 파일 다운로드
이메일에 제공된 pem 파일을 다운로드 받습니다.

### 3. pem 파일 권한 설정
1. 다운로드 받은 kp-k8s.edu.pem 파일을 우클릭 후 속성에 들어갑니다.
![pem-permission-01.png](img%2Fpem-permission-01.png)
2. 속성에서 보안 탭을 누른 뒤 고급을 누릅니다.
![pem-permission-02.png](img%2Fpem-permission-02.png)
3. 고급에서 상속 사용 안 함 버튼을 누릅니다.
![pem-permission-03.png](img%2Fpem-permission-03.png)
4. 이 개체에서 상속된 사용 권한을 모두 제거합니다. 버튼을 누릅니다.
![pem-permission-04.png](img%2Fpem-permission-04.png)
5. 그러면 권한 목록에서 모든 권한이 지워지 것을 확인할 수 있습니다. 이제 추가 버튼을 누릅니다.
![pem-permission-05.png](img%2Fpem-permission-05.png)
6. 보안 주체 선택 버튼을 누릅니다.
![pem-permission-06.png](img%2Fpem-permission-06.png)
7. 선택할 객체 이름을 입력하십시오. 라는 셀렉트 박스에 자신의 윈도우 계정 이름을 넣습니다. 만약 마이크로소프트 계정으로 연동 중이라면 마이크로소프트 로그인 시 사용하는 이메일 주소를 입력합니다.
![pem-permission-07.png](img%2Fpem-permission-07.png)
8. 읽기 및 실행, 읽기 권한을 체크 후 확인 버튼을 누릅니다.
![pem-permission-08.png](img%2Fpem-permission-08.png)


### 4. CMD 실행 및 SSH 접속 명령 실행
```bash
ssh -i pem키파일경로 ubuntu@제공된IP
```
---
## macOS
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

