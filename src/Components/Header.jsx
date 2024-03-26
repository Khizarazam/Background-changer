import React, { useState } from 'react';

function Header() {
    const [color, setColor] = useState('olive');

  return (
    <>
       <div className='w-[100vw] h-[100vh]' style={{backgroundColor: color}}>
         <div className='absolute rounded-full py-2 px-3 left-[500px] bottom-[50px] text-white bg-slate-700'>
            <button onClick={color=>setColor('red')} className='rounded-full py-1 px-3 ml-2 bg-red-500'>red</button>
            <button onClick={color=>setColor('green')} className='rounded-full py-1 px-3 ml-2 bg-green-500'>green</button>
            <button onClick={color=>setColor('blue')} className='rounded-full py-1 px-3 ml-2 bg-blue-500'>blue</button>
            <button onClick={color=>setColor('black')} className='rounded-full py-1 px-3 ml-2 bg-black'>black</button>
         </div>
       </div>
    </>
  );
} ;

export default Header;