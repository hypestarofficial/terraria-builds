export type Armor = {
  id: string;
  src: string;
};

export type Armors<R extends string = string> = Record<R, Armor>;

export const armors: Armors<'reaverArmor'> = {
  reaverArmor: {
    id: 'Reaver Armor',
    src: 'https://raw.githubusercontent.com/hypestarofficial/terraria-builds-props/8df129cc4ab8eec3c5d5edc954fff23a2ea5277f/armors/reaverArmor.svg',
  },
};
