import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


let adress = 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Arenal_0.jpg'

const Profile = () => {
    return (
        <div>
            <ProfileInfo
                src={adress}/>
            <MyPosts/>
        </div>
    )
}


export default Profile;