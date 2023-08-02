import React from "react";
import {faker} from "@faker-js/faker";
import {PhoneArrowDownLeftIcon, PhoneArrowUpRightIcon} from "@heroicons/react/24/outline"


interface Idata {
    callerUser: number,
    incomingCall: boolean
}

const data: Idata[] = [
    {
        callerUser: 9998,
        incomingCall: true
    },
    {
        callerUser: 65658,
        incomingCall: false
    },
    {
        callerUser: 8908,
        incomingCall: false
    },
    {
        callerUser: 9998,
        incomingCall: true
    },
    {
        callerUser: 65658,
        incomingCall: false
    },
    {
        callerUser: 8908,
        incomingCall: false
    },
    {
        callerUser: 9998,
        incomingCall: true
    },
    {
        callerUser: 65658,
        incomingCall: false
    },
    {
        callerUser: 8908,
        incomingCall: false
    }
]
export const Calls: React.FC = () => {


    return (
        <>
            <div className="flex flex-none justify-center text-xl py-4 w-full bg-gray-800 text-white">
                <p>call history</p>
            </div>

            <div
                className="flex-1 text-white p-2 gap-2 h-auto overflow-auto scrollbar-none md:scrollbar-thin md:scrollbar-thumb-gray-900 md:scrollbar-track-gray-100">
                {data.map((phoneCall) => (
                    <div
                        className="flex justify-between items-center text-white px-5 py-3 mt-1 border-0 shadow-none bg-gray-800 rounded-md">
                        <img className="h-16 w-16 rounded-full" src={faker.image.avatar()} alt="..."/>
                        <p>{phoneCall.incomingCall ? "Answered" : "Missed Call"}</p>
                        {phoneCall.incomingCall ? <PhoneArrowUpRightIcon className="h-8 w-8"/> :
                            <PhoneArrowDownLeftIcon className="h-8 w-8"/>}
                    </div>
                ))}
            </div>
        </>
    );
};


export default Calls


