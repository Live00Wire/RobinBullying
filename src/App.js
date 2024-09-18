import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Account from './pages/Account';
import Calendar from './pages/Calendar';
import Chat from './pages/Chat';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/calendar" element={<Calendar />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;