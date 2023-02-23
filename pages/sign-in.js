import SignIn from '@/components/LandingPage/SignIn'
import { client } from '@/lib/client'
import React from 'react'

const signIn = ({data}) => {
  return (
    <SignIn data={data.length && data[0]} />
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "applicantSignIn"]'
  const data = await client.fetch(query)

  return {
    props: {
      data
    }
  }
}


export default signIn