import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <h1>App Header</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
