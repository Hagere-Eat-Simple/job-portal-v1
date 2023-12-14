"use client"
import AdminProf from '@/components/Profile/AdminProf'
import { useCheckUserRole } from '@/hooks/useCheckUserRole';
import { useRouter } from 'next/navigation';
import React from 'react'

function Profile() {
  const router = useRouter()
  const {isAdmin , loading} = useCheckUserRole()
  if (!loading) {
    if(!isAdmin){
          router.push('/admin');
        }
      }
  
  return (
     <AdminProf />
  )
}

export default Profile