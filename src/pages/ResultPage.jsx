import React, {useContext} from 'react'
import { UserInputContext } from '../contexts/UserInputContext'

export default function ResultPage() {
  const {age, interest, relationship} = useContext(UserInputContext)
  return (
    <div>
      <h2>Result</h2>
      <p>{age}</p>
      <p>{interest}</p>
      <p>{relationship}</p>

    </div>
  )
}
