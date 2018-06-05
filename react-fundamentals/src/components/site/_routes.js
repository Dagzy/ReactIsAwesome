import React from 'react';
import Home from './Home';
import Resources from './Resources';
import Jack from './something';
import ReactConceptList from '../apps/concept-list-app/ReactConceptsApp'
import YouTubeSearch from '../apps/YTAPI/Video'
export const routes = [
  {
    path: '/' || '/home',
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <Home/>
  }, 
  {
    path: '/resources',
    exact: true,
    sidebar: () => <div>Works Cited</div>,
    main: () => <Resources/>
  },
  {
    path: '/something',
    exact: true,
    sidebar: () => <div>Works Cited</div>,
    main: () => <Jack />
  },
  {
    path: '/reactconceptlist',
    exact: true,
    sidebar: () => <div>Works Cited</div>,
    main: () => <ReactConceptList />
  },
  {
    path: '/youtubesearch',
    exact: true,
    sidebar: () => <div>Works Cited</div>,
    main: () => <YouTubeSearch />
  }
]