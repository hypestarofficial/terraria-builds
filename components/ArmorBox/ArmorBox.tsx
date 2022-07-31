import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Tooltip } from '@nextui-org/react';
import { Armor } from '../../constants/terrariaBuilds';

type ArmorBoxProps = {
  armor: Armor;
  borderColor?: string;
};

export const ArmorBox = ({ armor, borderColor }: ArmorBoxProps) => {
  return (
    <div key={armor.id}>
      <Tooltip content={armor.name} shadow>
        <div
          className={cn(
            'flex border-2 p-4 rounded-xl shadow-xl h-44',
            borderColor ? borderColor : 'border-white'
          )}
        >
          <Image
            priority={true}
            src={armor.src}
            alt={`${armor.id}`}
            height='120px'
            width='100px'
          />
        </div>
      </Tooltip>
    </div>
  );
};
