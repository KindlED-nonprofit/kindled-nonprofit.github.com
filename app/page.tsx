"use client";
import Link from "next/link";
import {
  LucideIcon,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  Star,
  TrendingUp,
  Heart,
  Monitor,
  Scale,
  Cog,
} from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  type ModalType = "students" | "mentors" | "success" | "universities" | null;

  const stats: {
    id: ModalType;
    number: string;
    label: string;
    icon: LucideIcon;
  }[] = [
    {
      id: null,
      number: "N/A",
      label: "Students Mentored",
      icon: Users,
    },
    { id: "mentors", number: "30+", label: "Active Mentors", icon: BookOpen },
    { id: null, number: "N/A", label: "Success Rate", icon: Award },
    {
      id: "universities",
      number: "10+",
      label: "Universities Represented",
      icon: TrendingUp,
    },
  ];

  type University = {
    name: string;
    location: string;
    mentors: number;
    logo: string;
  };

  const universities: University[] = [
    {
      name: "Yale University",
      location: "New Haven, CT",
      mentors: 2,
      logo: "/logos/yale.png",
    },
    {
      name: "Johns Hopkins University",
      location: "Baltimore, MD",
      mentors: 1,
      logo: "/logos/jhu.png",
    },
    {
      name: "University of Chicago",
      location: "Chicago, IL",
      mentors: 1,
      logo: "/logos/uchicago.png",
    },
    {
      name: "University of Michigan",
      location: "Ann Arbor, MI",
      mentors: 1,
      logo: "/logos/umich.png",
    },
    {
      name: "Washington University in St. Louis",
      location: "St. Louis, MO",
      mentors: 1,
      logo: "/logos/washu.png",
    },
    {
      name: "Emory University",
      location: "Atlanta, GA",
      mentors: 1,
      logo: "/logos/emory.png",
    },
    {
      name: "University of Illinois Urbana-Champaign (UIUC)",
      location: "Urbana-Champaign, IL",
      mentors: 2,
      logo: "/logos/uiuc.png",
    },
    {
      name: "University of Wisconsin-Madison",
      location: "Madison, WI",
      mentors: 1,
      logo: "/logos/uwmadison.png",
    },
    {
      name: "Purdue University",
      location: "West Lafayette, IN",
      mentors: 1,
      logo: "/logos/purdue.png",
    },
    {
      name: "University of Illinois at Chicago (UIC)",
      location: "Chicago, IL",
      mentors: 1,
      logo: "/logos/uic.png",
    },
  ];

  const academicFields = [
    {
      name: "Medicine & Healthcare",
      icon: Heart,
      link: "/about#medicine-healthcare",
    },
    {
      name: "Computer Science/AI/Data Science",
      icon: Monitor,
      link: "/about#computer-science-ai-data-science",
    },
    {
      name: "Business & Entrepreneurship",
      icon: TrendingUp,
      link: "/about#business-entrepreneurship",
    },
    {
      name: "Humanities & Liberal Arts",
      icon: BookOpen,
      link: "/about#humanities-liberal-arts",
    },
    { name: "Law & Policy", icon: Scale, link: "/about#law-policy" },
    { name: "Engineering & STEM", icon: Cog, link: "/about#engineering-stem" },
  ];

  const testimonials = [
    {
      name: "Ibraim Kanza",
      role: "Co-President",
      content:
        "The goal of this program isn't to help the already successful. It isn't to make money. KindlED’s goal is to fan the flames that every student already has inside of them and make sure more students every single day recognize their own potential and reach their goals",
      rating: 5,
    },
    {
      name: "Ayush Patel",
      role: "Co-President",
      content:
        "Any person who has gone through any journey has the responsibility to look back and act as a guiding light for those on that very same journey. KindlED should act both the literal and figurative light that casts away any anxiety or doubt within underclassmen.",
      rating: 5,
    },
    {
      name: "Vishwak Medempudi",
      role: "Operations Director",
      content:
        "I messed up a lot in high school. That’s why I jumped at the idea of KindlED – to help other students not make the same mistakes I did. I want this to be a place where mentors can look out for underclassmen and keep them from slipping up, and help them stay on the right path.",
      rating: 5,
    },
  ];

  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const openModal = (id: ModalType) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 lg:py-32">
        {/* Enhanced floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-40 left-1/2 w-60 h-60 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
          {/* Additional decorative elements */}
          <div className="absolute top-20 right-20 w-4 h-4 bg-orange-400 rounded-full opacity-60"></div>
          <div className="absolute bottom-32 left-20 w-6 h-6 bg-amber-400 rounded-full opacity-50"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-yellow-400 rounded-full opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-fadeInUp">
              {/* Enhanced badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-orange-600 mb-6 shadow-lg">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                Empowering Students Through Mentorship
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-800 mb-6 leading-tight">
                Kindle Your{" "}
                <span className="bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
                  Potential
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto mb-8 font-medium">
                At KindlED, we believe every student carries a spark—of
                potential, of purpose, of possibility. Our mission is to ensure
                that spark is kindled through mentorship, connection, and shared
                experience.
              </p>
            </div>
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="/register?tab=mentee"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="mr-2">🔥</span>
                Become a Mentee
              </Link>
              <Link
                href="/register?tab=mentor"
                className="group bg-white/90 backdrop-blur-sm border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
              >
                <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Become a Mentor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-orange-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Impact
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Making a difference, one mentorship at a time
            </p>
            <p className="text-base md:text-sm text-gray-600">
              For more detail click
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                  onClick={() => openModal(stat.id)}
                >
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110">
                    <IconComponent className="h-10 w-10 text-orange-500" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={closeModal} // click on overlay closes modal
        >
          <div
            className="bg-white max-w-2xl w-full p-6 rounded-xl relative"
            onClick={(e) => e.stopPropagation()} // prevent modal click from closing
          >
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Modal Content */}
            {activeModal === "students" && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Students Mentored</h3>
                <p>
                  Be come a Mentee
                  {/* We've mentored students from schools across the country: */}
                </p>
                {/* You can show school logos, names, or a map here */}
              </div>
            )}

            {activeModal === "mentors" && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Active Mentors</h3>
                <p>
                  We currently have <strong>30+</strong> active and highly
                  qualified mentors ready to help mentees from all backgrounds.
                </p>
              </div>
            )}

            {activeModal === "success" && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Success Rate</h3>
                {/* <p className="mb-4">Based on mentor and mentee feedback:</p> */}
                <div className="space-y-2">
                  Be the first to leave a review!
                  {/* {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center space-x-2">
                      <span>{star}★</span>
                      <div className="bg-gray-200 w-full h-3 rounded">
                        <div
                          className="bg-yellow-400 h-3 rounded"
                          style={{ width: `${Math.random() * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))} */}
                </div>
                {/* <p className="text-sm text-gray-600 mt-4 italic">
                  * Every review with 3+ stars is counted as successful.
                </p> */}
              </div>
            )}

            {activeModal === "universities" && (
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Universities Represented
                </h3>
                <div className="max-h-48 sm:max-h-64 md:max-h-80 overflow-y-auto border rounded p-4">
                  <ul className="space-y-3">
                    {universities.map((uni) => (
                      <li
                        key={uni.name}
                        className="flex items-center space-x-4"
                      >
                        {/* <img
                          src={uni.logo}
                          alt={uni.name}
                          className="w-10 h-10 flex-shrink-0"
                        /> */}
                        <div>
                          <p className="font-medium">{uni.name}</p>
                          <p className="text-sm text-gray-600">
                            {uni.location} – {uni.mentors} mentor
                            {uni.mentors !== 1 && "s"}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Academic Fields */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Academic Fields We Cover
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Expert mentorship across diverse disciplines
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicFields.map((field, index) => {
              const IconComponent = field.icon;
              return (
                <Link key={index} href={field.link}>
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-orange-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {field.name}
                      </h3>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full"></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why We Started
            </h2>
            {/* <p className="text-base md:text-lg text-gray-600">
              Hear from our amazing community
            </p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                {/* <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div> */}
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
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base md:text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Join our community of learners and leaders. Whether you're looking
            to mentor or be mentored, your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition duration-300"
            >
              Start Your Journey
            </Link>
            <Link
              href="/programs"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 font-semibold py-3 px-6 rounded-full transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
