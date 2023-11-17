import React, { useCallback, useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { getCities, getLocalities } from './../api/index';

export default function Property() {

  const [cities, setCities] = useState([]);
  const [localities, setLocalities] = useState([]);

  const getFilterValues = useCallback(async () => {
    try {
      const cityData = await getCities();
      const localityData = await getLocalities();

      setCities(cityData);
      setLocalities(localityData);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getFilterValues();
  }, []);

  return (
    <section className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <div className='row'>
            <h4>Filter By</h4>
            <div>
              <h4>City</h4>
              <ul>
                {cities.map((city, index) => {
                  return (
                    <li
                      className="for-input-style city-name"
                      id={"city-" + city + "-" + index}
                      key={city}
                      tag={city}
                      value={index}
                      style={{ cursor: "pointer" }}
                    >
                      {city}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4>Locality</h4>
              <ul>
                {localities.map((locality, index) => {
                  return (
                    <li
                      className="for-input-style locality-name"
                      id={"locality-" + locality + "-" + index}
                      key={locality}
                      tag={locality}
                      value={index}
                      style={{ cursor: "pointer" }}
                    >
                      {locality}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className='col-md-9'>
          <div className='row'>
            <h3>Open</h3>
            <div className='col-md-4'>
              <PropertyCard index={1} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={2} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={3} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={4} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={5} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={6} />
            </div>
          </div>
          <div className='row'>
            <h3>Resale</h3>
            <div className='col-md-4'>
              <PropertyCard index={1} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={2} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={3} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={4} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={5} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={6} />
            </div>
          </div>
          <div className='row'>
            <h3>Sold Out</h3>
            <div className='col-md-4'>
              <PropertyCard index={1} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={2} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={3} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={4} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={5} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={6} />
            </div>
          </div>
          <div className='row'>
            <h3>Upcoming</h3>
            <div className='col-md-4'>
              <PropertyCard index={1} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={2} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={3} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={4} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={5} />
            </div>
            <div className='col-md-4'>
              <PropertyCard index={6} />
            </div>
          </div>
          <div className='row'>
            <h3>Trending</h3>
          </div>
        </div>
      </div>
    </section>
  );
};