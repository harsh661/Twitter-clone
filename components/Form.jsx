import React from 'react'

const Form = () => {
  return (
    <div className='lg:flex gap-3 p-3 border-b hidden'>
        <img src="https://pbs.twimg.com/profile_images/1605234616033374216/rBeeKbOk_normal.jpg" alt="user" className='w-12 h-12 rounded-full'/>
        <form className='flex flex-col w-full'>
            <textarea name="post" id="post" className='outline-none border-b p-2 w-full resize-y text-xl' placeholder="What's Happening?" />
            <div className='p-3 flex items-center justify-between'>
                <span className='w-8 h-8 p-1 rounded-full hover:bg-grey'>
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="24"  height="24" ><g fill="#1D9BF0"><path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z" fill="#1D9BF0"></path></g></svg>
                </span>
                <button className='py-2 px-5 text-sm my-2 w-max rounded-full bg-accent font-bold text-white'>
                    Tweet
                </button>
            </div>
        </form>
    </div>
  )
}

export default Form