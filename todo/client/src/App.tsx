import { Box, List, ThemeIcon } from '@mantine/core';
import useSWR from "swr";
import './App.css';
import AddTodo from '../components/AddTodo';
import { CheckCircleFillIcon } from '@primer/octicons-react';

export interface Todo {
  id: number;
  title: string;
  body: string;
  done: boolean;
}

export const ENDPOINT = 'http://localhost:4000'

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((r) => r.json());
function App() {

  const { data, mutate } = useSWR<Todo[]>("api/todos", fetcher);

  async function markTodoAsDone(id: number){
    const updated = await fetch(`${ENDPOINT}/api/todos/${id}/done`, {
      method: 'PATCH'
    }).then( r => r.json())
    mutate(updated)
  }

  return (
    <Box
    sx={(theme)=>({
      padding: '2rem',
      width: "100%",
      maxWidth: '40rem',
      margin: '0 auto',
    })}
    >
      <h1 style={{textAlign: 'center'}}>{'Todo List'}</h1>
      <AddTodo mutate={mutate}  />
      <List spacing="xs" size="sm" mb={12} center> 
        {data?.map((todo)=> {
          return (
          <List.Item 
            onClick={()=> markTodoAsDone(todo.id)}
            key={`todo_List__${todo.id}`}
            icon={
              todo.done ? (
                 <ThemeIcon color='green' size={24} radius='xl'>
                 <CheckCircleFillIcon size= {20} />
              </ThemeIcon>
              ) : ( 
              <ThemeIcon color='gray' size={24} radius='xl'>
              <CheckCircleFillIcon size={20} />
            </ThemeIcon>
            )
          }
          >
            <h2>{todo.title}</h2>
            <p>{todo.body}</p>
            </List.Item>
          );  
        })}
      </List>

    
    </Box>
  )
}

export default App
 