var ids = [0, 3, 4];
var amountOfNotes = [];
var divToAddNotes = document.getElementById('notesList');
var clickCount = 0;
var tryTimes = 0;
var test = [];
var values = [];
var dataStorage = []

function addNote(id = 1) {
    var noteId;
    noteId = checkNoteId(id);
    var newNote = createNote(noteId);
    divToAddNotes.insertBefore(newNote, divToAddNotes.children[0]);

    //console.log(amountOfNotes);

    function checkNoteId(id) {
        for (i = 0; i <= test.length; i++) {
            if (test[i] == id) {
                //console.log('id used');
                id++
            } else {
                //console.log(`${id} unused`)
                test.push(id);
                test.sort((a, b) => a - b)
                i = test.length + 1;
                // console.log(test);
                return id;
                //console.log(test[i]);
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

async function saveNotes() {
    var note;
    var noteContent;
    var noteTitle;
    for (i = 1; i <= test.length; i++) {
        if (i == test[i - 1]) {
            note = document.getElementById(`${i}`);
            noteContent = note.children.item(0).value;
            noteTitle = note.getAttribute('title');
            if (noteContent != '') {
                values.push(`${noteTitle}=${noteContent}`);
                foo = true
                console.log('foi com tudo');
            } else {
                values.push(`${noteTitle}=`)
                foo = true
                console.log('foi com nada');
            }
        } else {
            console.log('vai de novo');
        }
    }

    if (values.length != 0) {
        for (i in values) {
            var valueToSave = values[i].split('=');
            console.log(valueToSave);
            localStorage.setItem(valueToSave[0], valueToSave[1]);
            console.log(`${valueToSave[1]} has saved with key ${valueToSave[0]}`);
        }
    } else {
        console.log('nothing to save');
    }

    console.log(localStorage[1]);
}

function deleteNote(id) {
    var arrayIndex = test.indexOf(id);
    if (arrayIndex > -1) {
        test.splice(arrayIndex, 1);
    }
    localStorage.removeItem(id);
    var note = document.getElementById(`${id}`);
    note.remove();
}

function getData() {
    var note;
    var storage = localStorage;
    //console.log(storage);

    for (i = 0; i < localStorage.length; i++) {
        var t = Object.keys(storage);
        //console.log(t[2])
        dataStorage.push(parseInt(t[i]));
        dataStorage.sort((a, b) => a - b);
        console.log(localStorage.length);
        console.log(test);

        while (test.length < localStorage.length) {
            if (i == 0) {
                i++
            }
            var dataStored = storage.getItem(i);
            console.log(dataStored);
            addNote(i);
            console.log(i)
            note = document.getElementById(i);
            console.log(note);
            // if (note.id == storage.key(i)) {
            //     note.children.item(0).value = storage[note.id];
            // } else {
            //     var x = tryAgain(note.id, localStorage.key(i));
            //     if (x == note.id) {
            //         note.children.item(0).value = localStorage[i];
            //     }
            // }

        }

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
