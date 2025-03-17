import ModalComponent from "@/components/modal";
import { Download } from "@mui/icons-material";
import { Button, Container,  Paper } from "@mui/material";
import Image from "next/image";

  export default function CVViewer() {
    return (
        <Container maxWidth="md" style={{ textAlign: "center", padding: "20px 20px 20px 20px", minHeight:'calc(100vh - 225px)', marginTop:0 }}>
            <Button
            variant="contained"
            startIcon={<Download />}
            href="/cv.pdf"
            download="ChiNguyen-BrianCode-CV.pdf"
            sx={{    
              top:-50,
              bgcolor: "#7f4ed5",
              float:'right',
              borderRadius: 10, }}
          >
            Download CV
          </Button>
          <Paper elevation={3} style={{ padding: "10px", backgroundColor: "#fff"}}>
          
          <Image src="/images/cv/cv_page-0001.jpg" alt="BrianCode CV" width={1140} height={1615} style={{width:'100%', height:'auto'}}/>
          <Image src="/images/cv/cv_page-0002.jpg" alt="BrianCode CV" width={1140} height={1615} style={{width:'100%', height:'auto'}}/>
          </Paper>
          <Button
            variant="contained"
            startIcon={<Download />}
            href="/cv.pdf"
            download="ChiNguyen-BrianCode-CV.pdf"
            sx={{    
              top:10,
              bgcolor: "#7f4ed5",
              float:'right',
              borderRadius: 10, }}
          >
            Download CV
          </Button>
          <ModalComponent/>
        
        </Container>
        
    );
  }
  