export interface UserSignIn {
  id?: string;
}

export interface User {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
}

export interface UserTasks {
  user_tasks?: [
    {
      id?: string;
      name?: string;
      user_id?: string;
    }
  ];
}

export interface UserTask {
  id?: string;
  name?: string;
  user_id?: string;
}
