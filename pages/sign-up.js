import SignUp from '@/components/LandingPage/SignUp'
import { client } from '@/lib/client'
import React from 'react'

const signUp = ({data}) => {
  return (
    <SignUp data={data.length && data[0]} />
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "applicantSignUp"]'
    const data = await client.fetch(query)
  
    return {
      props: {
        data
      }
    }
  }

export default signUp