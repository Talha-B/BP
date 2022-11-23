import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home({props}): JSX.Element {

  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    });
  })
  
  return (
    <div className={styles.container}>
      <Head>
        <title>BP Payment</title>
        <meta name="description" content="BP Payment app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          Welcome to BP Payment App
        </h1>
        <p>
          <strong><Link href={`/site?longitude=${longitude}&latitude=${latitude}`}>Find site</Link></strong>
        </p>
      </main>
    </div>
  )
}
