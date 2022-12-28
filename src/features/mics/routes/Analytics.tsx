import Head from 'next/head'
import { ContentLayout } from '@/components/Layout'

export const Analytics = () => {
  const title = 'Analytics'
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ContentLayout title={title}>
        {/** Analytics */}
      </ContentLayout>
    </>
  )
}
