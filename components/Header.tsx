"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Menu, ArrowRight, Smartphone, Globe, Gamepad2, Palette, Hourglass,
  Bot, Apple, RefreshCw, Rocket, 
  TrendingUp, Building, ShoppingCart, Layout, PenTool,
  Club, Box, Dices, Grid,
  LayoutDashboard, Smile,
  Search, FileSearch, Share2, FileText,
  UtensilsCrossed, Building2, BriefcaseMedical, Handshake, GraduationCap, Ticket, Video,
  Car, PlayCircle, Store, CircleDollarSign, Wrench,
  ShoppingBasket, Truck, Bike, Scissors, QrCode,
  Home, AppWindow, Aperture, Feather, Shield, Triangle, Flame, MonitorSmartphone, FileCode, Hexagon, X,
  ChevronDown, Info, Users, Briefcase, Terminal
} from "lucide-react";

import { ContactForm } from "@/components/ContactForm";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const servicesItems = [
  {
    title: "Android Applications",
    description: "Custom Android app development",
    href: "/services/android-apps",
    icon: Bot,
  },
  {
    title: "iOS Applications",
    description: "Premium iOS app development",
    href: "/services/ios-apps",
    icon: Apple,
  },
  {
    title: "Cross-Platform Apps",
    description: "Multi-platform app solutions",
    href: "/services/cross-platform-apps",
    icon: RefreshCw,
  },
  {
    title: "App For Start-ups",
    description: "Transforming ideas into apps",
    href: "/services/startup-apps",
    icon: Rocket,
  },
  {
    title: "Web For Start-ups",
    description: "Launch your online presence",
    href: "/services/startup-web",
    icon: Rocket,
  },
  {
    title: "Web For Growing Business",
    description: "Scalable websites to expand",
    href: "/services/growing-business-web",
    icon: TrendingUp,
  },
  {
    title: "Web For Enterprise",
    description: "Robust enterprise solutions",
    href: "/services/enterprise-web",
    icon: Building,
  },
  {
    title: "Ecommerce Development",
    description: "High-converting online shops",
    href: "/services/ecommerce-dev",
    icon: ShoppingCart,
  },
  {
    title: "Web App Development",
    description: "Interactive & functional apps",
    href: "/services/web-app-dev",
    icon: Layout,
  },
  {
    title: "Website Revamp",
    description: "Modernize your current site",
    href: "/services/website-revamp",
    icon: PenTool,
  },
  {
    title: "Marketing For Start-ups",
    description: "Build early brand traction",
    href: "/services/startup-marketing",
    icon: Rocket,
  },
  {
    title: "Marketing For Business",
    description: "Scale your audience & reach",
    href: "/services/business-marketing",
    icon: TrendingUp,
  },
  {
    title: "Search Engine Optimization",
    description: "Improve search engine ranking",
    href: "/services/seo",
    icon: Search,
  },
  {
    title: "Search Engine Marketing",
    description: "Targeted paid ad campaigns",
    href: "/services/sem",
    icon: FileSearch,
  },
  {
    title: "Social Media Marketing",
    description: "Engage users on social media",
    href: "/services/smm",
    icon: Share2,
  },
  {
    title: "Content Writing",
    description: "Copywriting and content creation",
    href: "/services/content-writing",
    icon: FileText,
  },
];

const productsItems = [
  {
    title: "Food Delivery Apps",
    description: "On-demand food delivery systems",
    href: "/products/food-delivery",
    icon: UtensilsCrossed,
  },
  {
    title: "Grocery Delivery Apps",
    description: "Online grocery shopping platforms",
    href: "/products/grocery-delivery",
    icon: ShoppingBasket,
  },
  {
    title: "Taxi Booking Apps",
    description: "Ride-hailing & dispatch software",
    href: "/products/taxi-booking",
    icon: Car,
  },
  {
    title: "Hotel Booking Apps",
    description: "Hospitality reservation systems",
    href: "/products/hotel-booking",
    icon: Building2,
  },
  {
    title: "Healthcare Apps",
    description: "Doctor booking & telemedicine",
    href: "/products/healthcare",
    icon: BriefcaseMedical,
  },
  {
    title: "E-Learning Platforms",
    description: "LMS & educational app systems",
    href: "/products/e-learning",
    icon: GraduationCap,
  },
  {
    title: "Real Estate Apps",
    description: "Property search and listings",
    href: "/products/real-estate",
    icon: Building,
  },
  {
    title: "Multi Vendor Marketplaces",
    description: "Multi-seller ecommerce stores",
    href: "/products/multi-vendor-marketplace",
    icon: Handshake,
  },
  {
    title: "Single Vendor Ecommerce",
    description: "Dedicated direct-to-consumer stores",
    href: "/products/single-vendor-ecommerce",
    icon: Store,
  },
  {
    title: "On-Demand Home Services",
    description: "Booking for home utility services",
    href: "/products/home-services",
    icon: Wrench,
  },
  {
    title: "Logistics & Fleet Apps",
    description: "Supply chain & delivery tracking",
    href: "/products/logistics",
    icon: Truck,
  },
  {
    title: "Social Media Networks",
    description: "Custom social networking sites",
    href: "/products/social-media",
    icon: Share2,
  },
  {
    title: "Ticket Booking Apps",
    description: "Cinema and event booking apps",
    href: "/products/ticket-booking",
    icon: Ticket,
  },
  {
    title: "Short Video Sharing",
    description: "Video sharing & streaming apps",
    href: "/products/short-video",
    icon: Video,
  },
  {
    title: "Beauty & Salon Apps",
    description: "Salon scheduling and booking",
    href: "/products/beauty-salon",
    icon: Scissors,
  },
  {
    title: "QR Menu Scanners",
    description: "Contactless digital restaurant menus",
    href: "/products/qr-menu",
    icon: QrCode,
  },
];

const hireItems = [
  {
    title: "Web Developers",
    description: "Custom web application builders",
    href: "/hire/web-developers",
    icon: AppWindow,
  },
  {
    title: "Android Developers",
    description: "Native Android app engineers",
    href: "/hire/android-developers",
    icon: Bot,
  },
  {
    title: "iOS Developers",
    description: "Premium iOS app developers",
    href: "/hire/ios-developers",
    icon: Apple,
  },
  {
    title: "Flutter Developers",
    description: "Cross-platform mobile experts",
    href: "/hire/flutter-developers",
    icon: Feather,
  },
  {
    title: "React Native Developers",
    description: "Hybrid mobile app engineers",
    href: "/hire/react-native-developers",
    icon: RefreshCw,
  },
  {
    title: "Ionic Developers",
    description: "Web-to-mobile wrapper specialists",
    href: "/hire/ionic-developers",
    icon: Aperture,
  },
  {
    title: "Angular Developers",
    description: "Enterprise frontend experts",
    href: "/hire/angular-developers",
    icon: Triangle,
  },
  {
    title: "Node.js Developers",
    description: "Fast server-side backend developers",
    href: "/hire/nodejs-developers",
    icon: Hexagon,
  },
  {
    title: "PHP Developers",
    description: "Dynamic site & backend builders",
    href: "/hire/php-developers",
    icon: FileCode,
  },
  {
    title: "Codeigniter Developers",
    description: "Lightweight MVC PHP experts",
    href: "/hire/codeigniter-developers",
    icon: Flame,
  },
  {
    title: "Python Developers",
    description: "AI, data & robust backend developers",
    href: "/hire/python-developers",
    icon: Terminal,
  },
  {
    title: "Unity Developers",
    description: "Immersive game & AR/VR creators",
    href: "/hire/unity-developers",
    icon: Box,
  },
  {
    title: "Front-End Developers",
    description: "UI/UX & responsive design experts",
    href: "/hire/frontend-developers",
    icon: MonitorSmartphone,
  },
  {
    title: "UI/UX Designers",
    description: "Wireframing & user journey artists",
    href: "/hire/ui-ux-designers",
    icon: Palette,
  },
  {
    title: "Graphic Designers",
    description: "Visual identity & branding specialists",
    href: "/hire/graphic-designers",
    icon: PenTool,
  },
  {
    title: "Web Designers",
    description: "Modern web layout & styling experts",
    href: "/hire/web-designers",
    icon: Shield,
  },
];

export function Header() {
  const [isQuoteOpen, setIsQuoteOpen] = React.useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = React.useState(false);
  const [mobileHireOpen, setMobileHireOpen] = React.useState(false);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isQuoteOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isQuoteOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05),0_4px_6px_-2px_rgba(0,0,0,0.02)] border-b border-zinc-200/50">
        <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-8 lg:px-12">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-zinc-800 text-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/20">
                <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">D</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[22px] font-black tracking-tight text-slate-950 leading-none group-hover:text-blue-600 transition-colors">
                  Devarya Solutions
                </span>
                <span className="text-[11px] font-black tracking-widest text-slate-500 uppercase mt-1">
                  Private Limited
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center ml-auto">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {/* Company Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent h-10 px-3.5 text-[20px] font-semibold text-zinc-800 hover:text-blue-600 data-[state=open]:text-blue-600 transition-colors duration-200">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="container mx-auto px-4 md:px-8 lg:px-12 py-8">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <li>
                          <Link href="/about" className="flex items-center gap-3 hover:bg-slate-50 hover:text-blue-600 rounded-xl p-3 transition-all text-[17px] text-zinc-700 font-semibold group">
                            <Info className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 transition-colors" />
                            <div className="flex flex-col">
                              <span>About Us</span>
                              <span className="text-xs text-zinc-400 font-normal">Learn who we are</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/team" className="flex items-center gap-3 hover:bg-slate-50 hover:text-blue-600 rounded-xl p-3 transition-all text-[17px] text-zinc-700 font-semibold group">
                            <Users className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 transition-colors" />
                            <div className="flex flex-col">
                              <span>Our Team</span>
                              <span className="text-xs text-zinc-400 font-normal">Meet our experts</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/profile" className="flex items-center gap-3 hover:bg-slate-50 hover:text-blue-600 rounded-xl p-3 transition-all text-[17px] text-zinc-700 font-semibold group">
                            <FileText className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 transition-colors" />
                            <div className="flex flex-col">
                              <span>Company Profile</span>
                              <span className="text-xs text-zinc-400 font-normal">Our journey & milestones</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/careers" className="flex items-center gap-3 hover:bg-slate-50 hover:text-blue-600 rounded-xl p-3 transition-all text-[17px] text-zinc-700 font-semibold group">
                            <Briefcase className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 transition-colors" />
                            <div className="flex flex-col">
                              <span>We Are Hiring?</span>
                              <span className="text-xs text-zinc-400 font-normal">Join our growing team</span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent h-10 px-3.5 text-[20px] font-semibold text-zinc-800 hover:text-blue-600 data-[state=open]:text-blue-600 transition-colors duration-200">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="container mx-auto px-4 md:px-8 lg:px-12 py-8">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {servicesItems.map((item, idx) => {
                          const IconComponent = item.icon;
                          return (
                            <li key={idx}>
                              <Link href={item.href} className="flex items-center gap-3 hover:bg-slate-50 hover:text-blue-600 rounded-xl p-3 transition-all text-[17px] text-zinc-700 font-semibold group w-full">
                                <IconComponent className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 transition-colors shrink-0" />
                                <div className="flex flex-col">
                                  <span>{item.title}</span>
                                  <span className="text-xs text-zinc-400 font-normal">{item.description}</span>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Products Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent h-10 px-3.5 text-[20px] font-semibold text-zinc-800 hover:text-blue-600 data-[state=open]:text-blue-600 transition-colors duration-200">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="container mx-auto px-4 md:px-8 lg:px-12 py-8">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {productsItems.map((item, idx) => {
                          const IconComponent = item.icon;
                          return (
                            <li key={idx}>
                              <Link href={item.href} className="flex items-center gap-3 hover:bg-slate-50 hover:text-blue-600 rounded-xl p-3 transition-all text-[17px] text-zinc-700 font-semibold group w-full">
                                <IconComponent className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 transition-colors shrink-0" />
                                <div className="flex flex-col">
                                  <span>{item.title}</span>
                                  <span className="text-xs text-zinc-400 font-normal">{item.description}</span>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Hire Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent h-10 px-3.5 text-[20px] font-semibold text-zinc-800 hover:text-blue-600 data-[state=open]:text-blue-600 transition-colors duration-200">
                    Hire
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="container mx-auto px-4 md:px-8 lg:px-12 py-8">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {hireItems.map((item, idx) => {
                          const IconComponent = item.icon;
                          return (
                            <li key={idx}>
                              <Link href={item.href} className="flex items-center gap-3 hover:bg-slate-50 hover:text-blue-600 rounded-xl p-3 transition-all text-[17px] text-zinc-700 font-semibold group w-full">
                                <IconComponent className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 transition-colors shrink-0" />
                                <div className="flex flex-col">
                                  <span>{item.title}</span>
                                  <span className="text-xs text-zinc-400 font-normal">{item.description}</span>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact Menu */}
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent h-10 px-3.5 text-[20px] font-semibold text-zinc-800 hover:text-blue-600 transition-colors duration-200")}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Quote Button */}
                <NavigationMenuItem className="ml-4">
                  <Button onClick={() => setIsQuoteOpen(true)} className="rounded-full border border-blue-600 bg-transparent hover:bg-blue-50 text-blue-600 font-semibold text-[18px] px-6 py-5 shadow-none hover:shadow-none transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Get a Quote
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center">
            <Sheet>
              <SheetTrigger className="inline-flex items-center justify-center rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[420px] bg-white p-6 overflow-y-auto">
                <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
                  <span className="text-xl font-bold text-slate-900">Navigation</span>
                </div>
                
                <nav className="flex flex-col gap-4 mt-6">
                  {/* Company Accordion */}
                  <div className="border-b border-zinc-100 pb-3">
                    <button 
                      onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                      className="flex items-center justify-between w-full font-bold text-lg text-zinc-800 py-2"
                    >
                      <span>Company</span>
                      <ChevronDown className={cn("w-5 h-5 text-zinc-500 transition-transform duration-200", mobileCompanyOpen && "rotate-180")} />
                    </button>
                    {mobileCompanyOpen && (
                      <ul className="pl-4 mt-2 space-y-3 animate-in fade-in duration-200">
                        <li>
                          <Link href="/about" className="flex items-center gap-3 text-base text-zinc-600 font-medium py-1">
                            <Info className="w-4 h-4 text-zinc-400" /> About Us
                          </Link>
                        </li>
                        <li>
                          <Link href="/team" className="flex items-center gap-3 text-base text-zinc-600 font-medium py-1">
                            <Users className="w-4 h-4 text-zinc-400" /> Our Team
                          </Link>
                        </li>
                        <li>
                          <Link href="/profile" className="flex items-center gap-3 text-base text-zinc-600 font-medium py-1">
                            <FileText className="w-4 h-4 text-zinc-400" /> Company Profile
                          </Link>
                        </li>
                        <li>
                          <Link href="/careers" className="flex items-center gap-3 text-base text-zinc-600 font-medium py-1">
                            <Briefcase className="w-4 h-4 text-zinc-400" /> We Are Hiring?
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* Services Accordion */}
                  <div className="border-b border-zinc-100 pb-3">
                    <button 
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full font-bold text-lg text-zinc-800 py-2"
                    >
                      <span>Services</span>
                      <ChevronDown className={cn("w-5 h-5 text-zinc-500 transition-transform duration-200", mobileServicesOpen && "rotate-180")} />
                    </button>
                    {mobileServicesOpen && (
                      <ul className="pl-4 mt-2 space-y-3 max-h-[250px] overflow-y-auto animate-in fade-in duration-200">
                        {servicesItems.map((item, idx) => {
                          const IconComponent = item.icon;
                          return (
                            <li key={idx}>
                              <Link href={item.href} className="flex items-center gap-3 text-base text-zinc-600 font-medium py-1">
                                <IconComponent className="w-4 h-4 text-zinc-400 shrink-0" />
                                {item.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>

                  {/* Products Accordion */}
                  <div className="border-b border-zinc-100 pb-3">
                    <button 
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="flex items-center justify-between w-full font-bold text-lg text-zinc-800 py-2"
                    >
                      <span>Products</span>
                      <ChevronDown className={cn("w-5 h-5 text-zinc-500 transition-transform duration-200", mobileProductsOpen && "rotate-180")} />
                    </button>
                    {mobileProductsOpen && (
                      <ul className="pl-4 mt-2 space-y-3 max-h-[250px] overflow-y-auto animate-in fade-in duration-200">
                        {productsItems.map((item, idx) => {
                          const IconComponent = item.icon;
                          return (
                            <li key={idx}>
                              <Link href={item.href} className="flex items-center gap-3 text-base text-zinc-600 font-medium py-1">
                                <IconComponent className="w-4 h-4 text-zinc-400 shrink-0" />
                                {item.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>

                  {/* Hire Accordion */}
                  <div className="border-b border-zinc-100 pb-3">
                    <button 
                      onClick={() => setMobileHireOpen(!mobileHireOpen)}
                      className="flex items-center justify-between w-full font-bold text-lg text-zinc-800 py-2"
                    >
                      <span>Hire</span>
                      <ChevronDown className={cn("w-5 h-5 text-zinc-500 transition-transform duration-200", mobileHireOpen && "rotate-180")} />
                    </button>
                    {mobileHireOpen && (
                      <ul className="pl-4 mt-2 space-y-3 max-h-[250px] overflow-y-auto animate-in fade-in duration-200">
                        {hireItems.map((item, idx) => {
                          const IconComponent = item.icon;
                          return (
                            <li key={idx}>
                              <Link href={item.href} className="flex items-center gap-3 text-base text-zinc-600 font-medium py-1">
                                <IconComponent className="w-4 h-4 text-zinc-400 shrink-0" />
                                {item.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>

                  {/* Contact Link */}
                  <Link 
                    href="/contact" 
                    className="font-bold text-lg text-zinc-800 py-2 border-b border-zinc-100"
                  >
                    Contact
                  </Link>

                  <div className="mt-8">
                    <Button onClick={() => setIsQuoteOpen(true)} className="w-full rounded-full border border-blue-600 bg-transparent hover:bg-blue-50 text-blue-600 font-semibold py-6 text-base group shadow-none transition-all">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Quote Modal */}
      {isQuoteOpen && (
        <div className="fixed inset-0 top-[96px] z-40 bg-zinc-900/60 backdrop-blur-sm overflow-y-auto flex justify-center items-start pt-8 pb-24 px-4 sm:px-6">
          <div className="relative w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-300">
            <button 
              onClick={() => setIsQuoteOpen(false)}
              className="absolute -top-4 -right-2 md:-right-6 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-zinc-500 hover:text-zinc-900 z-50 transition-colors border border-zinc-100"
            >
              <X className="w-5 h-5" />
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
}
