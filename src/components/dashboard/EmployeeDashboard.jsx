import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import { TaskList } from '../tasklist/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-8 h-screen bg-[#1C1C1C] text-2xl'>
        <Header />
        <TaskListNumber/>
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard