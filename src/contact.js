import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const Contact = () => {
  console.log(process.env.REACT_APP_SERVICE_ID);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast("Message sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    const { name, email, message } = data;
    try {
      const templateParams = {
        name,
        email,
        message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <Title>Contact</Title>
      <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Name
          type="text"
          name="name"
          {...register("name", {
            required: {
              value: true,
              message: "Please enter your name",
            },
            maxLength: {
              value: 30,
              message: "Please use 30 characters or less",
            },
          })}
          placeholder="Name"
        ></Name>
        {errors.name && (
          <span className="errorMessage">{errors.name.message}</span>
        )}

        <Email
          type="email"
          name="email"
          {...register("email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
          placeholder="Email address"
        ></Email>
        {errors.email && (
          <span className="errorMessage">
            Please enter a valid email address
          </span>
        )}

        {/* Row 3 of form */}

        <TextArea
          rows={5}
          name="message"
          {...register("message", {
            required: true,
          })}
          placeholder="Message"
        ></TextArea>
        {errors.message && (
          <span className="errorMessage">Please enter a message</span>
        )}

        <Send type="submit">Submit</Send>
      </Form>
      <ToastContainer></ToastContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px 30px;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h2``;

const Form = styled.form`
  margin: auto;
  text-align: center;
  width: 40%;
`;
const Name = styled.input`
  width: 35%;
  margin-right: 5%;
`;
const Email = styled.input`
  width: 60%;
`;
const TextArea = styled.textarea`
  display: block;
  width: 100%;
`;
const Send = styled.button`
  width: 30%;
  margin-top: 10px;
`;

export default Contact;
