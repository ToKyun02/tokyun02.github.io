'use client';

import { motion } from 'motion/react';
import styles from './workExperience.module.css';

const experiences = [
  {
    category: '(주)비바리퍼블리카 Deus Team Frontend Develop Assistant',
    items: [
      {
        name: 'E2E Testing',
        description:
          '사용자의 interaction이 빈번한 웹 애플리케이션에서 E2E 테스트를 작성한 경험이 있으며, 배포 전 버그 검출을 한 경험이 있습니다. 이 덕분에 생산성을 향상시킬 수 있었습니다.',
      },
      {
        name: 'Agile Process',
        description:
          'Jira, Linear, Slack을 통해 팀원들과의 원활한 커뮤니케이션을 유지하며, Agile 방법론에 따라 프로젝트를 관리한 경험이 있습니다.',
      },
      {
        name: 'UX Perspective',
        description:
          '사용자의 입장에서 생각하며, UI/UX 개선을 위해 노력합니다. 대표적인 경험으로 캔버스의 초기 카메라 설정에서 불편함을 겪는다는 의견을 반영하여 개선한 사례가 있습니다.',
      },
      {
        name: 'Error Monitoring',
        description:
          'Sentry를 통해 오류 모니터링을 수행한 경험이 있으며, 보고되지 않아도 될 오류가 무엇인지 리스트업 하고 이를 개선하기 위한 작업을 진행한 경험이 있습니다. 또한, Error를 throw해서 보고하는 것 보단 nullish return handling, 토스트 문구 띄우기 등으로 대체하는 걸 팀에게 제안한 경험이 있습니다.',
      },
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className={styles.skills} id='workexperience'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        Work Experience
      </motion.h2>
      <div className={styles.grid}>
        {experiences.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className={styles.category}
          >
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            <div className={styles.skillsList}>
              {category.items.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: categoryIndex * 0.2 + skillIndex * 0.1,
                  }}
                  viewport={{ once: true }}
                  className={styles.skillItem}
                >
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
