import { useEffect } from 'react'
import './styles/main.scss'
import { fetchUsers } from './redux'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import BgGreen from './images/BgGreen.jpg'
import UsersDashboard from './AppFiles/UsersDashboard'
import AddItem from './AppFiles/AddItem'

export default function App () {
  const dispatch = useDispatch()
  // fetching data only onec
  useEffect(async () => {
    dispatch(fetchUsers())
  }, [])

  return (
  <div>
      <div className='cardsContainer'>
        <Switch>
          <Route exact path='/' render={() => <UsersDashboard/>} />
          <Route exact path='/additem' render={() => <AddItem/>} />
        </Switch>
      </div>

    <img src={BgGreen} className='BgImage'/>
  </div>
  )
}