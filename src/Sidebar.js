import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from "react-redux";
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img 
                    src="https://images.unsplash.com/photo-1606787620484-4561d4d20907?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
                    <Avatar src={user.photoUrl} alt="" className="sidebar_avatar">
                    {user.email[0]}
                    </Avatar>
                    <h2>{user.displayName}</h2>
                    <h4>{user.email}</h4>
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
                {recentItem("reactJS")}
                {recentItem("programing")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
                {recentItem("remote")}
                {recentItem("fullstack")}
            </div>
        </div>
    )
}

export default Sidebar
