import { prisma } from '@/libs/prisma'
import TaskCard from '@/components/TaskCard'
async function loadTasks() {
  //Este es el primer ejemplo que es haciendo una peticion 
  // Como no estamos utilizando un componente del cliente esto se ejecuta antes de llegar al navegador por eso hay que poner el http:localhost.... 
  /*  const res = await fetch('http://localhost:3000/api/tasks')
  const data = await res.json()
  console.log(data) */

  //Este es el segundo ejemplo que se hace haciendo una consulta directa a la base de datos. 
  /* const tasks = await prisma.task.findMany()
  console.log(tasks) */
  return await prisma.task.findMany()

}

async function HomePage() {
  const tasks = await loadTasks()
  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-3 mt-10'>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  )
}

export default HomePage