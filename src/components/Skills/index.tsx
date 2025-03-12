'use client';

import { motion } from 'motion/react';
import styles from './skills.module.css';

const skills = [
  {
    category: 'Frontend Development',
    items: [
      {
        name: 'React & Next.js',
        description:
          '서버 컴포넌트 및 서버 액션의 기능을 이해하고 있습니다.\nTanStack Query를 사용하여 전역 서버 상태 관리를 합니다.\nReact-Hook-Form과 zod를 사용하여 실시간 form validation 및 Controller를 사용할 줄 압니다.\ngenerateMetadata 등을 활용하여 SEO를 높힙니다.',
      },
      {
        name: '전역 UI 상태',
        description: 'zustand나 context API를 사용하여 Toast나 Modal 등 전역 UI 상태를 관리한 경험이 있습니다.',
      },
      {
        name: 'TypeScript',
        description:
          'any 타입을 지양합니다. 추론이 힘든 경우에는 unknown 타입으로 대체합니다.\nzod의 스키마와 safeParse를 활용하여 타입 안정성을 높힙니다.',
      },
      {
        name: 'UX',
        description:
          '사용자 경험을 중시합니다. Layout Shift, Loading UI(Skeleton UI, Loading Spinner) 등을 고려하여 컴포넌트를 설계합니다.',
      },
      {
        name: 'UI',
        description:
          '디자인 시스템에 의거한 UI 컴포넌트를 설계할 줄 압니다. cva() 함수, clsx, taillwind-merge 등을 활용하여 컴포넌트의 재사용성을 높힐 수 있습니다.',
      },
    ],
  },
  {
    category: 'Etc Tools & Others',
    items: [
      {
        name: 'Version Control',
        description:
          'GitFlow, Github Flow 등 브랜치 관리 전략에 대해 이해하고 있습니다.\n선형적 커밋 히스토리를 관리할 줄 알고 있습니다. 또한, 일반 merge 뿐만 아니라 rebase, squash 병합도 적극 사용합니다.\n동료들과의 코드 리뷰는 상생 및 동시 성장하는 방향이라고 생각합니다.',
      },
      {
        name: '일정 및 Task 관리',
        description:
          'Jira와 Github Projects, Notion 등 협업 관리 툴을 사용할 줄 압니다. Jira와 Github Projects로 이슈 관리를 한 경험이 있으며, Notion을 통해 프로젝트 기간 동안 문서 정리를 한 경험이 있습니다.',
      },
      {
        name: '스타일링',
        description:
          'Tailwind, Modern CSS, CSS in JS를 사용할 줄 알고, Mobile First 디자인 원칙을 지켜서 반응형 웹을 구현합니다.',
      },
    ],
  },
];

export default function Skills() {
  return (
    <section className={styles.skills} id='skills'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        Skills & Expertise
      </motion.h2>
      <div className={styles.grid}>
        {skills.map((category, categoryIndex) => (
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
