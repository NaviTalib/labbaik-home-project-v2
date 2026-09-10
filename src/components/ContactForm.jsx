import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('Full Home Interiors');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });

  const services = [
    'Full Home Interiors',
    'Modular Kitchen',
    'Wardrobes & Storage',
    'Civil Work / Renovation'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-28 bg-stone-100/80 border-t border-stone-200/80 overflow-hidden">
      {/* Background Decor Ambient Glows */}
      <div className="absolute top-1/3 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-amber-200/40 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-amber-100/50 blur-[130px] sm:blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            
            <div className="space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300/80 px-3.5 py-1.5 rounded-full text-xs text-amber-900 font-semibold shadow-xs">
                <Sparkles size={14} className="text-amber-600 animate-pulse" />
                <span>Get In Touch</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
                Let’s Plan Your Dream Interior Space
              </h2>

              <p className="text-stone-600 text-xs sm:text-sm lg:text-base leading-relaxed font-light">
                Have questions regarding material pricing, BOQ estimates, or site timelines? Connect directly with our execution team or visit our Experience Center.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="space-y-3 sm:space-y-4">
              
              {/* Phone & WhatsApp */}
              <a
                href="tel:+919313310786"
                className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:border-amber-400 hover:shadow-md transition-all group"
              >
                <div className="p-2.5 sm:p-3 bg-amber-100/80 rounded-xl text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors shrink-0">
                  <Phone size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-stone-500 font-medium">Phone & WhatsApp</p>
                  <p className="font-semibold text-stone-900 text-sm sm:text-base group-hover:text-amber-700 transition-colors truncate">
                    +91 93133 10786
                  </p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Mon - Sun: 9:30 AM - 8:00 PM</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@labbaikproject.com"
                className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:border-amber-400 hover:shadow-md transition-all group"
              >
                <div className="p-2.5 sm:p-3 bg-amber-100/80 rounded-xl text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors shrink-0">
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-stone-500 font-medium">Email Address</p>
                  <p className="font-semibold text-stone-900 text-sm sm:text-base group-hover:text-amber-700 transition-colors truncate">
                    contact@labbaikproject.com
                  </p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Fast response within 2 business hours</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
                <div className="p-2.5 sm:p-3 bg-amber-100/80 rounded-xl text-amber-700 shrink-0">
                  <MapPin size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-stone-500 font-medium">Experience Center / Office</p>
                  <p className="font-semibold text-stone-900 text-sm sm:text-base">
                    Sector 143, Noida, Uttar Pradesh, India
                  </p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Serving Noida, Ghaziabad, Delhi & Gurugram</p>
                </div>
              </div>

            </div>

            {/* Quick Response Notice */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-stone-900 text-stone-300 text-xs flex items-center gap-3 border border-stone-800 shadow-md">
              <Clock size={18} className="text-amber-400 shrink-0" />
              <span className="leading-relaxed">
                Book a slot today to receive a free detailed BOQ estimate within 24 hours of site survey.
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-xl relative overflow-hidden">
              
              {isSubmitted ? (
                /* Success Feedback View */
                <div className="py-10 sm:py-12 text-center space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                    <CheckCircle2 size={32} className="sm:w-9 sm:h-9" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed px-2">
                    Thank you, <strong className="text-stone-900">{formData.fullName || 'Valued Client'}</strong>. Our senior designer will reach out to you shortly at <strong className="text-stone-900">{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: '', phone: '', email: '', location: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-amber-600 transition-colors"
                  >
                    Send Another Requirement
                  </button>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-1">
                      Request Free Site Consultation
                    </h3>
                    <p className="text-xs text-stone-500">
                      Fill out your details below to schedule an in-person or virtual consultation.
                    </p>
                  </div>

                  {/* Service Selection Filter Pills */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-2">
                      Select Project Type
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setSelectedService(service)}
                          className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-medium transition-all ${
                            selectedService === service
                              ? 'bg-amber-600 text-white shadow-xs'
                              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Full Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Navi Talib"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-stone-50 border border-stone-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all text-xs sm:text-sm text-stone-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Mobile Number <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-stone-50 border border-stone-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all text-xs sm:text-sm text-stone-900"
                      />
                    </div>
                  </div>

                  {/* Email & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-stone-50 border border-stone-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all text-xs sm:text-sm text-stone-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        City / Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g. Noida Sector 75 / Indirapuram"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-stone-50 border border-stone-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all text-xs sm:text-sm text-stone-900"
                      />
                    </div>
                  </div>

                  {/* Project Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Project Scope & Timeline
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share details like property type (3BHK, Villa), tentative move-in date, or specific design preferences..."
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-stone-50 border border-stone-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all text-xs sm:text-sm text-stone-900 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-stone-900 hover:bg-amber-600 text-white font-semibold py-3 sm:py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group disabled:opacity-75 cursor-pointer text-xs sm:text-sm"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Book Free Consultation</span>
                        <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] sm:text-[11px] text-center text-stone-400">
                    🔒 Your privacy is safe with us. We never share your contact details.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}