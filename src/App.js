import { Routes, Route } from 'react-router-dom';
import './App.css';
import './Style.scss';
import DriverManager from './components/contents/admin/DriverManager';
import 'antd/dist/antd.css';
import StationManager from './components/contents/admin/StationManager';
import AbsentManager from './components/contents/admin/AbsentManager';
import RouteManager from './components/contents/admin/RouteManager';
import ScheduleManager from './components/contents/admin/ScheduleManager';
import PageLoginStaff from './components/contents/auth/PageLoginDriver';
import ChangePassword from './components/contents/admin/ChangePassword';
import ChangeInfo from './components/contents/admin/ChangeInfo';
function App() {
  return (
    <div >
      <Routes>
        <Route path="/admin/driver" element={<DriverManager />} />
        <Route path="/admin/station" element={<StationManager />} />
        <Route path="/admin/absent" element={<AbsentManager />} />
        <Route path="/admin/route" element={<RouteManager />} />
        <Route path="/admin/schedule" element={<ScheduleManager />} />
        <Route path="/login-staff" element={<PageLoginStaff />} />
        <Route path="/admin/change-password" element={<ChangePassword />} />
        <Route path="/admin/change-info" element={<ChangeInfo />} />
        <Route path="/" element={<PageLoginStaff />} />

      </Routes>
    </div>
  );
}

export default App;
