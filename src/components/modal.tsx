"use client"; // Bắt buộc vì có useEffect

import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

export default function ModalComponent() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      const response = await fetch("api/contact.php", {
        method: "POST",
        body: data,
      });

      const result = await response.text();
      setResponseMessage(result);
    } catch {
      setResponseMessage("Something wrong, please try again.");
    }

    setLoading(false);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <Box
        display="flex"
        flexWrap="wrap" // Để tránh nội dung bị thu nhỏ quá mức
        width="90%" // Không dùng 100% để tránh Box quá nhỏ
        maxWidth={600} // Giữ kích thước tối đa trên màn hình lớn
        minHeight={100} // Dùng minHeight để tránh bị bóp nhỏ
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: "#7f4ed5",
          px: { xs: 2, sm: 4 }, // Giữ padding hợp lý
          py: 2,
          borderRadius: 2,
          mx: "auto",
        }}
      >
        <Typography
          fontWeight="bold"
          variant="h6"
          sx={{
            color: "white",
            fontSize: { xs: "18px", sm: "20px" }, // Giữ font size hợp lý
            flexShrink: 0, // Không để chữ bị thu nhỏ
          }}
        >
          Hire Me For Your Project
        </Typography>

        <Button
          variant="outlined"
          onClick={() => setOpen(true)}
          sx={{
            color: "#7f4ed5",
            backgroundColor: "white",
            borderRadius: 10,
            borderColor: "white",
            fontSize: { xs: "14px", sm: "16px" }, // Giữ font size hợp lý
            px: { xs: 2, sm: 3 },
            flexShrink: 0, // Không để nút bị thu nhỏ quá mức
            "&:hover": { backgroundColor: "#eeeeee", boxShadow: 3 },
          }}
        >
          Contact me
        </Button>
      </Box>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#7f4ed5"}}
              align="center"
            >
              Contact Me
            </Typography>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              sx={{
                mt: 3,
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "#7f4ed5" },
                  "&.Mui-focused fieldset": { borderColor: "#7f4ed5" },
                  "& .MuiInputLabel-root": {
                    "&.Mui-focused": { color: "#7f4ed5" },
                  },
                },
              }}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              sx={{
                mt: 3,
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "#7f4ed5" },
                  "&.Mui-focused fieldset": { borderColor: "#7f4ed5" },
                  "& .MuiInputLabel-root": {
                    "&.Mui-focused": { color: "#7f4ed5" },
                  },
                },
              }}
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{
                mt: 3,
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "#7f4ed5" },
                  "&.Mui-focused fieldset": { borderColor: "#7f4ed5" },
                },
              }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                width: "100%",
                maxWidth: 300,
                py: 2,
                borderColor: "#7f4ed5",
                color: "#7f4ed5",
                borderRadius: 10,
                "&:hover": { backgroundColor: "#7f4ed5", color: "white" },
              }}
              type="submit"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Send Message"}
            </Button>
            {responseMessage && (
              <Alert severity="info" sx={{ mt: 2 }}>
                {responseMessage}
              </Alert>
            )}
          </form>
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            sx={{    mt: 2,
                py: 1.5,
                px: 5,
                bgcolor: "#7f4ed5",
                borderRadius: 10, }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
