import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import { MyChats } from '../../Components/in-chat/MyChats';
import {ChatListSearch} from './ChatListSearch';
import {faker} from '@faker-js/faker'


export const ChatList: React.FC = (): JSX.Element => {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <ChatListSearch/>
            <div className="flex-1 h-auto p-2 w-full overflow-auto scrollbar-none md:scrollbar-thin md:scrollbar-thumb-gray-900 md:scrollbar-track-gray-100">
                <Link to="/222"><MyChats img={faker.image.avatar()} text={faker.word.words(10)} user={{username:faker.person.firstName(), userid:faker.number.int(5000).toString(), count: 2}}/></Link>
                <Link to="/222"><MyChats img={faker.image.avatar()} text={faker.word.words(10)} user={{username:faker.person.firstName(), userid:faker.number.int(5000).toString(), count: 2}}/></Link>
                <Link to="/222"><MyChats img={faker.image.avatar()} text={faker.word.words(10)} user={{username:faker.person.firstName(), userid:faker.number.int(5000).toString(), count: 2}}/></Link>
                <Link to="/222"><MyChats img={faker.image.avatar()} text={faker.word.words(10)} user={{username:faker.person.firstName(), userid:faker.number.int(5000).toString(), count: 2}}/></Link>
                <Link to="/222"><MyChats img={faker.image.avatar()} text={faker.word.words(10)} user={{username:faker.person.firstName(), userid:faker.number.int(5000).toString(), count: 2}}/></Link>
                <Link to="/222"><MyChats img={faker.image.avatar()} text={faker.word.words(10)} user={{username:faker.person.firstName(), userid:faker.number.int(5000).toString(), count: 2}}/></Link>
                <Link to="/222"><MyChats img={faker.image.avatar()} text={faker.word.words(10)} user={{username:faker.person.firstName(), userid:faker.number.int(5000).toString(), count: 2}}/></Link>
                <Link to="/222"><MyChats img={faker.image.avatar()} text={faker.word.words(10)} user={{username:faker.person.firstName(), userid:faker.number.int(5000).toString(), count: 2}}/></Link>
                <Link to="/222"><MyChats img={faker.image.avatar()} text={faker.word.words(10)} user={{username:faker.person.firstName(), userid:faker.number.int(5000).toString(), count: 2}}/></Link>
                <Link to="/222"><MyChats img={faker.image.avatar()} text={faker.word.words(10)} user={{username:faker.person.firstName(), userid:faker.number.int(5000).toString(), count: 2}}/></Link>
                <Link to="/222"><MyChats img={faker.image.avatar()} text={faker.word.words(10)} user={{username:faker.person.firstName(), userid:faker.number.int(5000).toString(), count: 2}}/></Link>
                <Link to="/222"><MyChats img={faker.image.avatar()} text={faker.word.words(10)} user={{username:faker.person.firstName(), userid:faker.number.int(5000).toString(), count: 2}}/></Link>
            </div>
        </>
    );
};
