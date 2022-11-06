import React from 'react';
import {addPostAC, changeNewTextAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                store => {
                    let posts = store.getState().profilePage.posts
                    let message = store.getState().profilePage.messageForNewPost
                    let dispatch = store.dispatch

                    let newTextChangeHandler =
                        (text: string) => {
                            store.dispatch(changeNewTextAC(text))
                        }

                    let addPost = () => {
                        store.dispatch(addPostAC(message))
                    }

                    return <MyPosts
                        Posts={posts}
                        message={message}
                        dispatch={dispatch}
                        addPost={addPost}
                        newTextChangeHandler={newTextChangeHandler}
                    />

                }

            }

        </StoreContext.Consumer>)

}

export default MyPostsContainer;