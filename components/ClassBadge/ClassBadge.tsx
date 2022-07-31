import React from 'react';
import Image from 'next/image';

import { Tooltip } from '@nextui-org/react';
import { Class } from '../../constants/terrariaBuilds';

type ClassBadgeProps = {
  classProp: Class;
};

export const ClassBadge = ({ classProp }: ClassBadgeProps) => {
  return (
    <div key={classProp.id} className='flex'>
      <Tooltip content={classProp.name} shadow>
        <Image
          priority={true}
          src={classProp.src}
          alt={classProp.name}
          width='30px'
          height='30px'
        />
      </Tooltip>
    </div>
  );
};
