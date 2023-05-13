// @flow
import React, {useState} from 'react';
import Input from '../../Components/signup&login/Input';
import logo from '../../assets/malogo.png'
import {KeyIcon, EnvelopeIcon, UserIcon} from '@heroicons/react/24/solid';


const Signup:React.FC = () => {
    const [input,setInput] = useState<{username: string,password:string,email?:string}>({
        username: "",
        password: "",
        email: "",
    });
    return (
        <div className="h-screen flex justify-center items-center flex-col bg-blue-950 gap-4">
            <div className="flex flex-col mb-8">
                <img className="w-60 h-30 bg-transparent text-white" src={logo} alt=""/>
                <p className="text-center text-lg font-bold text-slate-300">welcome to our MA chat</p>
            </div>
            <Input icon={<UserIcon className="w-8 h-6 mt-3 ml-5 text-white" />} text="Username" name="user" type="text" input={input} setInput={setInput}/>
            <Input icon={<EnvelopeIcon className="w-8 h-6 mt-3 ml-5 text-white" />} text="Email" name="mail" type="text" input={input} setInput={setInput}/>
            <Input icon={<KeyIcon className="w-8 h-6 mt-3 ml-5 text-white" />} text="Password" name="password" type="password" input={input} setInput={setInput}/>
            <Input icon={<KeyIcon className="w-8 h-6 mt-3 ml-5 text-white" />} text="Password" name="password" type="password" input={input} setInput={setInput} />

            <button className="py-2 w-3/4 bg-white m-10 rounded-full text-2xl text-blue-900 font-bold transition-color focus:bg-slate-100/50 md:hover:bg-slate-100/50 sm:hover:transition sm:hover:diuration-600 md:w-1/4">login</button>
        </div>
    );
};

export default Signup;