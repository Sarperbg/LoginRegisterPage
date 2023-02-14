import { useContext, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import FirebaseContext from "../../../context/FirebaseContext";
import styles from "../styles/register.module.css"
import banner from '../../../assets/banners/background.png'
const RegisterComponent = () => {
  const { register } = useContext(FirebaseContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
   
    <div className={styles.register_container}>
      <div className={styles.inner_container}>
      <div className={styles.banner_container}>
        <h2>Already Have an Account ?</h2>
        <p>Sign in and discover a great amount of new oppurnities</p>
        <button className={[styles.login_btn, styles.btn].join(" ")}
        onClick={(e) => {
         e.preventDefault()
         navigate('/auth/login')
        }}>
        Login
        </button>
      </div>
      <form>
        <h2>Register to Your Account</h2>
        <div className={styles.social_login_container}>
          <p>Register using social networks </p>
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
        </div>
   
        <div className={styles.form_control}>
          <input type="text"
           name="user_firstname" 
           placeholder="First Name"
           onChange = {(e) => {
            setfirstName(e.target.value)
            }}
          />
        </div>

        <div className={styles.form_control}>
          <input type="text" 
          name="user_lastname"
          placeholder="Last Name"
          onChange = {(e) => {
            setLastName(e.target.value)
            }}
          />
        </div>

        <div className={styles.form_control}>
          <input type="email"
           name="user_email"
           defaultValue={'Email'}
           onChange = {(e) => {
            setEmail(e.target.value)
            }} /> 
        </div>

        <div className={styles.form_control}>
          <input type="password"
           name="user_password"
           defaultValue={'Password'}
           onChange = {(e) => {
            setPassowrd(e.target.value)
            }} />
        </div>
        <button
        className={[styles.login_btn, styles.btn].join
          (" ")}
          onClick={(e)=> {
            e.preventDefault()
            register(firstName, lastName, email, password)
          }}
        >Register</button>
      </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
