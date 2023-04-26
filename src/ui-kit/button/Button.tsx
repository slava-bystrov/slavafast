import { ReactNode } from 'react'
import { ComponentSize } from '../../constants/component-size'
import classNames from 'classnames'
import './Button.sass'

interface ButtonProps {
  children: ReactNode
  size?: ComponentSize.S | ComponentSize.L
}

export default function Button({ children, size }: ButtonProps) {
  return <button className={classNames({ 'Button': true, 'Button_S': size === ComponentSize.S })}>
    {children}
  </button>
}
