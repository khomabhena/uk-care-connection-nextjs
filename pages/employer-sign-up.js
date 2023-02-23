import EmployerSignUp from '@/components/LandingPage/EmployerSignUp'
import { client } from '@/lib/client'
import React from 'react'

const employerSignUp = ({data}) => {
  return (
    <EmployerSignUp data={data.length && data[0]} />
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "employerSignUp"]'
    const data = await client.fetch(query)
    return {
      props: {
        data
      }
    }
}

export default employerSignUp