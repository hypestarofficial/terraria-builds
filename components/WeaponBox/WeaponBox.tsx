import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Tooltip } from '@nextui-org/react';
import { Weapon } from '../../constants/weapons';

type WeaponBoxProps = {
  weapon: Weapon;
  borderColor?: string;
};

export const WeaponBox = ({ weapon, borderColor }: WeaponBoxProps) => {
  return (
    <Tooltip content={weapon.id} shadow>
      <div
        className={cn(
          'flex border-2 px-2 py-2 rounded-full shadow-xl w-14 h-14',
          borderColor ? borderColor : 'border-white'
        )}
      >
        <Image src={weapon.src} alt={weapon.id} width='40px' height='40px' />
      </div>
    </Tooltip>
  );
};
