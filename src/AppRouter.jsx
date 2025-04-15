import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Dashboard from './admin/pages/Dashboard'
import Tasks from './admin/pages/Tasks'
import Users from './admin/pages/Users'
import AuthContext from './auth/AuthContext'
import Login from './auth/Login'
import ProtectedRoute from './auth/ProtectedRoute'
import Register from './auth/Register'
import About from './pages/About'
import CreateTask from './pages/CreateTask'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Profile from './pages/Profile'
import TaskList from './pages/TaskList'

const AppRouter = () => {
    const { user } = useContext(AuthContext);
    return (
        <>

            {
                user &&
                    user?.role === "user" ?
                    <Routes>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/create-task' element={<CreateTask />}></Route>
                        <Route path='/task-list' element={<ProtectedRoute><TaskList /></ProtectedRoute>}></Route>
                        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
                        <Route path='*' element={<PageNotFound />}></Route>
                    </Routes>
                    : user?.role === "admin" ?
                        <Routes>
                            <Route path='/' element={<Navigate to="/admin" />}></Route>
                            <Route path='/admin' element={<Dashboard />}>
                                <Route path='/admin/users' element={<Users />}></Route>
                                <Route path='/admin/tasks' element={<Tasks />}></Route>
                            </Route>
                            <Route path='*' element={<Navigate to="/" />}></Route>
                        </Routes>
                        :
                        <Routes>
                            <Route path='/' element={<Navigate to="/login" />}></Route>
                            <Route path='/' element={<Home />}>
                                <Route path='/login' element={<Login />}></Route>
                                <Route path='/register' element={<Register />}></Route>
                            </Route>
                            <Route path='*' element={<Navigate to="/" />}></Route>
                        </Routes>
            }
        </>
    )
}

export default AppRouter