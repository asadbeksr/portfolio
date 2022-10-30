import { Container } from '@mui/material'
import SEO from 'components/SEO'

export default function Blog() {
  return (
    <>
      <SEO />
      <Container>
        <div
          style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}
        >
          <h2> Blog1</h2>
        </div>
      </Container>
    </>
  )
}
