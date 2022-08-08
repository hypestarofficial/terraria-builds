import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Popover } from '@nextui-org/react';
import { weapons } from '../../constants/weapons';

type WeaponPopoverProps = {
  borderColor?: string;
};

export const WeaponPopover = ({ borderColor }: WeaponPopoverProps) => {
  return (
    <Popover placement='right'>
      <Popover.Trigger>
        <div
          className={cn(
            'flex border-2 px-2 py-2 rounded-full shadow-xl w-25 h-25',
            borderColor ? `border-[${borderColor}]` : ''
          )}
        >
          <Image
            priority={true}
            src={weapons.Galaxia.src}
            alt={weapons.Galaxia.name}
            width='80px'
            height='80px'
          />
        </div>
      </Popover.Trigger>
      <Popover.Content>Kokotko</Popover.Content>
    </Popover>
  );
};
