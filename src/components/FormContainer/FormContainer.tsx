import React from 'react';
import { Form } from 'react-final-form';

interface Props {
  onSubmit: (submitDetails: any) => any;
  validate?: (validateDetails: any) => Promise<any>;
  children?: React.ReactNode;
  initial?: any;
  className?: string;
}

export const FormContainer: React.FC<Props> = ({
  onSubmit,
  validate,
  children,
  initial,
  ...rest
}) => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    initialValues={initial}
    render={data => {
      return (
        <form onSubmit={data.handleSubmit} {...rest}>
          {children}
        </form>
      );
    }}
  />
);
