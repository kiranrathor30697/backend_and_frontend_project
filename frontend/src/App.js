import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Header from './Layouts/Header';
import { Chat } from './pages/chating/Chat';
import CreateBill from './pages/CreateBill';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import './css/common.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/header" element={<Header />} />
        <Route path="/createbill" element={<CreateBill />} />
        <Route path="/chat" element={<Chat />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
