import React from 'react'

export default function Result() {
  return (
    <div className='head'>
            <h2 className='result'>Result</h2>
            <div className='div'>
                <p className='words'>You need more practice!</p>
                <h1 className='score'>Your score is 20%</h1>
                <div className='grades'>
                  <p className='gra'>Total number of quastion </p>
                  <p className='gra'>Number of attempted questions </p>
                  <p className='gra'>Number of correct answer</p>
                  <p className='gra'>Number of wrong answers </p>
                </div>
                <div>
                  <div id='sco'>
                      <p className='num'>15</p>
                      <p className='num'>9</p>
                      <p className='num'>3</p>
                      <p className='num'>6</p>
                  <div>
                    <button className='bt'>Play again</button>
                    <button className='btn'>Back to home</button>
                  </div>
                  </div>
                  </div>
                  
            </div>
    </div>
    

  )
}
