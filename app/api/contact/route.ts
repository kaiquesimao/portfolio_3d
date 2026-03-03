import emailjs from "@emailjs/nodejs";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  from_name?: string;
  from_phone?: string;
  from_email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const serviceId = process.env.NEXT_EMAILJS_SERVICEID;
  const templateId = process.env.NEXT_EMAILJS_TEMPLATEID;
  const publicKey = process.env.NEXT_EMAILJS_OPTIONS;
  const privateKey = process.env.NEXT_EMAILJS_PRIVATEKEY;

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    console.error(
      "EmailJS is not configured. Missing NEXT_EMAILJS_SERVICEID, NEXT_EMAILJS_TEMPLATEID, NEXT_EMAILJS_OPTIONS, or NEXT_EMAILJS_PRIVATEKEY.",
    );

    return NextResponse.json(
      { error: "Email service is temporarily unavailable." },
      { status: 503 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 },
    );
  }

  if (!payload.from_name || !payload.from_email || !payload.message) {
    return NextResponse.json(
      { error: "Required fields are missing." },
      { status: 400 },
    );
  }

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: payload.from_name,
        from_phone: payload.from_phone ?? "",
        from_email: payload.from_email,
        to_name: "Kaique",
        to_email: "kaique.gabriel.me@gmail.com",
        message: payload.message,
      },
      {
        publicKey,
        privateKey,
      },
    );

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "status" in error &&
      "text" in error
    ) {
      console.error("EmailJS error:", error);

      if (error.status === 403) {
        return NextResponse.json(
          {
            error:
              "Email provider denied the server request. Check NEXT_EMAILJS_PRIVATEKEY and EmailJS API settings for server-side calls.",
          },
          { status: 502 },
        );
      }
    } else if (error instanceof Error) {
      console.error("Unexpected error sending email:", error.message);
    } else {
      console.error("Unexpected error sending email:", error);
    }

    return NextResponse.json(
      { error: "Could not send message." },
      { status: 502 },
    );
  }
}
