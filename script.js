var ids = [0, 3, 4];
var divToAddNotes = document.getElementById('notesList');
var clickCount = 0;

function addNote(id = 1) {
    var noteId;
    noteId = checkNoteId(id);
    var newNote = createNote(noteId);
    divToAddNotes.insertBefore(newNote, divToAddNotes.children[0]);
}
//console.log(amountOfNotes);

function checkNoteId(z) {
    var test = [0, 1, 2, 3, 4, 5];
    for (i = 0; i <= ids.length; i++) {
        if (z == test[i]) {
            console.log('id used');
            z++
            console.log(z);
            return checkNoteId(z);
        } else {
            console.log(typeof(z));
            console.log(`${z} is an unused id`)
            return z;
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
        if (noteContent != '' && noteContent != null) {
            values.push(`${noteTitle}=${noteContent}`);
        } else {
            values.push(`${noteTitle}=`)
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

function deleteNote(id) {
    var arrayIndex = amountOfNotes.indexOf(id);
    if (arrayIndex > -1) {
        amountOfNotes.splice(arrayIndex, 1);
    }
    console.log(amountOfNotes);
    localStorage.removeItem(id);
    console.log(localStorage.length);
    var note = document.getElementById(`${id}`);
    note.remove();
}

function getData(i = 0) {
    var note;
    var storage = localStorage;
    for (i += 0; i < localStorage.length; i++) {
        var t = Object.keys(storage)[i];
        console.log(t);
        var dataStored = storage.getItem(t);
        console.log(dataStored);
        if (dataStored != null) {
            addNote(t);
        }
        note = document.getElementById(`${t}`)
        if (note == null) {
            console.log('passou')
            i++;
            return getData(i);
        } else if (note != null) {
            if (note.id == storage.key(i)) {
                note.children.item(0).value = storage[note.id];
            } else {
                var x = tryAgain(note.id, localStorage.key(i));
                if (x == note.id) {
                    note.children.item(0).value = localStorage[i];
                }
            }
            i++
            return getData(i);
        } else if (i > localStorage.length) {
        }

    }
    function tryAgain(x, y) {
        if (y = x) {
            return y;
        }
        else {
            y = +1;
            console.log('tamo aq');
            return y + tryAgain(x = x, y = y);
        }
    }
}