import {useState} from 'react';
import { useForm } from "@mantine/form";
import { Group, Modal, Button, TextInput, Textarea } from '@mantine/core';
import { ENDPOINT, Todo } from '../src/App';
import { KeyedMutator } from 'swr';

function AddTodo({mutate}: { mutate: KeyedMutator<Todo[]> }){
    const [open, setOpen] = useState(false);

    const form = useForm({
        initialValues: {
            title: "",
            body: ""
        },
    });

    async function createTodo(values: {title: string, body: string}){
        const updated = await fetch(`${ENDPOINT}/api/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
   }).then((r) => r.json());

    mutate(updated)
    form.reset()
    setOpen(false)

    }


    return (
    <>
    <Modal
        opened={open}
        onClose={() => setOpen(false)}
        title="Create todo">
    <form onSubmit={form.onSubmit(createTodo)}>
        <TextInput 
        required
        mb={12}
        label="Todo"
        placeholder="What would you like to do?"
        {...form.getInputProps("title")}
        />
        <Textarea 
         required
         mb={12}
         label="Body"
         placeholder="Add a description..."
         {...form.getInputProps("body")}
        />
        <Button type= "submit">Create todo</Button>
    </form>
    </Modal>
    <Group position='center'>
        <Button fullWidth mb={12} color='green' onClick={()=> setOpen(true)}>
            Add todo
        </Button>
    </Group>
    </>
    );
}

export default AddTodo
