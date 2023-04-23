import { ReactNode } from 'react'
import classNames from 'classnames';
import './Container.sass'

interface ContainerProps {
  children: ReactNode;
  wide?: boolean;
}

export default function Container({ children, wide }: ContainerProps) {
  return <div className={classNames({ 'Container': true, 'Container_Wide': wide })}>
    {children}
  </div>
}
