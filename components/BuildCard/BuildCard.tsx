import React from 'react';

import cn from 'classnames';
import { Card } from '@nextui-org/react';
import { AccessoryBox } from '../AccessoryBox/AccessoryBox';
import { WeaponBox } from '../WeaponBox/WeaponBox';
import { ArmorBox } from '../ArmorBox/ArmorBox';
import { Build } from '../../constants/terrariaBuilds';
import { ClassBadge } from '../ClassBadge/ClassBadge';
import { Badge } from '../Badge/Badge';

type BuildCardProps = {
  build: Build;
};

export const BuildCard = ({ build }: BuildCardProps) => {
  return (
    <div className='flex'>
      {build && (
        <Card
          css={{
            bgColor: 'var(--grayContainer)',
            border: 'none',
          }}
          isPressable
        >
          <Card.Body>
            <div className={cn('flex px-2 space-x-6 text-white')}>
              <ArmorBox armor={build.armor} borderColor={build.borderColor} />
              <div className='flex flex-col justify-between space-y-2'>
                <div className='flex flex-col space-y-1 mb-4'>
                  <div className='flex items-center justify-start space-x-2'>
                    <ClassBadge classProp={build.class} />
                    <h1>{build.name}</h1>
                  </div>
                  <div className='flex items-center'>
                    <Badge badge='Calamity' />
                  </div>
                </div>
                {build.weapons && (
                  <div className='flex space-x-3'>
                    {build.weapons.map((weapon, index) => (
                      <WeaponBox
                        weapon={weapon}
                        borderColor={build.borderColor}
                        key={index}
                      />
                    ))}
                  </div>
                )}
                {build.accessories && (
                  <div className='flex space-x-3'>
                    {build.accessories.map((accessory, index) => (
                      <AccessoryBox
                        accessory={accessory}
                        borderColor={build.borderColor}
                        key={index}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};
