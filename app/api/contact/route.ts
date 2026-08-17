import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        {
          error: "Please fill in all fields.",
        },
        {
          status: 400,
        },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["rishavkaushik70@gmail.com"],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Contact</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Subject:</strong> ${subject}
          </p>

          <hr />

          <h3>Message</h3>

          <p>
            ${message.replace(/\n/g, "<br />")}
          </p>
        </div>
      `,
    });

    if (error) {
      return Response.json(
        {
          error: error.message,
        },
        {
          status: 500,
        },
      );
    }

    return Response.json(
      {
        success: true,
        data,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      {
        error: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}
