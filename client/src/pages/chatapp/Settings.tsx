import React from "react";
import {faker} from "@faker-js/faker";

export const Settings: React.FC = () => {
    return (
        <div className="flex flex-col flex-1">
            <div className="flex flex-col items-center mt-10 gap-5 text-white">
                <img className="h-40 w-40 rounded-full" src={faker.image.avatar()} alt="..."/>
                <p className="text-3xl font-serif">arshiya</p>
                <button className="px-6 py-2 bg-purple-600 rounded-xl">copy id</button>
            </div>
            <div className="text-white text-xl mt-12 divide-y">
                <div className="flex justify-between py-5 px-5">
                    <p>Dark Mode</p>
                    <label className="relative items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer"/>
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                    </label>
                </div>
            </div>
        </div>
    );
};
export default Settings