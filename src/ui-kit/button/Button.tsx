import { ReactNode } from 'react'
import './Button.sass'

interface ButtonProps {
  children: ReactNode
}

export default function Button({ children }: ButtonProps) {
  return <button className='Button'>{children}</button>
}
