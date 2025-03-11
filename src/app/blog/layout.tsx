import { AppBar, Box, Breadcrumbs, Card, Container, Grid2, Link, Toolbar, Typography } from "@mui/material";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "white", color: "black", boxShadow: 1 }}
        elevation={0}
      >
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" component="a" href="/">
              BrianCode
            </Typography>
            <Box gap={3} display="flex">
              <Typography color="inherit">Blog</Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Breadcrumbs aria-label="breadcrumb" sx={{mt:10}}>
          <Link color="inherit" href="/">
          Home
          </Link>
          <Typography color="textPrimary">Blog</Typography>
        </Breadcrumbs>
      </Container>
     
      <div>{children}
      <Container maxWidth="md" sx={{bgcolor:'white'}}>
      <section id="blog" style={{ padding: "60px 0 30px" }}>
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
            variant="h5"
            fontWeight="bold"
            align="center"
            sx={{ pb: 3 }}
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
      </Container>
      
      </div>
    </div>
  );
}
