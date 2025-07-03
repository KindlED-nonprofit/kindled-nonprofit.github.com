import { Users, Target, Heart, Award, Lightbulb } from "lucide-react";
import LeadershipSection from "@/components/leadership-section";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Connection",
      description:
        "We believe in the power of genuine human connection to transform educational experiences.",
    },
    {
      icon: Target,
      title: "Purpose-Driven Growth",
      description:
        "Every interaction is designed to help students discover and pursue their unique purpose.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Learning",
      description:
        "We embrace new approaches to mentorship that adapt to each student's individual needs.",
    },
    {
      icon: Award,
      title: "Excellence in Education",
      description:
        "We maintain the highest standards in matching mentors with mentees for optimal outcomes.",
    },
  ];

  const academicFields = [
    {
      title: "Medicine & Healthcare",
      description:
        "Pre-med guidance, medical school preparation, healthcare career exploration, and clinical experience insights.",
      mentors: "45+ Active Mentors",
    },
    {
      title: "Computer Science/AI/Data Science",
      description:
        "Programming mentorship, tech career guidance, project development, and industry connections.",
      mentors: "60+ Active Mentors",
    },
    {
      title: "Business & Entrepreneurship",
      description:
        "Startup guidance, business plan development, leadership skills, and networking opportunities.",
      mentors: "35+ Active Mentors",
    },
    {
      title: "Humanities & Liberal Arts",
      description:
        "Research methodology, graduate school preparation, career exploration, and academic writing.",
      mentors: "25+ Active Mentors",
    },
    {
      title: "Law & Policy",
      description:
        "Law school preparation, legal career guidance, policy analysis, and public service opportunities.",
      mentors: "20+ Active Mentors",
    },
    {
      title: "Engineering & STEM",
      description:
        "Technical project guidance, research opportunities, graduate school prep, and industry insights.",
      mentors: "40+ Active Mentors",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-28">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"></div>
          <div
            className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
          {/* Geometric shapes */}
          <div className="absolute top-16 left-16 w-8 h-8 border-2 border-blue-300 rotate-45 opacity-30"></div>
          <div className="absolute bottom-20 right-16 w-6 h-6 bg-indigo-300 rounded-full opacity-40"></div>
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-purple-300 transform rotate-45 opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-fadeInUp">
              {/* Enhanced badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-indigo-600 mb-8 shadow-lg border border-indigo-100">
                <Users className="w-4 h-4 mr-2 text-indigo-500" />
                Our Story & Mission
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-800 mb-6 leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  KindlED
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto font-medium">
                Founded on the belief that every student deserves guidance and
                support, KindlED has been connecting passionate mentors with
                ambitious students since 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-600">
                <p>
                  KindlED was born from a simple observation: talented students
                  often lack access to the guidance and mentorship that can
                  unlock their full potential. Our founders, a group of
                  educators and professionals, recognized that while academic
                  resources are abundant, personalized mentorship remains
                  scarce.
                </p>
                <p>
                  What started as a small pilot program connecting 20 students
                  with mentors has grown into a thriving community of over 700
                  participants across multiple academic disciplines. We've
                  facilitated thousands of meaningful connections and helped
                  students achieve their academic and career goals.
                </p>
                <p>
                  Today, KindlED continues to evolve, incorporating new
                  technologies and methodologies to ensure every student finds
                  the right mentor for their unique journey.
                </p>
              </div>
            </div>
            <div className="bg-orange-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    202
                  </div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    700+
                  </div>
                  <div className="text-sm text-gray-600">
                    Total Participants
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">Universities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    95%
                  </div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 text-center group transform hover:scale-105 flex flex-col h-full"
                >
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {value.description}
                  </p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Fields */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Academic Fields We Cover
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Comprehensive mentorship across diverse disciplines
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicFields.map((field, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow flex flex-col"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {field.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {field.description}
                </p>

                {/* Spacer to push mentors to the bottom */}
                <div className="flex-grow"></div>

                <div className="flex items-center text-orange-500 font-medium mt-4">
                  <Users className="h-4 w-4 mr-2" />
                  {field.mentors}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Model */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Mentorship Model
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              A structured approach to meaningful connections
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Careful Matching
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We use a comprehensive assessment to match mentors and mentees
                based on academic interests, career goals, and personality
                compatibility.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Structured Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Regular check-ins, goal-setting sessions, and progress tracking
                ensure that every mentorship relationship stays on track and
                productive.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Ongoing Growth
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide resources, workshops, and community events to help
                both mentors and mentees continue growing throughout their
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
