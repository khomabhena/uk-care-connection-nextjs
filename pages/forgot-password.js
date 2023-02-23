import ForgotPassword from '@/components/LandingPage/ForgotPassword'
import { client } from '@/lib/client'
import React from 'react'

const forgotPassword = ({data}) => {
  return (
    <ForgotPassword data={data.length && data[0]} />
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "forgotPassword"]'
    const data = await client.fetch(query)
  
    return {
      props: {
        data
      }
    }
  }

export default forgotPassword