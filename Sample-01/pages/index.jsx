import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import { COOKIE_NAME } from 'lib/constants'
import { useGa } from 'lib/useGa'
import Cookies from 'js-cookie'
import { Text, Button } from '@vercel/examples-ui'

export default function Index() {

  const ga = useGa()
  const [cookie, setCookie] = useState('')
  const removeCookie = () => {
    Cookies.remove(COOKIE_NAME)
    window.location.reload()
  }

  useEffect(() => {
    setCookie(Cookies.get(COOKIE_NAME))
  }, [])

  useEffect(() => {
    if (ga && cookie) {
      ga('set', 'exp', cookie)
    }
    ga('send', 'pageview')
  }, [ga, cookie])

  return (
    <>
      <Hero />
      <Text className="mb-4">
        Click the button below if you want to change the current variant (each
        variant has a 33% chance)
      </Text>
      <Button variant="secondary" onClick={removeCookie}>
        Remove cookie & reload
      </Button>
    </>
  );
}
