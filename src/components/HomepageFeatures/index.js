import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    username: "최진식",
    img:"/img/memoji_jinschoi.jpeg",
    description: (
      <>Kubernetes 그룹 대빵</>
    ),
  },
  {
    username: "신동민",
    img: "https://avatars.githubusercontent.com/u/61470181",
    description: <>Kubernetes 수집 서버 관리 및 개발</>,
  },
  {
    username: "조이성",
    img: "img/cho_profile.png",
    description: <>Kubernetes 모니터링 화면 개발</>,
  },
  {
    username: "김나현",
    img: "img/nh_profile.png",
    description: <>Kubernetes 모니터링 프론트엔드 개발자✨</>,
  },
  {
    username: "정진하",
    img: "img/jh_profile.png",
    description: <>Kubernetes 수집 서버 관리 및 개발</>,
  },
];

function Feature({ img, username, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} alt={"profile image"} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{username}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
