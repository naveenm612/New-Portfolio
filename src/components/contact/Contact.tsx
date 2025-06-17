import React, { useState } from "react";
import { Paper, TextField, Button, Typography, Box, Snackbar, Alert } from "@mui/material";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./ContactStyle.css";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCloseAlert = () => {
    setAlert({ open: false, type: "success", message: "" });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAlert({ open: true, type: "success", message: "Processing..." });
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a4ecbec3-820b-4140-b28c-62603714e9a1",
          ...formValues,
        }),
      });

      const data = await res.json();

      if (data.success) {

        setAlert({ open: true, type: "success", message: "Message sent successfully!" });
        setFormValues({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Something went wrong. Please try again later.");
      }
    } catch (error: any) {
      setAlert({ open: true, type: "error", message: error.message || "Submission failed!" });
    }
  };

  return (
    <section className="contact-section">
      <div className="title-container">
        <h2 className="title">Contact</h2>
      </div>
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
                  required
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  variant="outlined"
                  size="small"
                  type="email"
                  required
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
                required
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
                required
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
      <Snackbar open={alert.open} onClose={handleCloseAlert}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
        <Alert onClose={handleCloseAlert} severity={alert.type} sx={{ width: "100%" }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
