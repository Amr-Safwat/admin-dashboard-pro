import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router';
import App from './App';
import Dashboard from './pages/dashboard/Dashboard';
import Team  from './pages/team/Team';
import Contacts from './pages/contacts/Contacts';
import Invoices from './pages/invoices/Invoices';
import Profile from './pages/profile/Profile';
import Calender from './pages/calender/Calender';
import Faq from './pages/faq/Faq';
import Bar from './pages/bar/Bar';
import Pie from './pages/pie/Pie';
import Line from './pages/line/Line';
import Geography from './pages/geography/Geography';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="team" element={<Team />} />
          <Route path="contacts" element={<Contacts window={undefined} />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="profile" element={<Profile />} />
          <Route path="calender" element={<Calender />} />
          <Route path="faq" element={<Faq />} />
          <Route path="bar" element={<Bar />} />
          <Route path="pie" element={<Pie />} />
          <Route path="line" element={<Line />} />
          <Route path="geography" element={<Geography />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
