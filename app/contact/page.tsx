"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"

import { Mail, Clock, Send, CheckCircle, User } from "lucide-react"
import { FloatingLabelInput } from "@/components/enhanced-form"

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
  register,
  handleSubmit,
    formState: { errors },
  reset,
} = useForm<ContactFormData>({
  mode: "onTouched", // or "onChange" for instant validation
})

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a0b0e6b4-a12e-457e-afbd-dde8da0ab285", // ← your key
          name: data.name,
          email: data.email,
          subject: "Contact Us Form: " + data.subject,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Form sent:", result);
        setIsSubmitted(true);
        reset();

        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Web3Forms Error:", result);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "kindled.team@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "24-48 hours",
      description: "We typically respond within",
    },
  ];

  const faqs = [
    {
      question: "How quickly will I be matched with a mentor/mentee?",
      answer:
        "Our matching process typically takes 1-2 weeks after your application is approved. We take time to ensure the best possible match based on your preferences and goals.",
    },
    {
      question: "Is there any cost to participate in KindlED programs?",
      answer:
        "No, all KindlED programs are completely free. We believe that financial barriers should never prevent access to quality mentorship and educational support.",
    },
    {
      question: "Can I change mentors/mentees if the match isn't working?",
      answer:
        "Absolutely. We understand that not every match is perfect. Our team will work with you to address any concerns and facilitate a new match if necessary.",
    },
    {
      question: "What if I need to take a break from the program?",
      answer:
        "Life happens! You can pause your participation at any time. Just let us know, and we'll work with you to resume when you're ready.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 py-20 lg:py-28">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-32 left-1/2 w-56 h-56 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"
            style={{ animationDelay: "3.5s" }}
          ></div>
          {/* Contact-themed decorative elements */}
          <div className="absolute top-20 right-16 w-8 h-8 border-2 border-violet-300 rounded-lg rotate-45 opacity-40"></div>
          <div className="absolute bottom-24 left-20 w-10 h-10 bg-purple-300 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 right-1/4 w-6 h-6 border-2 border-indigo-300 rotate-12 opacity-50"></div>
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-violet-300 transform rotate-45 opacity-40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-fadeInUp">
              {/* Enhanced badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-violet-600 mb-8 shadow-lg border border-violet-100">
                <Mail className="w-4 h-4 mr-2 text-violet-500" />
                We're Here to Help
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-800 mb-6 leading-tight">
                Get in{" "}
                <span className="bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                  Touch
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto font-medium">
                Have questions about our programs? Need support with your
                mentorship? We're here to help and would love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 mb-1">{info.content}</p>
                      <p className="text-sm text-gray-500">
                        {info.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full -translate-y-20 translate-x-20 opacity-30"></div>

              <h2 className="text-3xl font-bold text-gray-800 mb-8 relative">
                Send us a Message
              </h2>

              {isSubmitted && (
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-xl p-4 mb-8 flex items-center animate-fadeInUp">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
                  <p className="text-emerald-700 font-medium">
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingLabelInput
                    label="Full Name"
                    name="name"
                    icon={User}
                    required
                    register={register}
                    error={errors.name?.message}
                  />

                  <FloatingLabelInput
                    label="Email Address"
                    name="email"
                    type="email"
                    icon={Mail}
                    required
                    register={register}
                    error={errors.email?.message}
                  />
                </div>

                <FloatingLabelInput
                  label="Subject"
                  name="subject"
                  type="select"
                  required
                  register={register}
                  error={errors.subject?.message}
                  options={[
                    "General Inquiry",
                    "Mentorship Support",
                    "Application Help",
                    "Technical Issues",
                    "Partnership Opportunities",
                    "Feedback & Suggestions",
                    "Other",
                  ]}
                />

                <FloatingLabelInput
                  label="Message"
                  name="message"
                  type="textarea"
                  rows={6}
                  required
                  register={register}
                  error={errors.message?.message}
                  placeholder="Tell us how we can help you..."
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:from-gray-300 disabled:to-gray-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-105 disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-6 w-6 mr-3" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
