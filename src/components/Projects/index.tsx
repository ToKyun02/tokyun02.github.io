'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import styles from './projects.module.css';

const projects = [
  {
    title: 'Epigram',
    team: '6인 팀',
    description: '하루 한 번 짧은 격언(에피그램)을 작성하고 감정을 기록·공유하는 소셜 플랫폼',
    detailedDescription: 'E2E 테스트로 Safari 크로스 브라우저 이슈를 발견·해결하고, variant 기반 공용 컴포넌트를 설계한 프로젝트',
    details: [
      {
        label: '크로스 브라우저 이슈 발견 및 해결',
        content:
          'Playwright E2E 실행 중 Safari 환경에서만 로그인이 실패하는 현상을 발견했습니다. Chromium·Firefox는 localhost를 신뢰 도메인으로 처리하지만, WebKit은 RFC를 엄격 적용하여 http localhost에서 Secure 쿠키 전송을 거부합니다. NEXTAUTH_URL 기준으로 도메인을 판단하는 조건 분기를 추가하여 해결했습니다. 테스트 코드가 직접 프로덕션 버그를 잡아낸 사례입니다.',
      },
      {
        label: 'variant 기반 공용 컴포넌트 설계',
        content:
          'shadcn 설계 방식을 참고하여 Button·Avatar·FAB·Modal 등 공용 컴포넌트 4종을 variant 기반으로 설계했습니다. props 조합만으로 모든 상태(size, color, disabled)를 표현할 수 있는 구조로 팀원 간 구현 불일치를 방지하고, Storybook MDX로 각 컴포넌트의 Story를 명세하여 시각적 회귀를 예방했습니다.',
      },
      {
        label: 'PR 기여 및 이슈 관리',
        content:
          '전체 PR 214개 중 25개를 직접 작성·merge했습니다. 피드·메인·마이페이지 등 주요 Feature PR 11개, High Priority 이슈 5건을 포함합니다. GitHub Actions와 Jira를 연동하여 PR Close 시 이슈가 자동 동기화되는 파이프라인을 구축했습니다.',
      },
      {
        label: 'Chrome·Firefox·Safari 3개 브라우저 E2E 자동화',
        content:
          'Playwright로 3개 브라우저 크로스 브라우징 검증을 자동화하고, Jest로 단위·통합 테스트를 병행했습니다. E2E CI 단계를 설정하여 PR 머지 전 자동 검증이 이루어지도록 구성했습니다.',
      },
    ],
    image: '/epigram.jpg',
    link: 'https://github.com/rak517/Epigram',
    technologies: ['Next.js', 'TypeScript', 'TanStack Query', 'zustand', 'React-Hook-Form', 'zod', 'Playwright', 'Jest', 'Storybook'],
    deployLink: 'https://dailyepigram.vercel.app',
  },
  {
    title: 'Taskify',
    team: '4인 팀',
    description: 'GitHub Projects처럼 칸반 보드 및 칼럼별 이슈를 관리하는 협업 플랫폼',
    detailedDescription: 'BFF 패턴으로 XSS를 원천 차단하고, TanStack Query 캐싱 전략을 설계한 프로젝트',
    details: [
      {
        label: 'BFF 패턴으로 XSS 원천 차단',
        content:
          '외부 API가 응답 Body에 accessToken을 포함하는 구조에서 클라이언트가 직접 저장하면 JS로 읽기 가능해 XSS에 취약합니다. Next.js Route Handler를 BFF(Backend For Frontend) 레이어로 활용하여 토큰을 HttpOnly 쿠키로 변환·중계함으로써 document.cookie 접근을 원천 차단했습니다.',
      },
      {
        label: 'TanStack Query 캐싱 전략 설계',
        content:
          '칸반 보드에서 항상 최신 데이터가 필요하지 않다고 판단하여 stale-while-revalidate 전략을 적용했습니다. queryKey를 도메인별 계층 구조로 설계하여 대시보드·멤버·초대 데이터 간 의존 관계를 명시적으로 모델링하고, invalidateQueries 범위를 최소화했습니다.',
      },
      {
        label: 'zod 스키마를 단일 진실의 원천으로 활용',
        content:
          '유효성 규칙·타입 추론·에러 메시지를 스키마 한 곳에서 관리하여 React-Hook-Form과 결합했습니다. 폼 상태의 분산 관리 문제를 해결하고, API 응답 데이터도 safeParse로 런타임 타입 검증을 수행했습니다.',
      },
      {
        label: 'PR 41개 owner 관리 및 DnD 구현',
        content:
          '@hello-pangea/dnd를 활용하여 칸반 카드 드래그 앤 드롭을 구현했습니다. 총 41개 PR을 owner로 관리하며, 인증·DnD·비밀번호 수정 등 핵심 기능 9개 PR을 직접 구현했습니다.',
      },
    ],
    image: '/taskify.jpg',
    link: 'https://github.com/ToKyun02/Taskify',
    technologies: ['Next.js', 'TypeScript', 'TanStack Query', 'React-Hook-Form', 'zod', '@hello-pangea/dnd', 'zustand'],
    deployLink: 'https://taskify-lab.vercel.app',
  },
  {
    title: 'Open Mind',
    team: '5인 팀',
    description: 'CRUD 기능을 활용한 CSR 기반 익명 소통 플랫폼',
    detailedDescription: 'CLS 이슈를 직접 발견·개선하고, 35개 파일을 일괄 점검하며 배포 품질을 높인 프로젝트',
    details: [
      {
        label: 'CLS(Core Web Vitals) 이슈 발견 및 개선',
        content:
          '배포 직전 전체 코드 점검 중 Header Profile·Logo·Banner 이미지 3곳에서 CLS(Cumulative Layout Shift) 이슈를 발견했습니다. 크기 미지정 이미지가 로드될 때 레이아웃이 밀리는 Core Web Vitals 위반임을 인지하고, width·height 명시 및 Skeleton UI 적용으로 개선했습니다.',
      },
      {
        label: '배포 전 35개 파일·13가지 UX 일괄 개선',
        content:
          '단일 PR에서 페이지네이션 초기 로딩 처리, Modal 스크롤 방지, 에러 리다이렉션 등 13가지 UX 개선 사항을 35개 파일에 일괄 반영했습니다. 팀 코드 리뷰에서 에러 처리 로직을 참고하겠다는 피드백을 받았습니다.',
      },
      {
        label: '유효하지 않은 피드 URL 접근 처리',
        content:
          '존재하지 않는 피드 ID로 직접 URL 접근 시 빈 화면이 노출되는 문제를 발견했습니다. API 응답 기반으로 존재 여부를 판단하여 홈으로 리다이렉션 처리하고, 사용자에게 직관적인 에러 안내 문구를 제공했습니다.',
      },
      {
        label: 'CI/CD 자동화 파이프라인 구축',
        content:
          'Husky + GitHub Actions를 연동하여 커밋 시 ESLint 자동 실행, PR 머지 전 빌드 테스트를 자동화했습니다. 전체 PR 25개 중 9개(36%)를 직접 작성했습니다.',
      },
    ],
    image: '/openmind.jpg',
    link: 'https://github.com/codeit-part2-project/open-mind',
    technologies: ['React', 'React Router', 'Infinite Scroll', 'GitHub Actions', 'Husky'],
    deployLink: 'https://team6openmind.netlify.app',
  },
];

type Project = (typeof projects)[0];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className={styles.projects} id='projects'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        My Projects
      </motion.h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onOpenModal={setSelectedProject} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, onOpenModal }: { project: Project; onOpenModal: (p: Project) => void }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className={styles.cardWrapper}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className={styles.card}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'tween' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* 카드 앞 면 */}
        <motion.div className={styles.cardFront} style={{ backfaceVisibility: 'hidden' }}>
          <div className={styles.imageWrapper}>
            <img src={project.image || '/placeholder.svg'} alt={project.title} />
          </div>
          <div className={styles.content}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </motion.div>

        {/* 카드 뒷 면 */}
        <motion.div
          className={styles.cardBack}
          style={{
            backfaceVisibility: 'hidden',
            rotateY: 180,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <div className={styles.backContent}>
            <h3>{project.title}</h3>
            <p>{project.detailedDescription}</p>
            <div className={styles.technologies}>
              {project.technologies.map((tech, i) => (
                <span key={i} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.viewButtonGroup}>
              <button
                className={`${styles.viewButton} ${styles.detailButton}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal(project);
                }}
              >
                자세히 보기
              </button>
              <button className={styles.viewButton} onClick={() => window.open(project.deployLink, '_blank')}>
                배포사이트 바로가기
              </button>
              <button className={styles.viewButton} onClick={() => window.open(project.link, '_blank')}>
                깃허브 바로가기
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className={styles.modalBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 모달 헤더 - 스크롤 영역 밖에 고정 */}
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.modalTitle}>{project.title}</h2>
            <span className={styles.modalTeam}>{project.team}</span>
          </div>
          <button className={styles.closeButton} onClick={onClose} aria-label='닫기'>
            ✕
          </button>
        </div>

        {/* 스크롤 가능한 내부 영역 */}
        <div className={styles.modalScrollArea}>
          {/* 기술 스택 */}
          <div className={styles.modalTechs}>
            {project.technologies.map((tech, i) => (
              <span key={i} className={styles.modalTech}>
                {tech}
              </span>
            ))}
          </div>

          {/* 상세 내용 */}
          <div className={styles.modalDetails}>
            {project.details.map((detail, i) => (
              <div key={i} className={styles.detailItem}>
                <div className={styles.detailLabel}>
                  <span className={styles.detailIndex}>{String(i + 1).padStart(2, '0')}</span>
                  {detail.label}
                </div>
                <p className={styles.detailContent}>{detail.content}</p>
              </div>
            ))}
          </div>

          {/* 링크 */}
          <div className={styles.modalLinks}>
            <a href={project.deployLink} target='_blank' rel='noopener noreferrer' className={styles.modalLink}>
              배포사이트 바로가기 →
            </a>
            <a href={project.link} target='_blank' rel='noopener noreferrer' className={`${styles.modalLink} ${styles.githubLink}`}>
              GitHub 바로가기 →
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
