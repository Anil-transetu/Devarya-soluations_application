import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-zinc-50 flex flex-col">
      <Header />
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-blue-600/10 via-transparent to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-3xl -z-10 translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -z-10 -translate-x-1/3"></div>
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 flex flex-col items-center justify-center flex-1">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm">Contact Us</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900">Let's Build Something Great</h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
}
