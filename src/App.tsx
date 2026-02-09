import './App.css'
import { Layout } from './components/Layout'
import { Header } from './components/Header'

function App() {
  return (
    <Layout>
      {/* Header */}
      <div className="col-span-1 lg:col-span-12">
        <Header />
      </div>

      {/* Content */}
      <div className="col-span-1 lg:col-span-4">{/* My Picture */}</div>

      <div className="col-span-1 lg:col-span-8">{/* Main Content Here */}</div>
    </Layout>
  )
}

export default App
