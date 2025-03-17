import { AppBar, Box, Breadcrumbs, Container, Link, Toolbar, Typography } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My CV - Web Developer | Brian Code",
  description:
    "Explore my CV to learn more about my skills, experience, and projects as a Web Developer specializing in React and Node.js.",
  openGraph: {
    url: "briancode.dev/cv",
    title: "My CV - Web Developer | Brian Code",
    description:
      "Explore my CV to learn more about my skills, experience, and projects as a Web Developer specializing in React and Node.js.",
    images: [
      {
        url: 'https://briancode.dev/images/home/bc.png',
        width: 700,
        height: 450,
        alt: 'BrianCode',
      },
    ],
    type:'website',
  },
};

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
              <Typography color="inherit">My CV</Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{mt:10}}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
          Home
          </Link>
          <Typography color="textPrimary">CV</Typography>
        </Breadcrumbs>
      </Container>
      <div>{children}</div>
    </div>
  );
}
