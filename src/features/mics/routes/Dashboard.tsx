import Head from 'next/head'
import Button from '@mui/material/Button'
import { ContentLayout } from '@/components/Layout'

export const Dashboard = () => {
  const title = 'Home'
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ContentLayout title={title}>
        <Button variant="contained">Hello World</Button>
      </ContentLayout>
    </>
  )
}
