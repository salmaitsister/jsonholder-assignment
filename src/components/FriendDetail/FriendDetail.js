import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    }, [])
    return (
        <div>
            <h3>This is Friend-Id Detail Component: {friendId}</h3>
            <h4>{friend.name}</h4>
            <p>email: {friend.email}</p>
            <p>phone: {friend.phone}</p>
            <p>website: {friend.website}</p>
            <p>street: {friend.street, 53919-4257}</p>
        </div>
    );
};

export default FriendDetail;