import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma'

export async function GET() {
  //Asi traemos todas la taks de la db
  const tasks = await prisma.task.findMany()
  return NextResponse.json(tasks)
}

export async function POST(request) {
  /* CREAMOS UNA TAREA */


  /* // Aca traemos los datos enviados como parametros 
  const data = await request.json()
  console.log(data)
  //Opcion 1 
  const newTaks = await prisma.task.create({
    data: {
      title: data.title,
      description: data.description
    }
  }) */

  // Aca traemos los datos enviados como parametros 
  const { title, description } = await request.json()
  //Opcion 2
  const newTaks = await prisma.task.create({
    data: {
      title,
      description
    }
  })

  return NextResponse.json(newTaks)
}