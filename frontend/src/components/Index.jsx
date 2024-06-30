import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import '../index.css'

function Index(){
    return(
        <body>

            <header className='header'>
                <h3>Dashboard</h3>
                <nav className="navbar">
                    <ul>
                        <li>
                            <a href="#" className='active'><i className='bx bxs-dashboard'></i> Dashbard</a> 
                            <i className='bx bx-chevron-right'></i>
                        </li>
                        <li>
                            <a href="#"><i className='bx bx-user'></i> Employee</a>
                            <i className='bx bx-chevron-right'></i>
                        </li>
                        <li>
                            <a href="#"><i className='bx bx-list-check'></i> Checklist</a>
                            <i className='bx bx-chevron-right'></i>
                        </li>
                        <li>
                            <a href="#"><i className='bx bx-time'></i> Time Off</a>
                            <i className='bx bx-chevron-right'></i>
                        </li>
                        <li>
                            <a href="#"><i className='bx bxs-calendar-check'></i> Attendance</a>
                            <i className='bx bx-chevron-right'></i>
                        </li>
                        <li>
                            <a href="#"><i className='bx bxs-calendar-alt'></i> Payroll</a>
                            <i className='bx bx-chevron-right'></i>
                        </li>
                        <li>
                            <a href="#"><i className='bx bx-git-pull-request'></i> Recruitment</a>
                            <i className='bx bx-chevron-right'></i>
                        </li>
                    </ul>
                </nav>
                <div className="card">
                    <div className="card-top">
                        <div className="top-img">
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                        </div>
                        <div className="top-icon">
                        <i className='bx bxs-video'></i>
                        </div>
                    </div>
                    <h4>Daily Meetings</h4>
                    <p>9:00am - 10:00pm On Zoom</p>
                    <button>Join</button>
                </div>
                <div className="header-foot">
                    <img src={img4} alt="" />
                    <div className="foot-details">
                        <h4>Elizabeth M</h4>
                        <p>elizabeth12@gmail.com</p>
                    </div>
                    <i className='bx bx-chevron-down'></i>
                </div>
            </header>
            <div className="dashboard">
                <div className="top-bar">
                    <h2>Dashboard</h2>
                    <form action="">
                        <div className="search">
                            <i className='bx bx-search'></i>
                            <input type="search"  placeholder='search'/>
                            <i className='bx bx-command message-icon'></i>
                            
                        </div>
                    </form>
                    <div className="dash-icons">
                        <i  className='bx bx-message-rounded-dots message-icon'></i>
                        <i className='bx bx-bell message-icon'></i>
                    </div>
                </div>
                <div className="profile">
                    <div className="profile-1">
                        <h1>Hi, Alfredo</h1>
                        <p>Your HR status report</p>
                        <div className="status">
                            <div className="status-container">
                                <div className="status-top">
                                    <i className='bx bx-user user-icon'></i>
                                    <i className='bx bx-dots-horizontal-rounded dots'></i>
                                </div>
                                <div className="status-number">
                                    <h1 className='numbers'>4,342</h1>
                                    <h4>Total Employees</h4>
                                </div>
                                <div className="status-bottom">
                                    <i className='bx bx-up-arrow-circle arrow-circle'></i>
                                    <p>44.2%</p>
                                </div>
                            </div>
                            <div className="status-container">
                                <div className="status-top">
                                    <i className='bx bxs-calendar-event'></i>
                                    <i className='bx bx-dots-horizontal-rounded dots'></i>
                                </div>
                                <div className="status-number">
                                    <h1 className='numbers'>4,342</h1>
                                    <h4>Total Employees</h4>
                                </div>
                                <div className="red">
                                    <i className='bx bx-up-arrow-circle arrow-circle'></i>
                                    <p>44.2%</p>
                                </div>
                            </div>
                            <div className="status-container">
                                <div className="status-top">
                                    <i className='bx bx-plus'></i>
                                    <i className='bx bx-dots-horizontal-rounded dots'></i>
                                </div>
                                <div className="status-number">
                                    <h1 className='numbers'>4,342</h1>
                                    <h4>Total Employees</h4>
                                </div>
                                <div className="status-bottom">
                                    <i className='bx bx-up-arrow-circle arrow-circle'></i>
                                    <p>44.2%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-2"></div>
                </div>
            </div>
        </body>
    );
}


export default Index