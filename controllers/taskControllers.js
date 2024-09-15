let taks = [
    {
        id: 1, 
        title: "Tarea 1", 
        description: "Descripción de la tarea 1", 
    },
    {
        id: 2, 
        title: "Tarea 2", 
        description: "Descripción de la tarea 2", 
    },
    {
        id: 3, 
        title: "Tarea 3", 
        description: "Descripción de la tarea 3", 
    }
];

function getAllTaks(){
    return taks;
}

function findTaskByID(id){
    for(i = 0; i < taks.length; i++){
        if(id === taks[i].id){
            return taks[i];
        }
    }
    return null;
}

function createTask(title, description){
    const newTaks = {
        id: taks.length + 1,
        title,
        description
    } 
    taks.push(newTaks);
    return newTaks;
}

function editTask(id, title, description){
    const editTask = {
        id,
        title,
        description
    } 
    
    for(i = 0; i < taks.length; i++){
        if(editTask.id === taks[i].id){
            oldInfoTask = taks[i];
            taks[i] = editTask;
            response = {
                "Old value" : oldInfoTask,
                "New value" : editTask
            }
            return response;
        }
    }
    return null;
}

function deleteTask(id){
    for(i = 0; i < taks.length; i++){
        if(id === taks[i].id){
            deleteTask = taks[i];
            taks.splice(i, 1)
            return deleteTask;
        }
    }
    return null;
}

module.exports = {
    getAllTaks,
    findTaskByID,
    createTask,
    editTask,
    deleteTask
};