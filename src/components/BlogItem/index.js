import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, topic, imageUrl, avatarUrl, author} = blogDetails
  console.log(id)
  return (
    <Link to={`/blogs/${id}`}>
      <div className="card">
        <img src={imageUrl} alt={imageUrl} className="image" />
        <div className="text-container">
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="author-details-container">
            <img src={avatarUrl} className="icon" alt={avatarUrl} />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
