import React from "react";
import {faker} from "@faker-js/faker";
import {PhoneArrowDownLeftIcon, PhoneArrowUpRightIcon} from "@heroicons/react/24/outline";

export const Contacts: React.FC = () => {
    return (
        <>
            <div className="flex flex-none justify-center text-xl py-4 w-full bg-gray-800 text-white">
                <p>call history</p>
            </div>
            <div
                className="flex-1 text-white p-2 gap-2 h-auto overflow-auto scrollbar-none md:scrollbar-thin md:scrollbar-thumb-gray-900 md:scrollbar-track-gray-100">
                {contacts.map((phoneCall) => (
                    <div
                        className="flex justify-between items-center text-white px-5 py-3 mt-1 border-0 shadow-none bg-gray-800 rounded-md">
                        <div className="relative">
                            <img className="h-16 w-16 rounded-full" src={faker.image.avatar()} alt="..."/>
                            <span
                                className={`block absolute bottom-0 right-0 ${phoneCall.status ? "bg-green-600" : "bg-red-600"} ring-1 ring-gray-200 rounded-full p-2 w-auto`}></span>
                        </div>
                        <p>{phoneCall.name && phoneCall.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
};
export default Contacts


const contacts = [
    {
        name: "arshiya",
        status: true,
    },
    {
        name: "ali",
        status: false,
    },
    {
        name: "naghi",
        status: false,
    },
    {
        name: "morteza",
        status: true,
    },
]