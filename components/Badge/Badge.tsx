import React from 'react';
import cn from 'classnames';
import styles from './Badge.module.css';

type BadgeProps = {
  badge: 'Vanilla' | 'Calamity';
};

export const Badge = ({ badge }: BadgeProps) => {
  return (
    <div
      className={cn(
        styles.container,
        badge === 'Vanilla' ? 'bg-gray-400' : 'bg-preCalamitas'
      )}
    >
      {badge}
    </div>
  );
};
