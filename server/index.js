import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/submit-form", (req, res) => {
  const { name, email } = req.body;

  // Processing the form data as needed, e.g., saving it to a database

  // Sending a response back to the client
  res.status(200).json({ message: "Form data received and processed successfully" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
