import { Button, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Field, Form, Formik } from 'formik';
import { NextPage } from 'next';
import { useAuth0 } from '@auth0/auth0-react';

const SignUpPage: NextPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Stack direction="column">
      Sign up
      <Box>
        <Formik
          initialValues={{}}
          onSubmit={(values: any, { setSubmitting }) => {
            console.log(values);
            if (values.keymanager === 'mb') {
              loginWithRedirect();
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Typography>
                <Field type="radio" name="keymanager" value="self" />
                I'll handle my keys
              </Typography>
              <Typography>
                <Field type="radio" name="keymanager" value="mb" />
                Moonbase will manage my keys
              </Typography>
              <Button type="submit" disabled={isSubmitting}>
                Next
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Stack>
  );
};

export default SignUpPage;
