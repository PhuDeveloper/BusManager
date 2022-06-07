import { Routes, Route } from 'react-router-dom';
import './App.css';
import DriverManager from './components/contents/admin/DriverManager';
import 'antd/dist/antd.css';
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<DriverManager />} />
        {/* <Route path="/login" element={<Login />} /> */}

      </Routes>
    </div>
  );
}

export default App;
