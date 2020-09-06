import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'
         
const Friend = (props) => {
    const { name, email, id} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    const friendlyStyle = { 
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
    } 
    return (
        <div style={friendlyStyle}>
            <h2>Name: {name}</h2>
            <h3>Id: {id}</h3>
            <h4>email: {email}</h4>
            <Link to={`/friends/${id}`}></Link> 
            <button className="main-button" onClick={() => handleClick(id)}>click me</button>
        </div>
    );
};

export default Friend;