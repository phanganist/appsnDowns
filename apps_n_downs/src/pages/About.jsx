import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    bio: 'With over 15 years of experience in software development and business management.',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    bio: 'Expert in cloud architecture and scalable solutions.',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    bio: 'Specialized in full-stack development and system architecture.',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];

function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Company Overview */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          About InnoTech Apps
        </Typography>
        <Typography variant="h6" paragraph align="center" color="text.secondary">
          Transforming Ideas into Digital Reality
        </Typography>
        <Typography paragraph>
          Founded in 2020, InnoTech Apps has been at the forefront of digital innovation,
          helping businesses transform their ideas into powerful digital solutions. Our
          team of experts combines technical excellence with creative problem-solving
          to deliver exceptional results.
        </Typography>
        <Typography paragraph>
          We believe in building long-term relationships with our clients and
          providing solutions that not only meet but exceed their expectations.
          Our commitment to quality and innovation has made us a trusted partner
          for businesses worldwide.
        </Typography>
      </Box>

      {/* Team Section */}
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
        Our Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
                />
                <Typography variant="h5" component="h3" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography color="text.secondary">
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default About; 