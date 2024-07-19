import { useEffect, useState } from 'react';
import img1 from '../assets/img1.jpg';
 //import {BarCharts, Bar} from 'recharts'
  //import Performance from '../components/Performance';
//   import Attendance from './Attendance'; 


const Home = () => {
    
    
	return (
	    <>
            <div className="home ">
                <div className="profile-head">
                    <h2>Hi, Lewis</h2>
                    <p>Your HR status report</p>
                    </div>
                <div className="profile">
                    <div className="profile-1">
                        
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
                    <div className="profile-2">
                        {/* <Performance/> */}
                    </div>
                </div>
                {/* <div className="middle-header">
                    <h2>Attendance</h2>
                    <p style={{
                        backgroundColor: 'black',
                        padding: '5px 10px',
                        color: '#fff',
                        borderRadius: '5px'
                    }}>{currentDate}</p>
                    <div className="filter">
                        <form action="">
                            <div className="search">
                                <i className='bx bx-search'></i>
                                <input type="search"  placeholder='search'/>
                            </div>
                        </form>
                        <button>Add filter</button>
                    </div>
                </div> */}
                {/* <div className="attendance">
                    <div className="attendance-list">
                        <Attendance />
                         <table className="table">
                            <thead>
                                <tr>
                                    <th>Employess name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Mananger</th>
                                    <th>Team</th>
                                    <th>Office</th>
                                    <th>More</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i className='bx bx-checkbox'> </i> <img src={img1} alt="" />  Peter Kimani</td>
                                    <td>kimanip140@gmail.com</td>
                                    <td>UI/UX DEsigner</td>
                                    <td><button className='active-btn'>active</button></td>
                                    <td><img src={img1} alt="" /> James</td>
                                    <td><button className='team'>Design Team</button></td>
                                    <td>Orix Dubai</td>
                                    <td><i className='bx bx-dots-horizontal-rounded '></i></td>
                                </tr>
                                <tr>
                                    <td><i className='bx bx-checkbox'> </i> <img src={img1} alt="" />  Peter Kimani</td>
                                    <td>kimanip140@gmail.com</td>
                                    <td>UI/UX DEsigner</td>
                                    <td><button className='active-btn'></button></td>
                                    <td><img src={img1} alt="" /> James</td>
                                    <td><button className='team'>Design Team</button></td>
                                    <td>Orix Dubai</td>
                                    <td><i className='bx bx-dots-horizontal-rounded '></i></td>
                                </tr>
                                <tr>
                                    <td><i className='bx bx-checkbox'> </i> <img src={img1} alt="" />  Peter Kimani</td>
                                    <td>kimanip140@gmail.com</td>
                                    <td>UI/UX DEsigner</td>
                                    <td><button className='active-btn'>active</button></td>
                                    <td><img src={img1} alt="" /> James</td>
                                    <td><button className='team'>Design Team</button></td>
                                    <td>Orix Dubai</td>
                                    <td><i className='bx bx-dots-horizontal-rounded '></i></td>
                                </tr>
                                <tr>
                                    <td><i className='bx bx-checkbox'> </i> <img src={img1} alt="" />  Peter Kimani</td>
                                    <td>kimanip140@gmail.com</td>
                                    <td>UI/UX DEsigner</td>
                                    <td><button className='active-btn'>active</button></td>
                                    <td><img src={img1} alt="" /> James</td>
                                    <td><button className='team'>Design Team</button></td>
                                    <td>Orix Dubai</td>
                                    <td><i className='bx bx-dots-horizontal-rounded '></i></td>
                                </tr>
                                <tr>
                                    <td><i className='bx bx-checkbox'> </i> <img src={img1} alt="" />  Peter Kimani</td>
                                    <td>kimanip140@gmail.com</td>
                                    <td>UI/UX DEsigner</td>
                                    <td><button className='active-btn'>active</button></td>
                                    <td><img src={img1} alt="" /> James</td>
                                    <td><button className='team'>Design Team</button></td>
                                    <td>Orix Dubai</td>
                                    <td><i className='bx bx-dots-horizontal-rounded '></i></td>
                                </tr>
                                <tr>
                                    <td><i className='bx bx-checkbox'> </i> <img src={img1} alt="" />  Peter Kimani</td>
                                    <td>kimanip140@gmail.com</td>
                                    <td>UI/UX DEsigner</td>
                                    <td><button className='active-btn'>active</button></td>
                                    <td><img src={img1} alt="" /> James</td>
                                    <td><button className='team'>Design Team</button></td>
                                    <td>Orix Dubai</td>
                                    <td><i className='bx bx-dots-horizontal-rounded '></i></td>
                                </tr>
                                <tr>
                                    <td><i className='bx bx-checkbox'> </i> <img src={img1} alt="" />  Peter Kimani</td>
                                    <td>kimanip140@gmail.com</td>
                                    <td>UI/UX DEsigner</td>
                                    <td><button className='active-btn'>active</button></td>
                                    <td><img src={img1} alt="" /> James</td>
                                    <td><button className='team'>Design Team</button></td>
                                    <td>Orix Dubai</td>
                                    <td><i className='bx bx-dots-horizontal-rounded '></i></td>
                                </tr>
                                <tr>
                                    <td><i className='bx bx-checkbox'> </i> <img src={img1} alt="" />  Peter Kimani</td>
                                    <td>kimanip140@gmail.com</td>
                                    <td>UI/UX DEsigner</td>
                                    <td><button className='active-btn'>active</button></td>
                                    <td><img src={img1} alt="" /> James</td>
                                    <td><button className='team'>Design Team</button></td>
                                    <td>Orix Dubai</td>
                                    <td><i className='bx bx-dots-horizontal-rounded '></i></td>
                                </tr>
                                <tr>
                                    <td><i className='bx bx-checkbox'> </i> <img src={img1} alt="" />  Peter Kimani</td>
                                    <td>kimanip140@gmail.com</td>
                                    <td>UI/UX DEsigner</td>
                                    <td><button className='active-btn'>active</button></td>
                                    <td><img src={img1} alt="" /> James</td>
                                    <td><button className='team'>Design Team</button></td>
                                    <td>Orix Dubai</td>
                                    <td><i className='bx bx-dots-horizontal-rounded '></i></td>
                                </tr>
                                <tr>
                                    <td><i className='bx bx-checkbox'> </i> <img src={img1} alt="" />  Peter Kimani</td>
                                    <td>kimanip140@gmail.com</td>
                                    <td>UI/UX DEsigner</td>
                                    <td><button className='active-btn'>active</button></td>
                                    <td><img src={img1} alt="" /> James</td>
                                    <td><button className='team'>Design Team</button></td>
                                    <td>Orix Dubai</td>
                                    <td><i className='bx bx-dots-horizontal-rounded '></i></td>
                                </tr>
                            </tbody>
                        </table> 
                    </div> 
                </div>*/}
            </div>  
	    </>
	);
}

export default Home;