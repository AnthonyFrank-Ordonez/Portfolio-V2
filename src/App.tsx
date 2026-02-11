import './App.css'
import { Layout } from './components/Layout'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { About } from './components/About'
import { Techstack } from './components/Techstack'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Socials } from './components/Socials'
import { Connect } from './components/Connect'

function App() {
  return (
    <Layout>
      {/* Header */}
      <div className="col-span-1 lg:col-span-12">
        <Header />
      </div>

      {/* Content */}
      <div className="col-span-1 lg:sticky lg:top-0 lg:col-span-3 lg:self-start">
        {/* My Picture */}
        <Profile />
      </div>

      <div className="col-span-1 lg:col-span-9 lg:space-y-3">
        <About />
        <Techstack />

        <div className="mt-3 grid grid-cols-1 gap-3 lg:mt-2 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-6">
            <Experience />
          </div>

          <div className="col-span-1 lg:col-span-6">
            <Projects />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 lg:mt-2 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-6">
            <Socials />
          </div>

          <div className="col-span-1 lg:col-span-6">
            <Connect />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
