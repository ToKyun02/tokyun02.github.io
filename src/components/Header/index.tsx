'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import styles from './header.module.css';

export default function Header() {
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']);

  return (
    <motion.nav style={{ background }} className={styles.nav}>
      <div className={styles.container}>
        <motion.a href='#' whileHover={{ scale: 1.1 }} className={styles.logo}>
          Portfolio
        </motion.a>
        <div className={styles.links}>
          {['About', 'Projects', 'Skills'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
