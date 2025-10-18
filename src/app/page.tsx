"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Edit3, UserCheck } from "lucide-react";

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/34342636/pexels-photo-34342636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Sinema & Tv Öğrencisi Mezun Olursa?" },
  { "id": "about-image", "url": "https://images.pexels.com/photos/33799933/pexels-photo-33799933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two photographers are captured from above, engaged in a photo session in a studio environment." },
  { "id": "feature-1-image", "url": "https://images.pexels.com/photos/6932295/pexels-photo-6932295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Dramatic close-up of a high-end camera in dim lighting, highlighting design and features." },
  { "id": "product-1-image", "url": "https://images.pexels.com/photos/296649/pexels-photo-296649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Collection of vintage Polaroid photos clipped to a wooden wall indoors." },
  { "id": "testimonial-1", "url": "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Joyful businesswoman with curly hair smiling at camera while using laptop indoors." },
  { "id": "client-logo-1", "url": "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Interior view of Microsoft office with logo on wooden wall in Brussels, Belgium." },
  { "id": "client-logo-2", "url": "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a tablet displaying Google's search screen, emphasizing technology and internet browsing." }
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarLayoutFloatingOverlay
            navItems={[{ name: "Home", id: "home" }, { name: "About", id: "about" }, { name: "Portfolio", id: "portfolio" }, { name: "Contact", id: "contact" }]}
            brandName="StudioX"
          />
        </div>
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Capture Perfect Moments"
            description="Discover our award-winning photography services and studio."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            imagePosition="right"
            buttons={[
              { text: "View Portfolio", href: "portfolio" },
              { text: "Contact Us", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Us"
            description="Dedicated to creating stunning visual stories."
            bulletPoints={[
              { title: "Passionate Team", description: "Crafting images with heart." },
              { title: "State-of-the-Art Studio", description: "Equipped with the latest technology." }
            ]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
            imagePosition="left"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Our Features"
            description="Innovative services to showcase your vision."
            features={[
              { title: "Advanced Editing", description: "Transforming raw captures into art.", icon: Edit3 },
              { title: "Personalized Service", description: "Tailoring each shot to your needs.", icon: UserCheck }
            ]}
            carouselMode="auto"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            title="Featured Works"
            description="Explore our collection of curated photography."
            products={[
              { id: "1", name: "Majestic Landscapes", price: "View Gallery", imageSrc: assetMap.find(a => a.id === "product-1-image")?.url ?? "/public/images/placeholder.webp" },
              { id: "2", name: "Portrait Perfection", price: "View Gallery", imageSrc: assetMap.find(a => a.id === "feature-1-image")?.url ?? "/public/images/placeholder.webp" }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            title="Our Clients Love Us"
            description="Hear what our satisfied clients have to say."
            testimonials={[
              { id: "1", name: "Sarah Johnson", role: "CEO, TechCorp", testimonial: "Their attention to detail is simply unmatched.", imageSrc: assetMap.find(a => a.id === "testimonial-1")?.url ?? "/public/images/placeholder.webp" },
              { id: "2", name: "Michael Smith", role: "Creative Director, DesignHub", testimonial: "Incredible experience from start to finish." }
            ]}
          />
        </div>
      </div>
      <div id="socialProof" data-section="socialProof" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SocialProofOne
            title="Trusted by Leading Brands"
            description="We've collaborated with top industry leaders."
            logos={[assetMap.find(a => a.id === "client-logo-1")?.url ?? "/public/images/placeholder.webp", assetMap.find(a => a.id === "client-logo-2")?.url ?? "/public/images/placeholder.webp"]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Get In Touch"
            title="Let's Create Together"
            description="Contact us to schedule your next photoshoot."
            inputPlaceholder="Your email address"
            buttonText="Submit"
            termsText="We value your privacy."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Services", items: [ { label: "Photography", href: "portfolio" }, { label: "Editing", href: "services" } ] },
              { title: "Support", items: [ { label: "Contact Us", href: "contact" }, { label: "FAQ", href: "faq" } ] }
            ]}
            copyrightText="© 2023 StudioX"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
