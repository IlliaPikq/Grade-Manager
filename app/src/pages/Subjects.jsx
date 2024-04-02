import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from 'react-router-dom';

export default function Subjects() {
  const [data, setData] = useState([]);
  const subjects = useLoaderData()
  const term = useLocation().pathname
  const semesterNumber = term.includes('ii') ? 2 : 0

  useEffect(() => {
    setData(subjects)
  }, [subjects]);

  console.log(subjects[0].semester[semesterNumber].grades[0].info)

  return (
    <div className="grid gap-5">
      {data.map((subject, i) => (
        <div key={i} className="collapse bg-base-200 overflow-visible">
          <input type="checkbox" id={`collapse-${i}`} /> 
          <label htmlFor={`collapse-${i}`} className="collapse-title text-xl font-medium">
              {subject.name}
          </label>
          <div className="collapse-content flex gap-4"> 
          {subject.semester[semesterNumber].grades.map((grade, index) => (
          <div key={index} className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="badge badge-neutral p-2">{grade.value}</div>
            <div tabIndex={0} className="absolute top-8 z-20 dropdown-content card-compact rounded-md p-2 shadow bg-primary text-primary-content">
              <div className="card-body text-nowrap">
                {console.log(grade.info.split('\n')[0].split(':')[1])}
                <h3 className="card-title">{grade.info.split('\n')[0].split(':')[1]}</h3>
                <div className="grid gap-2">
                  <span>{grade.info.split('\n')[1]}</span>
                  <span>{grade.info.split('\n')[6]}</span>
                </div>
              </div>
            </div>
          </div>
))}

          </div>
        </div>
      ))}
    </div>
  );
}
