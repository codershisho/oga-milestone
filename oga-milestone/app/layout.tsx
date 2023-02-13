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
        <div className='pl-10 pr-10 pt-5'>
        {children}
        </div>
      </body>
    </html>
  )
}
