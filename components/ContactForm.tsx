import * as React from "react";
import { User, Mail, Smartphone, Globe, IndianRupee, PenTool, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <div className="bg-white rounded-xl shadow-xl border border-zinc-100/50 p-8 md:p-12 w-full max-w-4xl mx-auto backdrop-blur-sm bg-white/95">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-zinc-700 mb-12">
        Fill in the Details
      </h1>

      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-800">Full Name</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-12 px-4 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 placeholder:text-zinc-400 bg-white"
            />
            <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-800">Your Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Id"
                className="w-full h-12 px-4 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 placeholder:text-zinc-400 bg-white"
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-800">Your Mobile</label>
            <div className="relative flex">
              <div className="flex items-center gap-2 px-3 border border-r-0 border-zinc-200 rounded-l-md bg-zinc-50 text-zinc-700 cursor-pointer hover:bg-zinc-100 transition-colors">
                <img src="https://flagcdn.com/w20/in.png" alt="India Flag" className="w-5 h-auto rounded-sm" />
                <ChevronDown className="w-4 h-4 text-zinc-500" />
              </div>
              <input
                type="tel"
                placeholder="Your Mobile"
                className="flex-1 h-12 px-4 border border-zinc-200 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 placeholder:text-zinc-400 bg-white"
              />
              <Smartphone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-800">For</label>
            <div className="relative">
              <select
                defaultValue=""
                className="w-full h-12 px-4 appearance-none border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 bg-white"
              >
                <option value="" disabled hidden className="text-zinc-400">Select Service</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App</option>
                <option value="marketing">Digital Marketing</option>
              </select>
              <Globe className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-800">Budget</label>
            <div className="relative">
              <select
                defaultValue=""
                className="w-full h-12 px-4 appearance-none border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 bg-white"
              >
                <option value="" disabled hidden className="text-zinc-400">Select Budget</option>
                <option value="10k-50k">₹10,000 - ₹50,000</option>
                <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                <option value="1l+">₹1,00,000+</option>
              </select>
              <IndianRupee className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-800">Message</label>
          <div className="relative">
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-4 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 placeholder:text-zinc-400 resize-none bg-white"
            ></textarea>
            <PenTool className="absolute right-4 bottom-4 w-5 h-5 text-zinc-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex items-center">
          <div className="border border-zinc-300 rounded-sm bg-zinc-50 p-4 flex items-center justify-between w-64 shadow-sm">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-6 h-6 border-zinc-300 rounded text-blue-600 focus:ring-blue-500 cursor-pointer" />
              <span className="text-sm text-zinc-700 font-medium">I'm not a robot</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 h-8 opacity-80" />
              <span className="text-[10px] text-zinc-500 font-medium">reCAPTCHA</span>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Button 
            type="button" 
            className="bg-gradient-to-r from-[#10b981] to-[#2563eb] hover:opacity-90 text-white font-bold py-7 px-10 rounded-full text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            SUBMIT NOW
          </Button>
        </div>
      </form>
    </div>
  );
}
