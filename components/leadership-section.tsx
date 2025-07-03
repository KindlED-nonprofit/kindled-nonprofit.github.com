import { Linkedin, Mail, GraduationCap } from "lucide-react"

interface Leader {
  name: string
  title: string
  bio: string
  education: string
  image: string
  linkedin?: string
  email?: string
}

export default function LeadershipSection() {
  const leaders: Leader[] = [
    {
      name: "Sarah Chen",
      title: "Co-President & Founder",
      bio: "Sarah is a pre-med student at Harvard University with a passion for mentorship and educational equity. She founded KindlED after experiencing firsthand the transformative power of mentorship.",
      education: "Harvard University - Biology & Pre-Med",
      image: "/placeholder.svg?height=128&width=128",
      linkedin: "https://linkedin.com/in/sarahchen",
      email: "sarah@kindled.org",
    },
    {
      name: "Marcus Johnson",
      title: "Co-President & Technology Lead",
      bio: "Marcus leads our technology initiatives and mentor matching algorithms. As a Computer Science major at MIT, he brings technical expertise and a deep understanding of student needs.",
      education: "MIT - Computer Science & AI",
      image: "/placeholder.svg?height=128&width=128",
      linkedin: "https://linkedin.com/in/marcusjohnson",
      email: "marcus@kindled.org",
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Faculty Advisor",
      bio: "Dr. Rodriguez brings over 15 years of experience in educational psychology and student development. She guides our mentorship methodology and ensures program effectiveness.",
      education: "PhD Educational Psychology - Stanford",
      image: "/placeholder.svg?height=128&width=128",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      email: "emily@kindled.org",
    },
    {
      name: "James Park",
      title: "Director of Partnerships",
      bio: "James manages our university partnerships and corporate relationships. His background in business development helps expand KindlED's reach and impact.",
      education: "Wharton School - Business Administration",
      image: "/placeholder.svg?height=128&width=128",
      linkedin: "https://linkedin.com/in/jamespark",
      email: "james@kindled.org",
    },
    {
      name: "Aisha Patel",
      title: "Director of Student Success",
      bio: "Aisha oversees our mentorship programs and tracks student outcomes. Her experience in student affairs ensures every participant receives exceptional support.",
      education: "Columbia University - Education Policy",
      image: "/placeholder.svg?height=128&width=128",
      linkedin: "https://linkedin.com/in/aishapatel",
      email: "aisha@kindled.org",
    },
    {
      name: "David Kim",
      title: "Director of Communications",
      bio: "David leads our outreach and communications efforts, helping spread awareness about KindlED's mission and connecting with students who need mentorship.",
      education: "Northwestern University - Communications",
      image: "/placeholder.svg?height=128&width=128",
      linkedin: "https://linkedin.com/in/davidkim",
      email: "david@kindled.org",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-8 w-8 text-orange-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Leadership</h2>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the passionate individuals who guide KindlED's mission and ensure every student finds the mentorship
            they deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-orange-100 group-hover:ring-orange-200 transition-all duration-300">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Leader
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{leader.name}</h3>
                <p className="text-orange-500 font-medium text-sm mb-2">{leader.title}</p>
                <div className="flex items-center justify-center text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">
                  <GraduationCap className="h-3 w-3 mr-1" />
                  {leader.education}
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-600 leading-relaxed text-sm mb-6">{leader.bio}</p>

              {/* Contact Links */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                {leader.linkedin && (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition-colors duration-200"
                    aria-label={`${leader.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                {leader.email && (
                  <a
                    href={`mailto:${leader.email}`}
                    className="bg-orange-100 hover:bg-orange-200 text-orange-600 p-2 rounded-full transition-colors duration-200"
                    aria-label={`Email ${leader.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Want to Join Our Team?</h3>
            <p className="text-gray-600 mb-6">
              We're always looking for passionate individuals who want to make a difference in students' lives.
            </p>
            <a
              href="/contact?subject=leadership"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Involved
              <GraduationCap className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
