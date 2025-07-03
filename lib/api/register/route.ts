// import { type NextRequest, NextResponse } from "next/server"
// import clientPromise from "@/lib/mongodb"
// import type { UserApplication } from "@/models/User"

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()
//     const client = await clientPromise
//     const db = client.db("kindled")

//     // Validate required fields
//     const requiredFields = [
//       "firstName",
//       "lastName",
//       "email",
//       "phone",
//       "age",
//       "gradeLevel",
//       "gpa",
//       "fieldOfInterest",
//       "accomplishments",
//       "extracurriculars",
//     ]

//     for (const field of requiredFields) {
//       if (!body[field]) {
//         return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
//       }
//     }

//     // Check if email already exists
//     const existingUser = await db.collection("applications").findOne({ email: body.email })
//     if (existingUser) {
//       return NextResponse.json({ error: "An application with this email already exists" }, { status: 409 })
//     }

//     // Create application document
//     const application: UserApplication = {
//       ...body,
//       status: "pending",
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     }

//     // Insert into database
//     const result = await db.collection("applications").insertOne(application)

//     return NextResponse.json(
//       {
//         message: "Application submitted successfully",
//         applicationId: result.insertedId,
//       },
//       { status: 201 },
//     )
//   } catch (error) {
//     console.error("Registration error:", error)
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }
