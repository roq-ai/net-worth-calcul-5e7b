import * as yup from 'yup';

export const financialInformationValidationSchema = yup.object().shape({
  financial_data: yup.string().required(),
  organization_id: yup.string().nullable().required(),
  input_by_user_id: yup.string().nullable().required(),
});
