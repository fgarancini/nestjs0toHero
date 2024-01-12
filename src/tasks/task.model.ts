/* eslint-disable prettier/prettier */
export interface Task {
  id: string;
  title: string;
  desctription: string;
  status: TaskStatus;
}

enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
