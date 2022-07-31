import { accessories } from '../constants/accessories';
import { armors } from '../constants/armors';
import { classesConfig } from '../constants/classes';
import { weapons } from '../constants/weapons';

export const builds = [
  {
    id: 1,
    name: 'Ninja zabijak',
    armor: armors.reaverArmor,
    class: classesConfig[2],
    weapons: [weapons.Galaxia, weapons.Galaxia],
    accessories: [
      accessories.warbannerOfTheSun,
      accessories.warbannerOfTheSun,
      accessories.warbannerOfTheSun,
    ],
    borderColor: 'border-preCalamitas',
  },
  {
    id: 2,
    name: 'Choj do pice',
    armor: armors.reaverArmor,
    class: classesConfig[0],
    weapons: [weapons.Galaxia, weapons.Galaxia, weapons.Galaxia],
    accessories: [accessories.warbannerOfTheSun],
    borderColor: 'border-preCalamitas',
  },
];