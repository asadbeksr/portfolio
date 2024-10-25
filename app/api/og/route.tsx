import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET(request: Request) {
  const calsSans = fetch(
    new URL('../../../public/fonts/CalSans-SemiBold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  try {
    const { searchParams } = new URL(request.url)
 
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Asadbek Savronov ✦ asadbek.tech'
 
    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: 'url(http://asadbek.tech/images/og-bg.png)',
            backgroundSize: '100% 100%',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            fontFamily: 'Calsans',
            padding: '40px 80px',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1,
              color: 'white',
              marginBottom: 24,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
          <img
            width="203"
            height="44"
            style={{
              marginTop: 24,
            }}
            src={`https://asadbek.tech/images/author.png`}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Calsans',
            data: await calsSans,
            style: 'normal',
            weight: 800,
          },
        ],        
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}