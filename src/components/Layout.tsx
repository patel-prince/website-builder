import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="app-container">
      <header className="app-header">Header</header>
      <main className="app-main">
        <aside className="app-sider">Sider</aside>
        <section className="app-content">
          <Outlet />
        </section>
      </main>
    </div>
  )
}
