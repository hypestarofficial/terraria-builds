import React from 'react';
import Image from 'next/image';

import { Card, Tooltip } from '@nextui-org/react';
import { ClassConfig } from '../../constants/classes';
import { AccessoryBox } from '../AccessoryBox/AccessoryBox';
import { WeaponBox } from '../WeaponBox/WeaponBox';
import { ArmorBox } from '../ArmorBox/ArmorBox';
import { Armor } from '../../constants/armors';
import { weapons } from '../../constants/weapons';
import { accessories } from '../../constants/accessories';

type BuildCardProps = {
  name: string;
  armor: Armor;
  emblem: ClassConfig;
  borderColor?: string;
};

export const BuildCard = ({
  name,
  armor,
  emblem,
  borderColor,
}: BuildCardProps) => {
  return (
    <div className='flex'>
      <Card
        css={{
          bgColor: 'var(--grayContainer)',
          border: 'none',
        }}
        isPressable
      >
        <Card.Body>
          <div className='flex px-2 space-x-6 text-white'>
            <ArmorBox armor={armor} borderColor={borderColor} />
            <div className='flex flex-col justify-between space-y-2'>
              <div className='flex space-x-2 items-center'>
                <Tooltip content={emblem.id} shadow>
                  <Image
                    src={emblem.src}
                    alt={`${emblem.id} icon`}
                    width='30px'
                    height='30px'
                  />
                </Tooltip>
                <div className='flex'>
                  <h1>{name}</h1>
                </div>
              </div>
              <div className='flex space-x-3'>
                <WeaponBox weapon={weapons.Galaxia} borderColor={borderColor} />
                <WeaponBox weapon={weapons.Galaxia} borderColor={borderColor} />
                <WeaponBox weapon={weapons.Galaxia} borderColor={borderColor} />
              </div>
              <div className='flex space-x-3'>
                <AccessoryBox
                  accessory={accessories.warbannerOfTheSun}
                  borderColor={borderColor}
                />
                <AccessoryBox
                  accessory={accessories.warbannerOfTheSun}
                  borderColor={borderColor}
                />
                <AccessoryBox
                  accessory={accessories.warbannerOfTheSun}
                  borderColor={borderColor}
                />
                <AccessoryBox
                  accessory={accessories.warbannerOfTheSun}
                  borderColor={borderColor}
                />
                <AccessoryBox
                  accessory={accessories.warbannerOfTheSun}
                  borderColor={borderColor}
                />
                <AccessoryBox
                  accessory={accessories.warbannerOfTheSun}
                  borderColor={borderColor}
                />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
