"use client"

import { motion } from 'framer-motion';
import { Building, GraduationCap, Calendar, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Experience() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const experiences = [
    {
      company: "Hospices Civils de Lyon",
      role: "Consultant IT",
      duration: "1,5 ans",
      icon: Building,
      responsibilities: [
        "Réorganisation des stocks et des espaces de travail.",
        "Création de zones de travail pour les masters et réparations.",
        "Mise en place d'un système de récupération et réutilisation des pièces détachées."
      ],
      skills: ["Gestion de stock", "Organisation", "Optimisation", "Maintenance"]
    },
    {
      company: "Cars Philibert",
      role: "Responsable IT",
      duration: "3 ans",
      icon: Briefcase,
      responsibilities: [
        "Gestion complète de l'infrastructure IT (serveurs, Active Directory, etc.).",
        "Maintenance des imprimantes, caméras de surveillance et systèmes de badge.",
        "Supervision du parc téléphonique et de l'autocom."
      ],
      skills: ["Infrastructure IT", "Active Directory", "Gestion de parc", "Supervision"]
    },
    {
      company: "Econocom",
      role: "Technicien IT",
      duration: "3 ans",
      icon: Building,
      responsibilities: [
        "Support help desk, proximité et itinérance.",
        "Collaboration avec les Pompiers du Rhône, Ville de Lyon et la CNR.",
        "Gestion de plus de 600 applications métiers."
      ],
      skills: ["Help Desk", "Support technique", "Applications métiers", "Service client"]
    }
  ];

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
            Expérience Professionnelle
          </motion.h1>

          {/* Timeline */}
          <div className="relative space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-[#2B3467]/20 dark:bg-white/20" />
                )}

                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 ml-16 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-16 top-6 bg-[#2B3467] dark:bg-white rounded-full p-3">
                    <exp.icon className="w-6 h-6 text-white dark:text-gray-900" />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-[#2B3467] dark:text-white">
                        {exp.company}
                      </h2>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mt-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.role}</span>
                        <span>•</span>
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2B3467] dark:bg-white" />
                        {resp}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-[#2B3467]/10 dark:bg-white/10 text-[#2B3467] dark:text-white"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Formation */}
            <motion.div
              {...fadeIn}
              transition={{ delay: experiences.length * 0.1 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 ml-16 relative">
                <div className="absolute -left-16 top-6 bg-[#2B3467] dark:bg-white rounded-full p-3">
                  <GraduationCap className="w-6 h-6 text-white dark:text-gray-900" />
                </div>

                <h2 className="text-2xl font-bold text-[#2B3467] dark:text-white mb-4">
                  Formation
                </h2>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p className="font-semibold">
                    Technicien Supérieur Support Informatique
                  </p>
                  <p className="italic">AFPA Vénissieux</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2B3467] dark:bg-white" />
                      Diplôme Bac+2 en informatique
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2B3467] dark:bg-white" />
                      Spécialisation en support technique et infrastructure
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}