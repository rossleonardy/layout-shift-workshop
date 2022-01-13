import React from 'react'
import useFetch from 'use-http'
import './style.css'

const LOREM = `  Lorem Ipsum is simply dummy text of the printing and  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

interface HeadlineContent {
  headline: string
  subhead: string
}

export const Headline = () => {
  const { loading, error, data} = useFetch<HeadlineContent>(`http://localhost:8787/headlineContent`, {}, [])
  if (loading) {
    return <div>loading</div>
  } else if (!data || error) {
    return <div>error</div>
  } else {
    return <div className="headline">
      <h1>{data.headline}</h1>
      <h5>{data.subhead}</h5>
    </div>
  }
}
