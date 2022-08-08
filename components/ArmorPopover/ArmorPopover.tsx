import React from 'react';
import Image from 'next/image';

import cn from 'classnames';
import { Popover } from '@nextui-org/react';
import { armors } from '../../constants/armors';

type ArmorPopoverProps = {
  borderColor?: string;
}

export const ArmorPopover = ({ borderColor }: ArmorPopoverProps) => {
  return (
    <Popover placement='right'>
      <Popover.Trigger>
        <div
          className={cn(
            'flex border-2 p-4 rounded-xl shadow-xl h-64',
            borderColor ? borderColor : 'border-white'
          )}
        >
          <Image
            priority={true}
            src={armors.reaverArmor.src}
            alt={`${armors.reaverArmor.name}`}
            height='200px'
            width='200px'
          />
        </div>
      </Popover.Trigger>
      <Popover.Content>
        <div className='flex p-2 text-gray-700'>Kokotko</div>
      </Popover.Content>
    </Popover>
  )
}