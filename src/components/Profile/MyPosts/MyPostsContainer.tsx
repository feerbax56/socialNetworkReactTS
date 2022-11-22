import React from 'react';
import {addPostAC, changeNewTextAC, PostsType} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/reduxStore';
import {Dispatch} from 'redux';


type MapStatePropsType = {
    Posts: Array<PostsType>
    fullName: string
}

type MapDispatchPropsType = {
    newTextChangeHandler: (text: string) => void
    addPost: (message: string) => void
}


export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        Posts: state.profilePage.posts,
        fullName: state.profilePage.messageForNewPost,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        newTextChangeHandler: (text: string) => {
            dispatch(changeNewTextAC(text))
        },
        addPost: (message: string) => {
            dispatch(addPostAC(message))
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;