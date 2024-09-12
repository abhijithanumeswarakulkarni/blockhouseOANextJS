import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('./ui/dashboard/dashboard'), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Blockhouse OA</title>
      </head>
      <body>
      <style>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </style>
        {children}
        <Dashboard />
      </body>
    </html>
  )
}
