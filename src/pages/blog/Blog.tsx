import Container from '../../ui-kit/container/Container'
import { Post, BlogTag } from './types'
import BlogPostPreview from './blog-post-preview/Blog-Post-Preview'
import './Blog.sass'

const blogPosts: Post[] = [
  {
    id: '1',
    title: 'This is how it started',
    shortDescription: 'So this is the very first post and here I would like to tell you a story how everything get started',
    publicationDate: '26.04.2023',
    tags: [BlogTag.Photography, BlogTag.Lifestyle]
  },
  {
    id: '2',
    title: 'Lorem ipsum dolor sit', 
    shortDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vel deleniti assumenda tenetur nemo? Temporibus eaque et perspiciatis suscipit? Unde maxime a reprehenderit quia pariatur vel, rerum natus voluptatem temporibus.', 
    publicationDate: '26.04.2023',
    tags: [BlogTag.Coding]
  },
  {
    id: '3',
    title: 'Lorem ipsum dolor sit amet', 
    shortDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem perferendis minus quibusdam animi optio.',
    publicationDate: '26.04.2023'
  },
]

export default function Blog() {
  return <Container>
    <div className="Blog">
      <div className="Blog__Description">
        <p>
        Welcome to my blog section 🤟
        </p>
        <p>
          Here I'm posting something related to Photography, Coding, Lifestyle and any other topic that I'm into 🍕
        </p>
      </div>
      
      {blogPosts.map(post => <div className='Blog__Post' key={post.id}>
        <BlogPostPreview post={post} />
      </div>)}
    </div>  
  </Container>
}