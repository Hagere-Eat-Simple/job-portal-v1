 
import "@/components/UserProfile/styels/ProfileApp.scss"
import SecNavBar from '@/components/UserProfile/components/SecNavbar'


 

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <>
        <SecNavBar />
        {children}
    </>
  )
}
