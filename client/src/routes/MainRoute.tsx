import {Route, Routes} from 'react-router-dom';
import Container from '../layouts/Container';
import { ChatList } from '../pages/chatapp/chatList';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';

const mainRoute = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Container/>}>
                <Route path="/" element={<ChatList />}/>
            </Route>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
        </Routes>
    )
}

export default mainRoute