
import { Routes, Route } from 'react-router-dom'

import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Groups from '../pages/Groups'
import GroupDetails from '../pages/GroupDetails'
import AddExpense from '../pages/AddExpense'
import Expenses from '../pages/Expenses'
import Balances from '../pages/Balances'
import Settlements from '../pages/Settlements'
import Analytics from '../pages/Analytics'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/groups/:groupId" element={<GroupDetails />} />
      <Route
        path="/groups/:groupId/add-expense"
        element={<AddExpense />}
      />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/balances" element={<Balances />} />
      <Route path="/settlements" element={<Settlements />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
