import * as yup from 'yup';

const profileSchema = yup.object().shape({
  contactName: yup
    .string()
    .trim()
    .min(2, 'The name must be at least two characters long')
    .required('Please enter your name'),
  organizationName: yup
    .string()
    .trim()
    .min(3, 'Organization name is too short'),
  organizationWebsite: yup.string(),
  contactPhone: yup
    .string()
    .trim()
    .min(6, 'Phone number is too short')
    .required('Please enter your contact phone'),
  email: yup
    .string()
    .trim()
    .min(5, 'E-mail must be at least 5 characters long')
    .required('E-mail is required')
    .email('Please provide valid e-mail address'),
  address: yup
    .string()
    .required('Please enter your address')
    .min(6, 'Address is too short'),
  country: yup
    .string()
    .min(2, 'Country must be at least 2 characters long')
    .required('Please enter your country'),
});

export default profileSchema;
