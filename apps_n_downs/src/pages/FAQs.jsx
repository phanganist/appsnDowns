import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: "We offer a wide range of services including web development, mobile app development, cloud solutions, and custom software development tailored to your business needs.",
  },
  {
    question: 'How long does it take to complete a project?',
    answer: "Project timelines vary depending on the scope and complexity. We'll provide you with a detailed timeline during our initial consultation.",
  },
  {
    question: 'Do you provide ongoing support?',
    answer: "Yes, we offer comprehensive support and maintenance services to ensure your applications run smoothly after deployment.",
  },
  {
    question: 'What is your pricing structure?',
    answer: "Our pricing is project-based and depends on your specific requirements. Contact us for a detailed quote tailored to your needs.",
  },
  {
    question: 'Do you work with international clients?',
    answer: "Yes, we work with clients globally and have experience in managing international projects effectively.",
  },
];

function FAQs() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Frequently Asked Questions
      </Typography>
      <Box sx={{ mt: 4 }}>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}

export default FAQs; 