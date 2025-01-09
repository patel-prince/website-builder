import { AiOutlinePlus } from 'react-icons/ai'

const ElementPage = () => {
  return (
    <div className="app-container">
      <header className="app-header">Header</header>
      <main className="app-main">
        <aside className="app-sider">Sider</aside>
        <section className="app-content">
          <div className="page-header">
            <h1 className="text-title">Elements</h1>
          </div>
          <div className="divider"></div>
          <div className="data-card-list">
            <div className="data-card clickable">
              <div className="data-card-body data-card-add">
                <div className="data-card-add-icon">
                  <AiOutlinePlus />
                </div>
                <h3 className="text-subtitle">Create New Element</h3>
              </div>
            </div>
            <div className="data-card clickable">
              <div className="data-card-body"></div>
            </div>
            <div className="data-card clickable">
              <div className="data-card-body"></div>
            </div>
            <div className="data-card clickable">
              <div className="data-card-body"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ElementPage
