"use client";

import * as React from "react";
import { User, Mail, Smartphone, Globe, Info, PenTool, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const countries = [
  { name: "India", code: "+91", flag: "in" },
  { name: "United States", code: "+1", flag: "us" },
  { name: "United Kingdom", code: "+44", flag: "gb" },
  { name: "United Arab Emirates", code: "+971", flag: "ae" },
  { name: "Australia", code: "+61", flag: "au" },
  { name: "Canada", code: "+1", flag: "ca" },
  { name: "Germany", code: "+49", flag: "de" },
  { name: "Singapore", code: "+65", flag: "sg" },
  { name: "Saudi Arabia", code: "+966", flag: "sa" },
  { name: "Qatar", code: "+974", flag: "qa" },
  { name: "Kuwait", code: "+965", flag: "kw" },
  { name: "Oman", code: "+968", flag: "om" },
  { name: "Bahrain", code: "+973", flag: "bh" }
];

export function ContactForm() {
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-zinc-100/50 p-5 sm:p-8 md:p-12 w-full max-w-4xl mx-auto backdrop-blur-sm bg-white/95 text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-zinc-700 mb-6 sm:mb-8 md:mb-12">
        Fill in the Details
      </h1>

      <form className="space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-800 flex items-center">
            Full Name <span className="text-red-500 ml-1 font-bold">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              required
              placeholder="Full Name"
              className="w-full h-12 pl-4 pr-12 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 placeholder:text-zinc-400 bg-white"
            />
            <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-800 flex items-center">
              Your Email <span className="text-red-500 ml-1 font-bold">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                required
                placeholder="Email Id"
                className="w-full h-12 pl-4 pr-12 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 placeholder:text-zinc-400 bg-white"
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
            </div>
          </div>

          {/* Phone Mobile Number with Flag Selector Dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-800 flex items-center">
              Your Mobile <span className="text-red-500 ml-1 font-bold">*</span>
            </label>
            <div className="relative flex w-full">
              <div className="relative flex-none">
                <button
                  type="button"
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  className="h-12 flex items-center gap-2 px-3 border border-r-0 border-zinc-200 rounded-l-md bg-zinc-50 text-zinc-700 cursor-pointer hover:bg-zinc-100 transition-colors focus:outline-none"
                >
                  <img
                    src={`https://flagcdn.com/w20/${selectedCountry.flag}.png`}
                    alt={selectedCountry.name}
                    className="w-5 h-auto rounded-sm shrink-0"
                  />
                  <span className="text-sm font-semibold text-zinc-800">{selectedCountry.code}</span>
                  <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
                </button>

                {isCountryDropdownOpen && (
                  <>
                    {/* Click-outside listener overlay */}
                    <div
                      className="fixed inset-0 z-30 cursor-default"
                      onClick={() => setIsCountryDropdownOpen(false)}
                    />
                    <ul className="absolute left-0 top-full mt-1.5 w-64 max-w-[calc(100vw-40px)] max-h-60 overflow-y-auto bg-white border border-zinc-200 rounded-md shadow-2xl z-40 py-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                      {countries.map((country, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedCountry(country);
                              setIsCountryDropdownOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors text-left text-sm"
                          >
                            <img
                              src={`https://flagcdn.com/w20/${country.flag}.png`}
                              alt={country.name}
                              className="w-5 h-auto rounded-sm shrink-0"
                            />
                            <span className="font-bold text-zinc-800 shrink-0 min-w-[42px]">{country.code}</span>
                            <span className="text-zinc-600 truncate">{country.name}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <input
                type="tel"
                required
                placeholder="Your Mobile"
                className="flex-1 min-w-0 h-12 pl-4 pr-12 border border-zinc-200 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 placeholder:text-zinc-400 bg-white"
              />
              <Smartphone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
            </div>
          </div>

          {/* Select Service For Dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-800 flex items-center">
              For <span className="text-red-500 ml-1 font-bold">*</span>
            </label>
            <div className="relative">
              <select
                defaultValue=""
                required
                className="w-full h-12 pl-4 pr-14 appearance-none border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 bg-white cursor-pointer"
              >
                <option value="" disabled hidden>Select Service / Requirement</option>
                <optgroup label="Services" className="font-bold text-slate-900 bg-slate-100">
                  <option value="web-dev">Web Development</option>
                  <option value="mobile-apps">Mobile App Development</option>
                  <option value="startup-apps">App for Start-ups</option>
                  <option value="startup-web">Web for Start-ups</option>
                  <option value="growing-business-web">Web for Growing Business</option>
                  <option value="enterprise-web">Web for Enterprise</option>
                  <option value="ecommerce-dev">Ecommerce Development</option>
                  <option value="web-app-dev">Web App Development</option>
                  <option value="website-revamp">Website Revamp</option>
                  <option value="seo">Search Engine Optimization (SEO)</option>
                  <option value="sem">Search Engine Marketing (SEM)</option>
                  <option value="smm">Social Media Marketing (SMM)</option>
                  <option value="content-writing">Content Writing</option>
                </optgroup>
                <optgroup label="Hire Dedicated Developers" className="font-bold text-slate-900 bg-slate-100">
                  <option value="~hire-web-dev">Hire Web Developers</option>
                  <option value="hire-android-dev">Hire Android Developers</option>
                  <option value="hire-ios-dev">Hire iOS Developers</option>
                  <option value="hire-flutter-dev">Hire Flutter Developers</option>
                  <option value="hire-react-native-dev">Hire React Native Developers</option>
                  <option value="hire-ionic-dev">Hire Ionic Developers</option>
                  <option value="hire-angular-dev">Hire Angular Developers</option>
                  <option value="hire-nodejs-dev">Hire Node.js Developers</option>
                  <option value="hire-php-dev">Hire PHP Developers</option>
                  <option value="hire-codeigniter-dev">Hire Codeigniter Developers</option>
                  <option value="hire-python-dev">Hire Python Developers</option>
                  <option value="hire-unity-dev">Hire Unity Developers</option>
                  <option value="hire-frontend-dev">Hire Front-End Developers</option>
                  <option value="hire-ui-ux-designers">Hire UI/UX Designers</option>
                  <option value="hire-graphic-designers">Hire Graphic Designers</option>
                  <option value="hire-web-designers">Hire Web Designers</option>
                </optgroup>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-zinc-500">
                <Globe className="w-5 h-5 mr-1" />
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Other / Additional Requirements */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-800">
              Other
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Any additional requirements or information"
                className="w-full h-12 px-4 pr-12 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 placeholder:text-zinc-400 bg-white"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 group cursor-pointer z-10">
                <Info className="w-5 h-5 text-zinc-500 hover:text-blue-500 transition-colors" />
                <div className="absolute bottom-full right-0 mb-2 w-56 p-2.5 bg-slate-900 text-white text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 leading-relaxed">
                  Tell us anything else about your project or specify custom requirements.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-800 flex items-center">
            Message <span className="text-red-500 ml-1 font-bold">*</span>
          </label>
          <div className="relative">
            <textarea
              required
              placeholder="Your Message"
              rows={4}
              className="w-full p-4 pr-12 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 placeholder:text-zinc-400 resize-none bg-white"
            ></textarea>
            <PenTool className="absolute right-4 bottom-4 w-5 h-5 text-zinc-500 pointer-events-none" />
          </div>
        </div>

        {/* ReCAPTCHA Checkbox placeholder */}
        <div className="flex items-center">
          <div className="border border-zinc-300 rounded-sm bg-zinc-50 p-4 flex items-center justify-between w-64 shadow-sm">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                required
                className="w-6 h-6 border-zinc-300 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <span className="text-sm text-zinc-700 font-medium">I'm not a robot</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="reCAPTCHA"
                className="w-8 h-8 opacity-80"
              />
              <span className="text-[10px] text-zinc-500 font-medium">reCAPTCHA</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 flex justify-start">
          <Button
            type="submit"
            className="w-full sm:w-auto bg-gradient-to-r from-[#10b981] to-[#2563eb] hover:opacity-90 text-white font-bold py-6 sm:py-7 px-8 sm:px-10 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-center flex justify-center items-center"
          >
            SUBMIT NOW
          </Button>
        </div>
      </form>
    </div>
  );
}
