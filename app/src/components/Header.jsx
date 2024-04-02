import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Header() {
  const [term, setTerm] = useState('i');
  const [navLink, setNavLink] = useState(null);
  const path = useLocation().pathname 

  useEffect(() => {
    setTerm(path.includes('ii') ? 'ii' : 'i')
  }, [path])

  return (
    <header className="py-4">
        <div className="flex justify-center gap-4">
            <Link to={'/i/grades'} className={`${(term === 'i') ? 'btn-primary' : 'btn-neutral'} btn btn-circle grid place-content-center p-8 text-3xl rounded-full`}
            onClick={() => setTerm('i')}
            >
                I
            </Link>
            <Link to={'/ii/grades'} className={`${term === 'ii' ? 'btn-primary' : 'btn-neutral'} btn btn-circle grid place-content-center p-8 text-3xl rounded-full`}
            onClick={() => setTerm('ii')}
            >
                II
            </Link>
        </div>
        <div className="mt-3 py-3 bg-base-200" >
            <nav>
              <ul className="flex justify-center gap-8">
                <li><Link to={'./grades'} className={`${(navLink === 'grades') ? 'btn-ghost btn-active' : 'btn-ghost'} btn btn-ghost text-lg`}
                onClick={() => setNavLink('grades')}
                >Grades</Link></li>
                <li><Link to={'./subjects'} className={`${(navLink === 'subjects') ? 'btn-ghost btn-active' : 'btn-ghost'} btn btn-ghost text-lg`}
                onClick={() => setNavLink('subjects')}>Subjects</Link></li>
                <li><Link to={'./timeline'} className={`${(navLink === 'timeline') ? 'btn-ghost btn-active' : 'btn-ghost'} btn btn-ghost text-lg`}
                onClick={() => setNavLink('timeline')}>Timeline</Link></li>
              </ul>
            </nav>
        </div>
    </header>
  )
}
