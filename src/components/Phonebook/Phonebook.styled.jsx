import styled from '@emotion/styled';
import {
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
  Field as FormikField,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormField = styled.label`
  margin-bottom: 8px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  margin-left: 4px;
  font-size: 14px;
  color: red;
  max-width: 400px;
`;

export const Field = styled(FormikField)`
  margin-bottom: 24px;
  width: 400px;
`;

export const FormButton = styled.button`
  width: 100px;
`;
