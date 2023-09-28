import Home from '@/module/Home/Home'
import { SiHtml5 } from 'react-icons/si'
export default function HomePage() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-10 py-4">
        <Home />
        <SiHtml5 className="text-orange-600" />
      </main>
    </>
  )
}
