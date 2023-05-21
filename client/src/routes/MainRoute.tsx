import {Route, Routes} from 'react-router-dom';
import Container from '../layouts/Container';
import {Chat} from '../pages/chatapp/Chat';
import {ChatList} from '../pages/chatapp/ChatList';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';

const mainRoute = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Container/>}>
                <Route path="/" element={<ChatList/>}/>
            </Route>

            <Route path="/:chatid" element={<Chat/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
        </Routes>
    )
}

export default mainRoute