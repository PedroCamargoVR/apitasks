import { custom } from "joi";

type CustomMessagesProps = {
  'string.empty': string,
  'any.required': string,
  'string.email': string,
  'number.integer()': string,
  'number.min(1)': string,
  'number.max(4)': string,
}

function customMessages(nameField: string): CustomMessagesProps {
  return {
    'string.empty': `The ${nameField} field should not be empty.`,
    'any.required': `The ${nameField} field is required.`,
    'string.email': `The email provide in the ${nameField} field is not valid email.`,
    'number.integer()': `The number provide in the ${nameField} field must be integer between 1 and 4`,
    'number.min(1)': `The number provided in the ${nameField} field must be greater than 0`,
    'number.max(4)': `The number provided in the ${nameField} field must be less than 5`,
  };
}

export default customMessages;
