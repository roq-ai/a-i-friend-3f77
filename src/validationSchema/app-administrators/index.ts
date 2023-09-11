import * as yup from 'yup';

export const appAdministratorValidationSchema = yup.object().shape({
  experience: yup.number().integer().required(),
  specialization: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
