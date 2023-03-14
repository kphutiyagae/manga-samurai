import React from 'react';
import { IHomeProps } from '../../types/types';
import { ListComponent } from '../UI/molecules/ListComponent';
import { NavigationBar } from '../UI/molecules/NavigationBar';
import { PageSection } from '../UI/organisms/PageSection';

export function HomePage({} : IHomeProps) {
  return (
    <div className='w-full h-full bg-background-color'>
      <NavigationBar />
      <PageSection
      sectionTitle='Trending'
      styles='h-1/3 mb-4'
      >
      <ListComponent
      styles=''
      />
      </PageSection>
    </div>
  );
}
