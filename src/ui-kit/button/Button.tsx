import { ReactNode } from 'react'
import './Button.sass'

interface Button {
  children: ReactNode
}

export default function Button({ children }: Button) {
  return <button className='Button'>{children}</button>
}
