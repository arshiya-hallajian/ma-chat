import { MagnifyingGlassIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

export const ChatListSearch: React.FC = () => {
    return (
        <header className="flex grow max-w-full h-16 bg-gray-800 justify-around items-center m-2 rounded-md">
            <div className="flex h-full flex justify-center items-center w-3/4">
                <MagnifyingGlassIcon className="h-7 w-7 text-white"/>
                <input type="text" className="w-full h-full outline-0 rounded ml-3 bg-gray-800 text-white text-right" placeholder="...اینجا سرچ کنید"/>
            </div>
            <PencilSquareIcon className="h-8 w-8 text-white"/>
        </header>
    );
};