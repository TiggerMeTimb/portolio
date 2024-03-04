import {useState, useEffect} from 'react';
import NotesL from '../NotesL/NotesL.tsx';

export default function AddNotes(){
  
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  //setting my notes from the local storage
  
  useEffect (() => {
    const data = window.localStorage.getItem("MY_NOTES_DATA");
    if (data !== null){
      setNotes(JSON.parse(data));
    }
    }, []);

  //saving the notes from local storage
  useEffect (() => {
    window.localStorage.setItem("MY_NOTES_DATA", JSON.stringify(notes));
    }, [notes]);
  

  //updating our notes
  const addNote = async(title, body) => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method : 'POST',
      body : JSON.stringify({
          title: title,
          body: body,
          userId: Math.random().toString(36).slice(2),
        }),
      headers: {
        'Content-type' : 'application/json; charset=UTF-8'
        }
  }).then((response) => response.json())
  .then((data) => {
      setNotes([data, ...notes]);
      setTitle('');
      setBody('');
    }).catch((err) => {
      console.log(err.message);
      })
  }

  //get rid of the notes
  const deleteNotes = async(id) => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts/${id}', {
      method : 'DELETE'
      }).then((response) => 
      {
        if(response.status === 200){
          setNotes(
          notes.filter((note) =>{
            return note.id !== id;
            })
          )
        }
        });
  }

  //adding the notes upon submitting them
  const handleSubmit = (event) => {
    event.preventDefault();
    addNote(title, body);
  }

  console.log(notes.length);

  return(
  <>
    <h1>Need to remind yourself of something? Add a note</h1>
    <div className = "notes">
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control" value={title} onChange={ (event) => setTitle(event.target.value)} />
        <textarea className="form-control" cols="10" rows="8" value={body} onChange={(event) => setBody(event.target.value)}>
        </textarea>
        <button type="submit">Create Note</button>
      </form>
      <section className="notes-container">
        <h2>Notes</h2>
        {Array.isArray(notes) ? notes.map((note) =>
          <NotesL
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            deleteNotes={deleteNotes}
          />
        ) : null }
      </section>
    </div>
  </>
  )
}
