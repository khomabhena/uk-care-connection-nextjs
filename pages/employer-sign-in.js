import EmployerSignIn from '@/components/LandingPage/EmployerSignIn'
import { client } from '@/lib/client'
import React from 'react'

const employerSignIn = ({data}) => {
  return (
    <EmployerSignIn data={data.length && data[0]} />
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "employerSignIn"]'
    const data = await client.fetch(query)
    return {
      props: {
        data
      }
    }
}


export default employerSignIn