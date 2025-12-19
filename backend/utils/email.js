exports.sendEmail = async ({ to, subject, message }) => {
  console.log("📧 Email sent to:", to);
  console.log("Subject:", subject);
  console.log("Message:", message);
};
