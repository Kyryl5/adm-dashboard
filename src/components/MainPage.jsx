import { ColorModeContext, useMode } from '../theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, useLocation } from 'react-router-dom'
import Topbar from '../scenes/global/Topbar'
import Sidebar from '../scenes/global/Sidebar'
import useRoutes from '../hooks/useRoutes'

export default function App() {
  const [theme, colorMode] = useMode()

  const routes = useRoutes()
  const location = useLocation()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes location={location}>{routes}</Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
