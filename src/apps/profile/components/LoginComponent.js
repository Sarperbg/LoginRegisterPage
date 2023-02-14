import React from "react";
import FirebaseContext from "../../../context/FirebaseContext";

import { useContext, useState } from "react";
import styles from "../styles/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import design from '../../../assets/banners/design.jpg'

const LoginComponent = () => {
  const navigate = useNavigate();
  const { register } = useContext(FirebaseContext);
  const {signIn} = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  return (
    <div>
      <div className={styles.login_container}>
        <div className={styles.inner_container}>
          <div className={styles.banner_container}>
            <h2>Login to Your Account</h2>
            <p>Login using social networks</p>
            <div className={styles.social_login_buttons}>
            <button>
              <i className='fa-brands fa-google'></i>
            </button>
            <button>
              <i className="fab fa-facebook-f"></i>
            </button>
            <button>
              <i className="fa-brands fa-twitter"></i>
            </button>
          </div>
            <form>
              <div className={styles.form_control}>
                <input type="email"
                 name="user_email"
                  placeholder="Email" 
                  onChange = {(e) => setEmail(e.target.value)
                  }
                  />
              </div>
              <div className={styles.form_control}>
                <input
                  type="password"
                  name="user_password"
                  placeholder="Password"
                  onChange = {(e) => setPassowrd(e.target.value)
                  }
                />
              </div>
              <button
       className={[styles.login_btn, styles.btn].join(" ")}
        onClick={(e) => {
                  e.preventDefault();
                  signIn(email, password)
                }}
              >
                Sign In
              </button>
            </form>
          </div>
          <div className={styles.right_container}>
            <h2>New Here</h2>
            <p>Sign up and discover a great amount of new oppurnities</p>
            <button className={[styles.login_btn, styles.btn].join(" ")}
        onClick={(e) => {
         e.preventDefault()
         navigate('/auth/register')
        }}>
        Sign Up
        </button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default LoginComponent;
