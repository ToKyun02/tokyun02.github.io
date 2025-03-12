'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import styles from './about.module.css';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className={styles.about} id='about'>
      <motion.div style={{ y, opacity }} className={styles.content}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.text}
          >
            <p>
              UI/UX를 중요하게 여기는 프론트엔드 개발자 김도균입니다. <br />
              실패했을 때 좌절하지 않고, 미래를 위해 노력하는 목표지향적 가치를 중시합니다.
              <br />
              높은 학구열로, 지금 이 순간에도 끊임 없이 학습하고 있습니다.
              <br />
              성공적인 협업을 위해 지속적인 소통은 매우 중요하다고 생각합니다.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.image}
          >
            <img src='/myimage.jpg' alt='Profile' />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
