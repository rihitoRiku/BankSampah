'use client'
import React, {useState} from 'react'
import Navbar from '../components/navbar/Navbar'

export default function page() {
  const [userData, setUserData] = useState({ name: 'Bank Sampah: Sari Wangi', role: 'nasabah' });

  return (
    <div><Navbar userData={userData}/></div>
  )
}
