import React, { useEffect, useState } from 'react'

export function ReportTable() {
    const[data, setData] =useState([])
    useEffect(() => {
        fetch('http://localhost:3001/visits')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    }, [])

    return(
        <div>
            <h1>SITE NAME HERE</h1>
            <table>
                <thead>
                    <th>Date And Time of Visit</th>
                    <th>Site</th>
                    <th>Program ID</th>
                    <th>Profile ID</th>
                </thead>
                <tbody>
                    {data.map((d, i)=> (
                        <tr key={i}>
                            <td>{d.DateTimeLog}</td>
                            <td>{d.Name}</td>
                            <td>{d.ProgramID}</td>
                            <td>{d.ProfileID}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}
