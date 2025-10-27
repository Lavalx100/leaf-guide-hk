import React from 'react';
import { Leaf, Target, Users, Globe, CheckCircle, Heart, Award, Building2 } from 'lucide-react';

const AboutPage = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-leaf-50 to-white">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-leaf-600 to-leaf-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Leaf className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">About Leaf Guide HK</h1>
            <p className="text-xl text-leaf-100 max-w-3xl mx-auto">
              A transparent rating system for sustainable hospitality in Hong Kong
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Mission Statement */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Mission</h2>
          <p className="text-xl text-neutral-700 leading-relaxed max-w-4xl mx-auto">
            Evidence-backed assessment across 10 equal criteria, aligned with GSTC standards and UN SDGs. 
            Each venue is rated on a 3-leaf scale with detailed transparency and confidence indicators.
          </p>
        </section>

        {/* What We Do */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4 flex items-center justify-center gap-3">
              <Target size={32} className="text-leaf-600" />
              What We Do
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-leaf-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle size={24} className="text-leaf-600" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Evidence-Based Assessment</h3>
              <p className="text-neutral-700 text-sm">Rigorous evaluation using transparent criteria backed by verifiable evidence and industry best practices.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-leaf-100 rounded-lg flex items-center justify-center mb-4">
                <Award size={24} className="text-leaf-600" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">GSTC Alignment</h3>
              <p className="text-neutral-700 text-sm">Methodology aligned with Global Sustainable Tourism Council standards for international credibility.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-leaf-100 rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} className="text-leaf-600" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">UN SDG Integration</h3>
              <p className="text-neutral-700 text-sm">Each criterion maps to relevant UN Sustainable Development Goals for global impact.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-leaf-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 size={24} className="text-leaf-600" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Transparency First</h3>
              <p className="text-neutral-700 text-sm">All ratings include detailed evidence, sources, and improvement recommendations.</p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-leaf-50 to-green-50 rounded-2xl p-12 border border-leaf-200">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-leaf-800 mb-6 flex items-center justify-center gap-3">
                <Heart size={32} className="text-leaf-600" />
                Our Approach
              </h2>
              <div className="space-y-6 text-leaf-700 text-lg">
                <p className="leading-relaxed">
                  Leaf Guide HK represents a new standard in hospitality sustainability assessment for Hong Kong. 
                  We believe that transparency and evidence-based evaluation are essential for driving meaningful 
                  change in the industry.
                </p>
                <p className="leading-relaxed">
                  Our 10-criteria framework covers all aspects of sustainable hospitality operations, from 
                  environmental impact to social responsibility and economic sustainability. Each venue receives 
                  a comprehensive evaluation with actionable insights for improvement.
                </p>
                <p className="leading-relaxed">
                  By providing detailed breakdowns, supporting evidence, and clear improvement pathways, we 
                  empower both businesses and consumers to make informed decisions that support Hong Kong's 
                  sustainable development goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center justify-center gap-3">
              <Users size={32} className="text-leaf-600" />
              Get Involved
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Are you a hospitality business interested in sustainability assessment? Or a sustainability 
              professional looking to contribute to our methodology? We'd love to hear from you.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-leaf-50 rounded-xl p-6 border border-leaf-200">
                <h3 className="font-bold text-leaf-800 mb-2">For Businesses</h3>
                <p className="text-neutral-700">
                  Contact us to discuss your venue's sustainability journey and assessment opportunities.
                </p>
              </div>
              <div className="bg-leaf-50 rounded-xl p-6 border border-leaf-200">
                <h3 className="font-bold text-leaf-800 mb-2">For Partnerships</h3>
                <p className="text-neutral-700">
                  Collaborate with us to advance sustainable hospitality in Hong Kong.
                </p>
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
            Aligned with GSTC standards and UN SDGs
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;