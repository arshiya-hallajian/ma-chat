import React from "react";
import { Imsg } from "../../types/IMessagetype";


export const Devider: React.FC<{time:string}> = ({time}) => {
    return (
        <div className="gri grid-cols-8 inline-block flex items-center justify-around">
            <hr className="w-full h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-85"/>
            <h1 className="col-span-2 flex justify-center items-center">{time}</h1>
            <hr className="w-full h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-85"/>
        </div>
    );
};
export const TextM: React.FC<Imsg> = ( {msg} ):JSX.Element => {
    return (
        <div className={`flex-col overflow-hidde w-full text-black text-lg flex ${msg.outgoing ? "items-end" : "items-start"}`}>
            <p className={`${msg.outgoing ? "bg-slate-400 text-right justify-end":"bg-slate-300"} max-w-xs w-auto rounded-md flex items-center px-5`}>{msg.message}</p>
            <p className="text-gray-300">12:00</p>
        </div>
    );
};


