import React from "react";
import Sdata from './sample.json';

const SampleFetch = () => {
    return (
        <div>
            <h1> Fetched data</h1>
            <h2> Data should be displayed below</h2>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Latitude</th>
      <th scope="col">Longitude</th>
    </tr>
  </thead>
  <tbody>
    {
            Sdata.map( (record) => {
                let id=record.id;
                let city =record.city;
                let la = record.lati ;
                let lo = record.lon;
                return (<tr key={record.id}><td>{record.city}</td><td>{record.la}</td><td>{record.lo}</td></tr>);
            })
            }

    </tbody></table>
            
        </div>
    );
};

export default SampleFetch;