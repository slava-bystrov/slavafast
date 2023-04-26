import { ID } from '../../types/global' 

export interface Post {
  id: ID
  title: string
  shortDescription: string
  publicationDate: string
  tags?: BlogTag[]
}

export enum BlogTag {
  Photography = 'photography',
  Coding = 'coding',
  Lifestyle = 'lifestyle'
}