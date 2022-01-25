import React, { useState } from 'react'
import pic from '../../../assets/login.png'
import { useNavigate } from 'react-router-dom';
import Popup from '../../../component/pop-up/PopUp';



const LoginPage = () => {
    const nav = useNavigate();
    const enter = (e) => e.key === 'Enter' && check();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isOpen, setIsOpen] = useState(false);


    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const userValue = {
        email: "mangalsanchit20@gmail.com",
        password: "sanchit"
    }
    const check = () => {
        if (userValue.email === email && userValue.password === password) {
            localStorage.setItem("token", "true");
            nav("/home-page");
        }
        else {
            setIsOpen(!isOpen);
        }

    }
    return (
        <>
            <div className='background-card'>
                <img className='logo-image' src={pic}></img>
                <div className='arrange'> <label className='label-text'>EMAIL</label>
                    <input className='login-input' type="text" value={email} onChange={onEmailChange}></input>
                    <label className='label-text'>PASSWORD</label>
                    <input className='login-input' type="password" value={password} onChange={onPasswordChange} name='pas' onKeyDown={enter}></input>
                    <button onClick={check} className='login-button-name'>LOGIN</button></div>
                {isOpen && <Popup
                    content={<>
                        <b>Warning!!!!</b>
                        <p>Please Enter Correct Credentials</p>
                    </>}
                    handleClose={togglePopup}
                />}
            </div>
        </>
    );
};

export default LoginPage;