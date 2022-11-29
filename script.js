var amountOfNotes = [];
var divToAddNotes = document.getElementById('notesList');
var foo = document.getElementsByClassName('note');
var clickCount = 0;

function addNote() {
    amountOfNotes.push(amountOfNotes.length + 1);

    var newNote = createNote(`note${amountOfNotes.length + 1}`);
    divToAddNotes.insertBefore(newNote, divToAddNotes.children[0]);
}

function createNote(noteIndex) {
    noteInput = "<input type='text' maxLength = 20>";
    noteIndex = document.createElement('li');
    noteIndex.className = 'note';
    noteIndex.innerHTML += noteInput;
    return noteIndex;
}