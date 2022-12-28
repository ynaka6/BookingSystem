import * as React from 'react'
import Box from '@mui/material/Box'

type AuthLayoutProps = {
  children: React.ReactNode
}

export const AuthLayout = ({
  children,
}: AuthLayoutProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  )
}
