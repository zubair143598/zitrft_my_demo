import React, { useEffect, useState } from 'react';
import CountryFlag from 'react-country-flag';


const Location = () => {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    fetch('https://geolocation-db.com/json/')
      .then(response => response.json())
      .then(data => setLocationData(data));
  }, []);


  return (
    <div className='mx-5'>

        {locationData && (
                    <div className='flex flex-row items-center justify-end text-[10px]  md:w-[50px] md:mb-0 mb-7 '>

                        <div className='w-full h-full'>
                          <CountryFlag countryCode={locationData.country_code} svg           style={{
            width: '50px',
            height: '50px',
            objectFit: 'cover',
          }}  className='rounded-lg w-full h-full'/>
                        </div>
                    </div>

        )}

      </div>

  );
};

export default Location;
