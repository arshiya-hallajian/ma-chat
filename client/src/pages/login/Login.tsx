import React, {useState} from 'react';
import Input from '../../Components/signup&login/Input';
import logo from '../../assets/malogo.png'
import {KeyIcon, UserIcon} from '@heroicons/react/24/solid';
import axios from 'axios';


const Login: React.FC = () => {
    const [input, setInput] = useState<{email: string,password:string}>({
        email: "",
        password: ""
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        try{
        const res = await axios.post('http://localhost:3001/api/auth/login',input)
            console.log(res)
        }catch (e) {
            console.log(e,"*error axios*")
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="h-screen flex justify-center items-center flex-col bg-blue-950 gap-4">
                <div className="flex flex-col mb-8">
                    <img className="w-60 h-30 bg-transparent text-white" src={logo} alt=""/>
                    <p className="text-center text-lg font-bold text-slate-300">welcome to our MA chat</p>
                </div>
                <Input icon={<UserIcon className="w-8 h-6 mt-3 ml-5 text-white"/>} name="email" text="email" type="text" input={input} setInput={setInput} />
                <Input icon={<KeyIcon className="w-8 h-6 mt-3 ml-5 text-white"/>} name="password" text="password" type="password" input={input} setInput={setInput} />

                <button
                    type="submit"
                    className="py-2 w-3/4 bg-white m-10 rounded-full text-2xl text-blue-900 font-bold transition-color focus:bg-slate-100/50 md:hover:bg-slate-100/50 sm:hover:transition sm:hover:diuration-600 md:w-1/4">login
                </button>
            </div>
        </form>
    );
};

export default Login;