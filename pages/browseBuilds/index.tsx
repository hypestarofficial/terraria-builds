import React from 'react';
import { NextPage } from 'next';

import { Navbar } from '../../components/Navbar/Navbar';
import { CardCheckbox } from '../../components/CardCheckbox/CardCheckbox';
import { CLASS_LIST } from '../../constants/filters';
import { BuildCard } from '../../components/BuildCard/BuildCrad';
import { classesConfig } from '../../constants/classes';
import { armors } from '../../constants/armors';

const browseBuilds: NextPage = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex flex-col mt-16 mx-40 space-y-3'>
        <div className='flex space-x-2'>
          {CLASS_LIST.map((value, index) => (
            <CardCheckbox icon={value} key={index} id={value} />
          ))}
        </div>
        <BuildCard
          armor={armors.reaverArmor}
          name='Reaver melee tank build'
          emblem={classesConfig.Warrior}
          borderColor='border-preCalamitas'
        />
      </div>
    </div>
  );
};

export default browseBuilds;
