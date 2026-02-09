import './App.css'
import { Layout } from './components/Layout'
import { Header } from './components/Header'
import { Profile } from './components/Profile'

function App() {
  return (
    <Layout>
      {/* Header */}
      <div className="col-span-1 lg:col-span-12">
        <Header />
      </div>

      {/* Content */}
      <div className="col-span-1 lg:sticky lg:top-8 lg:col-span-3 lg:self-start">
        {/* My Picture */}
        <Profile />
      </div>

      <div className="col-span-1 lg:col-span-9">{/* Main Content Here */}</div>
    </Layout>
  )
}

export default App
