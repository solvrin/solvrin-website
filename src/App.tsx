/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <Team />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
