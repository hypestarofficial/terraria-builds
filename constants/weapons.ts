export type Weapon = {
  id: string;
  src: string;
};

export type Weapons<R extends string = string> = Record<R, Weapon>;

export const weapons: Weapons<'Galaxia'> = {
  Galaxia: {
    id: 'Galaxia',
    src: 'https://raw.githubusercontent.com/hypestarofficial/terraria-builds-props/main/weapons/galaxia.webp',
  },
};
