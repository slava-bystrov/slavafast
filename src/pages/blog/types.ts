import { ID } from '../../types/global' 

export interface Post {
  id: ID
  title: string
  shortDescription: string
  publicationDate: string
  content: PostContent[]
  tags?: PostTag[]
}

export enum PostTag {
  Photography = 'photography',
  Coding = 'coding',
  Lifestyle = 'lifestyle'
}

export type PostContent = ContentTextType | ContentImageType

export enum ContentType {
  Paragraph = 'paragraph',
  Image = 'image'
}

interface ContentTextType {
  type: ContentType.Paragraph
  value: string
}

interface ContentImageType {
  type: ContentType.Image
  src: string
  alt: string
}
