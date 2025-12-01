
import React, { useState, useEffect } from 'react';
import { Check, X, Zap, Crown, Shield, Star, Sun, Moon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getGuestUsage, getAuthUserUsage } from '../../lib/usageManager';

const PricingPage: React.FC = () => {
  const { user } = useAuth();
  const [usage, setUsage] = useState({ count: 0, limit: 5 });

  useEffect(() => {
    const fetchUsage = async () => {
      let currentUsage = 0;
      if (user) {
        currentUsage = await getAuthUserUsage(user.uid);
      } else {
        const guestUsage = getGuestUsage();
        const today = new Date().toISOString().split('T')[0];
        if (guestUsage.date === today) {
          currentUsage = guestUsage.count;
        }
      }
      setUsage({ count: currentUsage, limit: 5 });
    };

    fetchUsage();
  }, [user]);

  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'For casual use and trying out our tools.',
      icon: Sun,
      features: [
        '5 AI Tool Uses/Day',
        'Basic Tool Access',
        'Standard Support',
      ],
      buttonText: 'Your Current Plan',
      isCurrent: true,
    },
    {
      name: 'Standard',
      price: '$9',
      description: 'For power users and professionals.',
      icon: Star,
      features: [
        '500 AI Tool Uses/Month',
        'Advanced Tool Access',
        'Priority Support',
        'No Daily Limits',
      ],
      buttonText: 'Coming Soon',
      isPopular: true,
    },
    {
      name: 'Premium',
      price: '$29',
      description: 'For businesses and heavy users.',
      icon: Crown,
      features: [
        'Unlimited AI Tool Uses',
        'All Tool Access',
        'Dedicated Support',
        'Early Access to New Features',
      ],
      buttonText: 'Coming Soon',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 p-4 sm:p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold dark:text-white mb-3">Pricing Plans</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Choose the plan that fits your needs. Start for free, and upgrade when you need more power.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col ${plan.isPopular ? 'transform scale-105' : ''}`}>
              {plan.isPopular && <div className="absolute top-0 -mt-3 w-full text-center"><span className="px-4 py-1 text-xs font-bold text-white bg-primary-500 rounded-full">MOST POPULAR</span></div>}
              <div className="text-center mb-6">
                <plan.icon className="w-12 h-12 mx-auto mb-4 text-primary-500" />
                <h2 className="text-2xl font-bold dark:text-white">{plan.name}</h2>
                <p className="text-3xl font-extrabold dark:text-white mt-2">{plan.price}<span className="text-base font-medium text-slate-500">/ month</span></p>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">{plan.description}</p>
              </div>
              
              {plan.name === 'Free' && (
                <div className="mb-6">
                  <p className="text-center text-sm font-medium text-slate-600 dark:text-slate-400">Daily Usage</p>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mt-2">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: `${(usage.count / usage.limit) * 100}%` }}></div>
                  </div>
                  <p className="text-center text-xs text-slate-500 mt-2">{usage.count} / {usage.limit} AI uses today</p>
                </div>
              )}

              <ul className="space-y-4 text-sm flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full mt-8 py-3 px-6 font-semibold rounded-lg transition-transform transform active:scale-95 ${plan.isCurrent ? 'bg-primary-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 cursor-not-allowed'}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
