import { TaskStatus } from './TaskStatus';

export class Task {
  title: string;
  description: string;
  taskStatus: TaskStatus;

  constructor(title, description, taskStatus) {
    this.title = title;
    this.description = description;
    this.taskStatus = taskStatus;
  }
}
