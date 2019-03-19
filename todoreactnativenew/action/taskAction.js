export const createTask = (task) => {
 console.log(task);
 return {
  type: 'CREATE_TASK',
  payload: task
 };
};

export const updateTask = (task) => {
 return {
  type: 'UPDATE_TASK',
  payload: task
 };
};