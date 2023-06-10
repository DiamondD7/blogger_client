const BASE_URL = 'https://localhost:7167/api';

// USERS
const USER_BASE_URL = `${BASE_URL}/User`

export const GET_USERS = `${USER_BASE_URL}/GetAllUserData`;
export const GET_A_USER = `${USER_BASE_URL}/GetaUserData`;
export const VALIDATE_PASSWORD = `${USER_BASE_URL}/CheckPassword`;
export const POST_USER = `${USER_BASE_URL}/AddUserData`;
export const PUT_USER = `${USER_BASE_URL}/UpdateUserData`;
export const DELETE_USER = `${USER_BASE_URL}/DeleteUserData`;

// USERS




// POSTS
const POST_BASE_URL = `${BASE_URL}/Post`;

export const GET_POSTS = `${POST_BASE_URL}/GetAllPosts`;
export const ADD_POSTS = `${POST_BASE_URL}/AddPosts`;
export const ADD_POST_IMAGE = `${POST_BASE_URL}/AddImage`;
export const DELETE_POST = `${POST_BASE_URL}/DeletePosts`;

// POSTS