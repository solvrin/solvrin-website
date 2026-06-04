import { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const Team = lazy(() => import('./components/Team').then(m => ({ default: m.Team })));
const ContactForm = lazy(() => import('./components/ContactForm').then(m => ({ default: m.ContactForm })));

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black overflow-x-hidden">
      <Navbar />

      <main className="grow">
        <Hero />
        <Suspense fallback={null}>
          <Services />
          <Team />
          <ContactForm />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
