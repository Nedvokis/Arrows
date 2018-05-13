import React,{ Component } from 'react';
import './UserInfo.css';

class UserInfo extends Component{
    render() {
        return(
					<div className="user-info">
						<div className="user-info__photo">
							<img src="" alt="avatar"/>
						</div>
						<div className="user-info__data">
							<div className="user-info__placeholder_name">
								Денис Хилков
							</div>
							<div className="user-info__placeholder_birthdate">
								29.03.1994
							</div>
							<div className="user-info__placeholder_email">
								d.khilkov@gmail.com
							</div>
							<div className="user-info__placeholder">
								г.Краснодар 
							</div>
							<div className="user-info__placeholder">
								Йога, футбол, велосепедные прогулки, походы, 
								вэб-разработка, компьютерные игры.
							</div>
						</div>
					</div>
        );
    }
}

export default UserInfo;