import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'
import './index.css'

const GameProgress = props => {
  const {
    allImagesList,
    tabs,
    thumbnailImages,
    activeTabId,
    currentImageId,
    onClickTab,
    onClickThumbnail,
  } = props

  const renderTabs = () => (
    <ul className="tab-items-container">
      {tabs.map(eachTab => (
        <TabItem
          key={eachTab.tabId}
          tab={eachTab}
          active={eachTab.tabId === activeTabId}
          onClickTab={onClickTab}
        />
      ))}
    </ul>
  )

  const renderThumbnails = () => (
    <ul className="thumbnails-container">
      {thumbnailImages.map(thumbnail => (
        <ThumbnailItem
          thumbnail={thumbnail}
          key={thumbnail.id}
          onClickThumbnail={onClickThumbnail}
        />
      ))}
    </ul>
  )

  const getImage = () =>
    allImagesList.find(image => image.id === currentImageId)

  const {imageUrl} = getImage()

  return (
    <div className="game-container">
      <img src={imageUrl} alt="match" className="match-image" />
      {renderTabs()}
      {renderThumbnails()}
    </div>
  )
}

export default GameProgress
