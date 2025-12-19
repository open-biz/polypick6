import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 })
  }

  const LOOPS_ENDPOINT = process.env.LOOPS_ENDPOINT
  const LOOPS_API_KEY = process.env.LOOPS_API_KEY

  if (!LOOPS_ENDPOINT || !LOOPS_API_KEY) {
    console.error("LOOPS_ENDPOINT or LOOPS_API_KEY is not set.")
    return NextResponse.json(
      { message: "Server configuration error. Loops API keys not set." },
      { status: 500 }
    )
  }

  try {
    const response = await fetch(LOOPS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOOPS_API_KEY}`,
      },
      body: JSON.stringify({ email: email }),
    })

    if (response.ok) {
      return NextResponse.json({ message: "Successfully subscribed" }, { status: 200 })
    } else {
      const errorData = await response.json()
      console.error("Loops API error:", errorData)
      return NextResponse.json(
        { message: errorData.message || "Failed to subscribe to newsletter" },
        { status: response.status }
      )
    }
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return NextResponse.json(
      { message: "Internal server error during subscription" },
      { status: 500 }
    )
  }
}
