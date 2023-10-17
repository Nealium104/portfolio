const postmark = require("postmark");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message, subject } = JSON.parse(event.body);

  try {
    const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

    await client.sendEmail({
      From: "nealpowers@neal-powers.com",
      To: "nealpowers@neal-powers.com",
      Subject: `${subject}`,
      TextBody: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return { statusCode: 200, body: "Message sent" };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: "Internal Server Error" };
  }
};
