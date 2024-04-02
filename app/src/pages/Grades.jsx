import { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { calculateGrade } from '../utils';

export default function Subjects() {
  const [data, setData] = useState([]);
  const subjects = useLoaderData()
  const term = useLocation().pathname
  const semesterNumber = term.includes('ii') ? 2 : 0

  useEffect(() => {
    setData(subjects)
  }, [subjects]);

  return (
    <div>
      {data.map((subject, index) => ( 
        <div key={index} className='flex justify-between'>
          <h2>{subject.name}</h2>
          {console.log(subject.semester[semesterNumber])}
          <p>{calculateGrade(subject.semester[semesterNumber].tempAverage)}</p>
        </div>
      ))}
    </div>
  );
}
