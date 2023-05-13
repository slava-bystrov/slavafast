import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../ui-kit/button/Button'
import { ComponentSize } from '../../../constants/component-size'
import Tag from '../../../ui-kit/tag/Tag'
import { TagColor } from '../../../ui-kit/tag/types'
import { Post, PostTag } from '../types'
import './Blog-Post-Preview.sass'

interface BlogPostPreviewProps {
  post: Post
}

interface TagOption { title: string; color: TagColor; }

const tagsOptionsByType: Record<PostTag, TagOption> = {
  [PostTag.Coding]: { title: 'Coding', color: TagColor.Orange },
  [PostTag.Photography]: { title: 'Photography', color: TagColor.Violet },
  [PostTag.Lifestyle]: { title: 'Lifestyle', color: TagColor.Green },
} as const

export default function BlogPostPreview(
  { post: {
    id,
    title,
    shortDescription, 
    publicationDate,
    tags
  } }: BlogPostPreviewProps
) {
  return <div className="BlogPostPreview">
    <div className="BlogPostPreview__Date">{ publicationDate }</div>
    {tags?.length ? renderTags(tags) : null}
    <h3 className="BlogPostPreview__Title">{ title }</h3>
    <p className="BlogPostPreview__Description">{ shortDescription }</p>
    <div className="BlogPostPreview__Button">
      <Link to={`${id}`}>
        <Button size={ComponentSize.S}> Read more </Button>
      </Link>
    </div>
  </div>
}

function renderTags(tags: PostTag[]): ReactNode {
  return <div className='BlogPostPreview__Tags'>
    {tags.map(tag => <div className="BlogPostPreview__Tag" key={tag}>
      <Tag
        title={tagsOptionsByType[tag].title}
        color={tagsOptionsByType[tag].color}
      />
    </div>)}
  </div>
}