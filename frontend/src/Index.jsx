import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import './index.css'


function Index(){
    return(
        <body>
            <header className='header'>
                <h1>Dashboard</h1>
                <nav className="navbar">
                    <ul>
                        <li><a href="#">Dashbard</a></li>
                        <li><a href="#">Checklist</a></li>
                        <li><a href="#">Time Off</a></li>
                        <li><a href="#">Attendance</a></li>
                        <li><a href="#">Payroll</a></li>
                        <li><a href="#">Recruitment</a></li>
                    </ul>
                </nav>
                <div className="card">
                    <div className="card-top">
                        <div className="top-img">
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                        </div>
                        <div className="top-icon"></div>
                    </div>
                    <h2>Daily Meetings</h2>
                    <p>9:00am - 10:00pm On Zoom</p>
                    <button>Join</button>
                </div>
                <div className="header-foot">
                    <img src={img4} alt="" />
                    <div className="foot-details">
                        <h4>Elizabeth M</h4>
                        <p>elizabeth12@gmail.com</p>
                    </div>
                    <div className="top-icon"></div>
                </div>

            </header>
        </body>
    );
}


export default Index