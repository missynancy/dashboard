import { Link } from 'react-router-dom';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
function Index(){
    return(
        <body>
            <div className="top-bar">
                <h2><a href="#">Dashboard</a></h2>
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
                <header className='header'>
                    <nav className="navbar">
                        <ul>
                            <li>
                                <Link to='/home' className='active'><i className='bx bxs-dashboard'></i> Dashbard</Link>
                                <i className='bx bx-chevron-right'></i>
                            </li>
                            <li>
                                <Link to='/employee'><i className='bx bx-user'></i> Employee</Link>
                                <i className='bx bx-chevron-right'></i>
                            </li>
                            <li>
                                <Link to='/checklist'><i className='bx bx-list-check'></i> Checklist</Link>
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
                                <Link to='/payroll'><i className='bx bxs-calendar-alt'></i> Payroll</Link>
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
                            <i className='bx bxs-video'></i>
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
                        <i className='bx bx-chevron-down bx-down'></i>
                    </div>
                </header>
        </body>
    );
}


export default Index
