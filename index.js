const taskContainer = document.querySelector(".task__container");

const generateNewCard = (taskData) => `
<div class="col-md-6 col-lg-3" id=${taskData.id}>
    <div class="card text-center">
        <div class="card-header d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-outline-success">
                <i class="fas fa-pencil-alt"></i>
            </button>
            <button type="button" class="btn btn-outline-danger">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
        <img src=${taskData.imageUrl} 
        class="card-img-top" 
        alt="productivity" />
        <div class="card-body">
            <h5 class="card-title">${taskData.taskTitle}</h5>
            <p class="card-text">${taskData.taskDescription}</p>
            <a href="#" class="btn btn-primary">${taskData.taskType}</a>
        </div>
    <div class="card-footer text-muted float-end">
        <button type="button" class="btn btn-outline-primary">Open Task</button>
</div>
`;

const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`, //unique number for id
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value, 
    };
    

    taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
};
 
