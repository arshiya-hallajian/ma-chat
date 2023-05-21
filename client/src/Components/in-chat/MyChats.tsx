import { UserCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

interface Iprops {
    img: string
    user: {
        username: string
        userid: string
        count: number
    }
    text:string
}
export const MyChats: React.FC<Iprops> = ({user,text,img}) => {
    return (
        <div className="h-auto w-full rounded-md bg-gray-800 p-4 flex justify-around gap-4 mb-1">
            <div className="relative inline-block w-20">
                {/*<UserCircleIcon className="relative h-16 w-16 text-black rounded-full bg-gray-600"/>*/}
                <img className="relative h-16 w-16 text-black rounded-full bg-gray-600 object-cover" src={img} alt="image"/>
                <span className="block absolute bottom-0 right-0 bg-green-600 ring-1 ring-gray-200 rounded-full p-2 w-auto"></span>
            </div>
            <div className="flex-row w-full h-2/6 self-center">
                <h1 className="text-white text-lg">{user.username}</h1>
                <p className="text-white text-sm text-gray-400 text-ellipsis overflow-hidden">{text}</p>
            </div>
        </div>
    );
};