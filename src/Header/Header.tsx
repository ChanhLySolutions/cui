import classNames from 'classnames';
import React, { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';

export interface HeaderProps {
  size?: 'small' | 'medium' | 'large';
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { theme } = useContext(ThemeContext);
  const { size = theme.size } = props;
  const className = classNames(['w-full', size]);
  return <header className={className + ' bg-primary '}>{props.children}</header>;
};
