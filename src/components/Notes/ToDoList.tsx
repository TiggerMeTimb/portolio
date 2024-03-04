import AddNotes from './Functionality/AddNotes/AddNotes.tsx';

//simply loading the notes section form elsewhere
const ToDoList = () => {

  return(
    <AddNotes />
  )
}

//if I do not need to create a fetchData func, I am converting ToDoList to a function and exporting it to save lines
export default ToDoList
