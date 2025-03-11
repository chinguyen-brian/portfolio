'use client';

import { Box, Container, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box component="footer" sx={{
      py: 1, px: 2, mt: 4,
      textAlign: "center",
      backgroundColor: "#f8f8f8",
      borderTop: "1px solid #ddd"
    }}>
      <Container>
        <Typography variant="body1" color="textSecondary">
          © {new Date().getFullYear()} Chi Nguyen - Brian . BrianCode . All rights reserved.
        </Typography>
        <Box sx={{ mt: 1 }}>
          <IconButton href="https://github.com/chinguyen-brian" target="_blank" color="inherit">
            <GitHub />
          </IconButton>
          <IconButton href="https://linkedin.com/in/NguyenBrianCode" target="_blank" color="inherit">
            <LinkedIn />
          </IconButton>
          <IconButton href="https://x.com/BrianCodeDev" target="_blank" color="inherit">
            <Twitter />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}