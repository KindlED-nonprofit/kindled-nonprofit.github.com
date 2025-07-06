import {
  CheckCircle,
  Users,
  Star,
  ArrowRight,
  MessageCircle,
  Calendar,
  Target,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import InteractiveFAQ from "@/components/interactive-faq";

export default function ProgramsPage() {
  const benefits = {
    mentors: [
      "Develop leadership and communication skills",
      "Give back to the academic community",
      "Build your professional network",
      "Gain teaching and coaching experience",
      "Access to exclusive mentor resources",
      "Recognition and certificates",
    ],
    mentees: [
      "Personalized academic and career guidance",
      "Access to industry insights and connections",
      "Help with college and graduate school applications",
      "Study strategies and time management skills",
      "Professional development opportunities",
      "Peer networking and community support",
    ],
  };

  const process = [
    {
      step: 1,
      title: "Application & Assessment",
      description:
        "Complete our comprehensive application including academic background, goals, and preferences.",
      icon: Target,
    },
    {
      step: 2,
      title: "Matching Process",
      description:
        "Our team carefully matches mentors and mentees based on compatibility and shared interests.",
      icon: Users,
    },
    {
      step: 3,
      title: "Initial Meeting",
      description:
        "Participate in a structured introduction session to establish goals and expectations.",
      icon: MessageCircle,
    },
    {
      step: 4,
      title: "Ongoing Mentorship",
      description:
        "Engage in regular meetings, goal tracking, and continuous support throughout the program.",
      icon: Calendar,
    },
  ];

  const testimonials = [
    // {
    //   name: "Dr. Amanda Foster",
    //   role: "Mentor - Cardiothoracic Surgeon",
    //   content:
    //     "Mentoring through KindlED has been incredibly rewarding. Seeing my mentees grow and achieve their goals reminds me why I chose medicine in the first place.",
    //   rating: 5,
    // }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 lg:py-28">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"
            style={{ animationDelay: "2.5s" }}
          ></div>
          <div
            className="absolute top-32 left-1/2 w-56 h-56 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
          {/* Program-themed decorative elements */}
          <div className="absolute top-20 right-20 w-12 h-12 border-2 border-emerald-300 rounded-lg rotate-12 opacity-40"></div>
          <div className="absolute bottom-32 left-16 w-8 h-8 bg-teal-300 rounded-full opacity-50"></div>
          <div className="absolute top-1/2 right-1/3 w-6 h-6 border-2 border-cyan-300 rotate-45 opacity-40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-fadeInUp">
              {/* Enhanced badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-emerald-600 mb-8 shadow-lg border border-emerald-100">
                <BookOpen className="w-4 h-4 mr-2 text-emerald-500" />
                Structured Mentorship Programs
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-800 mb-6 leading-tight">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Programs
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto font-medium">
                Discover how our structured mentorship programs create
                meaningful connections and drive academic success across diverse
                fields of study.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Matching Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Our proven 4-step process for successful mentorship
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-orange-500" />
                  </div>
                  <div className="bg-orange-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Program Benefits
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              What you can expect from our mentorship programs
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Mentors */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                For Mentors
              </h3>
              <ul className="space-y-4">
                {benefits.mentors.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <Link
                  href="/register?type=mentor"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 inline-flex items-center"
                >
                  Become a Mentor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* For Mentees */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                For Mentees
              </h3>
              <ul className="space-y-4">
                {benefits.mentees.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <Link
                  href="/register?type=mentee"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-6 rounded-full transition duration-300 inline-flex items-center"
                >
                  Find a Mentor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Success Metrics
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Measurable outcomes from our mentorship programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">N/A</div>
              <div className="text-gray-600">Program Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">N/A</div>
              <div className="text-gray-600">College Acceptance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">N/A</div>
              <div className="text-gray-600">Satisfaction Score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">N/A</div>
              <div className="text-gray-600">Continue to Graduate School</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-25">
              What Our Community Says
            </h2>
            {/* <p className="text-base md:text-lg text-gray-600">
              Real experiences from mentors and mentees
            </p> */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Coming Soon
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Be the first to leave a review!
            </p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* FAQ Section */}
      <InteractiveFAQ
        faqs={[
          {
            id: "matching-time",
            question: "How long does the mentorship program last?",
            answer:
              "Our standard mentorship program runs for one academic year (9 months), with the option to extend based on mutual agreement between mentor and mentee.",
            category: "program",
          },
          {
            id: "time-commitment",
            question: "How much time commitment is required?",
            answer:
              "We recommend a minimum of 2-3 hours per month, typically broken down into 1-2 meetings. However, many successful partnerships involve more frequent communication.",
            category: "program",
          },
          {
            id: "matching-issues",
            question: "What if the mentor-mentee match isn't working out?",
            answer:
              "We understand that not every match is perfect. Our team provides support to address any issues, and if necessary, we can facilitate a new matching process.",
            category: "support",
          },
          {
            id: "cost",
            question: "Is there any cost to participate?",
            answer:
              "KindlED is completely free for all participants. We believe that financial barriers should never prevent access to quality mentorship.",
            category: "general",
          },
          {
            id: "program-support",
            question:
              "What support does KindlED provide during the mentorship?",
            answer:
              "We provide regular check-ins, resources and guides, workshop opportunities, and a dedicated support team to ensure successful mentorship relationships.",
            category: "support",
          },
          {
            id: "international",
            question: "Can international students participate?",
            answer:
              "We welcome students from all backgrounds and locations. Many of our mentorship sessions are conducted virtually to accommodate different time zones.",
            category: "eligibility",
          },
          {
            id: "application-process",
            question: "How does the application process work?",
            answer:
              "After submitting your application, we review it within 3-5 business days. If approved, we begin the matching process which typically takes 1-2 weeks.",
            category: "application",
          },
          {
            id: "mentor-qualifications",
            question: "What qualifications do mentors need?",
            answer:
              "Mentors should have relevant academic or professional experience in their field, strong communication skills, and a genuine desire to help students succeed.",
            category: "eligibility",
          },
        ]}
        title="Program Questions & Answers"
        description="Everything you need to know about our mentorship programs"
      />

      {/* Call to Action */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base md:text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of students and professionals who have transformed
            their academic and career paths through mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition duration-300"
            >
              Get Started Today
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 font-semibold py-3 px-6 rounded-full transition duration-300"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
