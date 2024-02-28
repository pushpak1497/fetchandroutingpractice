import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      author: each.author,
      avatarUrl: each.avatar_url,
      topic: each.topic,
    }))
    this.setState({
      blogData: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {blogData, isLoading} = this.state

    return isLoading ? (
      <div data-testid="loader">
        <Loader />
      </div>
    ) : (
      <div>
        {blogData.map(each => (
          <BlogItem blogDetails={each} key={each.id} />
        ))}
      </div>
    )
  }
}
export default BlogList
