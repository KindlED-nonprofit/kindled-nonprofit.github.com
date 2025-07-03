"use client"

import { useState } from "react"
import { ChevronDown, Search, HelpCircle } from "lucide-react"

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

interface InteractiveFAQProps {
  faqs: FAQItem[]
  title?: string
  description?: string
}

export default function InteractiveFAQ({
  faqs,
  title = "Frequently Asked Questions",
  description = "Find answers to common questions",
}: InteractiveFAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", ...Array.from(new Set(faqs.map((faq) => faq.category)))]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-orange-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
          </div>
          <p className="text-base md:text-lg text-gray-600">{description}</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          {/* <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-200 bg-white shadow-sm"
            />
          </div> */}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-500 shadow-sm"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No questions found matching your search.</p>
            </div>
          ) : (
            filteredFAQs.map((faq) => {
              const isOpen = openItems.has(faq.id)
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-orange-50 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-orange-100"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-semibold text-gray-800 pr-4">{faq.question}</h3>
                    <div
                      className={`flex-shrink-0 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <ChevronDown className="h-5 w-5 text-orange-500" />
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                      <div className="border-l-4 border-orange-400 pl-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>

                      {/* Feedback Buttons */}
                      <div className="mt-4 flex items-center space-x-4">
                        <span className="text-sm text-gray-500">Was this helpful?</span>
                        <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200">
                          Yes
                        </button>
                        <button className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors duration-200">
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Can't find what you're looking for? Our team is here to help.</p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Support
              <HelpCircle className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
