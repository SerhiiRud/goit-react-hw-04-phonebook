import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Field, FormField } from './Filter.styled';

export const Filter = ({ onSearch }) => {
  return (
    <Formik>
      <>
        <FormField htmlFor="filter">Find contacts by name</FormField>
        <Field type="text" name="filter" onChange={onSearch}></Field>
      </>
    </Formik>
  );
};

Filter.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
