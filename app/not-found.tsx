import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className='w-4/5 mx-auto mt-20 flex flex-col justify-center items-center space-y-4'>
            <h1 className='text-5xl font-semibold'>404 - Page Not Found</h1>
            <h4 className='py-5 text-lg text-red-500 font-semibold capitalize'>
                Whoopsie!
            </h4>
      </div>
    </>
  );
}