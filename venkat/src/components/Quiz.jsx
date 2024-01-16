import React from 'react'

export default function Quiz() {
  return (
    <div className='Div'>
     
        <div>
            <p>Question</p>
            <p className='text'>1 of15</p>
            <p className='para'>Which is the only mammal that can jump</p>
            <div className='options'>
            <div className='op1'>
            <div className='ops' id='op'>
              <p>Dog</p>
            </div>
            <div className='ops2' id='op'>
              <p>Elephant</p>
            </div>
            </div>
            <div className='op1'> 
            <div className='ops3' id='op'>
              <p>Goat</p>
            </div>
            <div className='ops4' id='op'>
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
