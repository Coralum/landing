import '@/styles/globals.css'

export const metadata = {
  title: 'Coralum - Software as a Reef',
  description: 'Building adaptive AI that drives ROI for your business. Strategic partnerships that transform SaaS operations.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
} 