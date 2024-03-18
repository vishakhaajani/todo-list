let data = [];


// view user
function viewUser (){
    let tbl = "";
    data.map((val) => {
        return (
            tbl += `
                <tr>
                    <td>${val.userid}</td>
                    <td>${val.task}</td>
                    <td><button id ="delete" onclick = "deteleUser(${val.userid})">Delete</button><button onclick = "edituser(${val.userid})">Edit</button></td>
                </tr>
            `
        )
    });
    document.getElementById('record').innerHTML = tbl;
}
viewUser();

// add user
function addUser (){
    let formtask = document.getElementById('input-box').value;

    let obj = {
        userid : Math.floor(Math.random()*100),
        task : formtask,
    }

    data.push(obj);
    document.getElementById('input-box').value = "";  // submit btn click karie tyare name input fild black thai jai.
    viewUser();
}

// delete user
function deteleUser (id){
    let remove = data.filter((val) => {
        return val.userid != id;
    });
    data = remove;
    viewUser();
}


function edituser(id) {
    let edit = data.find((val) => {
        return val.userid === id;
    });
    document.getElementById('input-box').value = edit.task;
}