export const INPUTS = [
  {
    label: "Email *",
    placeholder: "example@mail.com",
    type: "email",
    name: "email",
    validations: {
      required: "Please enter your email.",
    },
  },
  {
    label: "Listing code *",
    placeholder: "4 digit number",
    type: "number",
    name: "listingCode",
    validations: {
      required: "Please enter 4 digit number.",
      maxLength: {
        value: 4,
        message: "Entered number can't have more than 4 digits.",
      },
      minLength: {
        value: 4,
        message: "Entered number can't have less than 4 digits.",
      },
    },
  },
  {
    label: "Name",
    placeholder: "John Smith",
    type: "text",
    name: "name",
  },
  {
    label: "Message *",
    placeholder: "Enter your message",
    type: "textarea",
    name: "message",
    validations: {
      required: "Please enter your message.",
    },
  },
];
