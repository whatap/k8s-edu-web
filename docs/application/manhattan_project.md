---
sidebar_position: 3
authors: jaeyoungkim
---


# 3. 서비스 아키텍쳐
<br/><br/>


### 모놀리식(Monolithic)
<br/>
여러 비즈니스 기능이 하나의 공간에서 수행되는 전통적인 구조입니다.
<br/><br/>

![arch_monol.png](./img/arch_monol.png)


<h3 align="center"> →  하나의 모듈에서 문제 발생 시 연쇄 반응</h3>
<br/><br/><br/>

### MSA
작은 단위의 비즈니스 기능을 독립적으로 실행하는 구조입니다.
<br/><br/>

![acrh_k.png](./img/arch_k_2.png)

<h3 align="center"> →  서로의 환경에 영향을 주지 않음, 서비스 중지 최소화(가용성)</h3>
<br/><br/><br/><br/><br/><br/>


### 쿠버네티스 친화적 구조도
![acrh_prog.png](./img/arch_prog.png)



<br/><br/><br/><br/><br/><br/>



