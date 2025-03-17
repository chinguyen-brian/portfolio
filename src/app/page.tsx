"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid2,
  Card,
  Button,
  TextField,
  Box,
  CircularProgress,
  Alert,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import {
  DesignServices,
  Code,
  TrendingUp,
  GitHub,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { useState } from "react";
import Link from "next/link";

export default function Portfolio() {
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

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleProject = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

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
    <div>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: 1,
          height: 64,
        }}
        elevation={0}
      >
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              component="a"
              href="/"
            >
              BrianCode
            </Typography>
            <Box gap={3} sx={{ display: { xs: "none", md: "flex" } }}>
              <Button color="inherit">
                <ScrollLink to="hero" smooth={true}>
                  Home
                </ScrollLink>
              </Button>
              <Button color="inherit">
                <ScrollLink to="about" smooth={true}>
                  About
                </ScrollLink>
              </Button>
              <Button color="inherit">
                <ScrollLink to="services" smooth={true}>
                  Services
                </ScrollLink>
              </Button>
              <Button color="inherit">
                <ScrollLink to="myprojects" smooth={true}>
                  My Projects
                </ScrollLink>
              </Button>
              <Button color="inherit">
                <ScrollLink to="blog" smooth={true}>
                  Blog
                </ScrollLink>
              </Button>
              <Button color="inherit">
                <ScrollLink to="contact" smooth={true}>
                  Contact
                </ScrollLink>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container sx={{ mt: 8, bgcolor: "white" }}>
        <section
          id="hero"
          style={{
            height: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: -25,
            marginRight: -25,
            backgroundImage: "url('images/home/bcbg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid2 container spacing={3} alignItems="center" marginX={5}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "grey" }}
                  fontWeight="bold"
                >
                  {`Hello, I'm`}
                </Typography>
                <Typography variant="h1" fontWeight="bold" fontSize={50}>
                  Chi Nguyen - Brian
                </Typography>
                <Typography variant="h5">Website Developer</Typography>
                <Link href="/cv" passHref>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      py: 1.5,
                      px: 5,
                      bgcolor: "#7f4ed5",
                      borderRadius: 10,
                    }}
                  >
                    View CV
                  </Button>
                </Link>
              </motion.div>
            </Grid2>
            <Grid2
              size={{ xs: 0, md: 6 }}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Image
                width={750}
                height={450}
                src="/images/home/bc.png"
                style={{ width: "75%", height: "auto" }}
                alt="Chi Nguyen - Brian Portfolio"
                loading="lazy"
              />
            </Grid2>
          </Grid2>
        </section>

        <section id="about" style={{ padding: "60px 0" }}>
          <Grid2 container spacing={3} alignItems="center" marginX={5}>
            <Grid2
              size={{ xs: 12, md: 4 }}
              display="flex"
              justifyContent="center"
            >
              {/* Phần hình ảnh */}
              <Image
                src="/images/home/profile.jpg"
                width={250}
                height={250}
                alt="Profile"
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                }}
                loading="lazy"
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 8 }}>
              <Typography variant="h5" fontWeight="bold">
                Chi Nguyen - Brian
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Website Developer
              </Typography>
              <Typography variant="body1">
                I am a Website Developer with 3 years of experience,
                specializing in building modern, high-performance web
                applications. Proficient in React and Node.js, I focus on
                creating seamless user experiences and optimizing website
                efficiency. Passionate about technology, I continuously learn
                and refine my skills to deliver top-quality digital solutions
                that meet client needs.
              </Typography>
              <Typography variant="body1">
                Looking for a professional and well-optimized website? Let’s
                connect!
              </Typography>
              <Link href="/cv" passHref>
                <Button
                  variant="outlined"
                  sx={{
                    mt: 2,
                    borderColor: "#7f4ed5",
                    color: "#7f4ed5",
                    borderRadius: 10,
                    "&:hover": { backgroundColor: "#7f4ed5", color: "white" },
                  }}
                >
                  View CV
                </Button>
              </Link>
            </Grid2>
          </Grid2>
        </section>

        <section id="services" style={{ padding: "60px 0" }}>
          <Box
            sx={{
              display: "block",
              width: 100,
              height: 10,
              bgcolor: "#7f4ed5",
              alignItems: "center",
              marginX: "auto",
              marginY: 2,
            }}
          />
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="textSecondary"
            align="center"
          >
            Service
          </Typography>
          <Typography
            variant="h6"
            fontWeight="bold"
            align="center"
            sx={{ pb: 6 }}
          >
            What I Do
          </Typography>
          <Grid2 container spacing={3}>
            {[
              {
                title: "UI/UX Design",
                desc: "Creating user-friendly interfaces.",
                icon: <DesignServices fontSize="large" />,
              },
              {
                title: "Website Development",
                desc: "Building high-performance websites.",
                icon: <Code fontSize="large" />,
              },
              {
                title: "SEO Optimization",
                desc: "Improving search engine rankings.",
                icon: <TrendingUp fontSize="large" />,
              },
            ].map((service, index) => (
              <Grid2 size={{ xs: 12, md: 4 }} key={index}>
                <motion.div whileHover={{ scale: 1.03 }}>
                  <Card
                    elevation={3}
                    sx={{
                      overflow: "hidden",
                      position: "relative",
                      height: "200px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "20px",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                      "&:hover": { backgroundColor: "#7f4ed5", color: "white" },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{service.icon}</Box>
                    <Typography variant="h6">{service.title}</Typography>
                  </Card>
                </motion.div>
              </Grid2>
            ))}
          </Grid2>
        </section>

        <section id="myprojects" style={{ padding: "60px 0" }}>
          <Box
            sx={{
              display: "block",
              width: 100,
              height: 10,
              bgcolor: "#7f4ed5",
              alignItems: "center",
              marginX: "auto",
              marginY: 2,
            }}
          />
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="textSecondary"
            align="center"
          >
            My Projects
          </Typography>
          <Typography
            variant="h6"
            fontWeight="bold"
            align="center"
            sx={{ pb: 6 }}
          >
            What I Did?
          </Typography>
          <Grid2 container spacing={3}>
            {[
              {
                title: "Shop, Orders Management",
                img: "/images/projects/adminDashboard.png",
              },
              {
                title: "Online Shopping Website",
                img: "/images/projects/ecommerce.png",
              },
              { title: "Blog website", img: "/images/projects/blog.png" },
            ].map((project, index) => (
              <Grid2 size={{ xs: 12, md: 4 }} key={index}>
                <motion.div whileHover={{ scale: 1.03 }} onClick={() => handleProject(index)} onHoverStart={() => handleProject(index)}>
                  <Card
                    elevation={3}
                    sx={{
                      overflow: "hidden",
                      position: "relative",
                      width: "100%",
                      paddingTop: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      src={project.img}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      loading="lazy"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={activeIndex == index ? { opacity: 1 } : { opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#7f4ed5cc",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        {project.title}
                      </Typography>
                    </motion.div>
                  </Card>
                </motion.div>
              </Grid2>
            ))}
          </Grid2>
        </section>

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
            <ScrollLink to="contact" smooth={true}>
              Hire me
            </ScrollLink>
          </Button>
        </Box>

        <section id="blog" style={{ padding: "60px 0" }}>
          <Box
            sx={{
              display: "block",
              width: 100,
              height: 10,
              bgcolor: "#7f4ed5",
              alignItems: "center",
              marginX: "auto",
              marginY: 2,
            }}
          />
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="textSecondary"
            align="center"
          >
            Blog
          </Typography>
          <Typography
            variant="h6"
            fontWeight="bold"
            align="center"
            sx={{ pb: 6 }}
          >
            Recent Posts
          </Typography>
          <Grid2 container spacing={3}>
            {[
              {
                title: "How to Optimize API for a Web Project?",
                img: "/images/blogs/api.jpg",
                url: "how-to-optimize-api-for-a-web-project",
                content:
                  "In a web project, APIs play a crucial role in communication between the frontend and backend. An optimized API not only makes the application run faster but also enhances user experience and reduces system load. To achieve this, proper API design, performance improvements, security measures, and continuous monitoring are essential.",
              },
              {
                title: "How to Improve Website Performance and Speed",
                img: "/images/blogs/losscustomer.png",
                url: "how-to-improve-website-performance-and-speed",
                content:
                  "Website performance and speed are critical factors that directly impact user experience, SEO rankings, and conversion rates. A slow website can frustrate users, increase bounce rates, and lead to lost revenue. Optimizing website performance requires a strategic approach, focusing on a few key areas that significantly influence load times and responsiveness.",
              },
              {
                title: "How a Slow Website Can Cost You Customers",
                img: "/images/blogs/webspeed.jpg",
                url: "how-a-slow-website-can-cost-you-customers",
                content:
                  "A slow website frustrates visitors, lowers search rankings, and reduces conversions. Learn how speed impacts your business and how to fix it.",
              },
            ].map((blog, index) => (
              <Grid2 size={{ xs: 12, md: 4 }} key={index}>
                <Card elevation={3} sx={{ overflow: "hidden" }}>
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    width={400}
                    height={250}
                    style={{ width: "100%", height: "auto" }}
                    objectFit="cover"
                    loading="lazy"
                  />
                  <Box sx={{ padding: 2 }}>
                    <Typography variant="h6">{blog.title}</Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        overflow: "hidden",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {blog.content}...
                    </Typography>
                    <a
                      href={"/blog/" + blog.url}
                      style={{ display: "block", marginTop: 5 }}
                    >
                      <Typography variant="caption" color="primary">
                        Read More...
                      </Typography>
                    </a>
                  </Box>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </section>

        <section id="contact" style={{ padding: "60px 0" }}>
          <Box
            sx={{
              display: "block",
              width: 100,
              height: 10,
              bgcolor: "#7f4ed5",
              alignItems: "center",
              marginX: "auto",
              marginY: 2,
            }}
          />
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="textSecondary"
            align="center"
          >
            Contact Me
          </Typography>
          <Typography
            variant="h6"
            fontWeight="bold"
            align="center"
            sx={{ pb: 6 }}
          >
            Get In Touch
          </Typography>
          <Grid2 container spacing={12}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Container maxWidth="sm" sx={{ textAlign: "center" }}>
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
              </Container>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="h5" fontWeight="bold">
                Chi Nguyen - Brian
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Website Developer
              </Typography>
              <Typography variant="body1" fontWeight="bold" sx={{ mt: 4 }}>
                Phone
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                (+84) 945 623 116
              </Typography>
              <Typography variant="body1" fontWeight="bold" sx={{ mt: 2 }}>
                Email
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                hello@briancode.dev
              </Typography>
              <Typography variant="body1" fontWeight="bold" sx={{ mt: 2 }}>
                Website
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                https://briancode.dev
              </Typography>
              <Typography variant="body1" fontWeight="bold" sx={{ mt: 2 }}>
                Links
              </Typography>
              <Box sx={{ mt: 1 }}>
                <IconButton
                  href="https://github.com/chinguyen-brian"
                  target="_blank"
                  color="inherit"
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/NguyenBrianCode"
                  target="_blank"
                  color="inherit"
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  href="https://x.com/BrianCodeDev"
                  target="_blank"
                  color="inherit"
                >
                  <Twitter />
                </IconButton>
              </Box>
            </Grid2>
          </Grid2>
        </section>
      </Container>
    </div>
  );
}
