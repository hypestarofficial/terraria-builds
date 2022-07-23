import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';

import reaverArmor from '../../public/armors/reaverArmor.svg';
import { Navbar } from '../../components/Navbar/Navbar';
import { CardCheckbox } from '../../components/CardCheckbox/CardCheckbox';
import { CLASS_LIST } from '../../constants/filters';
import { Avatar, Card } from '@nextui-org/react';

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
        <div className='flex'>
          <Card
            css={{
              bgColor: 'var(--grayContainer)',
              border: 'none',
            }}
            isPressable
          >
            <Card.Body>
              <div className='flex px-2'>
                <div className='flex border-2 border-green-400 p-4 items-center rounded-xl shadow-lg'>
                  <Image src={reaverArmor} alt='armor icon' height='120px' />
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default browseBuilds;
