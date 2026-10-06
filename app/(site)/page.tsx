import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatIsProgram from '@/components/WhatIsProgram';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Requirements from '@/components/Requirements';
import Pricing from '@/components/Pricing';
import IncludesSection from '@/components/IncludesSection';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIsProgram />
        <Benefits />
        <HowItWorks />
        <Requirements />
        <Pricing />
        <IncludesSection />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
