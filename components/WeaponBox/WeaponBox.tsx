import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Tooltip } from '@nextui-org/react';
import { Weapon } from '../../constants/terrariaBuilds';

type WeaponBoxProps = {
  weapon: Weapon;
  borderColor?: string;
};

export const WeaponBox = ({ weapon, borderColor }: WeaponBoxProps) => {
  return (
    <div key={weapon.id}>
      <Tooltip content={weapon.name} shadow>
        <div
          className={cn(
            'flex border-2 px-2 py-2 rounded-full shadow-xl w-14 h-14',
            borderColor ? `border-[${borderColor}]` : ''
          )}
        >
          <Image
            priority={true}
            src={weapon.src}
            alt={weapon.name}
            width='40px'
            height='40px'
          />
        </div>
      </Tooltip>
    </div>
  );
};
