export interface IUser {
    displayName: string;
    email: string;
    username: string;
    role: string;
    _uuid: string;
    uuid: string;
    createdAt: string;
    updatedAt: string;
}

export interface GenericResponse {
    status: string;
    message: string;
}

export interface ILoginResponse {
    status: string;
    access_token: string;
}

export interface IUserResponse {
  status: string;
  data: {
    user: IUser;
  };
}