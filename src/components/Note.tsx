import React from 'react'

interface PropsType {
    note: string;
}

const Note = ({note}:PropsType) => {
  return (
    <div className='bg-[#323949] text-gray-400 h-[200px] rounded-lg cursor-pointer p-4 overflow-hidden'>
        <p className='h-[calc(200px-32px)] overflow-hidden'>
        {note}
        </p>
    </div>
  )
}

export default Note