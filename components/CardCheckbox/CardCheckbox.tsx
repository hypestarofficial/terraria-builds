import React from 'react';
import Image, { StaticImageData } from 'next/image';
import cn from 'classnames';

import { Checkbox } from '@nextui-org/react';

type CardCheckboxProps = {
  id?: string;
  title?: string;
  option?: string;
  icon?: string | StaticImageData;
  iconGroup?: Array<string>;
};

export const CardCheckbox = ({
  title,
  option,
  icon,
  id,
}: CardCheckboxProps) => {
  return (
    <div className='flex p-3 bg-gray-700 bg-opacity-80 shadow-xl rounded-xl'>
      {title && <h1>{title}</h1>}
      <Checkbox color='gradient' value={option} id={id}>
        {option && <span className='mr-2'>{option}</span>}
        {icon && (
          <Image src={icon} alt='checkbox icon' height='30px' width='30px' />
        )}
      </Checkbox>
    </div>
  );
};
