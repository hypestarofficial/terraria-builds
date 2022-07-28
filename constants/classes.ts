export type ClassConfig = {
  id: string;
  src: string;
};

export type ClassesConfig<R extends string = string> = Record<R, ClassConfig>;

export const classesConfig: ClassesConfig<
  'Warrior' | 'Summoner' | 'Sorcerer' | 'Ranger' | 'Rogue'
> = {
  Warrior: {
    id: 'Warrior',
    src: 'https://raw.githubusercontent.com/hypestarofficial/terraria-builds-props/main/classIcons/warriorIcon.png',
  },
  Summoner: {
    id: 'Summoner',
    src: 'https://raw.githubusercontent.com/hypestarofficial/terraria-builds-props/main/classIcons/sumonerIcon.png',
  },
  Sorcerer: {
    id: 'Sorcerer',
    src: 'https://raw.githubusercontent.com/hypestarofficial/terraria-builds-props/main/classIcons/sorcererIcon.png',
  },
  Ranger: {
    id: 'Ranger',
    src: 'https://raw.githubusercontent.com/hypestarofficial/terraria-builds-props/main/classIcons/rangerIcon.png',
  },
  Rogue: {
    id: 'Rogue',
    src: 'https://raw.githubusercontent.com/hypestarofficial/terraria-builds-props/main/classIcons/rogueIcon.webp',
  },
};
