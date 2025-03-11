import { AppBar, Box, Breadcrumbs, Container, Link, Toolbar, Typography } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brian Nguyen Blog - Website Develop Knowledges",
  description:
    "A blog sharing web development insights, tutorials, and best practices on React, Node.js, and modern frameworks.",
  openGraph: {
    url: "briancode.dev/blog",
    title: "Brian Nguyen Blog - Website Develop Knowledges",
    description:
      "Portfolio of a web developer showcasing projects, skills, and expertise in React, Node.js, and modern web technologies.",
    images: "",
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
