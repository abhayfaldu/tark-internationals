import { NextResponse } from 'next/server'
import { supabase } from '@/utils/supabase'
import { ContactSubmissionInsert } from '@/types/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Create a submission with only email (mandatory) and empty values for other fields
    const submission: ContactSubmissionInsert = {
      name: '',
      email,
      phone: '',
      company: '',
      message: 'Submitted from newsletter form',
      created_at: new Date().toISOString()
    }

    // Store email in contact_submissions table
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([submission])

    if (error) {
      console.error('Error storing contact submission:', error)
      return NextResponse.json(
        { error: 'Failed to store submission' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Submission successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing submission:', error)
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    )
  }
}
