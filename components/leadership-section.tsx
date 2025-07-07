import { Linkedin, Mail, GraduationCap, Globe } from "lucide-react";
import Image from "next/image"

interface Leader {
  name: string
  title: string
  bio: string
  education: string
  image: string
  linkedin?: string
  email?: string
  website?: string
}

export default function LeadershipSection() {
  const leaders: Leader[] = [
    {
      name: "Ibraim Kanza",
      title: "Co-President & Founder",
      bio: "Ibraim leads our mission and heads the organization with his 2 co-founders. A passionate High school senior who's always wanted to see his peers succeed in life. He devotes his time to KindlED to maximize the success of it, its mentors, and its mentees as one whole family.",
      education:
        "Senior @ Schaumburg High School - Aspiring Pharmaceutical Scientist",
      image: "/ibraim.png?height=128&width=128",
      linkedin: "https://www.linkedin.com/in/ibraim-kanza-684348305/",
      email: "ibraimkanza@gmail.com",
    },
    {
      name: "Ayush Patel",
      title: "Co-President & Founder",
      bio: "Ayush leads besides Ibraim as Co-President. He is a passionate and driven scholar that has made great strides in pursuing his cultural heritage and fostering others’ cultural connection. Ayush is constantly trying to find a new project that inspires him and others as KindlED does.",
      education:
        "Senior @ Schaumburg High School - Aspiring Aerospace Engineer and Business Administrator",
      image: "/ayush.png?height=128&width=128",
      linkedin: "https://www.linkedin.com/in/ayush-patel-77721335a/",
      email: "Ayush08132008@gmail.com",
    },
    {
      name: "Vishwak Medempudi",
      title: "Operations Director & Founder",
      bio: "Vishwak is a co-founder of KindlED. He is driven by a passion for educational equity and service. As a student interested in finance, Vishwak brings both insight and energy to the mission. He believes that the right guidance can change lives, and is committed to making it accessible to all.",
      education:
        "Senior @ Schaumburg High School - Aspiring Risk Management Professional and Wealth Advisor",
      image: "/vishwak.png?height=128&width=128",
      //TODO: Add Linkedin
      linkedin: "",
      email: "vishwak.medempudi@gmail.com",
    },
    {
      name: "Paritosh Vaghasiya",
      title: "Website Developer",
      bio: "Paritosh is the developer behind KindlED’s website. A passionate student with a love for coding, design, and SEO, he built the platform to reflect the mission and make it accessible to all. From optimizing performance to enhancing user experience, Paritosh brings a creative yet logical approach to everything he builds. He’s always seeking new ways to use technology to solve real-world problems.np",
      education:
        "Senior @ Schaumburg High School - Aspiring Computer Scientist and AI Engineer",
      image: "/paritosh.png?height=128&width=128",
      linkedin: "https://www.linkedin.com/in/paritoshvaghasiya/",
      email: "paritoshnvaghasiya@gmail.com",
      website: "https://v-paritosh.github.io/",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-8 w-8 text-orange-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Leadership
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the passionate individuals who guide KindlED's mission and
            ensure every student finds the mentorship they deserve.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[30%] bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-orange-100 group-hover:ring-orange-200 transition-all duration-300">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {leader.name}
                </h3>
                <p className="text-orange-500 font-medium text-sm mb-2">
                  {leader.title}
                </p>
                <div className="flex items-center justify-center text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">
                  <GraduationCap className="h-3 w-3 mr-1" />
                  {leader.education}
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                {leader.bio}
              </p>

              {/* Contact Links */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                {leader.website && (
                  <a
                    href={leader.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-100 hover:bg-emerald-200 text-emerald-600 p-2 rounded-full transition-colors duration-200"
                    aria-label={`${leader.name}'s Website`}
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                )}
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
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always looking for passionate individuals who want to make a
              difference in students' lives.
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
  );
}
