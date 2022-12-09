var ids = [];
var idStorage;

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