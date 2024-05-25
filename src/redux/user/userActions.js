import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

// action creator
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

// action creator
const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

// action creator
const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

/**
 * fetchUsers() is also an action creator
 * but it is different
 * while the above action creators returns an action
 * fetchUsers() returns a function using Thunk middleware
 */
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch((error) => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}