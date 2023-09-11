import * as yup from 'yup';

export const feedbackValidationSchema = yup.object().shape({
  content: yup.string().required(),
  rating: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
