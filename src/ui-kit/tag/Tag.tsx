import { TagColor } from './types'
import classNames from 'classnames'
import './Tag.sass'

interface TagProps {
  title: string
  color: TagColor
}

export default function Tag({ title, color }: TagProps) {
  return <div
    className={classNames({
      'Tag': true,
      'Tag__Violet': color === TagColor.Violet,
      'Tag__Orange': color === TagColor.Orange,
      'Tag__Green': color === TagColor.Green,
    })}
  >{ title }</div>
}
