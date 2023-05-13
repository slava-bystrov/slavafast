import { Link, useParams } from 'react-router-dom'
import { AppRoutesConfig } from '../../../constants/routes'
import Container from '../../../ui-kit/container/Container'
import blogPosts from '../posts/posts'
import { ContentType, PostContent } from '../types'
import './Blog-Post-Page.sass'

export default function BlogPostPage() {
  const { id } = useParams()
  const currentPost = blogPosts.find(post => post.id === id)

  function renderBack() {
    return <Link to={AppRoutesConfig.Blog.path}>
    <div className='BlogPostPage__Back'>
      <svg className='BlogPostPage__Back-Icon' viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M15,6H8V3c0-0.484-0.375-1-1-1C6.539,2,6.305,2.287,6,2.54L0.625,7C0.242,7.313,0,7.555,0,8s0.242,0.688,0.625,1L6,13.46  C6.305,13.713,6.539,14,7,14c0.625,0,1-0.516,1-1v-3h7c0.55,0,1-0.45,1-1V7C16,6.45,15.55,6,15,6z"/></svg>
      Back
    </div>
  </Link>
  }

  function renderContent(content: PostContent, idx: number) {
    switch (content.type) {
      case ContentType.Paragraph:
        return <p key={idx}>{ content.value }</p>

      case ContentType.Image:
        return <div
          className="BlogPostPage__Image"
          key={idx}
        >
          <img
            src={content.src}
            alt={content.alt}
          />
        </div>

      case ContentType.List:
        return <div>
          {content.title ? <p className='BlogPostPage__List-Title'>{ content.title }</p> : null}
          {content.items.length ? <ul className='BlogPostPage__List'>
            {content.items.map(item => <li key='item' className='BlogPostPage__List-Item'>{ item }</li>)}
          </ul> : null}
        </div>
    }
  }

  if (!currentPost) return <Container>
    {renderBack()}
    <div>Ooooooops! There is no such post 🕵️‍♀️</div>
  </Container>

  const { title, content } = currentPost

  return <Container>
    <div className="BlogPostPage">
      <div className="BlogPostPage__Title-Wrapper">
        {renderBack()}
        <h1 className="BlogPostPage__Title">{ title }</h1>
      </div>
      
      <div className="BlogPostPage__Content">
        {content.map(renderContent)}
      </div>
    </div>
  </Container>
}