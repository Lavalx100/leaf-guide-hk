import React from 'react';
import { ArrowLeft, Leaf, Award, Target, Users, Globe, CheckCircle, Info } from 'lucide-react';

const AboutPage = ({ onClose }) => {
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
              <Info className="text-2xl" />
              <h2 className="text-xl font-bold">About Leaf Guide HK</h2>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Mission Statement */}
          <section className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="relative">
                <Leaf className="w-12 h-12 text-leaf-700" />
                <Award className="w-6 h-6 text-leaf-600 absolute -top-1 -right-1" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h3>
            <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              A transparent rating system for sustainable hospitality in Hong Kong. Based on evidence-backed 
              assessment across 10 equal criteria, aligned with GSTC standards and UN SDGs. Each venue is rated 
              on a 3-leaf scale with detailed transparency and confidence indicators.
            </p>
          </section>

          {/* What We Do */}
          <section>
            <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <Target size={24} className="text-leaf-600" />
              What We Do
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-leaf-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Evidence-Based Assessment</h4>
                    <p className="text-neutral-700">We evaluate hospitality venues using rigorous, transparent criteria backed by verifiable evidence and industry best practices.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-leaf-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">GSTC Alignment</h4>
                    <p className="text-neutral-700">Our methodology aligns with Global Sustainable Tourism Council standards, ensuring international credibility and consistency.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-leaf-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">UN SDG Integration</h4>
                    <p className="text-neutral-700">Each assessment criterion maps to relevant UN Sustainable Development Goals, contributing to global sustainability efforts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-leaf-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Transparency First</h4>
                    <p className="text-neutral-700">All ratings include detailed evidence, sources, and improvement recommendations to promote continuous development.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Approach */}
          <section className="bg-leaf-50 rounded-xl p-6 border border-leaf-200">
            <h3 className="text-xl font-bold text-leaf-800 mb-4 flex items-center gap-2">
              <Globe size={24} />
              Our Approach
            </h3>
            <div className="space-y-4 text-leaf-700">
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
          </section>

          {/* Contact Section */}
          <section className="text-center bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center justify-center gap-2">
              <Users size={24} className="text-leaf-600" />
              Get Involved
            </h3>
            <p className="text-neutral-700 mb-4 leading-relaxed">
              Are you a hospitality business interested in sustainability assessment? Or a sustainability 
              professional looking to contribute to our methodology? We'd love to hear from you.
            </p>
            <div className="text-sm text-neutral-600">
              <p className="mb-2">
                <strong>For businesses:</strong> Contact us to discuss your venue's sustainability journey
              </p>
              <p>
                <strong>For partnerships:</strong> Collaborate with us to advance sustainable hospitality in Hong Kong
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;