import React from 'react'

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen p-4 m-auto text-black bg-white bg-cover contact-img"
    >
      <h1 className="p-4 text-4xl font-bold text-center">Let&apos;s work together.</h1>
      <div className="my-8" />
      <form className="max-w-[600px] mx-auto">
        <div className="grid grid-cols-2 gap-2">
          <input className="p-3 border rounded-md shadow-lg" placeholder="Name"></input>
          <input className="p-3 border rounded-md shadow-lg" placeholder="Email"></input>
        </div>
        <input placeholder="Subject" className="w-full p-3 my-2 border rounded-md shadow-lg" />
        <textarea className="w-full p-3 border rounded-md shadow-lg" placeholder="Message" rows={10} cols={30} />
        <button
          className="w-full p-3 font-semibold bg-white border rounded-md shadow-lg"
          onClick={() => alert('You can e-mail me at onurcagann@gmail.com!')}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
