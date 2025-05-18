import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  BookOpen, 
  Brain, 
  Clock, 
  FileText,
  GraduationCap,
  Sparkles,
  Users,
  Target,
  Trophy,
  CheckCircle,
  ArrowRight,
  BarChart,
  Calendar,
  Zap,
  Award,
  Lightbulb,
  Compass
} from 'lucide-react';

const LearnMore = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Adaptive Quiz Engine",
      description: "Our intelligent quiz system adapts to your knowledge level, focusing on areas where you need the most improvement. Questions automatically adjust in difficulty based on your performance, ensuring optimal learning efficiency."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      title: "Flashcard System",
      description: "Master any subject with our scientifically-designed flashcard system. Using spaced repetition algorithms, we present cards at optimal intervals to maximize retention and minimize study time."
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      title: "Smart Notes",
      description: "Take rich, interactive notes with our powerful editor. Organize concepts visually, add multimedia elements, and link related ideas to create a comprehensive knowledge network that enhances understanding."
    },
    {
      icon: <Clock className="h-8 w-8 text-teal-600" />,
      title: "Pomodoro Task Manager",
      description: "Boost productivity with our integrated Pomodoro timer and task management system. Break work into focused intervals, track your progress, and maintain motivation through gamified achievements."
    }
  ];

  const methodologies = [
    {
      icon: <BarChart className="h-6 w-6 text-blue-500" />,
      title: "Data-Driven Learning",
      description: "We analyze your performance patterns to identify strengths and weaknesses, then customize your learning path accordingly."
    },
    {
      icon: <Calendar className="h-6 w-6 text-blue-500" />,
      title: "Spaced Repetition",
      description: "Our system schedules reviews at scientifically-optimized intervals to maximize long-term retention with minimal study time."
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: "Active Recall",
      description: "Rather than passive review, we emphasize active testing of knowledge, which research shows dramatically improves memory formation."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-blue-500" />,
      title: "Concept Mapping",
      description: "Our tools help you connect ideas visually, building a comprehensive mental model that deepens understanding."
    },
    {
      icon: <Compass className="h-6 w-6 text-blue-500" />,
      title: "Personalized Pathways",
      description: "Every learner follows a unique journey based on their goals, prior knowledge, and learning style preferences."
    },
    {
      icon: <Award className="h-6 w-6 text-blue-500" />,
      title: "Gamified Motivation",
      description: "Achievement systems and progress tracking maintain engagement and provide regular dopamine rewards for consistent study."
    }
  ];

  const benefits = [
    {
      title: "For Students",
      items: [
        "Reduce study time while improving grades",
        "Master difficult concepts with personalized explanations",
        "Track progress with detailed analytics",
        "Prepare effectively for exams with targeted practice",
        "Build lasting knowledge that transfers to real-world applications"
      ]
    },
    {
      title: "For Professionals",
      items: [
        "Efficiently learn new skills for career advancement",
        "Maintain certifications with systematic review",
        "Organize complex information for easy reference",
        "Collaborate with peers on shared knowledge bases",
        "Balance learning with busy schedules through optimized study sessions"
      ]
    },
    {
      title: "For Educators",
      items: [
        "Monitor student progress with comprehensive analytics",
        "Identify knowledge gaps across classes or individuals",
        "Create custom learning materials that integrate with our system",
        "Automate routine assessment to focus on higher-value teaching",
        "Provide personalized support based on detailed performance data"
      ]
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Adaptive quiz system (limited questions)",
        "Basic flashcard functionality",
        "Simple note-taking tools",
        "Standard Pomodoro timer",
        "7-day learning analytics"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Premium",
      price: "$9.99/month",
      features: [
        "Unlimited adaptive quizzes",
        "Advanced flashcard system with media",
        "Smart notes with linking and templates",
        "Enhanced Pomodoro with task integration",
        "Comprehensive learning analytics",
        "Priority support",
        "No advertisements"
      ],
      cta: "Try Free for 14 Days",
      highlighted: true
    },
    {
      name: "Teams",
      price: "$7.99/user/month",
      features: [
        "All Premium features",
        "Collaborative study spaces",
        "Shared flashcard decks and notes",
        "Team progress tracking",
        "Custom branding options",
        "Admin dashboard",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  const faqItems = [
    {
      question: "How does the adaptive quiz system work?",
      answer: "Our adaptive quiz engine uses machine learning algorithms to analyze your performance patterns. It identifies which concepts you've mastered and which need more work, then generates questions that target your specific knowledge gaps. As you improve, the questions automatically adjust in difficulty to keep you in the optimal learning zone."
    },
    {
      question: "Can I use Intellecta on multiple devices?",
      answer: "Yes! Your account syncs across all devices. Start a study session on your laptop, continue on your phone during your commute, and review on your tablet before bed. All your progress, notes, and flashcards will be available everywhere you log in."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use industry-standard encryption for all data transmission and storage. Your personal information is never sold to third parties, and we maintain strict privacy controls. You can export or delete your data at any time through your account settings."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime from your account settings. If you cancel, you'll continue to have access to Premium features until the end of your current billing period. We don't offer refunds for partial months, but you won't be charged again after cancellation."
    },
    {
      question: "Can I create my own study materials?",
      answer: "Yes! You can create custom flashcards, quizzes, and notes for any subject. Our system also allows you to import existing materials from popular formats like CSV, Anki decks, and Markdown. Additionally, you can share your created content with other users or keep it private."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div ref={heroRef} className="relative bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isHeroInView ? 1 : 0, 
                y: isHeroInView ? 0 : 20 
              }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <Sparkles className="h-4 w-4 mr-1" />
                The Science of Learning
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isHeroInView ? 1 : 0, 
                y: isHeroInView ? 0 : 20 
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Intellecta</span> Difference
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isHeroInView ? 1 : 0, 
                y: isHeroInView ? 0 : 20 
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-2xl mx-auto text-xl text-gray-600"
            >
              Our research-backed learning platform combines cutting-edge cognitive science with intuitive design to help you learn faster, remember longer, and achieve your goals.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isHeroInView ? 1 : 0, 
                y: isHeroInView ? 0 : 20 
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/signup"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all shadow-lg hover:shadow-blue-500/30"
                >
                  Start Learning Now
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="#features"
                  className="px-8 py-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-medium transition-colors shadow-sm"
                >
                  Explore Features
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <GraduationCap className="h-4 w-4 mr-1" />
              Core Features
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Powerful Tools for Effective Learning
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Our comprehensive suite of learning tools is designed to work together, creating a seamless educational experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <div className="flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Science Section */}
      <div className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              <Brain className="h-4 w-4 mr-1" />
              Our Approach
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Backed by Cognitive Science
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Every feature of Intellecta is built on proven learning methodologies and cognitive research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodologies.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{method.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <Target className="h-4 w-4 mr-1" />
              Benefits
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Who Benefits from Intellecta?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Our platform is designed to help learners of all types achieve their educational goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{benefit.title}</h3>
                <ul className="space-y-4">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              <Users className="h-4 w-4 mr-1" />
              Success Stories
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Hear from Our Community
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Join thousands of satisfied learners who have transformed their educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 lg:col-span-2"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img
                    src="/images/Nupoor.jpeg"
                    alt="Medical Student"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-gray-700 italic text-lg">
                    "Before Intellecta, I was struggling to keep up with the volume of material in medical school. The spaced repetition system has completely transformed how I study anatomy and pharmacology. I'm retaining more information with less time spent reviewing, and my exam scores have improved by 15% on average."
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-gray-900">Nupoor Shikare</p>
                    <p className="text-gray-600">Medical Student, Johns Hopkins University</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <p className="text-gray-700 italic">
                    "As a software engineer constantly learning new technologies, Intellecta helps me organize complex information and retain it long-term. The smart notes feature is a game-changer."
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <img
                      src="/images/Atharva.jpeg"
                      alt="Software Engineer"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">Atharva Ghade</p>
                      <p className="text-gray-600">Senior Developer, Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <p className="text-gray-700 italic">
                    "I recommend Intellecta to all my language students. The adaptive quiz engine helps them master vocabulary and grammar at their own pace."
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <img
                      src="/images/Tisha.jpeg"
                      alt="Language Teacher"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">Tisha Jadhav</p>
                      <p className="text-gray-600">Language Instructor, Berlitz</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 lg:col-span-2"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Business Professional"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-gray-700 italic text-lg">
                    "Our company implemented Intellecta for employee training and certification preparation. The results have been outstanding - completion rates are up 35%, and our team members report feeling more confident in their knowledge. The analytics dashboard gives us valuable insights into learning patterns across departments."
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-gray-900">Pranit Bhandari</p>
                    <p className="text-gray-600">Director of Learning & Development, Accenture</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              <Trophy className="h-4 w-4 mr-1" />
              Pricing
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Choose the plan that fits your learning needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  plan.highlighted 
                    ? 'border-blue-500 bg-gradient-to-b from-blue-50 to-white relative' 
                    : 'border-gray-100 bg-white'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== "Free" && <span className="text-gray-600 ml-1">/month</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 ${plan.highlighted ? 'text-blue-500' : 'text-green-500'} flex-shrink-0 mt-0.5`} />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto"
                >
                  <Link
                    to="/signup"
                    className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition-colors ${
                      plan.highlighted
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/30'
                        : 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-900'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <BookOpen className="h-4 w-4 mr-1" />
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Find answers to common questions about Intellecta
            </p>
          </div>

          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ready to transform your learning?
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                  Join thousands of students who are already using Intellecta to achieve their learning goals.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8 flex flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex rounded-md shadow"
                >
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                  >
                    Get started free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;