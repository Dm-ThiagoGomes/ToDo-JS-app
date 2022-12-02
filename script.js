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
        noteContent = note.children.item(0).value;
        noteTitle = note.getAttribute('title');
        if (noteContent != '') {
            values.push(`${noteTitle}=${noteContent}`);
        }
    }
    if (values.length != 0) {
        for (i in values) {
            var valueToSave = values[i].split('=');
            localStorage.setItem(valueToSave[0], valueToSave[1]);
            console.log(`${valueToSave[1]} has saved with key ${valueToSave[0]}`);
        }
    } else {
        console.log('nothing to save');
    }
}

function getData() {
    var note;
    var storage = localStorage;
    for (i = 1; i <= localStorage.length; i++) {
        var dataStored = storage.getItem(i);
        if (dataStored != null) {
            addNote();
        }
        note = document.getElementById(`${i}`)
        if(note.id == storage.key(i)){
            note.children.item(0).value = storage[note.id];
        } else{
           var x = tryAgain(note.id, localStorage.key(i));
           if (x == note.id){
            note.children.item(0).value = localStorage[i];  
           }
        }
    }
    function tryAgain(x, y) {
        if(y = x){
            console.log(`${y}`);
            return y;
        }
        else {
            y=+1;
            console.log('tamo aq');
             return y + foo(x = x, y= y);
        }
    }
}

