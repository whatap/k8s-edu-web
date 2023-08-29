import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    username: 'Irostub',
    img: 'https://avatars.githubusercontent.com/u/61470181',
    description: (
      <>
        Kubernetes 모니터링 및 컨테이너 모니터링 수집 서버 관리 및 개발
      </>
    ),
  },
  {
    username: 'Focus on What Matters',
    img: 'https://avatars.githubusercontent.com/u/61470181',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    username: 'Powered by React',
    img: 'https://avatars.githubusercontent.com/u/61470181',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({img, username, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} alt={"profile image"}/>
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
