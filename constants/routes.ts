export type RouteConfig = {
  id: string;
  name: string;
  href: string;
  alias?: string[];
};

export type RoutesConfig<R extends string = string> = Record<R, RouteConfig>;

export const generalRoutesConfig: RoutesConfig<
  'buildYourLoudout' | 'browseBuilds'
> = {
  buildYourLoudout: {
    id: 'buildYourLoudout',
    name: 'Build your loudout',
    href: '/buildYourLoudout',
  },
  browseBuilds: {
    id: 'browseBuilds',
    name: 'Browse builds',
    href: '/browseBuilds',
  },
};
