import React from 'react'

export default function Quiz() {
  return (
    <div className='Div'>
        <div>
            <p>Question</p>
            <p className='para'>Which is the only mammal that can jump</p>
            <div className='options'>
            <div className='op1'>
            <div id='op'>
              <p>Dog</p>
            </div>
            <div id='op'>
              <p>Elephant</p>
            </div>
            </div>
            <div className='op1'> 
            <div id='op'>
              <p>Goat</p>
            </div>
            <div id='op'>
              <p>Lion</p>
            </div>
            </div>
            </div>
            <div className='bts'>
              <button className='bt1'>previous</button>
              <button className='bt2'>Next</button>
              <button className='bt3'>Quit</button>
            </div>
        </div>
    </div>
  )
}
