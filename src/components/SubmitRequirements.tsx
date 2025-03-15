'use client'
import { useState } from 'react'

export default function SubmitRequirements() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Email submitted:', email)
  }

  return (
    <section
      className="w-full py-16 md:py-20"
      style={{
        backgroundImage: 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl text-[#79ad00] font-semibold mb-2">
              Submit Your Requirements
            </h3>
            <h2 className="text-3xl md:text-5xl text-[#79ad00] font-bold">
              Just One Step Ahead
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-[300px] px-6 py-4 rounded-full text-gray-700 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-full bg-[#85bd02] text-white font-semibold hover:bg-[#648f00] transition-colors duration-300 shadow-lg whitespace-nowrap"
            >
              ENQUIRE NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
