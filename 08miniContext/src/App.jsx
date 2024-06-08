
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Learning Context Api |Chai aur code </h1>
      <h2>By hitesh sir</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App