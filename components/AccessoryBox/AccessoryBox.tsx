import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Tooltip } from '@nextui-org/react';
import { Accessory } from '../../constants/terrariaBuilds';

type AccessoryBoxProps = {
  accessory: Accessory;
  borderColor?: string;
};

export const AccessoryBox = ({ accessory, borderColor }: AccessoryBoxProps) => {
  return (
    <div key={accessory.id}>
      <Tooltip content={accessory.name} shadow>
        <div
          className={cn(
            'flex border-2 rounded-xl px-4 py-1 shadow-xl w-14 h-14',
            borderColor ? borderColor : 'border-white'
          )}
        >
          <Image
            priority={true}
            src={accessory.src}
            alt={accessory.name}
            width='50px'
            height='35px'
          />
        </div>
      </Tooltip>
    </div>
  );
};
