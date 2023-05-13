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

export type PostContent = ContentText | ContentImage | ContentList

export enum ContentType {
  Paragraph = 'paragraph',
  Image = 'image',
  List = 'list'
}

interface ContentText {
  type: ContentType.Paragraph
  value: string
}

interface ContentImage {
  type: ContentType.Image
  src: string
  alt: string
}

interface ContentList {
  type: ContentType.List
  title: string
  items: string[]
}
