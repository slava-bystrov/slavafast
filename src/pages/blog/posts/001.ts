import { Post, PostTag, ContentType } from '../types'

export default {
  id: '1',
  title: 'The very first Post...',
  publicationDate: '13.05.2023',
  tags: [PostTag.Lifestyle],
  shortDescription: 'This is the very first post in my blog. Obviously. So here is the setup. I’ll turn...',
  content: [
    {
      type: ContentType.Paragraph,
      value: 'This is the very first post in my blog. Obviously. '
    },
    {
      type: ContentType.Paragraph,
      value: 'So here is the setup. I’ll turn 33 this year. Ordinary guy, who spontaneously moved to Germany and live here for almost 4 years already. And yeah, my GF and I are working in IT, probably that’s why it was kinda easy for us to move, but of course, there IS a story to tell about how we moved here.'
    },
    {
      type: ContentType.Paragraph,
      value: 'To tell a bit more about myself — I’m a Team Lead at a German company and previously I worked as Software JS Engineer. Really passionate about traveling, photography, videography, snowboarding, gaming, and just a lot of random stuff 😄'
    },
    {
      type: ContentType.List,
      title: 'My goal here at this blog to write about:',
      items: [
        'Sharing my Team Lead experiences and failures',
        'Some Photography tips and tricks',
        'How we are living in Munich',
        'Some gaming stuff',
        'Whatever comes to my mind, like recently I was really interested in leatherworking 😆',
      ],
    },
    {
      type: ContentType.Paragraph,
      value: 'If you feel the same, or have same interests as me — add my website to your Bookmarks and of course feel free to ask me anything on Instagram 🙂'
    },
    {
      type: ContentType.Paragraph,
      value: 'Peace ✌'
    },
  ]
} as Post
