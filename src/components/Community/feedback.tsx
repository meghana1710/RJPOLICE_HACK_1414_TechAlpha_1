
// FeedbackPage.tsx
import React from "react";
import { Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

const FeedbackPage: React.FC = () => {
  
  return (
    <Box>
      <Text fontSize="xl" mb={4}>
        Feedback Page
      </Text>
      <FormControl>
        <FormLabel>Write your feedback:</FormLabel>
        <Input type="textarea" placeholder="Type your feedback here" />
      </FormControl>
      <Button mt={4} colorScheme="teal" >
        Submit Feedback
      </Button>
    </Box>
  );
};

export default FeedbackPage;