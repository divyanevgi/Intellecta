import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const getGradient = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-500 to-blue-600';
      case 'indigo':
        return 'from-indigo-500 to-indigo-600';
      case 'purple':
        return 'from-purple-500 to-purple-600';
      case 'teal':
        return 'from-teal-500 to-teal-600';
      default:
        return 'from-blue-500 to-blue-600';
    }
  };

  const getHoverColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'group-hover:text-blue-600';
      case 'indigo':
        return 'group-hover:text-indigo-600';
      case 'purple':
        return 'group-hover:text-purple-600';
      case 'teal':
        return 'group-hover:text-teal-600';
      default:
        return 'group-hover:text-blue-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className={`p-1 bg-gradient-to-r ${getGradient(feature.color)}`} />
        <div className="p-6 flex-grow">
          <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-gray-50 transition-colors">
            <div className={`text-gray-500 ${getHoverColor(feature.color)} transition-colors`}>
              {feature.icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600 mb-4">{feature.description}</p>
        </div>
        <div className="px-6 pb-6">
          <Link
            to={feature.link}
            className="inline-flex items-center text-gray-600 group-hover:text-blue-600 transition-colors"
          >
            Learn more
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;