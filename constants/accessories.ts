export type Accessory = {
  id: string;
  src: string;
};

export type Accessories<R extends string = string> = Record<R, Accessory>;

export const accessories: Accessories<'warbannerOfTheSun'> = {
  warbannerOfTheSun: {
    id: 'Warbanner of the Sun',
    src: 'https://raw.githubusercontent.com/hypestarofficial/terraria-builds-props/main/accessories/warbannerOfTheSun.webp',
  },
};
