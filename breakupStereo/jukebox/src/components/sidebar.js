import React from 'react';
import './sidebar.css';
import SidebarButton from './sidebarButton';
import { MdFavorite } from 'react-icons/md';
import { FaGripfire, FaPlay } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from'react-icons/io5';
import { MdSpaceDashboard } from 'react-icons/md';
import { useState, useEffect } from'react';
import apiClient from '../spotify';

export default function Sidebar() {
  const [image, setImage] = useState('https://jack-manning11.github.io/img/Personal_Photo.jpg');
  useEffect(() => {
    apiClient.get('me').then(response => {
      setImage(response.data.images[0].url);
    })
  },[]);

  return (
    <div className='sidebar-container'>
      <img 
        src={image}
        className='profile-img'
        alt='Jack Manning on a mountaintop'
      />
      <div>
        <SidebarButton title='Feed' to='/feed' icon={<MdSpaceDashboard />}/>
        <SidebarButton title='Trending' to='/trending' icon={<FaGripfire />}/>
        <SidebarButton title='Player' to='/player' icon={<FaPlay />}/>
        <SidebarButton title='Favorites' to='/favorites' icon={<MdFavorite />}/>
        <SidebarButton title='Library' to='/' icon={<IoLibrary />}/>
      </div>
      <SidebarButton title='Sign Out' to='' icon={<FaSignOutAlt />}/>
    </div>
  )
}
