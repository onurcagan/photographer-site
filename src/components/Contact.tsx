import React from 'react'

const Contact = () => {
  return (
    <div
      id='contact'
      className='flex flex-col items-center justify-center min-h-screen p-4 pt-56 m-auto text-black bg-white bg-cover sm:pt-0 contact-img'
    >
      <h1 className='p-4 text-4xl font-bold text-center sm:pl-0'>Let&apos;s work together.</h1>
      <div className='my-2' />
      <form className='max-w-[600px] mx-auto'>
        <div className='grid grid-cols-2 gap-2'>
          <input className='p-3 border rounded-md shadow-lg' placeholder='Name'></input>
          <input className='p-3 border rounded-md shadow-lg' placeholder='Email'></input>
        </div>
        <input placeholder='Subject' className='w-full p-3 my-2 border rounded-md shadow-lg' />
        <textarea
          className='w-full p-3 border rounded-md shadow-lg'
          placeholder='Message'
          rows={10}
          cols={30}
        />
        <button
          className='w-full p-3 font-semibold bg-white border rounded-md shadow-lg'
          onClick={() => {
            window.open(
              "mailto:onurcagann@gmail.com?subject=We'd Like To Work With You!&body=Hey Onur. This is who we are, If you'd like to work with us we'd love to work with you!",
            )
            alert("Why don't you e-mail me as well?")
            return
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
