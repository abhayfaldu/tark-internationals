export type ContactSubmission = {
  id: string
  name: string
  email: string
  phone: string
  company: string
  message: string
  created_at: string
}

export type ContactSubmissionInsert = Omit<ContactSubmission, 'id' | 'created_at'> & {
  created_at?: string
}

export type Database = {
  public: {
    Tables: {
      contact_submissions: {
        Row: ContactSubmission
        Insert: ContactSubmissionInsert
        Update: Partial<ContactSubmissionInsert>
      }
    }
  }
}
