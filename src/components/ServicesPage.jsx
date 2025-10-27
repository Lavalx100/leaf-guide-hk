import React from 'react';
import { Leaf, Award, Target, Users, Globe, CheckCircle, Briefcase, TrendingUp, Shield, Sparkles } from 'lucide-react';

const ServicesPage = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-leaf-600 to-leaf-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Briefcase className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-leaf-100 max-w-3xl mx-auto">
              Empowering sustainable hospitality through evidence-based assessment and strategic guidance
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Green Hospitality Overview */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4 flex items-center justify-center gap-3">
              <Leaf size={32} className="text-leaf-600" />
              Understanding Green Hospitality
            </h2>
          </div>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-leaf-50 to-green-50 rounded-2xl p-10 border border-leaf-200">
              <p className="text-leaf-800 leading-relaxed mb-4 text-lg">
                Green hospitality represents a comprehensive approach to sustainable tourism and accommodation practices 
                that minimizes environmental impact while maximizing positive social and economic contributions to local communities.
              </p>
              <p className="text-leaf-700 leading-relaxed text-lg">
                This movement encompasses energy efficiency, waste reduction, sustainable sourcing, water conservation, 
                carbon footprint reduction, and community engagement—creating a holistic framework for responsible tourism.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-leaf-100 rounded-full flex items-center justify-center mb-4">
                  <Globe size={28} className="text-leaf-600" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-3 text-lg">Environmental Impact</h3>
                <p className="text-neutral-700">
                  Reducing carbon emissions, minimizing waste, conserving water, and implementing renewable energy solutions.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-leaf-100 rounded-full flex items-center justify-center mb-4">
                  <Users size={28} className="text-leaf-600" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-3 text-lg">Social Responsibility</h3>
                <p className="text-neutral-700">
                  Supporting local communities, fair labor practices, cultural preservation, and inclusive tourism.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-leaf-100 rounded-full flex items-center justify-center mb-4">
                  <Target size={28} className="text-leaf-600" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-3 text-lg">Economic Sustainability</h3>
                <p className="text-neutral-700">
                  Creating long-term value, supporting local economies, and ensuring viable business operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainable Hospitality Roadmap */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-leaf-600 to-leaf-700 text-white rounded-2xl p-12 shadow-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Green Hospitality Sustainability Roadmap</h2>
              <p className="text-leaf-100 leading-relaxed max-w-3xl mx-auto text-lg">
                Our comprehensive roadmap outlines the strategic pathway for hospitality businesses to achieve 
                meaningful sustainability outcomes, from initial assessment to industry leadership.
              </p>
            </div>

            {/* Roadmap Preview */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <h4 className="font-semibold">Assessment</h4>
                  <p className="text-sm text-leaf-100">Current sustainability baseline evaluation</p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <h4 className="font-semibold">Strategy</h4>
                  <p className="text-sm text-leaf-100">Customized sustainability action plan</p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <h4 className="font-semibold">Implementation</h4>
                  <p className="text-sm text-leaf-100">Execute initiatives with measurable outcomes</p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-lg font-bold">4</span>
                  </div>
                  <h4 className="font-semibold">Leadership</h4>
                  <p className="text-sm text-leaf-100">Industry recognition and continuous improvement</p>
                </div>
              </div>
            </div>

            {/* Call to Action for Full Roadmap */}
            <div className="text-center">
              <a 
                href="https://www.canva.com/design/DAGSfVw9_j8/Dhmc7DNc20QLY5p8rUlD3w/view?utm_content=DAGSfVw9_j8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3e08514e88"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-leaf-700 px-8 py-4 rounded-lg font-bold hover:bg-leaf-50 transition-all shadow-lg hover:shadow-xl text-lg"
              >
                View Complete Roadmap
                <Globe size={20} />
              </a>
              <p className="text-leaf-100 text-sm mt-4">
                Explore our detailed sustainability roadmap with actionable steps and industry insights
              </p>
            </div>
          </div>
        </section>

        {/* About Green Hospitality Company */}
        <section className="mb-20">
          <div className="bg-neutral-50 rounded-2xl p-10 border border-neutral-200">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Award size={32} className="text-leaf-600" />
              Leading Green Hospitality Transformation
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-700 leading-relaxed text-lg">
                As pioneers in sustainable hospitality assessment, we work with industry leaders to transform 
                Hong Kong's tourism landscape. Our evidence-based approach combines international best practices 
                with local market understanding to create actionable sustainability frameworks.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-neutral-900 mb-4 text-lg">Our Impact</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-leaf-600 mt-0.5 shrink-0" />
                      <span>10+ hospitality venues assessed and certified</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-leaf-600 mt-0.5 shrink-0" />
                      <span>Comprehensive sustainability framework development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-leaf-600 mt-0.5 shrink-0" />
                      <span>Industry partnerships with leading hotels and restaurants</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-neutral-900 mb-4 text-lg">Our Expertise</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-leaf-600 mt-0.5 shrink-0" />
                      <span>GSTC-aligned assessment methodologies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-leaf-600 mt-0.5 shrink-0" />
                      <span>UN SDG integration and reporting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-leaf-600 mt-0.5 shrink-0" />
                      <span>Digital sustainability platforms and tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="text-center bg-gradient-to-br from-leaf-50 to-green-50 rounded-2xl p-12 border border-leaf-200">
            <h2 className="text-3xl font-bold text-leaf-900 mb-6 flex items-center justify-center gap-3">
              <Users size={32} className="text-leaf-600" />
              Ready to Transform Your Business?
            </h2>
            <p className="text-leaf-700 mb-8 leading-relaxed text-lg max-w-3xl mx-auto">
              Join the sustainable hospitality movement. Our expert team is ready to guide your venue through 
              a comprehensive sustainability transformation that delivers measurable results.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 border border-leaf-200 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-leaf-900 mb-3 text-lg">For Hospitality Businesses</h3>
                <p className="text-leaf-700">Get a comprehensive sustainability assessment and customized roadmap for your venue.</p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-leaf-200 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-leaf-900 mb-3 text-lg">For Industry Partners</h3>
                <p className="text-leaf-700">Collaborate with us to advance sustainable practices across Hong Kong's hospitality sector.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Built for Hong Kong's hospitality industry • Updated October 2025
          </p>
          <p className="text-sm text-gray-500">
            Driving sustainable transformation through evidence-based assessment
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;