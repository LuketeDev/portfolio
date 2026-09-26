import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Stack } from '@/components/Stack';
import { Engineering } from '@/components/Engineering';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-fg font-mono">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Engineering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
