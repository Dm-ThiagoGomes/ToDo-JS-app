var divToAddNotes = document.getElementById('notesList');
var ids = [];
var values = [];
var idStorage;

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

async function saveNotes() {
    var note;
    var noteContent;
    var noteTitle;
    for (var i = 1; i <= ids.length; i++) {
        if (i == ids[i - 1]) {
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
            console.log(i);
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
    var arrayIndex = idStorage.indexOf(`${id}`);
    idStorage.splice(arrayIndex, 1);
    localStorage.removeItem(id);
    var note = document.getElementById(`${id}`);
    note.remove();
    console.log(idStorage);
}

function getData() {
    var note;
    var storage = localStorage;

    for (var i = 0; i <= localStorage.length; i++) {
       // console.log(localStorage)
        idStorage = Object.keys(storage);
        idStorage.sort((a,b) => a-b);
        console.log(idStorage);
        //console.log(localStorage.length);
        //console.log(idStorage[1]);  
        while (ids.length < localStorage.length) { 
            var id = parseInt(idStorage[i]);
            //console.log(localStorage.length)
            var content = storage.getItem(id);
            console.log(content);
            addNote(id);
            console.log(i);
                note = document.getElementById(id);
                if (note.id == storage.key(parseInt(id))) {
                    note.children.item(0).value = content;
                 } 
                else {
                    var x = tryAgain(note.id, localStorage.key(id));
                    if (x == note.id) {
                        note.children.item(0).value = localStorage[id];
                    }
                }
            i++;
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