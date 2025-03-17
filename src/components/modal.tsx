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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");

  const [nameError, setNameError] = useState(false);
  const [nameHelperText, setNameHelperText] = useState("");

  const [messageError, setMessageError] = useState(false);
  const [messageHelperText, setMessageHelperText] = useState("");

  const [responseMessage, setResponseMessage] = useState("");

  function debounce<TArgs extends unknown[], TFunc extends (...args: TArgs) => void>(
    func: TFunc,
    delay: number
  ): (...args: TArgs) => void {
    let timer: ReturnType<typeof setTimeout>;
    return function (this: ThisParameterType<TFunc>, ...args: TArgs) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch(e.target.name){
      case "name":
        debouncedValidateName(e.target.value);
        setName(e.target.value);
        break;
      case "message":
        debouncedValidateMessage(e.target.value);
        setMessage(e.target.value);
        break;
      case "email":
        debouncedValidateEmail(e.target.value);
        setEmail(e.target.value);
      default:
        break;
    }
  };

  const validateEmail = (value: string) : void => {
    if (!value) {
      setEmailError(true);
      setEmailHelperText("Please enter your email address");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(value)) {
      setEmailError(true);
      setEmailHelperText("Invalid email address!");
    } else {
      setEmailError(false);
      setEmailHelperText("");
    }
  };

  const validateName = (value: string): void => {
    if(!value){
      setNameError(true);
      setNameHelperText("Please enter your name")
    }else{
      setNameError(false);
      setNameHelperText("")
    }
  }

  const validateMessage = (value: string): void => {
    if(!value){
      setMessageError(true);
      setMessageHelperText("Please enter your message")
    }else{
      setMessageError(false);
      setMessageHelperText("")
    }
  }

  const debouncedValidateMessage = debounce<string[], (message: string) => void>(validateMessage, 300)

  const debouncedValidateName = debounce<string[], (message: string) => void>(validateName, 300)

  const debouncedValidateEmail = debounce<string[], (message: string) => void>(validateEmail, 300);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
   if(!emailError && !name && !email && message)
   {
    const data = new FormData();

    data.append("name", name);
    data.append("email", email);
    data.append("message", message);

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        body: data,
      });

      const result = await response.text();
      setResponseMessage(result);
    } catch {
      setResponseMessage("Something wrong, please try again.");
    }  
   }else{
    setResponseMessage("Please enter fields correctly.");
    setTimeout(()=> {
      setResponseMessage("");
    },3000)
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
                  <TextField
                    label="Your Name *"
                    variant="outlined"
                    fullWidth
                    sx={{
                      mt: 3,
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": { borderColor: nameError ? "red" : "#7f4ed5" },
                        "&.Mui-focused fieldset": { borderColor: nameError ? "red" : "#7f4ed5" },
                      },
                    }}
                    name="name"
                    value={name}
                    onChange={handleChange}
                    error={nameError}
                    helperText={nameHelperText}
                  />
                  <TextField
                    label="Your Email *"
                    variant="outlined"
                    fullWidth
                    sx={{
                      mt: 3,
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": { borderColor: emailError ? "red" : "#7f4ed5" },
                        "&.Mui-focused fieldset": { borderColor: emailError ? "red" : "#7f4ed5" },
                      },
                    }}
                    name="email"
                    value={email}
                    onChange={handleChange}
                    error={emailError}
                    helperText={emailHelperText}
                  />
                  <TextField
                    label="Message *"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    sx={{
                      mt: 3,
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": { borderColor: messageError ? "red" : "#7f4ed5" },
                        "&.Mui-focused fieldset": { borderColor: messageError ? "red" : "#7f4ed5" },
                      },
                    }}
                    name="message"
                    value={message}
                    onChange={handleChange}
                    error={messageError}
                    helperText={messageHelperText}
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
                    disabled={!(!loading && name && message && email && !emailError)}
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
