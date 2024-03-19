let data = [
]

// view user

function viewUser(){
    let tbl = "";
    data.map((val) => {
        return (
            tbl += `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.task}</td>
                    <td>
                        <button onclick = "deleteUser(${val.id})">Delete</button>
                        <button onclick = "editUser(${val.id})">Edit</button>
                    </td>
                </tr>
            `
        )
    })
    document.getElementById('record').innerHTML = tbl;
}
viewUser();

// add user

function addUser(){
    let uTask = document.getElementById('name').value;
    let id = document.getElementById('editid').value;

    if(!uTask){
        alert('both filed empty');
        return false;
    }

    let obj = {
        id : Math.floor(Math.random()*100),
        task : uTask,
    }

    if(id){
        let edit = data.map((val) => {
            if(val.id == id){
                val.task = uTask;
            }
            return val;
        })
        alert('record update');
        document.getElementById('editid').value = "";
        viewUser();
    }

    else{
        data.push(obj);
        document.getElementById('editid').value = "";
        viewUser();
    }
    document.getElementById('name').value = "";
}

function deleteUser(id){
    let remove = data.filter((val) => {
        return  val.id != id;
    });
        data = remove;
        viewUser();
}

function editUser(id){
    let edit = data.find((val) => {
        return val.id === id;
    })

    document.getElementById('name').value = edit.task;
    document.getElementById('editid').value = id;
}