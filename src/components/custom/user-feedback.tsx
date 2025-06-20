'use client';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'SynthGen AI',
    handle: '@synthgenai',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    text: 'Listing on EliteAI.tools gave us a 40% boost in signups! The quality of traffic is incredible - these are users who are actually looking for AI solutions. Worth every penny!',
    likes: 143,
    shares: 24,
    time: '3:42 PM · Feb 12, 2025',
    direction: 'left',
  },
  {
    name: 'NeuralScribe',
    handle: '@neuralscribe',
    image: 'https://randomuser.me/api/portraits/men/24.jpg',
    text: 'Fast-tracking our listing was the best marketing decision we made. Went from zero to 500+ daily users in just two weeks! EliteAI.tools put us in front of the perfect audience.',
    likes: 217,
    shares: 53,
    time: '11:28 AM · Jan 29, 2025',
    direction: 'right',
  },
  {
    name: 'QuantumWrite',
    handle: '@quantumwriteai',
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
    text: 'As a bootstrapped startup, we needed cost-effective promotion. The Boosted plan delivered incredible ROI - our demo requests increased 3x in the first month alone. Highly recommend!',
    likes: 189,
    shares: 42,
    time: '4:15 PM · Feb 3, 2025',
    direction: 'left',
  },
  {
    name: 'VoiceGenius',
    handle: '@voicegeniusai',
    image: 'https://randomuser.me/api/portraits/women/53.jpg',
    text: "The SEO boost from being listed on EliteAI.tools is incredible. We've climbed to the first page for several key search terms. The quality of traffic converts at nearly 2x our other channels.",
    likes: 167,
    shares: 36,
    time: '2:10 PM · Jan 18, 2025',
    direction: 'right',
  },
  {
    name: 'DataSage',
    handle: '@datasageai',
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
    text: "We tried several directories but EliteAI.tools stands out. The curation process means you're alongside other quality tools, which gives users confidence. Our conversions are up 35% from this traffic!",
    likes: 201,
    shares: 47,
    time: '10:23 AM · Feb 8, 2025',
    direction: 'left',
  },
  {
    name: 'CopyMuse',
    handle: '@copymuseai',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    text: 'Investors actually mentioned seeing us on EliteAI.tools during our seed round! The directory has become a go-to resource for the industry. Still getting consistent traffic 6 months after listing.',
    likes: 175,
    shares: 31,
    time: '1:35 PM · Jan 22, 2025',
    direction: 'right',
  },
];

const UserFeedback = () => {
  return (
    <div className="py-16 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">What Users Are Saying</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Hear from tools that have successfully listed on our platform
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 grid-cols-1">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ x: t.direction === 'left' ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: 'easeOut' }}
              className="p-6  rounded-sm border-[1px] dark:border-gray-900 border-gray-200 shadow hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start mb-4">
                <img className="w-12 h-12 rounded-full mr-4" src={t.image} alt={t.name} />
                <div>
                  <h3 className="font-bold">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.handle}</p>
                </div>
              </div>
              <p className="text-gray-700">{t.text}</p>
              <div className="flex items-center mt-4 text-gray-500 text-sm space-x-4">
                <span>❤️ {t.likes}</span>
                <span>🔁 {t.shares}</span>
                <span>{t.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserFeedback;
