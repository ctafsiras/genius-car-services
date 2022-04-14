import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-primary mt-3 fs-1'>Our Services</h2>
            <div className="services-cdontainer row row-cols-1 row-cols-sm-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }

            </div>
        </div>
    );
};

export default Services;