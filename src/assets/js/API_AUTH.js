const BASE_URL = 'https://localhost:7167/api';

// USERS
const USER_BASE_URL = `${BASE_URL}/User`

export const GET_USERS = `${USER_BASE_URL}/GetAllUserData`;
export const GET_A_USER = `${USER_BASE_URL}/GetaUserData`;
export const VALIDATE_PASSWORD = `${USER_BASE_URL}/CheckPassword`;
export const POST_USER = `${USER_BASE_URL}/AddUserData`;
export const PUT_USER = `${USER_BASE_URL}/UpdateUserData`;
export const DELETE_USER = `${USER_BASE_URL}/DeleteUserData`;
export const ADD_USER_PICTURE = `${USER_BASE_URL}/AddImage`;
export const SAVE_USER_PICTURE = `${USER_BASE_URL}/SaveUserProfilePicture`;

// USERS




// POSTS
const POST_BASE_URL = `${BASE_URL}/Post`;

export const GET_POSTS = `${POST_BASE_URL}/GetAllPosts`;
export const ADD_POSTS = `${POST_BASE_URL}/AddPosts`;
export const ADD_POST_IMAGE = `${POST_BASE_URL}/AddImage`;
export const DELETE_POST = `${POST_BASE_URL}/DeletePosts`;

// POSTS


// USERPROFILE
const PROFILE_BASE_URL = `${BASE_URL}/UserProfile`
export const GET_USERPROFILE = `${PROFILE_BASE_URL}/GetProfileData`;
export const GET_A_USERPROFILE = `${PROFILE_BASE_URL}/GetAProfileData`;
export const ADD_USER_PROFILE = `${PROFILE_BASE_URL}/AddProfileContents`;
export const EDIT_USER_PROFILE = `${PROFILE_BASE_URL}/EditProfileContents`;
// USERPROFILE