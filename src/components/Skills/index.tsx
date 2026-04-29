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
          '서버 컴포넌트·서버 액션을 이해하고 활용합니다.\nTanStack Query의 stale-while-revalidate 전략과 queryKey 계층화로 서버 상태를 관리합니다.\nReact-Hook-Form과 zod 스키마를 단일 진실의 원천으로 활용하여 유효성 규칙·타입·에러 메시지를 한 곳에서 관리합니다.\ngenerateMetadata를 활용하여 페이지별 SEO를 최적화합니다.',
      },
      {
        name: '전역 UI 상태',
        description:
          'zustand나 Context API를 사용하여 Toast·Modal 등 전역 UI 상태를 관리합니다.\nzustand를 활용한 모달 상태 관리로 컴포넌트 간 의존성을 낮추고 재사용성을 높였습니다.',
      },
      {
        name: 'TypeScript',
        description:
          'any 타입을 지양하고, 추론이 어려운 경우 unknown으로 대체합니다.\nzod 스키마와 safeParse를 활용하여 런타임 타입 안정성을 확보합니다.',
      },
      {
        name: 'UX',
        description:
          '사용자 경험을 최우선으로 고려합니다.\nCLS(Cumulative Layout Shift)·Skeleton UI·Loading Spinner 등 Core Web Vitals를 고려하여 컴포넌트를 설계합니다.',
      },
      {
        name: 'UI 컴포넌트 설계',
        description:
          'shadcn 설계 방식을 참고하여 variant 기반 공용 컴포넌트를 설계합니다.\ncva()·clsx·tailwind-merge를 활용하여 props 조합만으로 모든 상태를 표현할 수 있는 재사용 가능한 컴포넌트 시스템을 구축합니다.',
      },
    ],
  },
  {
    category: 'Testing & Quality',
    items: [
      {
        name: 'E2E 테스트',
        description:
          'Playwright로 Chrome·Firefox·Safari 3개 브라우저 크로스 브라우징 검증을 자동화합니다.\nE2E 테스트를 통해 WebKit의 Secure 쿠키 이슈 등 브라우저별 엣지 케이스를 발견하고 해결한 경험이 있습니다.',
      },
      {
        name: '단위·통합 테스트',
        description: 'Jest로 컴포넌트 단위 테스트 및 통합 테스트를 작성합니다.',
      },
      {
        name: 'Storybook',
        description:
          'MDX를 활용하여 공용 UI 컴포넌트를 시각화·문서화합니다.\n각 컴포넌트의 다양한 상태를 Story로 명세하여 팀 내 시각적 불일치와 회귀를 방지합니다.',
      },
      {
        name: 'Error Monitoring',
        description:
          'Sentry를 통해 오류 모니터링을 수행합니다.\n불필요한 에러 리포팅을 개선하고, throw 대신 nullish return handling·토스트 안내로 대체하는 방향을 제안한 경험이 있습니다.',
      },
    ],
  },
  {
    category: 'Tools & Collaboration',
    items: [
      {
        name: 'Version Control',
        description:
          'GitFlow·GitHub Flow 등 브랜치 전략을 이해하고 적용합니다.\nrebase·squash merge로 선형적 커밋 히스토리를 관리하며, 코드 리뷰를 팀 성장의 핵심으로 여깁니다.',
      },
      {
        name: '일정 및 Task 관리',
        description:
          'Jira·GitHub Projects·Notion 등 협업 툴을 활용합니다.\nGitHub Actions와 Jira를 연동하여 이슈 자동화 파이프라인을 구축한 경험이 있습니다.',
      },
      {
        name: '스타일링',
        description:
          'Tailwind CSS·CSS Modules·CSS-in-JS를 상황에 맞게 사용합니다.\nMobile First 원칙을 지켜 반응형 웹을 구현합니다.',
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
