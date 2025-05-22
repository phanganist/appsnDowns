import { Container, Typography, Box, Paper } from '@mui/material';

function PrivacyPolicy() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Privacy Policy
      </Typography>
      
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          1. Information We Collect
        </Typography>
        <Typography paragraph>
          We collect information that you provide directly to us, including but not limited to your name, email address, and any other information you choose to provide.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          2. How We Use Your Information
        </Typography>
        <Typography paragraph>
          We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          3. Information Sharing
        </Typography>
        <Typography paragraph>
          We do not share your personal information with third parties except as described in this privacy policy.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          4. Data Security
        </Typography>
        <Typography paragraph>
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access or disclosure.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          5. Your Rights
        </Typography>
        <Typography paragraph>
          You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your information.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          6. Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions about this Privacy Policy, please contact us at privacy@innotech-apps.com.
        </Typography>
      </Paper>
    </Container>
  );
}

export default PrivacyPolicy; 