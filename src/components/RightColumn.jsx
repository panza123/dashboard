import React from 'react'
import SalesItem from './SalesItem'
import WebAnalystic from './WebAnalystic'
import ScoreList from './ScoreList'

export default function RightColumn() {
  return (
    <div className='w-full p-2'>
     <SalesItem/>
     <WebAnalystic/>
     <ScoreList/>
    </div>
  )
}
