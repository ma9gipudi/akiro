import { Box, Button, Card, CardContent, CircularProgress, Grid, Step, StepLabel, Stepper } from '@mui/material';

import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React, { ReactNode, useState } from 'react';
import { mixed, number, object, string } from 'yup';

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

export default function CreateCompany() {
  return (
    <Card>
      <CardContent>
        <FormikStepper
          initialValues={{
            companyName: '',
            countryName: '',
            millionaire: false,
            capital: 0,
            description: '',
          }}
          onSubmit={async (values) => {
            await sleep(3000);
            console.log('values', values);
          }}
        >
          <FormikStep label="Personal Data" validationSchema={object({ companyName: string().required() })}>
            <Box paddingBottom={2}>
              <Field fullWidth name="companyName" component={TextField} label="Company Name" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="countryName" component={TextField} label="Country Name" />
            </Box>
            <Box paddingBottom={2}>
              <Field name="millionaire" type="checkbox" component={CheckboxWithLabel} Label={{ label: 'checkbox' }} />
            </Box>
          </FormikStep>
          <FormikStep
            label="Add your team"
            validationSchema={object({
              capital: mixed().when('millionaire', {
                is: true,
                then: number().required().min(1_000_000, 'Because you said you are a millionaire you need to have 1 million'),
                otherwise: number().required(),
              }),
            })}
          >
            <Box paddingBottom={2}>
              <Field fullWidth name="capital" type="number" component={TextField} label="Seed capital" />
            </Box>
          </FormikStep>
          <FormikStep
            label="Currency"
          >
            <Box paddingBottom={2}>
              <Field fullWidth name="currency" type="number" component={TextField} label="Reporting Currency" />
            </Box>
          </FormikStep>

          <FormikStep label="Review and submit">
            <Box paddingBottom={2}>
              <Field fullWidth name="description" component={TextField} label="Description" />
            </Box>
          </FormikStep>
        </FormikStepper>
      </CardContent>
    </Card>
  );
}

export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children as ReactNode[]) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);

          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={step > index || completed}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button disabled={isSubmitting} variant="contained" color="primary" onClick={() => setStep((s) => s - 1)}>
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
