import React from 'react';
import Head from 'next/head';

import { Navbar } from '../components/Navbar/Navbar';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Terraria Builds</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col flex-1'>
        <Navbar />
        <div className='flex flex-col mt-16 mx-40'>
          <div className='flex flex-col bg-gray-700 w-full bg-opacity-80 shadow-xl rounded-xl p-5 space-y-4'>
            <h1 className='text-center'>WELCOME TO TERRARIA BUILDS!</h1>
            <p>
              Terraria builds is a startup project developed by{' '}
              <a
                href='https://github.com/hypestarofficial'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-200'
              >
                @hypestarofficial
              </a>{' '}
              in his free time.
            </p>
            <p>
              Concept of the project is to create a unified place for fellow
              terraria players to browse and build different builds depending on
              your world's progression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
