import React, { useEffect, useState } from 'react'

export function ReportTable() {
    const[data, setData] =useState([])
    useEffect(() => {
        fetch('http://localhost:3001/profile')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    }, [])

    return(
        <div>
            <table>
                <thead>
                    <th>Profile ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Preferred Name</th>
                    <th>Birth Date</th>
                    <th>City</th>
                    <th>Street Address</th>
                    <th>Postal Code</th>
                    <th>Phone</th>
                    <th>Email Address</th>
                    <th>Emergency Contact Person</th>
                    <th>Relation</th>
                    <th>Emergency Contact #</th>
                    <th>Address Update date</th>
                    <th>Emergency Contact Update Date</th>
                    <th>Other Note</th>
                    <th>Sign Up Date</th>
                </thead>
                <tbody>
                    {data.map((d, i)=> (
                        <tr key={i}>
                            <td>{d.ProfileID}</td>
                            <td>{d.FirstName}</td>
                            <td>{d.LastName}</td>
                            <td>{d.PreferredName}</td>
                            <td>{d.BirthDate}</td>
                            <td>{d.CityName}</td>
                            <td>{d.StreetAddress}</td>
                            <td>{d.Phone}</td>
                            <td>{d.EmailAddress}</td>
                            <td>{d.EmergContact}</td>
                            <td>{d.EmergRelation}</td>
                            <td>{d.EmergNumber}</td>
                            <td>{d.AddressUpdateDate}</td>
                            <td>{d.EmergContactDate}</td>
                            <td>{d.OtherNote}</td>
                            <td>{d.SiteSignedUp}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}
