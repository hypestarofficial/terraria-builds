export type Class = {
  id: number;
  name: string;
  src: string;
};

export type Armor = {
  id: number;
  name: string;
  src: string;
};

export type Weapon = {
  id: number;
  name: string;
  src: string;
};

export type Accessory = {
  id: number;
  name: string;
  src: string;
};

export type Classes<R extends string = string> = Record<R, Class>;
export type Weapons<R extends string = string> = Record<R, Weapon>;
export type Accessories<R extends string = string> = Record<R, Accessory>;
export type Armors<R extends string = string> = Record<R, Armor>;
export type Builds<R extends string = string> = Record<R, Build>;

export type Build = {
  id: number;
  name: string;
  class: Class;
  armor: Armor;
  weapons: Weapon[];
  accessories: Accessory[];
  badge: string;
  borderColor: string;
};
