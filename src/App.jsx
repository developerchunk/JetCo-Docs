import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import ComponentDoc from './pages/ComponentDoc'
import Community from './pages/Community'
import ReferenceIndex from './pages/ReferenceIndex'
import ReferencePage from './pages/ReferencePage'
import Security from './pages/Security'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/components/:componentId" element={<ComponentDoc />} />
        <Route path="/reference" element={<ReferenceIndex />} />
        <Route path="/reference/:classId" element={<ReferencePage />} />
        <Route path="/community" element={<Community />} />
        <Route path="/security" element={<Security />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
