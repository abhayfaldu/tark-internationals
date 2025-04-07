import { NextResponse } from 'next/server'
import { supabase } from '@/utils/supabase'
import { ContactSubmissionInsert } from '@/types/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, countryCode, phone, company, message } = body

    // Validate required fields
    if (!name || !email || !phone || !company || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Store form submission in Supabase
    const submission: ContactSubmissionInsert = {
      name,
      email,
      phone: `${countryCode} ${phone}`,
      company,
      message,
      created_at: new Date().toISOString()
    }

    const { error } = await supabase
      .from('contact_submissions')
      .insert([submission])

    if (error) {
      console.error('Error storing contact submission:', error)
      return NextResponse.json(
        { error: 'Failed to store contact submission' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}
