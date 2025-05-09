'use client'
import { useState } from 'react'

export default function SubmitRequirements() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset states
    setError('')
    setSuccess(false)
    setIsSubmitting(true)

    try {
      // Basic email validation
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        setError('Please enter a valid email address')
        setIsSubmitting(false)
        return
      }

      // Submit to Supabase via API
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      // Success
      setSuccess(true)
      setEmail('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
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
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-[300px] px-6 py-4 rounded-full text-gray-700 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className={`px-8 py-4 rounded-full bg-[#85bd02] text-white font-semibold hover:bg-[#648f00] transition-colors duration-300 shadow-lg whitespace-nowrap ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting Request...' : 'ENQUIRE NOW'}
            </button>
          </form>
        </div>
        {/* Success message */}
        {success && (
          <div className="mt-4 text-center md:text-right max-w-[1200px] mx-auto">
            <p className="text-green-800 font-medium bg-green-100 inline-block px-4 py-2 rounded-full shadow-sm">
              <span className="mr-1">✓</span> Thank you for your request! We&apos;ll be in touch soon.
            </p>
          </div>
        )}

        {error && (
          <div className="mt-4 text-center md:text-right max-w-[1200px] mx-auto">
            <p className="text-red-600 font-medium">{error}</p>
          </div>
        )}
      </div>
    </section>
  )
}
