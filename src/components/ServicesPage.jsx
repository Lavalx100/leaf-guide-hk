import React from 'react';
import { ArrowLeft, Leaf, Award, Target, Users, Globe, CheckCircle, Briefcase } from 'lucide-react';

const ServicesPage = ({ onClose }) => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-leaf-600 to-leaf-700 text-white px-6 py-4 rounded-t-lg">
          <div className="flex items-center gap-3">
            <ArrowLeft 
              onClick={onClose} 
              className="h-6 w-6 cursor-pointer hover:text-leaf-200 transition-colors"
            />
            <div className="flex items-center gap-3">
              <Briefcase className="text-2xl" />
              <h2 className="text-xl font-bold">Our Services</h2>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Green Hospitality Overview */}
          <section>
            <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <Leaf size={24} className="text-leaf-600" />
              Understanding Green Hospitality
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-leaf-50 to-green-50 rounded-xl p-6 border border-leaf-200">
                <p className="text-leaf-800 leading-relaxed mb-4">
                  Green hospitality represents a comprehensive approach to sustainable tourism and accommodation practices 
                  that minimizes environmental impact while maximizing positive social and economic contributions to local communities.
                </p>
                <p className="text-leaf-700 leading-relaxed">
                  This movement encompasses energy efficiency, waste reduction, sustainable sourcing, water conservation, 
                  carbon footprint reduction, and community engagement—creating a holistic framework for responsible tourism.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-neutral-200 shadow-sm">
                  <div className="w-10 h-10 bg-leaf-100 rounded-full flex items-center justify-center mb-3">
                    <Globe size={20} className="text-leaf-600" />
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Environmental Impact</h4>
                  <p className="text-sm text-neutral-700">
                    Reducing carbon emissions, minimizing waste, conserving water, and implementing renewable energy solutions.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-neutral-200 shadow-sm">
                  <div className="w-10 h-10 bg-leaf-100 rounded-full flex items-center justify-center mb-3">
                    <Users size={20} className="text-leaf-600" />
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Social Responsibility</h4>
                  <p className="text-sm text-neutral-700">
                    Supporting local communities, fair labor practices, cultural preservation, and inclusive tourism.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-neutral-200 shadow-sm">
                  <div className="w-10 h-10 bg-leaf-100 rounded-full flex items-center justify-center mb-3">
                    <Target size={20} className="text-leaf-600" />
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Economic Sustainability</h4>
                  <p className="text-sm text-neutral-700">
                    Creating long-term value, supporting local economies, and ensuring viable business operations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sustainable Hospitality Roadmap */}
          <section className="bg-gradient-to-br from-leaf-600 to-leaf-700 text-white rounded-xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-4">Green Hospitality Sustainability Roadmap</h3>
              <p className="text-leaf-100 leading-relaxed max-w-3xl mx-auto">
                Our comprehensive roadmap outlines the strategic pathway for hospitality businesses to achieve 
                meaningful sustainability outcomes, from initial assessment to industry leadership.
              </p>
            </div>

            {/* Roadmap Preview */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-4 gap-4 text-center">
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
                className="inline-flex items-center gap-2 bg-white text-leaf-700 px-6 py-3 rounded-lg font-semibold hover:bg-leaf-50 transition-colors"
              >
                View Complete Roadmap
                <Globe size={18} />
              </a>
              <p className="text-leaf-100 text-sm mt-2">
                Explore our detailed sustainability roadmap with actionable steps and industry insights
              </p>
            </div>
          </section>

          {/* About Green Hospitality Company */}
          <section className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <Award size={24} className="text-leaf-600" />
              Leading Green Hospitality Transformation
            </h3>
            <div className="space-y-4">
              <p className="text-neutral-700 leading-relaxed">
                As pioneers in sustainable hospitality assessment, we work with industry leaders to transform 
                Hong Kong's tourism landscape. Our evidence-based approach combines international best practices 
                with local market understanding to create actionable sustainability frameworks.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Our Impact</h4>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-leaf-600 mt-1 shrink-0" />
                      <span className="text-sm">10+ hospitality venues assessed and certified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-leaf-600 mt-1 shrink-0" />
                      <span className="text-sm">Comprehensive sustainability framework development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-leaf-600 mt-1 shrink-0" />
                      <span className="text-sm">Industry partnerships with leading hotels and restaurants</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Our Expertise</h4>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-leaf-600 mt-1 shrink-0" />
                      <span className="text-sm">GSTC-aligned assessment methodologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-leaf-600 mt-1 shrink-0" />
                      <span className="text-sm">UN SDG integration and reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-leaf-600 mt-1 shrink-0" />
                      <span className="text-sm">Digital sustainability platforms and tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center bg-leaf-50 rounded-xl p-6 border border-leaf-200">
            <h3 className="text-xl font-bold text-leaf-900 mb-4 flex items-center justify-center gap-2">
              <Users size={24} className="text-leaf-600" />
              Ready to Transform Your Business?
            </h3>
            <p className="text-leaf-700 mb-4 leading-relaxed">
              Join the sustainable hospitality movement. Our expert team is ready to guide your venue through 
              a comprehensive sustainability transformation that delivers measurable results.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-leaf-700">
              <div className="bg-white rounded-lg p-4 border border-leaf-200">
                <h4 className="font-semibold text-leaf-900 mb-2">For Hospitality Businesses</h4>
                <p>Get a comprehensive sustainability assessment and customized roadmap for your venue.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-leaf-200">
                <h4 className="font-semibold text-leaf-900 mb-2">For Industry Partners</h4>
                <p>Collaborate with us to advance sustainable practices across Hong Kong's hospitality sector.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;