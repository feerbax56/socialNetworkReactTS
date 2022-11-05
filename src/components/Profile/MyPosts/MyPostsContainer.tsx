import React from 'react';
import {addPostAC, changeNewTextAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {storeType} from '../../../redux/reduxStore';

type MyPostsType = {
    store: storeType
}


const MyPostsContainer: React.FC<MyPostsType> = (props) => {
    console.log('props.store.getState()', props.store.getState())
    let posts = props.store.getState().profilePage.posts
    let message = props.store.getState().profilePage.messageForNewPost
    let dispatch = props.store.dispatch

    let newTextChangeHandler =
        (text: string) => {
            props.store.dispatch(changeNewTextAC(text))
        }

    let addPost = () => {
        props.store.dispatch(addPostAC(message))
    }

    return <MyPosts
        Posts={posts}
        message={message}
        dispatch={dispatch}
        addPost={addPost}
        newTextChangeHandler={newTextChangeHandler}
    />

}

export default MyPostsContainer;