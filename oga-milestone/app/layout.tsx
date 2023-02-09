import '../styles/globals.css';
import Headnavi from './Headnavi';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Headnavi>
        </Headnavi>
        {children}
      </body>
    </html>
  )
}
