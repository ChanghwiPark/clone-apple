import React, { useState, useEffect } from 'react'
import './SectionQuestions.css'
import { sectionQuestionsDummy } from './sectionQuestionsDummy.js'

export default function SectionQuestions() {
  const [sectionQuestionsArray, setSectionQuestionsArray] = useState([])

  useEffect(() => {
    setSectionQuestionsArray(sectionQuestionsDummy)
  }, [])

  return (
    <div className='m-sectionQuestions'>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {
          sectionQuestionsArray && sectionQuestionsArray.map((item) => (
            <li><h3>{item}</h3></li>
          ))
        }
      </ul>
    </div>
  )
}
