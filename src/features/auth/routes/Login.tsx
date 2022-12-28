import Head from 'next/head'
import { pink } from '@mui/material/colors';
import Button from '@mui/material/Button'
import { Box, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography, useMediaQuery } from '@mui/material'
import { AuthLayout } from '@/components/Layout'
import LockIcon from '@mui/icons-material/Lock';
import { useTheme } from '@mui/material'
import { useRouter } from 'next/router';
import { FormEvent } from 'react';

export const Login = () => {
  const router = useRouter()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const title = 'Login'


  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    router.push('/');
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AuthLayout>
        <Box
          component='form'
          sx={{
            textAlign: 'center',
            maxWidth: '600px',
            bgcolor: '#fff',
            padding: matches ? '100px 50px' : '50px 25px',
          }}
          onSubmit={onSubmit}
        >

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <LockIcon sx={{ color: pink[500],  fontSize: 50 }} />
              <Typography
                variant={'h6'}
                component='div'
                sx={{ color: 'primary', fontWeight: 'bold' }}
              >
                LOGIN
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                placeholder='Email'
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                placeholder='Password'
                type='password'
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label='Remember me'
                />
              </FormGroup>
            </Grid>

            <Grid item xs={12}>
              <Button type='submit' variant='contained' size="large" fullWidth>
                LOGIN
              </Button>
            </Grid>
          </Grid>
        </Box>
      </AuthLayout>
    </>
  )
}
