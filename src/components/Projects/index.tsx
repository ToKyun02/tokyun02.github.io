'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import styles from './projects.module.css';

const projects = [
  {
    title: 'Taskify',
    description: 'Github의 프로젝트처럼 칸반 보드를 생성하고, 칼럼 별 이슈를 관리하기 위한 플랫폼입니다.',
    detailedDescription:
      'middleware를 활용하여 리다이렉트 로직 처리하였습니다. 기존 Body로 응답하는 accessToken을 catch-all route handler로 컨트롤하여 HttpOnly 쿠키로 관리하였습니다.',
    image: '/taskify.jpg',
    link: 'https://github.com/ToKyun02/Taskify',
    technologies: ['Next.js', 'TypeScript', 'TanStack Query', 'React-Hook-Form', 'zod', 'axios'],
    deployLink: 'https://taskify-lab.vercel.app',
  },
  {
    title: 'Open Mind',
    description: 'CRUD 기능을 활용한 익명 소통 플랫폼입니다.',
    detailedDescription:
      'CSR, SPA를 활용한 웹 애플리케이션입니다. husky와 github actions을 통해 ESLint 테스트, 빌드 테스트를 자동 진행합니다.',
    image: '/openmind.jpg',
    link: 'https://github.com/codeit-part2-project/open-mind',
    technologies: ['React', 'React Router', 'Infinite scroll', 'Pagination'],
    deployLink: 'https://team6openmind.netlify.app',
  },
];

export default function Projects() {
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
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
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
      <AnimatePresence initial={false}>
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
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.viewButtonGroup}>
                <button className={styles.viewButton} onClick={() => (window.location.href = project.deployLink)}>
                  배포사이트 바로가기
                </button>
                <button className={styles.viewButton} onClick={() => (window.location.href = project.link)}>
                  깃허브 바로가기
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
