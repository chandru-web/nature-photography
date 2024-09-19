import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setActiveThumbnail} = props
  const {thumbnailUrl, thumbnailAltText, id, isActive} = imageDetails

  const className = isActive ? 'thumbnail-image active' : 'thumbnail-image'

  const onActiveThumbnail = () => {
    setActiveThumbnail(id)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onActiveThumbnail}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className={className} />
      </button>
    </li>
  )
}

export default ThumbnailItem
