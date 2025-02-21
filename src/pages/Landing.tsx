import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Zap, Shield, Globe } from "lucide-react";
import Logo from "../components/Logo";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Logo size="medium" />
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/login" className="nav-link">
                Log in
              </Link>
              <Link to="/signup" className="btn-primary">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl sm:text-6xl font-bold text-neutral-800 leading-tight mb-6"
              >
                Transform Audio Into Text with AI Precision
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-neutral-500 mb-12"
              >
                Get accurate transcriptions in minutes with our advanced AI technology.
                Perfect for meetings, interviews, and content creation.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Link to="/signup" className="btn-primary group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="#demo" className="btn-secondary group">
                  See how it works
                  <ChevronRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              <div className="bg-white p-8 rounded-2xl shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Lightning Fast</h3>
                <p className="text-neutral-500">
                  Get accurate transcriptions in minutes, not hours. Our AI processes audio in real-time.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Enterprise Security</h3>
                <p className="text-neutral-500">
                  Bank-grade encryption ensures your data stays private and secure at all times.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Global Support</h3>
                <p className="text-neutral-500">
                  Support for multiple languages and all major audio and video formats.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}