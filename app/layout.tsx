import { ColorModeScript, theme } from '@chakra-ui/react'
import { Lora } from 'next/font/google'
import { Provider } from './provider'
import "./globals.css"

const poppins = Lora({
  subsets: ['latin'], 
});
export default function Layout(props: { children: React.ReactNode }) {
  const colorMode = theme.config.initialColorMode;

  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
        <link href="/public/output.css" rel="stylesheet"/>
      </head>
      <body className={`chakra-ui-${colorMode} ${poppins.className}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}
