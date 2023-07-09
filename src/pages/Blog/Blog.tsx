import  { FC, PropsWithChildren } from 'react';
import ToText from '../../utils/ToText'
import '../Blog/blog.css'
interface ProfileData {
  profileUrl: string;
  profileImage: string;
}

interface BlogData {
  item: any[];
  isLoading: boolean;
}

interface BlogProps {
  blog: BlogData;
  profile: ProfileData;
}

const BlogPage: FC<PropsWithChildren<BlogProps>> = ({ blog, profile }) => {
  const truncateText = (text: string, start: number, len: number) => {
    return text.length > len ? `${text.slice(start, len)}...` : text;
  }

  const haveBlogs = () => {
    if (blog.item) {
      return blog.item.map((post: any, index: number) => (
        <div className=' card ' key={index}>
          <div className='card-image ' style={{ backgroundImage: `url(${post.thumbnail})` }}>
            <div className='authorImg'>
              <a href={profile.profileUrl} aria-label='medium' rel='noopener noreferrer' target='_blank' style={{ backgroundImage: `url(${profile.profileImage})` }}></a>
            </div>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>
              <a href={post.link} className='postTitle' rel="noreferrer" target='_blank'>{truncateText(post.title, 0, 80)}</a>
            </h5>
            <p className='cardText'>{truncateText(ToText(post.description), 0, 265)}</p>
          </div>
        </div>
      ))
    }
  }

  return (
    <div className='blogs'>
      <div className='container-blog'>
        {blog.isLoading ? 'Loading...' : haveBlogs()}
      </div>
    </div>
  )
}

export default BlogPage;
