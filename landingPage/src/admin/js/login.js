import React, {Component} from "react";
import axios from "axios";

class Login extends Component {
  url_users = "http://localhost:3000/users";
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }

  callAPI(url_api, method, body) {
    axios({
      method: method,
      url: url_api,
      data: body,
    })
      .then((res) => {
        this.setState({ result: res.data });
      })
      .catch((err) => {
        alert(err);
      });
  }

  componentDidMount(){
    this.callAPI(this.url_users, "GET", "");
  }

  sign_in = () => {
    let email = document.getElementById("signin-email").value;
    let password = document.getElementById("signin-password").value;
    const result = this.state.result.find(
      (row) => row.email === email && row.password === password
    );
    if (result != null) {
      if (result.status === 0) {
        alert("your account has been locked");
      } else {
        localStorage.setItem("user", JSON.stringify(result))
        alert("your account has been ");
        window.location.reload();
        // this.props.history.push("/Register")
    };
    } else alert("Incorrect account or password !");
  };

  render() {
  return (
    <div className="container login">
            <div className="login-form" >
              <form className="form" method="post">
                <div class="logo-img-login"><img className=""src="https://www.passerellesnumeriques.org/misc/logo-en.png"  width="211" height="68" alt="PNV-"></img>
                <hr></hr>
                  </div>
                  <br></br>
                    <h3><b><center>SIGN IN</center></b></h3>
                  <br></br>

                  <div className="form-group">
                  <label className="image-replace email" htmlFor="signin-email">Email address *</label>
                      <input type="email" className="form-control" name="email" id="signin-email" placeholder="Enter email" htmlFor="signin-email" validate/>
                  </div>

                  <div className="form-group">
                  <label className="image-replace password" htmlFor="signin-password">Password *</label>
                      <input type="password" className="form-control" name="password" id="signin-password" placeholder="Enter password"  validate/><a href="#0" className="hide-password"></a>
                  </div>

                  <div className="form-group">
                      <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="customCheck1" />
                          <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                      </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block" onClick={() => this.sign_in()}>Submit</button>
                  <br></br>
                  <p className="font-small grey-text d-flex justify-content-end">Forgot<a href="/forgot" className="dark-grey-text font-weight-bold ml-1">Password?</a>
                  </p>
              </form>
          </div>
      </div>
    );
  }
}
export default Login;