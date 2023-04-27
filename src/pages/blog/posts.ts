import slava from '../../assets/img/slava_1.jpg'
import { Post, PostTag, ContentType } from './types'

const blogPosts: Post[] = [
  {
    id: '1',
    title: 'This is how it started',
    publicationDate: '26.04.2023',
    tags: [PostTag.Photography, PostTag.Lifestyle],
    shortDescription: 'So this is the very first post and here I would like to tell you a story how everything get started',
    content: [
      {
        type: ContentType.Paragraph,
        value: 'So this is the very first post and here I would like to tell you a story how everything get started'
      },
      {
        type: ContentType.Paragraph,
        value: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vel deleniti assumenda tenetur nemo? Temporibus eaque et perspiciatis suscipit? Unde maxime a reprehenderit quia pariatur vel, rerum natus voluptatem temporibus.'
      },
      {
        type: ContentType.Image,
        src: slava,
        alt: 'Slava\'s photo'
      },
      {
        type: ContentType.Paragraph,
        value: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vel deleniti assumenda tenetur nemo? Temporibus eaque et perspiciatis suscipit? Unde maxime a reprehenderit quia pariatur vel, rerum natus voluptatem temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vel deleniti assumenda tenetur nemo? Temporibus eaque et perspiciatis suscipit? Unde maxime a reprehenderit quia pariatur vel, rerum natus voluptatem temporibus.'
      },
      {
        type: ContentType.Paragraph,
        value: 'Temporibus eaque et perspiciatis suscipit? Unde maxime a reprehenderit quia pariatur vel, rerum natus voluptatem temporibus.'
      },
    ]
  },
  {
    id: '2',
    title: 'Lorem ipsum dolor sit', 
    publicationDate: '26.04.2023',
    tags: [PostTag.Coding],
    shortDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vel deleniti assumenda tenetur nemo? Temporibus eaque et perspiciatis suscipit? Unde maxime a reprehenderit quia pariatur vel, rerum natus voluptatem temporibus.', 
    content: [
      {
        type: ContentType.Paragraph,
        value: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vel deleniti assumenda tenetur nemo? Temporibus eaque et perspiciatis suscipit? Unde maxime a reprehenderit quia pariatur vel, rerum natus voluptatem temporibus.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vel deleniti assumenda tenetur nemo? Temporibus eaque et perspiciatis suscipit? Unde maxime a reprehenderit quia pariatur vel, rerum natus voluptatem temporibus.'
      }
    ]
  },
  {
    id: '3',
    title: 'Lorem ipsum dolor sit amet', 
    publicationDate: '26.04.2023',
    shortDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem perferendis minus quibusdam animi optio.',
    content: [
      {
        type: ContentType.Paragraph,
        value: '12312'
      }
    ]
  },
]

export default blogPosts;
