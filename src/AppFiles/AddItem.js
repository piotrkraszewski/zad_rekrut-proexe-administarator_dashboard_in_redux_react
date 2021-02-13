import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory  } from 'react-router-dom'
import useInput from '../hooks/useInput'
import { addNewUser } from '../redux'

export default function UserContainer() {
  const [name, setName, changeName, resetName] = useInput('')
  const [username, setUsername, changeUsername, resetUsername] = useInput('')
  const [email, setEmail, changeEmail, resetEmail] = useInput('')
  const [city, setCity, changeCity, resetCity] = useInput('')

  const [nameErr, setNameErr] = useState('')
  const [usernameErr, setUsernameErr] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [cityErr, setCityErr] = useState('')
  
  const dispatch = useDispatch()
  const history = useHistory()

  const chandleSubmit = (e) => {
    e.preventDefault()
    // reseting error state
    setNameErr('')
    setUsernameErr('')
    setEmailErr('')
    setCityErr('')

    const isValid = validate()
    console.log(isValid)
    if(isValid){
      dispatch(addNewUser({
        name: name,
        username: username,
        email: email,
        city: city,
      }))
      // przekieruj na strone
      history.push("/");
    }
  } 

  const validate = () => {
    let isValid = true
    if(name === ''){
      setNameErr('name input is mandatory')
      isValid = false
    }
    if(username === ''){
      setUsernameErr('username input is mandatory')
      isValid = false
    }
    if(email === ''){
      setEmailErr('email input is mandatory')
      isValid = false
    }
    if(!email.includes('@')){
      setEmailErr("invalid email. You didn't add @")
      isValid = false
    }
    if(city === ''){
      setCityErr('city input is mandatory')
      isValid = false
    }

    return isValid
  }

  return (  
    <div className='UsersDashboardElement'>
      <div className='UsersDashboardConainer'>
        <h1>Dashboard</h1>
        <div className='formContainer col-xl-2 col-md-3 col-4'>
          <div className='topForm'>
            <h4>Form</h4>
          </div>

          <div className='bottomForm'>
            <form>
              <div className="form-group">
                <label htmlFor="nameInp">Name</label>
                <input 
                  type="text" 
                  className={'form-control ' + (nameErr &&'is-invalid')} 
                  id="nameInp" 
                  placeholder="name"
                  value={name}
                  onChange={changeName}
                  required
                />
                <p className='formError'>{nameErr}</p>
              </div>
              <div className="form-group">
                <label htmlFor="usernameInput">Username</label>
                <input 
                  type="text" 
                  className={'form-control ' + (usernameErr &&'is-invalid')}
                  id="usernameInput" 
                  placeholder="username"
                  value={username}
                  onChange={changeUsername}
                  required
                />
                <p className='formError'>{usernameErr}</p>
              </div>
              <div className="form-group">
                <label htmlFor="emailInput">Email</label>
                <input 
                  type="text" 
                  className={'form-control ' + (emailErr &&'is-invalid')}
                  id="emailInput" 
                  placeholder="email"
                  value={email}
                  onChange={changeEmail}
                  required
                />
                <p className='formError'>{emailErr}</p>
              </div>
              <div className="form-group">
                <label htmlFor="cityInput">City</label>
                <input 
                  type="text" 
                  className={'form-control ' + (cityErr &&'is-invalid')}
                  id="cityInput" 
                  placeholder="city"
                  value={city}
                  onChange={changeCity}
                  required
                />
                <p className='formError'>{cityErr}</p>
              </div>
              <div className='formBtns'>
                <Link to='/' className='linkStyle'>
                  <button className="formBtn btn btn-warning">Cancel</button>
                </Link>
                <button 
                  type="submit" 
                  className="formBtn btn btn-primary"
                  onClick={chandleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}