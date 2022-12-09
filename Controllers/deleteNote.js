function deleteNote(id) {
    var arrayIndex = idStorage.indexOf(`${id}`);
    idStorage.splice(arrayIndex, 1);
    localStorage.removeItem(id);
    var note = document.getElementById(`${id}`);
    note.remove();
    console.log(idStorage);
}