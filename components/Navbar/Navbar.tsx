import React from 'react';
import Link from 'next/link';

import { HeroBanner } from '../HeroBanner/HeroBanner';

import styles from './Navbar.module.css';
import { generalRoutesConfig } from '../../constants/routes';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.navbarItemsWrapper}>
          <div className='flex space-x-6 justify-end w-full pr-2'>
            <Link href={generalRoutesConfig.browseBuilds.href}>
              BROWSE BUILDS
            </Link>
            <Link href='/'>BUILD YOUR LOUDOUT</Link>
          </div>
          <div className='flex w-full space-x-6'>
            <Link href='/'>ABOUT GAME</Link>
            <Link href='/'>FAQ</Link>
            <Link href='/'>OUR TEAM</Link>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <HeroBanner />
        </div>
      </div>
    </div>
  );
};
