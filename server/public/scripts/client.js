$(document).ready(onReady);
function onReady(){
    $('#form').on('submit', postToList);
    $('#table-body').on('click', '#deleteBtn', deleteBtn);
    $('#table-body').on('click', '#completeBtn', completeBtn);
    getList();
}

//button to mark a task complete
function completeBtn(){
    console.log('completeBtn pressed');
    let idToUpdate = $(this).closest('tr').data('id');
    let data = {
        complete: true
    }
    $.ajax({
        type: 'PUT',
        url: `/todo/${idToUpdate}`,
        data
    }).then(response => {
        console.log(response);
        getList();
    }).catch(error => {
        console.log('problems with completeBtn =>', error);
    })
}
//button to delete a task
function deleteBtn(){

}

//button to add a task
function postToList(){
    //setting up my variables to make the data sent over more clear
    let name = $('#enterName').val();
    let task = $('#enterTask').val();
    let isComplete = false
    let data = {
        name,
        task,
        isComplete: isComplete
    }
    $.ajax({
        type: 'POST',
        url: '/todo',
        data: data
    }).then(response => {
        console.log('postToList function works!!');
        getList();
    }).catch(error =>{
        console.log('PROBLEMS in our postToList function =>', error);
    })
}

//get updated list from server/database
function getList(){
    $.ajax({
        type: 'GET',
        url: '/todo'
    }).then(response =>{
        console.log('getList function works!! =>', response);
        appendToDom(response);
    }).catch(error =>{
        console.log('ERROR in our getList function =>', error);
    })
}

//append my to-do list to the DOM
function appendToDom(array){
    $('#table-body').empty();
    for(obj of array){
        console.log('isComplete status', obj.isComplete);
        $('#table-body').append(`
            <tr data-id = "${obj.id}">
                <td>${obj.name}</td>
                <td>${obj.task}</td>
                <td><button id=completeBtn>Mark Complete</button></td>
                <td><button id=deleteBtn>Delete</button></td>
            </tr>
        `);
    }
}
