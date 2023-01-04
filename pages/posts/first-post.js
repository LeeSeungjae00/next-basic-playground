import React from 'react'
import Layouts from '../../components/Layouts'
import Head from 'next/head'

export default function FirstPost() {
  return (
    <Layouts>
      <Head>
        <title> 첫번쨰 글</title>
      </Head>
      <h1>첫번째 글</h1>
    </Layouts>
  )
}
