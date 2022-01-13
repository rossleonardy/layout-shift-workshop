import React from 'react'
import useFetch from 'use-http'
import './style.css'

interface HeadlineContent {
  headline: string
  subhead: string
}

export const Headline = () => {
  const { loading, error, data } = useFetch<HeadlineContent>(`http://localhost:8787/headlineContent`, {}, [])


  if (loading) {
    return <div className="headline">
      <div>Loading</div>
    </div>
  } else if (!data || error) {
    return <div className="headline">
      <div>Error</div>
    </div>
  } else {
    return <div className="headline">
      <h1>{data.headline}</h1>
      <h5>{data.subhead}</h5>
    </div>
  }

}
