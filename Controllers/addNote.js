var divToAddNotes = document.getElementById('notesList');

function addNote(id = 1) {
    var noteId;
    noteId = checkNoteId(id);
    var newNote = createNote(noteId);
    if(noteId == 1){
        var positionBeforeButton = divToAddNotes.children.length-1;
        divToAddNotes.insertBefore(newNote, divToAddNotes.children.item(positionBeforeButton));
    }else{
        divToAddNotes.insertBefore(newNote, divToAddNotes.children[0]);
    }

    function checkNoteId(id) {
        for (var i = 0; i <= ids.length; i++) {
            if (ids[i] == id) {    
                //console.log('id used');
                id++
            } else {
                //console.log(`${id} unused`)
                ids.push(id);
                ids.sort((a, b) => a - b)
                i = ids.length + 1;
                // console.log(ids);
                return id;
                //console.log(ids[i]);
            }
        }

    }

    function createNote(noteIndex) {
        noteInput = "<input type='text' maxLength = 20>";
        var note = document.createElement('li');
        note.className = `note`;
        note.id = noteIndex;
        deleteNoteButton = `<button onclick= deleteNote(${noteIndex})>X</button>`
        note.title = noteIndex;
        note.innerHTML += noteInput;
        note.innerHTML += deleteNoteButton;
        return note;
    }

}