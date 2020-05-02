import React, {
  useState,
  useEffect,
} from 'react'
// import logo from './logo.svg';
import {
  TextField, Button
} from '@material-ui/core'

import './App.css';



function App() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [submitFlag, setSubmitFlag] = useState(true)

  useEffect(() => {
    console.log("email or password changed");
    (!!email & !!password) ? setSubmitFlag(false) : setSubmitFlag(true)
  }, [email, password])

  //  check if mounted and unmounted
  // useEffect(() => {
  //   alert("mounted")
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, [])

  const handleLogin = (params) => {
    console.log("you logged in")
  }

  return (
    <div className="container">
      <TextField
        style={styles.item}
        label="email"
        variant="outlined"
        value={email}
        type="text"
        className="item"
        onChange={({ target: { value } }) => {
          setEmail(value)
        }
        }
      />
      <TextField
        style={styles.item}
        label="password"
        variant="outlined"
        className="item"
        value={password}
        type="password"
        onChange={({ target: { value } }) => {
          setPassword(value)
        }
        }
      />
      <Button
        style={styles.item}
        fullWidth
        onClick={handleLogin}
        variant="outlined"
        color="primary"
        className="item"
        disabled={submitFlag}
      >Login</Button>
    </div>
  );
}

export default App;

const styles = {
  container: {
    padding: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center"
  },

  item: {
    marginTop: 10,
  }

}

// TODO
// 1- has state
// 2- fetch data
// 3- CRUD on states
// 4- triggers
// 5- testing

//  1- Has state
