
import About from './components/about.jsx'
import Layanan from './components/layanan.jsx'
import Tanya from './components/pertanyaan.jsx'
import Footer from './components/footer.jsx'
import Testimonials from './components/testimonial.jsx'
import './index.css'



function App() {
 

  return (
    <>
    <header className=" bg-no-repeat mb-[60px]" style={{backgroundImage: 'url(/src/images/wondama-banner.png)'}}>
    <nav className="bg-transparent px-6 py-8 pt-9 pb-8  flex items-center justify-between">
    <div className="flex items-center flex-shrink-0 text-white mr-2">
      <img src="/src/images/wondama-logo.png" alt="" className=" w-16 h-[59px]  "/>
      <span className="font-semibold text-xl">wondama</span>
    </div>
    <div className="block lg:flex lg:items-stretch lg:justify-end lg:space-x-4">
      <a href="#" className="text-white hover:text-gray-200">Beranda</a>
      <a href="#" className="text-white hover:text-gray-200">Tentang Kami</a>
      <a href="#" className="text-white hover:text-gray-200">Registrasi</a>
      <a href="#" className="text-white hover:text-gray-200">Layanan</a>
      <a href="#" className="text-white hover:text-gray-200"> bantuan</a>
    </div>
  </nav>
  <div className="hero">
  <h1 className="w-[1229px] h-[242px] text-neutral-50 text-[60px] font-bold font-['Outfit'] capitalize leading-[70px] pt-[200px] pb-[400px]">
    Nikmati perjalananmu ke Teluk wondama dengan wondama tourism
    </h1>
  <div className="w-[1229px] h-[242px] text-neutral-50 text-[30px] text-4xl font-medium font-['Outfit'] mt-[300px] leading-[100px]">
  Temukan  destinasi wisata dan homestay di Wondama yang siap Anda kunjungi
    </div>
    
  <a href="#" className="bg-yellow-600 text-white font-semibold px-8 py-5 rounded-[30px] border-1 border-yellow-400 hover:bg-yellow-200 hover:text-white inline-block mt-[550px] mb-[40px]">
      Download app
    </a>
  </div>
  </header>
  <About/>
  <Layanan/>
  <Tanya/>
  <Testimonials/>
  <Footer/>
  </>
  )
}


export default App;