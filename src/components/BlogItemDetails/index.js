import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      topic: data.topic,
    }
    this.setState({
      blogDetails: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {title, avatarUrl, author, imageUrl, content} = blogDetails
    return isLoading ? (
      <Loader />
    ) : (
      <div className="blog-details-container">
        <h1 className="heading">{title}</h1>
        <div className="author-details-container">
          <img src={avatarUrl} alt={avatarUrl} className="icon" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="image1" />
        <p>{content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
