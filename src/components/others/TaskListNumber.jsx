import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='mt-10 flex justify-between gap-5 screen'>
        <div className="px-10 py-5 w-[45%] bg-red-400 rounded-xl">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className="px-10 py-5 w-[45%] bg-green-400 rounded-xl">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className="px-10 py-5 w-[45%] bg-blue-400 rounded-xl">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className="px-10 py-5 w-[45%] bg-yellow-400 rounded-xl">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber