import Navbar from './nav-bar/Nav-Bar'
import Routing from './routing/Routing'
import Footer from './footer/Footer'
import './Layout.css'

export default function Layout() {
  return (
    <div className='Layout'>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Routing />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}