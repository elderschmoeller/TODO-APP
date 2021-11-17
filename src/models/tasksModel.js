class TasksModel {
    constructor(title, description, status) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.create_at = new Date().toLocaleString();
    }
    
}

module.exports = TasksModel;