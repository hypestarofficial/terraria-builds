import React from 'react';
import Image from 'next/image';
import heroImageTitle from '/public/hero-image/logo-title.svg';
import heroImageLogo from '/public/hero-image/logo.webp';

import styles from './HeroBanner.module.css';
import { useRouter } from 'next/router';

export const HeroBanner = () => {
  const router = useRouter();

  return (
    <div className={styles.container} onClick={() => router.push('/')}>
      <div className={styles.wrapper}>
        <div>
          <Image
            src={heroImageTitle}
            alt='Hero image title'
            width='191px'
            height='85px'
          />
        </div>
        <div className={styles.logoWrapper}>
          <Image
            src={heroImageLogo}
            alt='Hero image logo'
            width='80px'
            height='106px'
          />
        </div>
      </div>
    </div>
  );
};
