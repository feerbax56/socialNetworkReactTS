import React from 'react';
import {AppStateType} from '../../redux/reduxStore';
import {setAuthUserData, UserDataType} from '../../redux/auth-reducer';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';

type MapDispatchToPropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void
}

type UsersPropsType = UserDataType & MapDispatchToPropsType

class HeaderContainer extends React.Component<UsersPropsType, AppStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })

    }


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);