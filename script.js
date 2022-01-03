var selectedRow = null;
function OnFormSubmit(){
event.preventDefault();
var formData = ReadFormData();
if (selectedRow === null){
    insertNewRecord(formData);
}
else {
     updateRecord(formData);
}
resetForm();
}

function ReadFormData(){
    var formData = {};
    formData ['numequipo'] = document.getElementById("numequipo").value;
    formData ['equipo'] = document.getElementById("equipo").value;
    formData ['titulos'] = document.getElementById("titulos").value;
    formData ['year'] = document.getElementById("year").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("teamList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.numequipo;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.equipo;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.titulos;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.year;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick = 'onEdit(this)' >Editar</button> <button onClick = 'onDelete(this)'>Eliminar</button>`
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('numequipo').value = selectedRow.cells[0].innerHTML;
    document.getElementById('equipo').value = selectedRow.cells[1].innerHTML;
    document.getElementById('titulos').value = selectedRow.cells[2].innerHTML;
    document.getElementById('year').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.numequipo;
    selectedRow.cells[1].innerHTML = formData.equipo;
    selectedRow.cells[2].innerHTML = formData.titulos;
    selectedRow.cells[3].innerHTML = formData.year;
}

function onDelete(td){
    if(confirm('seguro que quiere eliminar el registro?')){
        row = td.parentElement.parentElement;
        document.getElementById('teamList').deleteRow(row.rowIndex);
    }
    resetForm();
}

function resetForm(){
    document.getElementById('numequipo').value = "";
    document.getElementById('equipo').value = "";
    document.getElementById('titulos').value = "";
    document.getElementById('year').value = "";
}