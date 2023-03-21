import React from 'react'
import { IMangaRatingPill } from '../../../types/types'

function MangaRatingPill({rating, styles}: IMangaRatingPill) {

  const pillStyles: string = `${ rating === 'safe' ? 'bg-green-500' : 'bg-orange-500'} w-12 rounded-full flex justify-center ${styles}`;
  
  return (
    <div className={pillStyles}>
        <p className='font-medium'>{rating}</p>
    </div>
  )
}

export default MangaRatingPill