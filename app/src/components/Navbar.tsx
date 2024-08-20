import React from 'react'
import Link from 'next/link'
import '../globals.css';

const Navbar = () => {
  return (

    <nav className=' py-5'>

      <div className='  items-center flex'>
      <ul className='inline-flex flex-row  items-center  mx-auto bg-[#1f1f1f]  py-2.5 px-3   rounded-full border text-[#646464] text-[1.2rem] font-medium'>
        
        <li className='px-2'>  
        <Link href="/com">
        <img src="men.png" alt="logo" width="100px" height="50px" />
        </Link>
        </li>
        <li className='px-2'>  
        <Link href="/com"><button>Todo</button></Link>
        </li>

        <li className='px-2' >  
        <Link href="/com"><button>Focus</button></Link>
        </li>
        
        <li className='px-2' >  
        <Link href="/com"><button>repo</button></Link>
        </li>

        <li className='px-2'>  
        <Link href="/com"><button  className=' rounded-full px-4 py-3 bg-[#FF5E00] text-[#0c0c0c]'>Space</button></Link>
        </li>

      </ul>
      </div>

    </nav>

  )
}

export default Navbar