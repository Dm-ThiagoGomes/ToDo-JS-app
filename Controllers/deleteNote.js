function deleteNote(id) {
    var arrayIndex = ids.indexOf(id);
    console.log(arrayIndex);
    ids.splice(arrayIndex, 1);
    localStorage.removeItem(id);
    var note = document.getElementById(`${id}`);
    note.remove();
}