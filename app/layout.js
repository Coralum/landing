import '@/styles/globals.css'

export const metadata = {
  title: 'Coralum - Software as a Reef',
  description: 'Building adaptive AI that drives ROI for your business. Strategic partnerships that transform SaaS operations.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Viewport meta tag for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Progressive enhancement fallback */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Progressive enhancement: Ensure content is visible
              (function() {
                // Wait for page to load
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', initFallback);
                } else {
                  initFallback();
                }
                
                function initFallback() {
                  // Give Framer Motion time to handle scroll animations (5 seconds)
                  setTimeout(function() {
                    // Check if any elements are still invisible
                    const invisibleElements = document.querySelectorAll('[style*="opacity:0"]');
                    if (invisibleElements.length > 0) {
                      // Apply fallback class to force visibility
                      invisibleElements.forEach(el => {
                        el.classList.add('js-fallback');
                      });
                    }
                  }, 5000);
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 