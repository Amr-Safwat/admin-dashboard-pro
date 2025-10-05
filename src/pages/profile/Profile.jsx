import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  Snackbar,
  Stack,
} from '@mui/material';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {SnackbarProvider, useSnackbar} from 'notistack';

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    phoneNumber: yup.number().required(),
    addressOne: yup.string().required(),
    addressTwo: yup.string().required(),
  })
  .required();

export default function Profile() {
  const [userInput, setUserInput] = React.useState('');

  // Start Snackbar
  const {enqueueSnackbar} = useSnackbar();

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('Your account has been createa.', { variant });
  };
  // End Snackbar //

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack sx={{flexDirection: 'row', gap: 2}}>
          <TextField
            {...register('firstName')}
            error={errors.firstName ? true : false}
            helperText={errors.firstName ? 'This field is required *' : null}
            sx={{flex: 1}}
            label="First Name"
            variant="outlined"
          />
          <TextField
            {...register('lastName')}
            error={errors.lastName ? true : false}
            helperText={errors.firstName ? 'This field is required *' : null}
            sx={{flex: 1}}
            label="Last Name"
            variant="outlined"
          />
        </Stack>
        <TextField
          {...register('email')}
          error={errors.email ? true : false}
          helperText={errors.email ? 'Email is required *' : null}
          label="Email"
          variant="outlined"
        />
        <TextField
          {...register('phoneNumber')}
          error={errors.phoneNumber ? true : false}
          helperText={errors.phoneNumber ? 'This field is required *' : null}
          label="Phone Number"
          variant="outlined"
        />
        <TextField
          {...register('addressOne')}
          error={errors.addressOne ? true : false}
          helperText={errors.addressOne ? 'This field is required *' : null}
          label="Address 1"
          variant="outlined"
        />
        <TextField label="Address 2" variant="outlined" />
        <FormControl sx={{width: '50%'}}>
          <InputLabel>Select</InputLabel>
          <Select value={userInput} label="Select" onChange={handleChange}>
            <MenuItem value={'Admin'}>Admin</MenuItem>
            <MenuItem value={'Manager'}>Manager</MenuItem>
            <MenuItem value={'User'}>User</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          sx={{width: '70%', mx: 'auto', my: 5}}
          variant="contained"
          onClick={handleClickVariant('success')}
        >
          Create Account
        </Button>
      </Box>
    </>
  );
}
