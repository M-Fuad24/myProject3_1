// src/components/Pricing.jsx
import React from 'react';

const Pricing = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Pricing Cards */}
          {['Starter', 'Company', 'Enterprise'].map((plan, index) => (
            <div key={plan} className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">{plan}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{getPlanDescription(plan)}</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">{getPlanPrice(plan)}</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {getPlanFeatures(plan).map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const getPlanDescription = (plan) => {
  switch (plan) {
    case 'Starter':
      return 'Best option for personal use & for your next project.';
    case 'Company':
      return 'Relevant for multiple users, extended & premium support.';
    case 'Enterprise':
      return 'Best for large scale uses and extended redistribution rights.';
    default:
      return '';
  }
};

const getPlanPrice = (plan) => {
  switch (plan) {
    case 'Starter':
      return '$29';
    case 'Company':
      return '$99';
    case 'Enterprise':
      return '$499';
    default:
      return '';
  }
};

const getPlanFeatures = (plan) => {
  switch (plan) {
    case 'Starter':
      return [
        'Individual configuration',
        'No setup, or hidden fees',
        'Team size: 1 developer',
        'Premium support: 6 months',
        'Free updates: 6 months',
      ];
    case 'Company':
      return [
        'Individual configuration',
        'No setup, or hidden fees',
        'Team size: 10 developers',
        'Premium support: 24 months',
        'Free updates: 24 months',
      ];
    case 'Enterprise':
      return [
        'Individual configuration',
        'No setup, or hidden fees',
        'Team size: 100+ developers',
        'Premium support: 36 months',
        'Free updates: 36 months',
      ];
    default:
      return [];
  }
};

export default Pricing;