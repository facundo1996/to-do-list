"use client"
import { useRouter } from "next/navigation"

function TaskCard({task}) {
  const router = useRouter();

  return (
    <div onClick={() => router.push('/tasks/edit/' + task.id)} className='bg-slate-900 p-3 hover:cursor-pointer hover:bg-slate-800'>
      <h3 className='font-bold text-3xl mb-2'>{task.title}</h3>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  )
}

export default TaskCard