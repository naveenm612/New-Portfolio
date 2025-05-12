import React, { useState } from "react";
import { Paper, TextField, Button, Typography, Box, Snackbar, Alert } from "@mui/material";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./ContactStyle.css"

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [alert, setAlert] = useState<{ open: boolean; type: "success" | "error"; message: string }>({
    open: false,
    type: "success",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation: Check if all fields are filled
    if (!formValues.name || !formValues.email || !formValues.subject || !formValues.message) {
      setAlert({
        open: true,
        type: "error",
        message: "All fields are required. Please fill out all fields.",
      });
      return;
    }

    // If validation passes, show success message
    setAlert({
      open: true,
      type: "success",
      message: "Message sent successfully!",
    });

    // Optionally clear the form after submission
    setFormValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleCloseAlert = () => {
    setAlert((prev) => ({ ...prev, open: false }));
  };

  return (
    <section className="contact-section">
      <h2 className="title">Contact</h2>
      <p className="about-description">
        Feel free to reach out to me for any inquiries, collaboration opportunities, or questions.
        I'm always open to discussing exciting projects and innovative ideas.
      </p>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* Left Section */}
          <Paper
            elevation={3}
            sx={{
              flex: "1",
              padding: "20px",
              maxWidth: "48%",
              minWidth: "300px",
              display: "flex",
              textAlign: "start",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Box sx={{ marginBottom: "30px" }}>
              <Box
                sx={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <PersonPinCircleIcon sx={{ fontSize: "1.5rem" }} />
                <Typography variant="h6" component="span" sx={{ fontWeight: "bold" }}>
                  Address
                </Typography>
              </Box>
              <Typography sx={{ marginLeft: "30px" }}>
                3/4, Naduvaneri Power Office (opp), Vembadithalam, Salem - 637504
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "30px" }}>
              <Box
                sx={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <CallIcon sx={{ fontSize: "1.5rem" }} />
                <Typography variant="h6" component="span" sx={{ fontWeight: "bold" }}>
                  Phone
                </Typography>
              </Box>
              <Typography sx={{ marginLeft: "30px" }}>+91 9025151850</Typography>
            </Box>
            <Box sx={{ marginBottom: "30px" }}>
              <Box
                sx={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <MailOutlineIcon sx={{ fontSize: "1.5rem" }} />
                <Typography variant="h6" component="span" sx={{ fontWeight: "bold" }}>
                  Email
                </Typography>
              </Box>
              <Typography sx={{ marginLeft: "30px" }}>naveenpavi612@gmail.com</Typography>
            </Box>
          </Paper>

          {/* Right Section */}
          <Paper
            elevation={3}
            sx={{
              flex: "1",
              padding: "20px",
              maxWidth: "48%",
              minWidth: "300px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  variant="outlined"
                  size="small"
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  variant="outlined"
                  size="small"
                />
              </Box>
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formValues.subject}
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                sx={{ marginBottom: "15px" }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formValues.message}
                onChange={handleInputChange}
                variant="outlined"
                multiline
                rows={4}
                sx={{ marginBottom: "15px" }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  padding: "10px",
                  textTransform: "none",
                  fontSize: "16px",
                  backgroundColor: "#3b82f6",
                  fontWeight: "500",
                }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Box>
      </Box>

      {/* Snackbar for Alerts */}
      <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={alert.type} sx={{ width: "100%" }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
