import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersList } from '../features/userSlice';

const Users = () => {
    const userList = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersList())
    }, [])

    console.log(userList);
    return (
        <div>Users</div>
    )
}

export default Users