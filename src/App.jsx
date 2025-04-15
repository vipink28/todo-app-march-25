import { BrowserRouter } from 'react-router'
import AppRouter from './AppRouter'
import { AuthProvider } from './auth/AuthContext'
import Navbar from './components/Navbar'
import { TaskProvider } from './context/TaskContext'


function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
          <Navbar />
          <AppRouter />
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
export default App



