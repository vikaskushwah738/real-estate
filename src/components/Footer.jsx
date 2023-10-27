import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-slate-200  p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <img src="/your-logo.png" alt="Logo" className="h-12 w-auto" />
          <p className="text-sm mt-2">Software constraints are only confining if you use them for what they're intended to be used for.</p>
        </div>

        <div className="text-sm">
          <p className="mb-2">Featured Cities</p>
          <p className="mb-2">Home</p>
          <p className="mb-2">About Us</p>
          <p className="mb-2">Contact Us</p>
          <p className="mb-2">Privacy Policy</p>
          <p className="mb-2">Our Newsletter</p>
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border border-gray-600 py-1 px-2 rounded-l-md"
            />
            <button className="bg-blue-500 text-white py-1 px-4 rounded-r-md">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm">&copy; Copyright {new Date().getFullYear()} So Effort Solution. All Rights Reserved</p>
      </div>
    </footer>
    </div>
  )
}
