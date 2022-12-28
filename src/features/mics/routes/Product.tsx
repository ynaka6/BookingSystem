import Head from 'next/head'
import { ContentLayout } from '@/components/Layout'

export const Product = () => {
  const title = 'Products'
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
