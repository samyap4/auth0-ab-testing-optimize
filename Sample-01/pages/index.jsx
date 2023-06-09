import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import { COOKIE_NAME } from 'lib/constants'
import { useGa } from 'lib/useGa'
import Cookies from 'js-cookie'

export default function Index() {

  const ga = useGa()
  const [cookie, setCookie] = useState('')

  useEffect(() => {
    setCookie(Cookies.get(COOKIE_NAME))
  }, [])

  useEffect(() => {
    if (ga && cookie) {
      ga('set', 'exp', cookie)
    }
    if (ga) {
      ga('send', 'pageview')
    }
    
  }, [ga, cookie])

  return (
    <>
      <Hero />
    </>
  );
}
