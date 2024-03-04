export default function NotesL (props) {
  return(
  <>
    <div className="notes-card">
      <h2 className="Note-title">{props.title}</h2>
      <p className="note-body">
        {props.body}
      </p>
      <button className="btn-delete" onClick={() => props.deleteNotes(props.id)}>Delete Note</button>
    </div>
  </>
  )
}
