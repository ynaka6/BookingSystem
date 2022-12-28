import Head from 'next/head'
import { ContentLayout } from '@/components/Layout'

export const Setting = () => {
  const title = 'Setting'
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
