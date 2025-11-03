import AppContent from './assets/components/Header/AppContent/AppContent'
import { ThemeProvider } from './assets/context/ThemeProvider/ThemeProvider'



function App() {
  return (
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
  )
}


export default App
