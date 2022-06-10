import { Routes, Route } from 'react-router-dom';
import './App.css';
import './Style.scss';
import DriverManager from './components/contents/admin/DriverManager';
import 'antd/dist/antd.css';
import StationManager from './components/contents/admin/StationManager';
import AbsentManager from './components/contents/admin/AbsentManager';
import RouteManager from './components/contents/admin/RouteManager';
import ScheduleManager from './components/contents/admin/ScheduleManager';
function App() {
  return (
    <div >
      <Routes>
        <Route path="/admin/driver" element={<DriverManager />} />
        <Route path="/admin/station" element={<StationManager />} />
        <Route path="/admin/absent" element={<AbsentManager />} />
        <Route path="/admin/route" element={<RouteManager />} />
        <Route path="/admin/schedule" element={<ScheduleManager />} />
      </Routes>
    </div>
  );
}

export default App;
