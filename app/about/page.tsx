"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Building, User, Briefcase, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            {...fadeIn}
            className="text-4xl md:text-5xl font-bold mb-8 text-[#2B3467] dark:text-white text-center"
          >
            À propos
          </motion.h1>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Photo Section */}
              <motion.div 
                {...fadeIn}
                className="relative"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-[#2B3467] shadow-lg">
                  <Image
                    src="/profile.webp"
                    alt="Portrait professionnel d'Alexandre Clair"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Information Section */}
              <div className="flex-1">
                <motion.div 
                  {...fadeIn}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 text-lg">
                    <User className="w-5 h-5 text-[#2B3467] dark:text-white" />
                    <span className="font-semibold">Alexandre Clair</span>
                  </div>

                  <div className="flex items-center gap-3 text-lg">
                    <Briefcase className="w-5 h-5 text-[#2B3467] dark:text-white" />
                    <span>Consultant IT</span>
                  </div>

                  <div className="flex items-center gap-3 text-lg">
                    <Building className="w-5 h-5 text-[#2B3467] dark:text-white" />
                    <span>CLAIRDIFFUSION</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#2B3467] dark:text-white" />
                    <a 
                      href="mailto:alexandrejpclair@gmail.com"
                      className="text-[#2B3467] dark:text-white hover:underline transition-colors"
                    >
                      alexandrejpclair@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#2B3467] dark:text-white" />
                    <a 
                      href="tel:+33641242411"
                      className="text-[#2B3467] dark:text-white hover:underline transition-colors"
                    >
                      +33 6 41 24 24 11
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#2B3467] dark:text-white" />
                    <span>15 Rue Sylvain Simondan, 69009 Lyon</span>
                  </div>

                  <div className="pt-4 flex items-start gap-3">
                    <Quote className="w-8 h-8 text-[#2B3467] dark:text-white flex-shrink-0" />
                    <p className="text-lg italic text-gray-600 dark:text-gray-300">
                      "Simplifier l'informatique pour améliorer le quotidien de chacun."
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  {...fadeIn}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  <Button
                    className="bg-[#2B3467] hover:bg-[#2B3467]/90"
                    onClick={() => window.location.href = 'mailto:alexandrejpclair@gmail.com'}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Me contacter
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = 'tel:+33641242411'}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Appeler
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}