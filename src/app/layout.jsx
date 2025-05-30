import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

import { Montserrat } from 'next/font/google'
import { themeProvider } from '@mui/material/styles'
import theme from '../theme';

const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
});


export default function RootLayout(props) {
    const {children} = props;
    return (
        <html lang="pt-br" className={montserrat.variable}>
            <body>
                <AppRouterCacheProvider>
                    <themeProvider theme={theme}>
                        {children}
                    </themeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}