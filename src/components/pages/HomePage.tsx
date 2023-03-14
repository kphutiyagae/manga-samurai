import React from 'react'
import { IHomeProps } from '../../types/types'
import { NavigationBar } from '../UI/molecules/NavigationBar'
import { PageSection } from '../UI/organisms/PageSection'

export function HomePage(props : IHomeProps){
  return (
    <div className='w-full h-full bg-red-300'>
      <NavigationBar />
      <PageSection
      sectionTitle='Trending'
      styles='bg-blue-400 h-1/4'
      >
        <div>Hello</div>
      </PageSection>
      
    
    </div>
  )
}
