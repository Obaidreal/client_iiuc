import React from 'react';
import '../Events/Events.css';
import wallshw from '../images/Wallshow.jpg';
import UpcommingEvent from '../AboutUs/UpcommingEvent';

const Events = () => {
    return (
        <div className='container'>
            <div>
                <h1 className='text-danger'>Popular Events</h1>
                <hr className=' w-25 text-white mx-auto hrpopular' />
            </div>
            <div className='row gy-4'>
                <div className='col-lg-4 col-12 col-sm-12 col-md-6 container1'>
                    <img className='img1 img-fluid' src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/306388519_2872114479756922_6371801309653810644_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE3S7qA_HvEZbqD7u8emrkPLOvoRz_cr5os6-hHP9yvmsalgWOBKUKXqnjYEdikE-u04NXmsCUIFYvmdPMXjkJ7&_nc_ohc=NaLbQ-KjqIQAX8R9krH&_nc_pt=1&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfDa6KC9ijBEE4Flte7f_S9667CF7I2UavCoUlXZrVH0_g&oe=64923DCC" alt="" srcset="" />
                    <div className="overlay1">
                        <div className="text1">CONVOCATION 2K15</div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 col-sm-12 col-md-6      container1'>
                    <img className='img1 img-fluid' src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/306779005_611255220371119_6602491999118693787_n.jpg?_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEJxPbpbPrNQ7ZBix9rwUXiYdne8B6qV0Jh2d7wHqpXQroJInygmOJRTG3ivS98JEin_b0Ko5pkSFv11jPcwSqi&_nc_ohc=DZ1_xFS1wagAX8IgoCB&_nc_pt=1&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfBBDr03DEVyl1xHS3wi5Qm4Bajw1YVLSRuihxm8SD0VBQ&oe=64928ACF" alt="" srcset="" />
                    <div className="overlay1">
                        <div className="text1">Convocation Guests</div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 col-sm-12 col-md-6      container1'>
                    <img className='img1 img-fluid' src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/314554830_3301792910081545_7722599615799548178_n.jpg?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFbjsgMd4_UsrMCKNE5byHQ8SKrywxAXd3xIqvLDEBd3TULDLdaDAeZRbyV2IepEG8TlQcccQ-Zx66W8OILwqRz&_nc_ohc=GKSjaiJeudQAX98Ld3E&_nc_pt=1&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfA2g3d9VWgMozdKz7U8kbTf0j-z6cABqXCFR35Qd1Ue4w&oe=649379A9" alt="" srcset="" />
                    <div className="overlay1">
                        <div className="text1">Champion in Inter-University Football 2019</div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 col-sm-12 col-md-6      container1'>
                    <img className='img1 img-fluid' src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/347254467_1308206390126485_4994832682343701386_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFzNQCxZgBrEOJJzT8h4P4na1GjtZgfwEhrUaO1mB_ASCqF0SJv5FIUBa2Sb0EmAQzlWq4fHx6gSoFaMBFO--0c&_nc_ohc=QU8HE7I8crcAX8lEm2B&_nc_pt=1&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfBEho64WEUodCdy4VHUOOHHD5F40ruUVVGlMoAUmLnhWw&oe=6491BCEF" alt="" srcset="" />
                    <div className="overlay1">
                        <div className="text1">Autumn-21 Orientation</div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 col-sm-12 col-md-6      container1'>
                    <img className='img1 img-fluid' src={wallshw} alt="" srcset="" />
                    <div className="overlay1">
                        <div className="text1">Mujib_Borsho Wall Magazine</div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 col-sm-12 col-md-6      container1'>
                    <img className='img1 img-fluid' src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/278989167_3083835411878268_2595634160977710333_n.jpg?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEicZb6nqt5HMTF3Nie226xcvNDnC0krsZy80OcLSSuxjKPnZ1v_Fe8oZNgAWP5AEjcY01vvFg9bGMzGBI2Bp4T&_nc_ohc=URS8YEfpCloAX94hLdW&_nc_pt=1&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfAIVknnAkXYWp1GydWFVdELoKLFi6kmB8aANaDg5hclXA&oe=6492C162" alt="" srcset="" />
                    <div className="overlay1">
                        <div className="text1">Iftar_Mahfil 2K22</div>
                    </div>
                </div>

                <UpcommingEvent></UpcommingEvent>
            </div>
        </div>
    );
};

export default Events;