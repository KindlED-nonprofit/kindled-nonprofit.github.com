import { type NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import type { ContactMessage } from "@/models/User"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("kindled")

    // Validate required fields
    const requiredFields = ["name", "email", "subject", "message"]

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Create contact message document
    const contactMessage: ContactMessage = {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      status: "new",
      createdAt: new Date(),
    }

    // Insert into database
    const result = await db.collection("contacts").insertOne(contactMessage)

    return NextResponse.json(
      {
        message: "Contact message sent successfully",
        messageId: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
