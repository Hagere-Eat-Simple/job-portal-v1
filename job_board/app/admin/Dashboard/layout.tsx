"use client"
import React from 'react'
import Header from '@/components/Header/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SideBar from '@/components/SideBar/SideBar'



 


const inter = Inter({ subsets: ['latin'] })
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// export const metadata: Metadata = {
//   title: 'Admin',
//   description: 'Generated by create next app',
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const theme = useTheme();
  // const colorMode = React.useContext(ColorModeContext);

    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
      [mode],
    );
  return (
    

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <html lang="en">
            <body className={inter.className}>
            <Box
                  sx={{
                
                    width: '100%',
                    height: "100vh",
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                  }}
                >                  
                <IconButton sx={{ ml: 1 , zIndex:10000 , position:'fixed' , right:'50vw' , top : 10 }} onClick={colorMode.toggleColorMode} color="inherit">
                  {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              <header>
              <main className=' max-w-[100vw] m-auto pl-[24px] pr-[24px]'>
              {/* <Header /> */}
              <SideBar  />
              {children}
              </main>  
              </header>
              </Box>

            
          </body>
          </html>
        </ThemeProvider>
    </ColorModeContext.Provider>      
     
   
  )
}