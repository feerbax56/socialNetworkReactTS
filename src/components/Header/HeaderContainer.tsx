import React from 'react';
import {AppStateType} from '../../redux/reduxStore';
import {setAuthUserData, UserDataType} from '../../redux/auth-reducer';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';

type MapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

type UsersPropsType = UserDataType & MapDispatchToPropsType

class HeaderContainer extends React.Component<UsersPropsType, AppStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })

    }


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);