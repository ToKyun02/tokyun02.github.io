'use client';

import { motion } from 'motion/react';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={styles.title}
        >
          <span>{"Hi, I'm "}</span>
          <span className={styles.highlight}>ToKyun</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={styles.subtitle}
        >
          Frontend Developer
        </motion.h2>
      </motion.div>
      <motion.div
        className={styles.background}
        animate={{
          background: [
            'linear-gradient(45deg,rgb(249, 182, 255),rgb(78, 205, 196))',
            'linear-gradient(45deg,rgb(78, 205, 196),rgb(69, 183, 209))',
            'linear-gradient(45deg,rgb(69, 183, 209), rgb(249, 182, 255))',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
        }}
      />
    </section>
  );
}
