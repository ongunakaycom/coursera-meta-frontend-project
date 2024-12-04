import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { HStack, VStack, FormControl, FormErrorMessage, Input, Textarea, Button, Select } from '@chakra-ui/react';
import { useAlertContext } from '../contexts/alertContext';
import { useSubmit } from '../hooks/useSubmit';
import '../App.css';

const ContactMeSection = () => {
  const { submit, isLoading } = useSubmit();
  const { onOpen } = useAlertContext();

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    type: Yup.string().required('Type of enquiry is required'),
    comment: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const response = await submit(values);
      if (response.type === 'success') {
        onOpen({
          type: 'success',
          message: `Thank you, ${values.firstName}, for your message!`,
        });
        resetForm();
      } else {
        onOpen({
          type: 'error',
          message: response.message,
        });
      }
      setSubmitting(false);
    },
  });

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4}>
          <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
            <Input
              type="text"
              placeholder="Your Name"
              {...formik.getFieldProps('firstName')}
            />
            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
            <Input
              type="email"
              placeholder="Your Email"
              {...formik.getFieldProps('email')}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched.type && !!formik.errors.type}>
            <Select
              placeholder="Type of enquiry"
              {...formik.getFieldProps('type')}
            >
              <option value="freelance">Freelance project proposal</option>
              <option value="job">Job opportunity</option>
              <option value="other">Other</option>
            </Select>
            <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
            <Textarea
              placeholder="Your Message"
              {...formik.getFieldProps('comment')}
            />
            <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            isLoading={formik.isSubmitting || isLoading}
            colorScheme="blue"
          >
            Send
          </Button>
        </VStack>
      </form>
    </section>
  );
};

export default ContactMeSection;
