var values = [];
function saveNotes() {
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