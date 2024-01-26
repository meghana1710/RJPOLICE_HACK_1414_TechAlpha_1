import {
  Button,
  Flex,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, {BaseSyntheticEvent,useState} from "react";
import { GiCheckedShield } from "react-icons/gi";
import axios from 'axios';
const Premium: React.FC = () => {
  const bg = useColorModeValue("white", "#1A202C");
  const borderColor = useColorModeValue("gray.300", "#2D3748");
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  
  const sendMessage = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);
    const res = await fetch('/api/send-sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone: phone, message: message }),
    });
    const apiResponse = await res.json();

    if (apiResponse.success) {
      setSuccess(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };
  return (
    <Flex
      direction="column"
      bg={bg}
      borderRadius={4}
      cursor="pointer"
      p="12px"
      border="1px solid"
      borderColor={borderColor}
    >
      <Flex mb={2}>
        <Icon as={GiCheckedShield} fontSize={26} color="black" mt={2} />
        <Stack spacing={1} fontSize="9pt" pl={2}>
          <Text fontWeight={600}>Share your Opinion</Text>
          
        </Stack>
      </Flex>
      <Button height="30px" bg="black">
        Submit Feedback
      </Button>
      {/* <form  onSubmit={sendMessage}>
        
          <label htmlFor='phone'>Phone Number</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Phone Number'
            
            required
          />
        
        <div>
          <label htmlFor='message'>Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            id='message'
            required
            placeholder='Message'
            
          ></textarea>
        </div>
        <button disabled={loading} type='submit' >
          Send Message
        </button>
        {success && (
          <p >Message sent successfully.</p>
        )}
        {error && (
          <p>
            Something went wrong. Please check the number.
          </p>
        )}
      </form>  */}
      
    </Flex>
  );
};
export default Premium;
