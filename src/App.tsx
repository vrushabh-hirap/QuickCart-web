import * as React from "react"
import { motion } from "framer-motion"
import {
      Download,
      ShoppingCart,
      Shield,
      Zap,
      Smartphone,
      Menu,
      X,
      ChevronLeft,
      ChevronRight,
      Github,
      Linkedin,
      Mail,
      Code2,
      Database,
      Layers,
      Moon,
      Sun,
      ExternalLink,
      FileDown,
      Search,
      Heart,
      CreditCard,
      Package,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { GlowingEffect } from "@/components/ui/glowing-effect"

// Real screenshot files served from public directory
const screenshots = [
      { src: "/home.png", alt: "Home Page" },
      { src: "/home_scroll.png", alt: "Home Scrolled" },
      { src: "/categories.png", alt: "Categories" },
      { src: "/categories_.png", alt: "Category Details" },
      { src: "/product.png", alt: "Product Details" },
      { src: "/cart.png", alt: "Shopping Cart" },
      { src: "/selectaddress.png", alt: "Select Address" },
      { src: "/paymentgateway.png", alt: "Payment Gateway" },
      { src: "/profile.png", alt: "User Profile" },
]

// APK file path
const APK_PATH = "/app-debug.apk"

export default function QuickCartPortfolio() {
      const [isDarkMode, setIsDarkMode] = React.useState(true)
      const [menuOpen, setMenuOpen] = React.useState(false)
      const [currentScreenshot, setCurrentScreenshot] = React.useState(0)
      const [lightboxOpen, setLightboxOpen] = React.useState(false)
      const [lightboxIndex, setLightboxIndex] = React.useState(0)

      React.useEffect(() => {
            if (isDarkMode) {
                  document.documentElement.classList.add("dark")
            } else {
                  document.documentElement.classList.remove("dark")
            }
      }, [isDarkMode])

      const features = [
            {
                  icon: Shield,
                  title: "Secure Authentication",
                  description:
                        "Safe and reliable user login and registration system with Firebase integration for secure data management.",
            },
            {
                  icon: Search,
                  title: "Smart Product Browsing",
                  description:
                        "Intuitive product discovery with category filtering, search functionality, and beautiful product cards.",
            },
            {
                  icon: ShoppingCart,
                  title: "Add to Cart System",
                  description:
                        "Seamless cart management with real-time updates, quantity controls, and instant price calculations.",
            },
            {
                  icon: CreditCard,
                  title: "Smooth Checkout",
                  description:
                        "Streamlined checkout process with order summary, payment details, and confirmation screens.",
            },
            {
                  icon: Smartphone,
                  title: "Modern UI Design",
                  description:
                        "Clean, intuitive interface with smooth animations and responsive layouts for the best user experience.",
            },
            {
                  icon: Package,
                  title: "Order Management",
                  description:
                        "Track your orders, view history, and manage your shopping experience all in one place.",
            },
      ]

      const techStack = [
            {
                  name: "Java",
                  logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            },
            {
                  name: "XML",
                  logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg"
            },
            {
                  name: "Android Studio",
                  logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"
            },
            {
                  name: "Firebase",
                  logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
            },
      ]

      const nextScreenshot = () => {
            setCurrentScreenshot((prev) => (prev + 1) % screenshots.length)
      }

      const prevScreenshot = () => {
            setCurrentScreenshot(
                  (prev) => (prev - 1 + screenshots.length) % screenshots.length
            )
      }

      const openLightbox = (index: number) => {
            setLightboxIndex(index)
            setLightboxOpen(true)
      }

      const fadeInUp = {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
      }

      return (
            <div className="min-h-screen bg-background text-foreground">
                  {/* Navigation */}
                  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="flex items-center justify-between h-16">
                                    <div className="flex items-center gap-2">
                                          <div className="w-10 h-10 flex items-center justify-center">
                                                <img src="/ic_launcher-playstore.png" alt="QuickCart Logo" className="w-full h-full object-contain rounded-xl" />
                                          </div>
                                          <span className="text-xl font-bold tracking-tight text-foreground">
                                                QuickCart
                                          </span>
                                    </div>

                                    <div className="hidden md:flex items-center gap-8">
                                          <a
                                                href="#about"
                                                className="text-sm font-medium hover:text-primary transition-colors"
                                          >
                                                About
                                          </a>
                                          <a
                                                href="#features"
                                                className="text-sm font-medium hover:text-primary transition-colors"
                                          >
                                                Features
                                          </a>
                                          <a
                                                href="#screenshots"
                                                className="text-sm font-medium hover:text-primary transition-colors"
                                          >
                                                Screenshots
                                          </a>
                                          <a
                                                href="#tech"
                                                className="text-sm font-medium hover:text-primary transition-colors"
                                          >
                                                Tech Stack
                                          </a>
                                          <div className="flex items-center gap-2">
                                                <ThemeToggle isDark={isDarkMode} onToggle={setIsDarkMode} />
                                          </div>
                                          <a href={APK_PATH} download="QuickCart.apk">
                                                <Button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-md transition-all">
                                                      <Download className="mr-2 h-4 w-4" />
                                                      Download APK
                                                </Button>
                                          </a>
                                    </div>

                                    <button
                                          onClick={() => setMenuOpen(!menuOpen)}
                                          className="md:hidden p-2"
                                          aria-label="Toggle menu"
                                    >
                                          {menuOpen ? (
                                                <X className="h-6 w-6" />
                                          ) : (
                                                <Menu className="h-6 w-6" />
                                          )}
                                    </button>
                              </div>
                        </div>

                        {/* Mobile Menu */}
                        {menuOpen && (
                              <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="md:hidden border-t bg-background/95 backdrop-blur-lg"
                              >
                                    <div className="container mx-auto px-4 py-4 space-y-4">
                                          <a
                                                href="#about"
                                                onClick={() => setMenuOpen(false)}
                                                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                                          >
                                                About
                                          </a>
                                          <a
                                                href="#features"
                                                onClick={() => setMenuOpen(false)}
                                                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                                          >
                                                Features
                                          </a>
                                          <a
                                                href="#screenshots"
                                                onClick={() => setMenuOpen(false)}
                                                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                                          >
                                                Screenshots
                                          </a>
                                          <a
                                                href="#tech"
                                                onClick={() => setMenuOpen(false)}
                                                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                                          >
                                                Tech Stack
                                          </a>
                                          <div className="flex items-center gap-4 py-2">
                                                <ThemeToggle isDark={isDarkMode} onToggle={setIsDarkMode} />
                                                <Label className="text-sm">
                                                      Dark Mode
                                                </Label>
                                          </div>
                                          <a href={APK_PATH} download="QuickCart.apk">
                                                <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                                                      <Download className="mr-2 h-4 w-4" />
                                                      Download APK
                                                </Button>
                                          </a>
                                    </div>
                              </motion.div>
                        )}
                  </nav>

                  {/* Hero Section */}
                  <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-rose-500/5" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                              <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    <motion.div
                                          initial="hidden"
                                          animate="visible"
                                          variants={{
                                                visible: { transition: { staggerChildren: 0.15 } },
                                          }}
                                          className="text-center lg:text-left"
                                    >
                                          <motion.div variants={fadeInUp} className="inline-block mb-4">
                                                <Badge className="px-4 py-2 text-sm bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20">
                                                      <Zap className="mr-2 h-4 w-4" />
                                                      Android E-Commerce App
                                                </Badge>
                                          </motion.div>

                                          <motion.h1
                                                variants={fadeInUp}
                                                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-foreground"
                                          >
                                                QuickCart
                                          </motion.h1>

                                          <motion.p
                                                variants={fadeInUp}
                                                className="text-2xl sm:text-3xl font-semibold mb-6 text-muted-foreground"
                                          >
                                                Fast. Simple. Smart Shopping.
                                          </motion.p>

                                          <motion.p
                                                variants={fadeInUp}
                                                className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
                                          >
                                                Experience the future of mobile shopping with QuickCart. A
                                                powerful Android application that brings convenience, speed, and
                                                elegance to your fingertips. Browse products, manage your cart,
                                                and checkout seamlessly.
                                          </motion.p>

                                          <motion.div
                                                variants={fadeInUp}
                                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                          >
                                                <a href={APK_PATH} download="QuickCart.apk">
                                                      <Button
                                                            size="lg"
                                                            className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-lg shadow-teal-500/20"
                                                      >
                                                            <Download className="mr-2 h-5 w-5" />
                                                            Download APK
                                                      </Button>
                                                </a>
                                                <a href="#features">
                                                      <Button size="lg" variant="outline" className="border-2">
                                                            View Features
                                                            <ExternalLink className="ml-2 h-5 w-5" />
                                                      </Button>
                                                </a>
                                          </motion.div>

                                          <motion.p
                                                variants={fadeInUp}
                                                className="mt-6 text-sm text-muted-foreground"
                                          >
                                                <span className="font-semibold">Note:</span> For Android devices
                                                only. Enable unknown sources to install.
                                          </motion.p>
                                    </motion.div>

                                    {/* Hero Phone Mockup with real screenshot */}
                                    <motion.div
                                          initial={{ opacity: 0, scale: 0.95 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ duration: 0.8, delay: 0.2 }}
                                          className="relative flex justify-center lg:justify-end"
                                    >
                                          <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 blur-3xl opacity-20 animate-pulse" />
                                                <div className="relative w-[280px] h-[560px] bg-gradient-to-br from-zinc-800 to-zinc-900 dark:from-zinc-900 dark:to-black rounded-lg p-0.5 shadow-2xl ring-1 ring-black/10 dark:ring-white/10">
                                                      <div className="w-full h-full rounded shadow-inner overflow-hidden border border-zinc-800 dark:border-zinc-900 relative bg-white">
                                                            <img
                                                                  src={screenshots[0].src}
                                                                  alt={screenshots[0].alt}
                                                                  className="absolute inset-0 w-full h-full object-cover"
                                                            />
                                                      </div>
                                                </div>
                                          </div>
                                    </motion.div>
                              </div>
                        </div>
                  </section>

                  {/* About Section */}
                  <section id="about" className="py-20 scroll-mt-20 bg-muted/30">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                              <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={{
                                          visible: { transition: { staggerChildren: 0.1 } },
                                    }}
                                    className="max-w-4xl mx-auto text-center"
                              >
                                    <motion.h2
                                          variants={fadeInUp}
                                          className="text-4xl sm:text-5xl font-bold mb-6"
                                    >
                                          About QuickCart
                                    </motion.h2>
                                    <motion.p
                                          variants={fadeInUp}
                                          className="text-lg text-muted-foreground mb-8"
                                    >
                                          QuickCart is a modern Android e-commerce application designed to
                                          revolutionize mobile shopping. Built with native Android
                                          technologies, it offers a fast, secure, and intuitive shopping
                                          experience that puts users first.
                                    </motion.p>
                                    <motion.p
                                          variants={fadeInUp}
                                          className="text-lg text-muted-foreground mb-12"
                                    >
                                          The app solves common e-commerce pain points by providing instant
                                          product discovery, seamless cart management, and a frictionless
                                          checkout process—all wrapped in a beautiful, responsive interface.
                                    </motion.p>

                                    <motion.div
                                          variants={fadeInUp}
                                          className="grid sm:grid-cols-3 gap-6 mt-12"
                                    >
                                          <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                                                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                                                <Card className="relative z-10 h-full overflow-hidden rounded-xl border-[0.75px] bg-background shadow-sm hover:shadow-lg transition-all duration-300">
                                                      <CardContent className="p-6 text-center flex flex-col items-center h-full">
                                                            <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mx-auto mb-4">
                                                                  <Code2 className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                                                            </div>
                                                            <h3 className="font-semibold mb-2">Native Android</h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                  Built with Java & XML
                                                            </p>
                                                      </CardContent>
                                                </Card>
                                          </div>

                                          <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                                                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                                                <Card className="relative z-10 h-full overflow-hidden rounded-xl border-[0.75px] bg-background shadow-sm hover:shadow-lg transition-all duration-300">
                                                      <CardContent className="p-6 text-center flex flex-col items-center h-full">
                                                            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                                                                  <Database className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                                                            </div>
                                                            <h3 className="font-semibold mb-2">Firebase Backend</h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                  Real-time data sync
                                                            </p>
                                                      </CardContent>
                                                </Card>
                                          </div>

                                          <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                                                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                                                <Card className="relative z-10 h-full overflow-hidden rounded-xl border-[0.75px] bg-background shadow-sm hover:shadow-lg transition-all duration-300">
                                                      <CardContent className="p-6 text-center flex flex-col items-center h-full">
                                                            <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center mx-auto mb-4">
                                                                  <Smartphone className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                                                            </div>
                                                            <h3 className="font-semibold mb-2">Responsive Design</h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                  Works on all devices
                                                            </p>
                                                      </CardContent>
                                                </Card>
                                          </div>
                                    </motion.div>
                              </motion.div>
                        </div>
                  </section>

                  {/* Features Section */}
                  <section id="features" className="py-20 scroll-mt-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                              <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={{
                                          visible: { transition: { staggerChildren: 0.1 } },
                                    }}
                              >
                                    <motion.div variants={fadeInUp} className="text-center mb-16">
                                          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                                                Powerful Features
                                          </h2>
                                          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                                Everything you need for a complete shopping experience, built
                                                with modern Android best practices
                                          </p>
                                    </motion.div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                          {features.map((feature, index) => (
                                                <motion.div key={index} variants={fadeInUp}>
                                                      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                                                            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                                                            <Card className="relative z-10 h-full overflow-hidden rounded-xl border-[0.75px] bg-background shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                                  <CardContent className="p-6 flex flex-col h-full">
                                                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg shadow-teal-500/20">
                                                                              <feature.icon className="h-7 w-7 text-white" />
                                                                        </div>
                                                                        <h3 className="text-xl font-semibold mb-3">
                                                                              {feature.title}
                                                                        </h3>
                                                                        <p className="text-muted-foreground">
                                                                              {feature.description}
                                                                        </p>
                                                                  </CardContent>
                                                            </Card>
                                                      </div>
                                                </motion.div>
                                          ))}
                                    </div>
                              </motion.div>
                        </div>
                  </section>

                  {/* Screenshots Section */}
                  <section id="screenshots" className="py-20 scroll-mt-20 bg-muted/30">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                              <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={fadeInUp}
                              >
                                    <div className="text-center mb-16">
                                          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                                                App Screenshots
                                          </h2>
                                          <p className="text-lg text-muted-foreground">
                                                Explore the beautiful and intuitive interface of Quick Cart
                                          </p>
                                    </div>

                                    {/* Desktop Grid View */}
                                    <div className="hidden md:grid md:grid-cols-3 gap-6 mb-12">
                                          {screenshots.map((screenshot, index) => (
                                                <motion.div
                                                      key={index}
                                                      initial={{ opacity: 0, y: 20 }}
                                                      whileInView={{ opacity: 1, y: 0 }}
                                                      viewport={{ once: true }}
                                                      transition={{ delay: index * 0.1 }}
                                                      whileHover={{ scale: 1.05, y: -5 }}
                                                      className="cursor-pointer"
                                                      onClick={() => openLightbox(index)}
                                                >
                                                      <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
                                                            <div className="aspect-[9/16] overflow-hidden">
                                                                  <img
                                                                        src={screenshot.src}
                                                                        alt={screenshot.alt}
                                                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                                                        loading="lazy"
                                                                  />
                                                            </div>
                                                            <div className="px-4 py-3 bg-card">
                                                                  <p className="text-sm font-medium text-center text-muted-foreground">
                                                                        {screenshot.alt}
                                                                  </p>
                                                            </div>
                                                      </Card>
                                                </motion.div>
                                          ))}
                                    </div>

                                    {/* Mobile Carousel */}
                                    <div className="md:hidden relative">
                                          <div className="relative w-full max-w-sm mx-auto">
                                                <Card className="overflow-hidden border-2">
                                                      <div className="aspect-[9/16] overflow-hidden">
                                                            <img
                                                                  src={screenshots[currentScreenshot].src}
                                                                  alt={screenshots[currentScreenshot].alt}
                                                                  className="w-full h-full object-cover"
                                                            />
                                                      </div>
                                                      <div className="px-4 py-3">
                                                            <p className="text-sm font-medium text-center text-muted-foreground">
                                                                  {screenshots[currentScreenshot].alt}
                                                            </p>
                                                      </div>
                                                </Card>

                                                <Button
                                                      variant="outline"
                                                      size="icon"
                                                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full shadow-lg"
                                                      onClick={prevScreenshot}
                                                >
                                                      <ChevronLeft className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                      variant="outline"
                                                      size="icon"
                                                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full shadow-lg"
                                                      onClick={nextScreenshot}
                                                >
                                                      <ChevronRight className="h-4 w-4" />
                                                </Button>
                                          </div>

                                          <div className="flex justify-center gap-2 mt-6">
                                                {screenshots.map((_, index) => (
                                                      <button
                                                            key={index}
                                                            onClick={() => setCurrentScreenshot(index)}
                                                            className={cn(
                                                                  "w-2 h-2 rounded-full transition-all duration-300",
                                                                  currentScreenshot === index
                                                                        ? "bg-primary w-8"
                                                                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                                            )}
                                                      />
                                                ))}
                                          </div>
                                    </div>
                              </motion.div>
                        </div>
                  </section>

                  {/* Download Section */}
                  <section className="py-20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-600/10" />
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                              <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    className="max-w-3xl mx-auto"
                              >
                                    <Card className="border-2 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-2xl">
                                          <CardContent className="p-8 sm:p-12 text-center">
                                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/30">
                                                      <FileDown className="h-10 w-10 text-white" />
                                                </div>

                                                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                                      Download QuickCart
                                                </h2>
                                                <p className="text-muted-foreground mb-8 text-lg">
                                                      Get the APK file and install QuickCart on your Android device
                                                      today. Start your seamless shopping experience in seconds.
                                                </p>

                                                <a href={APK_PATH} download="QuickCart.apk">
                                                      <Button
                                                            size="lg"
                                                            className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-lg shadow-teal-500/30 text-lg px-8 py-6 h-auto transition-all"
                                                      >
                                                            <Download className="mr-3 h-6 w-6" />
                                                            Download APK
                                                            <span className="ml-3 text-sm opacity-80">(~14 MB)</span>
                                                      </Button>
                                                </a>

                                                <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                                                      <p className="text-sm text-muted-foreground">
                                                            <strong>Installation Note:</strong> Enable "Install from
                                                            Unknown Sources" in your Android settings to install the APK.
                                                      </p>
                                                </div>
                                          </CardContent>
                                    </Card>
                              </motion.div>
                        </div>
                  </section>

                  {/* Tech Stack Section */}
                  <section id="tech" className="py-20 scroll-mt-20 bg-muted/30">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                              <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={{
                                          visible: { transition: { staggerChildren: 0.1 } },
                                    }}
                              >
                                    <motion.div variants={fadeInUp} className="text-center mb-16">
                                          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                                                Built With Modern Tech
                                          </h2>
                                          <p className="text-lg text-muted-foreground">
                                                Leveraging industry-standard tools and technologies
                                          </p>
                                    </motion.div>

                                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                                          {techStack.map((tech, index) => (
                                                <motion.div key={index} variants={fadeInUp}>
                                                      <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden group relative bg-card/50 backdrop-blur-sm">
                                                            <CardContent className="p-8 text-center relative flex flex-col items-center justify-center h-full">
                                                                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                                                        <img src={tech.logoUrl} alt={`${tech.name} logo`} className="w-full h-full object-contain drop-shadow-sm" />
                                                                  </div>
                                                                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                                                            </CardContent>
                                                      </Card>
                                                </motion.div>
                                          ))}
                                    </div>
                              </motion.div>
                        </div>
                  </section>

                  {/* Footer */}
                  <footer className="py-12 border-t bg-muted/50">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                                    <div>
                                          <div className="flex items-center gap-2 mb-4">
                                                <div className="w-10 h-10 flex items-center justify-center">
                                                      <img src="/ic_launcher-playstore.png" alt="QuickCart Logo" className="w-full h-full object-contain rounded-xl" />
                                                </div>
                                                <span className="text-xl font-bold tracking-tight">QuickCart</span>
                                          </div>
                                          <p className="text-sm text-muted-foreground max-w-xs">
                                                A modern Android e-commerce application built with passion and
                                                cutting-edge technology.
                                          </p>
                                    </div>

                                    <div>
                                          <h3 className="font-semibold mb-4">Quick Links</h3>
                                          <nav className="space-y-2">
                                                <a
                                                      href="#about"
                                                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                      About
                                                </a>
                                                <a
                                                      href="#features"
                                                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                      Features
                                                </a>
                                                <a
                                                      href="#screenshots"
                                                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                      Screenshots
                                                </a>
                                                <a
                                                      href="#tech"
                                                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                      Tech Stack
                                                </a>
                                          </nav>
                                    </div>

                                    <div>
                                          <h3 className="font-semibold mb-4">Connect</h3>
                                          <div className="flex gap-3">
                                                <a
                                                      href="https://github.com/vrushabh-hirap"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                                                >
                                                      <Github className="h-5 w-5" />
                                                </a>
                                                <a
                                                      href="https://www.linkedin.com/in/vrushabh-hirap-2ba0a9280/"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                                                >
                                                      <Linkedin className="h-5 w-5" />
                                                </a>
                                                <a
                                                      href="mailto:vrushabhhirapdev@gmail.com"
                                                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                                                >
                                                      <Mail className="h-5 w-5" />
                                                </a>
                                          </div>
                                    </div>
                              </div>

                              <div className="pt-8 border-t">
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                          <p className="text-sm text-muted-foreground">
                                                © 2026 QuickCart. Designed beautifully.
                                          </p>
                                          <p className="text-xs text-muted-foreground">
                                                Built with React, TypeScript, and Tailwind CSS
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </footer>

                  {/* Lightbox Modal */}
                  {lightboxOpen && (
                        <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                              onClick={() => setLightboxOpen(false)}
                        >
                              <button
                                    onClick={() => setLightboxOpen(false)}
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                              >
                                    <X className="h-6 w-6 text-white" />
                              </button>

                              <div className="relative max-h-[90vh] flex flex-col items-center">
                                    <motion.div
                                          initial={{ scale: 0.9 }}
                                          animate={{ scale: 1 }}
                                          className="relative max-h-[80vh] overflow-hidden rounded-2xl"
                                          onClick={(e) => e.stopPropagation()}
                                    >
                                          <img
                                                src={screenshots[lightboxIndex].src}
                                                alt={screenshots[lightboxIndex].alt}
                                                className="max-h-[80vh] max-w-[80vw] object-contain rounded-2xl"
                                          />
                                    </motion.div>

                                    <p className="text-white/80 font-medium mt-4 text-center">
                                          {screenshots[lightboxIndex].alt}
                                    </p>

                                    <Button
                                          variant="outline"
                                          size="icon"
                                          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 border-white/20"
                                          onClick={(e) => {
                                                e.stopPropagation()
                                                setLightboxIndex(
                                                      (prev) => (prev - 1 + screenshots.length) % screenshots.length
                                                )
                                          }}
                                    >
                                          <ChevronLeft className="h-4 w-4 text-white" />
                                    </Button>
                                    <Button
                                          variant="outline"
                                          size="icon"
                                          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 border-white/20"
                                          onClick={(e) => {
                                                e.stopPropagation()
                                                setLightboxIndex(
                                                      (prev) => (prev + 1) % screenshots.length
                                                )
                                          }}
                                    >
                                          <ChevronRight className="h-4 w-4 text-white" />
                                    </Button>

                                    <div className="flex justify-center gap-2 mt-4">
                                          {screenshots.map((_, index) => (
                                                <button
                                                      key={index}
                                                      onClick={(e) => {
                                                            e.stopPropagation()
                                                            setLightboxIndex(index)
                                                      }}
                                                      className={cn(
                                                            "w-2 h-2 rounded-full transition-all duration-300",
                                                            lightboxIndex === index
                                                                  ? "bg-white w-8"
                                                                  : "bg-white/30 hover:bg-white/50"
                                                      )}
                                                />
                                          ))}
                                    </div>
                              </div>
                        </motion.div>
                  )}
            </div>
      )
}
