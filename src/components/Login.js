import React, { Component } from "react";
import { LoginApi } from "../apis/auth";
import { saveObject } from "../utils";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false
    };
    
    handleChange = ({ target }) => {
        const { name, value } = target
        this.setState({
            [name]: value
        })
    }
    notify = (rr) => {
        toast.success(rr + " you are logged in ")
}
    Login = () => {
        const { email, password } = this.state;
        this.setState({
            loading: true
        })
        LoginApi({email, password})
            .then(res => {
                saveObject("user", res.data)
                this.notify(res.data.name)
            }).catch(error => {
                console.log(error, "Error Found")
            }).finally(() => {
                this.setState({
                    loading: false
                })
            })
}
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={this.handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={this.handleChange}
            />
        <button onClick={this.Login}>CLICK TO LOGIN</button>
      </div>
    );
  }
}

export default Login;
