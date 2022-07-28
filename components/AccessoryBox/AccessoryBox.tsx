import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Tooltip } from '@nextui-org/react';
import { Accessory } from '../../constants/accessories';

type AccessoryBoxProps = {
  accessory: Accessory;
  borderColor?: string;
};

export const AccessoryBox = ({ accessory, borderColor }: AccessoryBoxProps) => {
  return (
    <Tooltip content={accessory.id} shadow>
      <div
        className={cn(
          'flex border-2 rounded-xl px-4 py-1 shadow-xl w-14 h-14',
          borderColor ? borderColor : 'border-white'
        )}
      >
        <Image
          src={accessory.src}
          alt={accessory.id}
          width='50px'
          height='35px'
        />
      </div>
    </Tooltip>
  );
};
