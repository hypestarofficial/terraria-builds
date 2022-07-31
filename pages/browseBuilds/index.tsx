import React, { useState } from 'react';
import { NextPage } from 'next';

import { Navbar } from '../../components/Navbar/Navbar';
import { CardCheckbox } from '../../components/CardCheckbox/CardCheckbox';
import { BuildCard } from '../../components/BuildCard/BuildCard';
import Head from 'next/head';
import { builds } from '../../builds/builds';
import { classesConfig } from '../../constants/classes';

export async function getStaticProps() {
  const buildsData = builds;
  return {
    props: {
      builds: buildsData,
    },
  };
}

const browseBuilds: NextPage = () => {
  const [selectedClasses, setSelectedClasses] = useState<Array<string>>([]);

  const filterCheck = (classProp: string) => {
    if (selectedClasses.includes(classProp)) {
      setSelectedClasses(
        selectedClasses.filter((selectedClass) => selectedClass !== classProp)
      );
    } else {
      const updatedClasses = [...selectedClasses, classProp];
      setSelectedClasses(updatedClasses);
    }
  };

  console.log(selectedClasses);

  return (
    <div className='flex flex-col h-screen overflow-y-scroll'>
      <Head>
        <title>Terraria Builds | Browse Builds</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div className='flex flex-col mt-16 mx-40 space-y-3 mb-10'>
        <div className='flex space-x-2'>
          {classesConfig.map((classProp, index) => (
            <CardCheckbox
              icon={classProp.src}
              key={index}
              onChange={() => filterCheck(classProp.name)}
            />
          ))}
        </div>
        {builds &&
          builds
            .filter((build) =>
              selectedClasses.length !== 0
                ? selectedClasses.includes(build.class.name)
                : true
            )
            .map((build, index) => <BuildCard build={build} key={index} />)}
      </div>
    </div>
  );
};

export default browseBuilds;
