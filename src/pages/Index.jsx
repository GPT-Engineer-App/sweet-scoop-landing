import { Container, Text, VStack, Box, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { FaIceCream } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Ice Cream Delight!
          </Heading>
          <Text fontSize="xl">The best ice cream in town, made with love and the finest ingredients.</Text>
        </Box>
        <Image src="/images/ice-cream-banner.jpg" alt="Ice Cream Banner" borderRadius="lg" boxShadow="lg" />
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Our Flavors
          </Heading>
          <Text fontSize="md">From classic vanilla to exotic mango, we have a flavor for everyone!</Text>
        </Box>
        <Flex wrap="wrap" justify="center" spacing={4}>
          <Box p={4} textAlign="center">
            <FaIceCream size="3em" />
            <Text mt={2}>Vanilla</Text>
          </Box>
          <Box p={4} textAlign="center">
            <FaIceCream size="3em" />
            <Text mt={2}>Chocolate</Text>
          </Box>
          <Box p={4} textAlign="center">
            <FaIceCream size="3em" />
            <Text mt={2}>Strawberry</Text>
          </Box>
          <Box p={4} textAlign="center">
            <FaIceCream size="3em" />
            <Text mt={2}>Mango</Text>
          </Box>
        </Flex>
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Visit Us
          </Heading>
          <Text fontSize="md">123 Ice Cream Lane, Sweet City</Text>
        </Box>
        <Button colorScheme="teal" size="lg" mt={8}>
          Order Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;