
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Groups from './pages/Groups'
import GroupDetails from './pages/GroupDetails'
import AddExpense from './pages/AddExpense'
import Expenses from './pages/Expenses'
import Balances from './pages/Balances'
import Settlements from './pages/Settlements'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
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
    </Routes>
    </BrowserRouter>
  )
}

export default App
