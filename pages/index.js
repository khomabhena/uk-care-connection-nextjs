import LandingPage from '@/components/LandingPage'
import { client } from '@/lib/client'
import Head from 'next/head'


export default function Home({about, banner, login, navbar, services, signUp}) {
  return (
    <>
      <Head>
        <title>Uk Care Connection</title>
        <meta name="description" content="UK Hospice Care, Adult Care" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <LandingPage 
          about={about.length && about[0]} 
          banner={banner.length && banner[0]} 
          login={login.length && login[0]} 
          navbar={navbar.length && navbar[0]} 
          services={services.length && services} 
          signUp={signUp.length && signUp[0]} />
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const queryAbout = '*[_type == "about"]'
  const about = await client.fetch(queryAbout)

  const queryBanner = '*[_type == "banner"]'
  const banner = await client.fetch(queryBanner)

  const queryLogin = '*[_type == "login"]'
  const login = await client.fetch(queryLogin)

  const queryNavbar = '*[_type == "navbar"]'
  const navbar = await client.fetch(queryNavbar)

  const queryServices = '*[_type == "services"]'
  const services = await client.fetch(queryServices)

  const querySignUp = '*[_type == "signUp"]'
  const signUp = await client.fetch(querySignUp)

  return {
    props: {
      about,
      banner,
      login,
      navbar,
      services,
      signUp
    }
  }
}
