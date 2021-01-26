//import './account.css';
import bg from '../../images/background.png';
import profilePic from '../../images/profileicon.png';


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
                        <img align="right" className="fb-image-profile-thumbnail" src={profilePic} />

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
                            <img align="left" className="fb-image-lg" src={bg} alt="Profile image example" />

                            <img align="left" className="fb-image-profile thumbnail" src={profilePic}
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

        <section className='postandcontact'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='post'>
                            <h2>Post</h2>
                            <hr/>
                            <div className='dropdownsort'>
                                <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenu2' data-toggle='dropdown' aaria-aria-haspopup='true' aria-expanded='false'>Sort By</button>
                                <div className='dropdown-menusort' aria-labelledby='dropdownMenu2'>
                                    <button class="dropdown-item" type="button">Most Popular</button>
                                    <button class="dropdown-item" type="button">Newest</button>
                                    <button class="dropdown-item" type="button">Oldest</button>
                                </div>
                            </div>

                            <div className='ptbox'>
                                <div className='row'>
                                    <div className='inside'>

                                    </div>
                                </div>
                            </div>
                            <p></p>
                        </div>
                    </div>
                    
                    <div className='col-md-4'>
                        <h2>Communitites</h2>
                        <hr/>

                        <div className='communities'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <a href='##'><img alt='placeholder' className='img-fluid rounded mb-3 mb-md-8' src='https://placehold.it/700x300'/></a>
                                </div>
                                <div className='col-md-4'>
                                    <h4>Name</h4>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-4'>
                                    <a href='##'><img alt='placeholder' className='img-fluid rounded mb-3 mb-md-8' src='https://placehold.it/700x300'/></a>
                                </div>
                                <div className='col-md-4'>
                                    <h4>Name</h4>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-4'>
                                    <a href='##'><img alt='placeholder' className='img-fluid rounded mb-3 mb-md-8' src='https://placehold.it/700x300'/></a>
                                </div>
                                <div className='col-md-4'>
                                    <h4>Name</h4>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-4'>
                                    <a href='##'><img alt='placeholder' className='img-fluid rounded mb-3 mb-md-8' src='https://placehold.it/700x300'/></a>
                                </div>
                                <div className='col-md-4'>
                                    <h4>Name</h4>
                                </div>
                            </div>

                            <div className='seemore'>
                                <a href='##'>See More</a>
                            </div>
                        </div>

                        <h2>Friends</h2>
                        <hr/>
                        <div className='friends'>
                            <div className='row'>

                                <div className='col-md-4'>
                                    <a href='##'><img alt='placeholder' className='img-fluid rounded mb-3 mb-md-8' src='https://placehold.it/700x300'/></a>
                                </div>
                                <div className='col-md-4'>
                                    <h4>Friend</h4>
                                </div>

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