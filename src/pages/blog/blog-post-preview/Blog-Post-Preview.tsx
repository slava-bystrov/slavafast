import Button from '../../../ui-kit/button/Button'
import { ComponentSize } from '../../../constants/component-size'
import Tag from '../../../ui-kit/tag/Tag'
import { TagColor } from '../../../ui-kit/tag/types'
import { Post, BlogTag } from '../types'
import './Blog-Post-Preview.sass'
import { ReactNode } from 'react'

interface BlogPostPreviewProps {
  post: Post
}

const tagsOptionsByType = {
  [BlogTag.Coding]: { title: 'Coding', color: TagColor.Orange },
  [BlogTag.Photography]: { title: 'Photography', color: TagColor.Violet },
  [BlogTag.Lifestyle]: { title: 'Lifestyle', color: TagColor.Green },
}

export default function BlogPostPreview(
  { post: {
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
      <Button size={ComponentSize.S}> Read more </Button>
    </div>
  </div>
}

function renderTags(tags: BlogTag[]): ReactNode {
  return <div className='BlogPostPreview__Tags'>
    {tags.map(tag => <div className="BlogPostPreview__Tag" key={tag}>
      <Tag
        title={tagsOptionsByType[tag].title}
        color={tagsOptionsByType[tag].color}
      />
    </div>)}
  </div>
}