import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Tooltip } from '@nextui-org/react';
import { Armor } from '../../constants/armors';

type ArmorBoxProps = {
  armor: Armor;
  borderColor?: string;
};

export const ArmorBox = ({ armor, borderColor }: ArmorBoxProps) => {
  return (
    <Tooltip content={armor.id} shadow>
      <div
        className={cn(
          'flex border-2 p-4 rounded-xl shadow-xl w-28',
          borderColor ? borderColor : 'border-white'
        )}
      >
        <Image src={armor.src} alt='armor icon' height='120px' width='100px' />
      </div>
    </Tooltip>
  );
};
