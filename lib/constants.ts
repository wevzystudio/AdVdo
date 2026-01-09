
import { PricingPlan, FAQItem, ProcessStep } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Basic',
    price: '₹15,000',
    period: '/month',
    features: [
      '10 video shoots',
      'Social media management',
      'Facebook ads management'
    ]
  },
  {
    name: 'Pro',
    price: '₹25,000',
    period: '/month',
    isPopular: true,
    features: [
      '20 video shoots',
      'Social media management',
      'Facebook ads management',
      'Priority Support',
      'Content Strategy'
    ]
  },
  {
    name: 'Advance',
    price: '₹35,000',
    period: '/month',
    features: [
      '30 video shoots',
      'Social media management',
      'Facebook ads management',
      'Youtube Growth Strategy',
      'Influencer outreach'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is video marketing?",
    answer: "Video marketing is the use of video to promote or market your brand, product, or service. It's highly effective for engagement and conversion."
  },
  {
    question: "What types of videos do you create?",
    answer: "We specialize in high-converting short-form videos for Instagram Reels, TikTok, YouTube Shorts, and professional ad creatives for Facebook and YouTube."
  },
  {
    question: "Can video marketing really increase sales?",
    answer: "Absolutely. Video content is 40x more likely to be shared on social media and has shown to increase landing page conversions by up to 80%."
  },
  {
    question: "Do you handle strategy or just video creation?",
    answer: "We handle the entire end-to-end process: from research and scripting to filming, editing, and strategic distribution through paid ads and organic management."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Understand",
    description: "We start by learning your business your service and your target customer."
  },
  {
    number: 2,
    title: "Plan",
    description: "We create strategic monthly video plans tailor to your needs- whether its 10, 15 or 30 videos."
  },
  {
    number: 3,
    title: "Produce",
    description: "Our team executes professional filming and high-quality editing to make your brand stand out."
  },
  {
    number: 4,
    title: "Deliver",
    description: "We deliver polished videos optimized for the platforms where your customers spend their time."
  }
];
