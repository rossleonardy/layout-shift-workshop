import React from 'react'
import useFetch from 'use-http'

import './style.css'

interface Offer {
  uuid: string
  flag: string
  amount: string
  term: string
  monthly: string
  callouts: string[]
}

interface OfferCardProps {
  uuid: string
}

export const OfferCard = ({uuid}: OfferCardProps) => {
  const { loading, error, data } = useFetch<Offer>(`http://localhost:8787/offer/${uuid}`, {}, [])
  const offerCardData: Partial<Offer> = loading ? {
    amount: "",
    callouts: [""],
    flag: "",
    monthly: "",
    term: ""
  } : data as Offer

  if (error) {
    return <div>Error</div>
  } else {
    return <div className="offerCard">
      <div className="flag">{offerCardData.flag}</div>
      <div className="offerBody">
        <img className="wordmark" src={`http://localhost:8787/wordmark/${uuid}`} />
          <div className="amount">
            <h4>Amount</h4>
            <div>{offerCardData.amount}</div>
          </div>
          <div className="term">
            <h4>Term</h4>
            <div>{offerCardData.term}</div>
          </div>
          <div className="monthly">
            <h4>Monthly</h4>
            <div>{offerCardData.monthly}</div>
          </div>
          <div className="continue">CONTINUE</div>
          <div className="callouts">
            {offerCardData?.callouts?.map((callout, i) => <div key={i} className="calloutPill">{callout}</div>)}
          </div>
      </div>
      <div></div>
    </div>
  }
}

export const OfferCardList = () => {
  const { loading, error, data } = useFetch<string[]>('http://localhost:8787/offerList', {}, [])

  if (loading) {
    return <div className="offerCardList">
    {["uuid1", "uuid2", "uuid3"].map((uuid) => <OfferCard uuid={uuid} key={uuid} />)}
  </div>
  } else if (!data || error) {
    return <div>Error</div>
  } else {
    return <div className="offerCardList">
      {data.map((uuid) => <OfferCard uuid={uuid} key={uuid} />)}
    </div>
  }
}
