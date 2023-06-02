const BASE_URL = 'https://localhost:7167/api';
const USER_BASE_URL = `${BASE_URL}/User`

export const GET_USERS = `${USER_BASE_URL}/GetAllUserData`;
export const GET_A_USER = `${USER_BASE_URL}/GetaUserData`;
export const VALIDATE_PASSWORD = `${USER_BASE_URL}/CheckPassword`;
export const POST_USER = `${USER_BASE_URL}/AddUserData`;
export const PUT_USER = `${USER_BASE_URL}/UpdateUserData`;
export const DELETE_USER = `${USER_BASE_URL}/DeleteUserData`;