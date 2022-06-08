import { Routes, Route } from 'react-router-dom';
import './App.css';
import DriverManager from './components/contents/admin/DriverManager';
import 'antd/dist/antd.css';
import StationManager from './components/contents/admin/StationManager';
import AbsentManager from './components/contents/admin/AbsentManager';
import RouterManager from './components/contents/admin/RouterManager';
import ScheduleManager from './components/contents/admin/ScheduleManager';
function App() {
  return (
    <div >
      <Routes>
        <Route path="/admin/driver" element={<DriverManager />} />
        <Route path="/admin/station" element={<StationManager />} />
        <Route path="/admin/absent" element={<AbsentManager />} />
        <Route path="/admin/router" element={<RouterManager />} />
        <Route path="/admin/schedule" element={<ScheduleManager />} />
      </Routes>
    </div>
  );
}

export default App;
