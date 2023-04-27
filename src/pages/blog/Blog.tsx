import Container from '../../ui-kit/container/Container'
import blogPosts from './posts'
import BlogPostPreview from './blog-post-preview/Blog-Post-Preview'
import './Blog.sass'

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