import React, { useState } from 'react';
import { HStack, VStack, Image, Heading, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaUserCircle } from 'react-icons/fa';
import '../App.css';

const Card = ({ title, description, imageUrl }) => {
  const [imgSrc, setImgSrc] = useState(imageUrl);

  const handleError = () => {
    setImgSrc(null); // Fallback to null if image fails to load
  };

  return (
    <HStack className="card" spacing={4} p={4} border="1px solid #ddd" borderRadius="8px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" transition="transform 0.3s, box-shadow 0.3s" _hover={{ transform: "translateY(-5px)", boxShadow: "0 8px 10px rgba(0, 0, 0, 0.15)" }}>
      {imgSrc ? (
        <Image src={imgSrc} alt={title} boxSize="100px" borderRadius="8px" onError={handleError} />
      ) : (
        <FaUserCircle size={100} color="#ddd" />
      )}
      <VStack align="start">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack spacing={1}>
          <Text as="span" color="#007bff" fontWeight="bold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#007bff" />
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Card;
