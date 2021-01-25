//import './account.css';

const Account = () => {
    return(
        <>
        <section className='switch'>
            <div className='top'>
                <div className='row'>
                    <div className='col-md-2'>
                        <label>
                            <input value='1' type='checkbox' name='sign[1]'/>
                            <span className='check'/>
                        </label>
                    </div>
                </div>

                <div className="col-md-6">
                    <label className="searchbar">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Search"/>
                    </label>
                </div>

                <div class="col-md-4">
                    <div class="dropdown">
                        <img align="right" className="fb-image-profile-thumbnail" src="photo/profileicon.png" />

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="profile.html"><i className="fas fa-user-alt"></i>Profile</a>
                            <a className="dropdown-item" href="message.html"><i className="fas fa-comments"></i>Message</a>
                            <a className="dropdown-item" href="usersetting.html"><i className="fas fa-cog"></i>Settings</a>
                            <a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt"></i>Log Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="profile">
            <div className="profilecon">
                <div className="container">
                    <div className="acot">
                        <div className="fb-profile">
                            <img align="left" className="fb-image-lg" src="photo/background.png" alt="Profile image example" />

                            <img align="left" className="fb-image-profile thumbnail" src="photo/profileicon.png"
                            alt="Profile image example" />

                            <div className="fb-profile-text">
                                <h1>Eli Macy</h1>
                                <p>Girls just wanna go fun.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Account;