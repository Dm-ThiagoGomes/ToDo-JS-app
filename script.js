var amountOfNotes = [];
var divToAddNotes = document.getElementById('notesList');
var clickCount = 0;

function addNote() {
    amountOfNotes.push(amountOfNotes.length + 1);
    var noteId = amountOfNotes.length;
    var newNote = createNote(`note${noteId}`);
    divToAddNotes.insertBefore(newNote, divToAddNotes.children[0]);
    //console.log(amountOfNotes);
    saveNotes();
}

function createNote(noteIndex) {
    noteInput = "<input type='text' maxLength = 20>";
    noteIndex = document.createElement('li');
    noteIndex.className = 'note';
    noteIndex.id = amountOfNotes.length.toString();
    noteIndex.title = amountOfNotes.length.toString();
    noteIndex.innerHTML += noteInput;
    return noteIndex;
}

function saveNotes() {
    var values = [];
    var foo;
    var noteContent;
    var fooTitle;
    for (i = 1; i <= amountOfNotes.length; i++) {
        foo = document.getElementById(`${i}`);
        noteContent = foo.children.item(0).value;
        fooTitle = foo.getAttribute('title');
        values.push(`${fooTitle} = ${noteContent}`);
    }
    if (noteContent != null) {
        console.log(values);
    } else {
    }
}