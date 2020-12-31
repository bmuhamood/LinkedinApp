import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './inputOption';
import './inputOption.css';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: "Bbosa Muhamood", 
            description: "this is a test post",
            message: input, 
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
    };

    return ( 
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                    <button onClicktype={sendPost}>Send</button>
                </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>

            {/* Posts */}
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
            <Post />
            ))}


            <Post 
            name="Bbosa Muhamood" 
            description="This is a test" 
            message="WOW, this worked"/>
        </div>
    )
}

export default Feed
