import React from 'react'
import Sidebar from './HomeSection/SideBar'
import HeroInquiry from '../components/HeroInquiry'
import ProductCard from '../pages/ProductCard'
import Category from '../pages/Category'
import Recomended from './HomeSection/Recomended'
import ExtraServices from './HomeSection/ExtraServecies'


export default function Home() {
  return (
    <div>
      <Sidebar/>
      <ProductCard/>
      <Category/>
      <HeroInquiry/>
      <Recomended/>
      <ExtraServices/>

    </div>
  )
}
