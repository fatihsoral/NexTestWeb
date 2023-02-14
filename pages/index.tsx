import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductTeams from '@/components/ProductTeams'
import Services from '@/components/Services'
import Tryforfree from '@/components/Tryforfree'

export default function Home() {
  return (
    <div className="body">
      <Header />
      <Hero />
      <ProductTeams />
      <Services />
      <Tryforfree />
      <Footer />
    </div>
  )
}
