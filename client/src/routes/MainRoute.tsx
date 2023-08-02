import {Route, Routes} from 'react-router-dom';
import Container from '../layouts/Container';
import {Chat} from '../pages/chatapp/Chat';
import {ChatList} from '../pages/chatapp/ChatList';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Settings from "../pages/chatapp/Settings";
import Contacts from "../pages/chatapp/Contacts";
import Calls from "../pages/chatapp/Calls";

const mainRoute = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Container />}>
                <Route path="/" element={<ChatList />} />
                <Route path="/setting" element={<Settings />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/calls" element={<Calls />} />
            </Route>
            <Route path="/:chatid" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}

export default mainRoute
