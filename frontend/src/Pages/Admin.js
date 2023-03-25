import React from 'react';
import data from '../Data/data';
import '../Styles/CarBooking.css';

import { Link } from 'react-router-dom';


const Admin = () => {
    return (
        <div>
            <h3><b>welcome admin</b></h3>

                   <div className='acd'>
                   <h3 className='cars'><b>cars</b></h3>
                   <Link to="/addcar"><button className='ac'>Add car</button></Link>
                </div>

            <section style={{ width: "100vw" }}>
               

                {
                    data.map((item, index) => {
                        // <Cards item={item} />
                        return (
                            <div key={index} className='cards'>

                                <div className='image_box'>
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <p className='seat'>{item.seater} Persons</p>

                                <div className='details'>

                                    <h3>{item.name}</h3>
                                    <p className='rate'>{item.rateperkm}Rs/km</p>

                                </div>
                                <div className='fare-btn'>
                                    <p className='fare'>{item['fare']}</p>
                                    <p className='availableDate'>{item['available Date']}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </section>
        </div >
    )
}
export default Admin