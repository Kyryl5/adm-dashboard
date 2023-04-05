import Dashboard from '../scenes/dashboard/Dashboard'
import Team from '../scenes/team/Team'
import Contacts from '../scenes/contacts/Contacts'
import Invoices from '../scenes/invoices/Invoices'
import Form from '../scenes/form/Form'
import Calendar from '../scenes/calendar/Calendar'
import FAQ from '../scenes/faq/FAQ'
import Bar from '../scenes/bar/Bar'
import Pie from '../scenes/pie/Pie'
import Line from '../scenes/line/Line'
import Geography from '../scenes/geography/Geography'
import { Route } from 'react-router-dom'

export default function useRoutes() {
  return [
    <Route key="/" path="/" element={<Dashboard />} />,
    <Route key="/team" path="/team" element={<Team />} />,
    <Route key="/contacts" path="/contacts" element={<Contacts />} />,
    <Route key="/invoices" path="/invoices" element={<Invoices />} />,
    <Route key="/form" path="/form" element={<Form />} />,
    <Route key="/calendar" path="/calendar" element={<Calendar />} />,
    <Route key="/faq" path="/faq" element={<FAQ />} />,
    <Route key="/bar" path="/bar" element={<Bar />} />,
    <Route key="/pie" path="/pie" element={<Pie />} />,
    <Route key="/line" path="/line" element={<Line />} />,
    <Route key="/geography" path="/geography" element={<Geography />} />,
  ]
}
