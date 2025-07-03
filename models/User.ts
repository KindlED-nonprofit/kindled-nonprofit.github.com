export interface MentorApplication {
  _id?: string
  type: "mentor"
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  age: number
  gradeLevel: string
  gpa: number
  fieldOfInterest: string
  accomplishments: string
  extracurriculars: string
  // Mentor-specific fields
  leadershipExperience: string
  testScores?: string
  university: string
  availability: string
  // Metadata
  status: "pending" | "approved" | "rejected"
  createdAt: Date
  updatedAt: Date
}

export interface MenteeApplication {
  _id?: string
  type: "mentee"
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  age: number
  gradeLevel: string
  gpa: number
  fieldOfInterest: string
  accomplishments: string
  extracurriculars: string
  // Mentee-specific fields
  specificGoals: string
  challengesAreas: string
  preferredMentorType: string
  // Metadata
  status: "pending" | "approved" | "rejected"
  createdAt: Date
  updatedAt: Date
}

export interface ContactMessage {
  _id?: string
  name: string
  email: string
  subject: string
  message: string
  status: "new" | "read" | "responded"
  createdAt: Date
}

export type UserApplication = MentorApplication | MenteeApplication
