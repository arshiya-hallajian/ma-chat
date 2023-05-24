import React from "react";
import { chatData } from "../../types/IMessage";
import {Devider, TextM} from "./MessageTypes";

export const Message: React.FC = () => {

    return (
        <>
            {
                ChatData.map((Data): JSX.Element => {
                    switch (Data.type) {
                        case "msg":
                            // console.log(Data,"1")
                            switch (Data.subtype) {
                                case "img":
                                    //image
                                    return <></>
                                    break;
                                case "doc":
                                    //doc
                                    return <></>
                                    break;
                                case "link":
                                    //link
                                    return <></>
                                    break;
                                case "replay":
                                    //replay
                                    return <></>
                                    break;
                                default:
                                    console.log(Data,"2")
                                    //text message
                                    return <TextM msg={Data}/>
                                    // return <></>
                            }
                            break;
                        case "divider":
                            //devider
                            return <Devider time="today"/>
                            break;
                        default:
                            return <></>
                    }
                })
            }
        </>
    );
};




const ChatData: chatData = [
    {
        type: "msg",
        message: "long message test long message test long message test long message test long message test long message test long message test long message test long message test long message test long message test long message test long message test long message test long message test long message test long message test long message test long message test long message test long message test long message test long message test ",
        incoming: true,
        outgoing: false,
    },
    {
        type: "divider",
        message: "Today",
    },
    {
        type: "msg",
        message: "Hi 👋 Panda, not bad, u ?",
        incoming: false,
        outgoing: true,
    },
    {
        type: "msg",
        message: "Can you send me an abstarct image?",
        incoming: false,
        outgoing: true,
    },
    {
        type: "msg",
        message: "Ya sure, sending you a pic",
        incoming: true,
        outgoing: false,
    },

    {
        type: "msg",
        subtype: "img",
        message: "Here You Go",
        img: "l",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        message: "Can you please send this in file format?",
        incoming: false,
        outgoing: true,
    },

    {
        type: "msg",
        subtype: "doc",
        message: "Yes sure, here you go.",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "link",
        preview: "l",
        message: "Yep, I can also do that",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "reply",
        reply: "This is a reply",
        message: "Yep, I can also do that",
        incoming: false,
        outgoing: true,
    },
];