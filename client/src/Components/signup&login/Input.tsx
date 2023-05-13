import React, {useState} from 'react';
import '../../index.css';

interface Iprops {
    icon: React.ReactNode
    text: string
    type: string
    name: string
    input: {
        username: string
        password: string
        email?: string
    }
    setInput: React.Dispatch<React.SetStateAction<{username: string, password: string,email?: string}>>
}


const Input: React.FC<Iprops> = ({icon, text,type,name,input,setInput}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setInput({
          ...input,
          [e.target.name]: e.target.value
      })
    }

    return (
            <div className="w-3/4 h-12 bg-gray-100/50 flex justify-start gap-4 rounded-full md:w-1/4 focus:border-blue-300">
                {icon}
                <input name={name} className="bg-transparent placeholder:text-slate-100/60 w-full rounded-full rounded-bl rounded-tl md:pl-3 h-full outline-0" type={type} placeholder={text} onChange={handleChange} />
            </div>
    );
};

export default Input