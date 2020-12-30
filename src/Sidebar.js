import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1606787620484-4561d4d20907?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
                <Avatar />
                <h2>Bbosa Muhamood</h2>
                <h4>bbosa209@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed You</p>
                    <div className="sidebar__statNumber">2,543</div>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <div className="sidebar__statNumber">543</div>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>

            </div>
        </div>
    )
}

export default Sidebar
