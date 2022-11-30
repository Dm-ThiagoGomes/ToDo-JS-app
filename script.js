var amountOfNotes = [];
var divToAddNotes = document.getElementById('notesList');
var clickCount = 0;

function addNote() {
    amountOfNotes.push(amountOfNotes.length + 1);
    var noteId = amountOfNotes.length;
    var newNote = createNote(`note${noteId}`);
    divToAddNotes.insertBefore(newNote, divToAddNotes.children[0]);
    //console.log(amountOfNotes);
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
    console.log(values.length)
    var note;
    var noteContent;
    var noteTitle;
    for (i = 1; i <= amountOfNotes.length; i++) {
        note = document.getElementById(`${i}`);
        noteContent = foo.children.item(0).value;
        noteTitle = foo.getAttribute('title');
        if(noteContent != ''){
            values.push(`${noteTitle}=${noteContent}`);
        }
    }
    if (values.length != 0) {
        for (i in values){
            var valueToSave = values[i].split('=');
            localStorage.setItem(valueToSave[0], valueToSave[1]);
            console.log(`${valueToSave[1]} has saved with key ${valueToSave[0]}`);
        }
    } else {
        console.log('nothing to save');
    }
}

function getData () {
    for (i in localStorage){
        var test = localStorage.getItem(i);
        if(test != null){
            console.log(localStorage.getItem(i));
        }
    }
}