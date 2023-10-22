import {Outlet} from 'react-router-dom';

export default function Layout() {
  return (
    <div className='bg-yellow-400 text-cyan-300 h-screen w-screen flex justify-center items-center'>
      <Outlet />
    </div>
  );
}
