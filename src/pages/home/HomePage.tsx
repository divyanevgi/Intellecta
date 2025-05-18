import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Brain, 
  Clock, 
  BookOpen, 
  FileText,
  GraduationCap,
  Sparkles,
  Star,
  Users,
  Trophy,
  Target,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';
import { BackgroundGrid } from './BackgroundGrid';
import FeatureCard from './FeatureCard';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const HomePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: false });
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Adaptive Quiz Engine",
      description: "Dynamic difficulty scaling based on your performance, helping you learn at your optimal pace.",
      link: "/quiz",
      color: "blue"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Flashcard System",
      description: "Interactive flashcards with spaced repetition for effective memorization.",
      link: "/flashcards",
      color: "indigo"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Smart Notes",
      description: "Markdown-powered note editor with real-time preview for comprehensive revision.",
      link: "/notes",
      color: "purple"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Pomodoro Task Manager",
      description: "Focus-driven task management with integrated Pomodoro timer for maximum productivity.",
      link: "/tasks",
      color: "teal"
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Collaborative Learning",
      description: "Connect with peers, share resources, and learn together in a supportive environment."
    },
    {
      icon: <Trophy className="h-8 w-8 text-blue-500" />,
      title: "Achievement System",
      description: "Track your progress and earn rewards as you reach your learning milestones."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "Personalized Goals",
      description: "Set and achieve your learning objectives with customized study plans."
    }
  ];

  const testimonials = [
    {
      name: "Nupoor Shikare",
      role: "Medical Student",
      image: "/images/Nupoor.jpeg",
      content: "Intellecta has transformed the way I study. The flashcard system is incredibly effective for memorizing complex medical terms."
    },
    {
      name: "Atharva Ghade",
      role: "Software Engineer",
      image: "/images/Atharva.jpeg",
      content: "The smart notes feature helps me organize my thoughts and keep track of my learning progress. It's an essential tool for continuous learning."
    },
    {
      name: "Tisha Jadhav",
      role: "Language Teacher",
      image: "/images/Tisha.jpeg",
      content: "As a language teacher, I recommend Intellecta to all my students. The adaptive quiz engine helps them learn at their own pace."
    }
  ];

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 });

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <div ref={scrollRef} className="relative bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center justify-center">
        <BackgroundGrid />

        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 w-full"
        >
          <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: isHeroInView ? 1 : 0, 
                  rotate: isHeroInView ? 0 : -180 
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  duration: 0.7 
                }}
                className="mb-8 relative"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-100 rounded-full filter blur-xl opacity-70" />
                <GraduationCap className="h-20 w-20 text-blue-600 mx-auto relative z-10" />
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 5
                  }}
                  className="absolute top-0 right-0 -mr-2 -mt-2"
                >
                  <Sparkles className="h-6 w-6 text-yellow-400" />
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ 
                  opacity: isHeroInView ? 1 : 0, 
                  y: isHeroInView ? 0 : 40 
                }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                  Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Intellecta</span>
                </h1>
                
                <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10">
                  Transform your learning experience with our comprehensive educational platform.
                  Master any subject with interactive tools and proven study techniques.
                </p>
              </motion.div>
              
              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isHeroInView ? 1 : 0, 
                  y: isHeroInView ? 0 : 20 
                }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/signup"
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all shadow-lg hover:shadow-blue-500/30"
                  >
                    Get Started Free
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/learn-more"
                    className="px-8 py-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-medium transition-colors shadow-sm"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="mt-16 md:mt-20 relative"
              initial={{ opacity: 0, y: 60 }}
              animate={{ 
                opacity: isHeroInView ? 1 : 0, 
                y: isHeroInView ? 0 : 60 
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Students learning"
                className="rounded-xl shadow-2xl mx-auto w-full max-w-4xl object-cover"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-full p-3 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: isHeroInView ? 1 : 0, 
                  scale: isHeroInView ? 1 : 0 
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 1 
                }}
              >
                <Star className="h-6 w-6 md:h-8 md:w-8 text-yellow-500" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={container}
            initial="hidden"
            animate={isStatsInView ? "show" : "hidden"}
          >
            <StatItem value="95%" label="Student Satisfaction" delay={0.1} />
            <StatItem value="10,000+" label="Active Learners" delay={0.2} />
            <StatItem value="500+" label="Courses Created" delay={0.3} />
            <StatItem value="24/7" label="Learning Support" delay={0.4} />
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Everything you need to succeed
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Powerful tools designed to enhance your learning experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Intellecta?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Experience the benefits of our innovative learning platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Users Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Join thousands of satisfied learners worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700" />
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" viewBox="0 0 800 800">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already using Intellecta to achieve their learning goals.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/signup"
                className="inline-block px-8 py-3 rounded-full bg-white hover:bg-gray-100 text-blue-600 font-medium transition-colors shadow-lg"
              >
                Start Learning Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our platform? We're here to help! Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">support@intellecta.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">123 Learning Street, Education City, 12345</span>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message", { required: "Message is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Intellecta</h3>
              <p className="text-gray-400">
                Empowering learners worldwide with innovative educational tools and comprehensive learning solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and learning tips.</p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Intellecta. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/divya-nevgi-8214b9259/" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const StatItem = ({value, label, delay = 0,}: {
  value: string | number;
  label: string;
  delay?: number;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { 
          opacity: 1, 
          y: 0,
          transition: { delay, duration: 0.6 }
        }
      }}
    >
      <motion.p 
        className="text-4xl font-bold text-blue-600"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.5,
          delay, 
          type: "spring",
          stiffness: 260
        }}
      >
        {value}
      </motion.p>
      <p className="text-gray-600 mt-2">{label}</p>
    </motion.div>
  );
};

export default HomePage;