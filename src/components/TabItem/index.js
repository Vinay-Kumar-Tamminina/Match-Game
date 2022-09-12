import './index.css'

const TabItem = props => {
  const {tab, active, onClickTab} = props
  const onClickTabItem = () => {
    onClickTab(tab.tabId)
  }

  return (
    <li>
      <button
        className={`tab-item-button ${active ? 'active-tab' : ''}`}
        type="button"
        onClick={onClickTabItem}
      >
        {tab.displayText}
      </button>
    </li>
  )
}

export default TabItem
