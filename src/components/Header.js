import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { HStack, Box } from '@chakra-ui/react';
import '../App.css';

const socials = [
  { href: "https://github.com/ongunakaycom", icon: faGithub },
  { href: "https://www.linkedin.com/in/ongunakay/", icon: faLinkedin }
];

const Header = () => {
  return (
    <header className="header">
      <nav>
        <HStack spacing="24px" justifyContent="space-between" width="100%">
          <Box>
            <HStack spacing="24px">
              {socials.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </Box>
          <Box>
            <ul>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact Me</Link></li>
            </ul>
          </Box>
        </HStack>
      </nav>
    </header>
  );
};

export default Header;
