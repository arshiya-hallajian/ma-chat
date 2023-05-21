import React, {useCallback, useEffect, useState} from "react";
import {XMarkIcon,ArrowLeftIcon, PhoneIcon, PaperClipIcon, PaperAirplaneIcon} from "@heroicons/react/24/solid"
import {Link} from "react-router-dom";
import {useDropzone} from "react-dropzone";
import { Message } from "../../Components/in-chat/Message";

export const Chat: React.FC = () => {
    const [message, setMessage] = useState<string>("");
    const [attachment, setAttachment] = useState<File[] >([]);
    const [preview, setPreview] = useState<boolean>(false);


    const onDrop = useCallback((acceptedFiles: File[]):void => {
        setAttachment(acceptedFiles)
        console.log(acceptedFiles,"acc")
        console.log(attachment,"atch")
    }, []);

    const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})



    useEffect(() => {
    if (attachment.length == 0){
        setPreview(false)
    }else{
        setPreview(true)
    }

    }, [attachment]);

    console.log(attachment)
    console.log(preview)



    const handleOnClick = (): void => {
        setMessage("")
        setAttachment([])
    }
    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            setMessage("")
            setAttachment([])
        }
    }
    const handleXphoto = (index:number):void => {
        setAttachment(old => {
            return old.filter((_,i) => i !== index)
        })
    }
    return (
        <div className="bg-gray-900 h-screen w-screen flex flex-col overflow-hidden">
            <div className="flex justify-between items-center text-white max-w-screen h-16 bg-gray-800 p-5">
                <Link to="/">
                    <ArrowLeftIcon className="w-8 h-8"/>
                </Link>
                <div className="flex flex-col items-center">
                    <p className="text-xl">arshiya</p>
                    <p className="text-md text-green-400">Online</p>
                </div>

                <PhoneIcon className="w-8 h-8"/>
            </div>

            <div className="overflow-auto p-2 text-xl text-slate-400 relative max-w-full flex-1 h-auto bg-[url('https://wallpaperaccess.com/full/7331539.jpg')] bg-cover">
                <div className="flex flex-col gap-3">

                <Message/>

            {
                preview && <div className="absolute left-0 bottom-0 block h-40 w-screen flex flex-nowrap overflow-x-auto self-end">
                    {attachment && attachment.map((eachPhoto:File,index:number):JSX.Element => {
                        return(
                            <div className="flex-none h-40 w-40 relative" key={index}>
                                <img className="w-full h-full object-cover rounded-xl ring-1 ring-blue-400" src={URL.createObjectURL(eachPhoto)}
                                     alt="sss"/>
                                <XMarkIcon className="w-8 h-8 absolute top-0 right-0" onClick={()=> handleXphoto(index)} />
                            </div>
                        )
                    })}
                    </div>
            }
                </div>
            </div>
            <div className="flex justify-around items-center h-16 w-screen bg-gray-800 text-white">
                <div {...getRootProps()}>
                    <input {...getInputProps()} accept="image/*,audio/*,video/*"/>
                        <PaperClipIcon className="w-8 h-8 mx-4"/>
                </div>
                {/*<textarea placeholder="enter your text here.." className="bg-transparent h-full w-full focus:outline-0"></textarea>*/}
                <input className="bg-transparent h-full w-full focus:outline-0" type="text"
                       placeholder="enter your text here..." value={message}
                       onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => handleOnKeyDown(e)}/>
                <PaperAirplaneIcon className="w-8 h-8 mx-4" onClick={handleOnClick}/>
            </div>
        </div>
    );
};