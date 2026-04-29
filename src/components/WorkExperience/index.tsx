'use client';

import { motion } from 'motion/react';
import styles from './workExperience.module.css';

const experiences = [
  {
    category: '(주)비바리퍼블리카 · Deus Team',
    period: '2025.04 – 2025.10',
    role: 'Frontend Developer Assistant (인턴)',
    items: [
      {
        name: 'E2E Testing',
        description:
          '사용자 인터랙션이 빈번한 웹 애플리케이션에 E2E 테스트를 작성하여 배포 전 버그를 사전에 검출했습니다. 테스트가 실제로 프로덕션 버그를 잡아내는 경험을 통해 테스트 코드의 가치를 체감했습니다.',
      },
      {
        name: 'Agile Process',
        description:
          'Jira·Linear·Slack을 활용한 스프린트 기반 프로젝트 관리에 참여했습니다. GitHub Actions와 Jira를 연동하여 PR Close 시 이슈가 자동 동기화되는 파이프라인 구축 경험이 있습니다.',
      },
      {
        name: 'UX Perspective',
        description:
          '사용자 입장에서 불편함을 먼저 발굴하고 개선안을 제안합니다. 캔버스의 초기 카메라 설정에서 겪는 불편 사항을 직접 발견하여 팀에 제안·반영한 경험이 있습니다.',
      },
      {
        name: 'Error Monitoring',
        description:
          'Sentry를 통해 오류 모니터링을 수행하며, 보고가 불필요한 에러를 리스트업하고 개선했습니다. Error를 throw하여 보고하는 방식 대신 nullish return handling이나 토스트 안내로 대체하는 방향을 팀에 제안하여 노이즈를 줄인 경험이 있습니다.',
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
            <p className={styles.categoryMeta}>{category.role} &nbsp;|&nbsp; {category.period}</p>
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
