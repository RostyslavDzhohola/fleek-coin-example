import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


export default function CoinTweets(props) {
  return (
    <div>
      <>CoinTweets</> 
      <br/>
      <TwitterTimelineEmbed
        sourceType="timeline"
        screenName="Bitcoin"
        options={{height: 400}}
      />
    </div>
  )
}
