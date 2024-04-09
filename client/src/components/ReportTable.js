import React, { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';

export function ReportTable({data}) {
        
        const months = Array.from(new Set(data.map(({ month }) => month)));
        
        const tableData = {};
          data.forEach(({ ShortTitle }) => {
            tableData[ShortTitle] = {};
            months.forEach(month => {
              tableData[ShortTitle][month] = 0;
            });
          });
        
          data.forEach(({ ShortTitle, month, VisitCounted }) => {
            tableData[ShortTitle][month] += VisitCounted;
          });

          const monthNames = months.map(month => {
            const date = new Date(null, month - 1);
            return date.toLocaleString('default', { month: 'short' });
          });

          const shortTitles = Array.from(new Set(data.map(({ ShortTitle }) => ShortTitle)));
          
          const csvData = [
            ['', ...monthNames], // Empty cell for header
            ...shortTitles.map(shortTitle => {
                return [shortTitle, ...months.map(month => tableData[shortTitle][month])];
            })
        ];

        return (
          <>
                    <table>
              <thead>
                <tr>
                  <th>Activity</th>
                  {monthNames.map((month, index) => (
                    <th key={index}>{month}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(tableData).map((activity, index) => (
                  <tr key={index}>
                    <td>{activity}</td>
                    {months.map((month, index) => (
                      <td key={index}>{tableData[activity][month]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <CSVLink data={csvData} filename={'report_table.csv'}>
              Export table to Excel
            </CSVLink>
        </>
        );
}
