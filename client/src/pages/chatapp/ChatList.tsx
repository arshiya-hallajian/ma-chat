import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import { MyChats } from '../../Components/in-chat/Mychats';
import {ChatListSearch} from './ChatListSearch';


export const ChatList: React.FC = (): JSX.Element => {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <ChatListSearch/>
            <div className="h-auto p-2 w-full overflow-auto scrollbar-none md:scrollbar-thin md:scrollbar-thumb-gray-900 md:scrollbar-track-gray-100">
                <Link to="/222"><MyChats img="https://picsum.photos/200" text="سلام خوبی؟"
                                           user={{username: "arshiya", userid: "108022", count: 2}}/></Link>
                <Link to="/222"><MyChats img="https://picsum.photos/200" text="سلام خوبی؟"
                                           user={{username: "arshiya", userid: "108022", count: 2}}/></Link>
                <Link to="/222"><MyChats img="https://picsum.photos/200" text="سلام خوبی؟"
                                           user={{username: "arshiya", userid: "108022", count: 2}}/></Link>
                <Link to="/222"><MyChats img="https://picsum.photos/200" text="سلام خوبی؟"
                                           user={{username: "arshiya", userid: "108022", count: 2}}/></Link>
                <Link to="/222"><MyChats img="https://picsum.photos/200" text="سلام خوبی؟"
                                           user={{username: "arshiya", userid: "108022", count: 2}}/></Link>
                <Link to="/222"><MyChats img="https://picsum.photos/200" text="سلام خوبی؟"
                                           user={{username: "arshiya", userid: "108022", count: 2}}/></Link>
                <Link to="/222"><MyChats img="https://picsum.photos/200" text="سلام خوبی؟"
                                           user={{username: "arshiya", userid: "108022", count: 2}}/></Link>
                <Link to="/222"><MyChats img="https://picsum.photos/200" text="سلام خوبی؟"
                                           user={{username: "arshiya", userid: "108022", count: 2}}/></Link>
                <Link to="/222"><MyChats img="https://picsum.photos/200" text="سلام خوبی؟"
                                           user={{username: "arshiya", userid: "108022", count: 2}}/></Link>
                <Link to="/222"><MyChats img="https://picsum.photos/200" text="سلام خوبی؟"
                                           user={{username: "arshiya", userid: "108022", count: 2}}/></Link>
            </div>
        </>
    );
};
