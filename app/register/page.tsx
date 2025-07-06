"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  User,
  GraduationCap,
  Award,
  CheckCircle,
  Mail,
  Phone,
} from "lucide-react";
import { FloatingLabelInput } from "@/components/enhanced-form";

type FormData = {
  // Shared fields
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  gradeLevel: string;
  gpa: number;
  fieldOfInterest: string;
  accomplishments: string;
  extracurriculars: string;

  // Mentor-specific fields
  leadershipExperience?: string;
  testScores?: string;
  university?: string;
  availability?: string;

  // Mentee-specific fields
  specificGoals?: string;
  challengesAreas?: string;
  preferredMentorType?: string;
};

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState<"mentor" | "mentee">("mentee");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const academicFields = [
    "Medicine & Healthcare",
    "Computer Science/AI/Data Science",
    "Business & Entrepreneurship",
    "Humanities & Liberal Arts",
    "Law & Policy",
    "Engineering & STEM",
    "Other",
  ];

  const gradeLevels = [
    "High School (9th Grade)",
    "High School (10th Grade)",
    "High School (11th Grade)",
    "High School (12th Grade)",
    "Undergraduate (1st Year)",
    "Undergraduate (2nd Year)",
    "Undergraduate (3rd Year)",
    "Undergraduate (4th Year)",
    "Graduate Student",
    "Recent Graduate",
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", { ...data, type: activeTab });
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Application Submitted!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in KindlED. We'll review your
            application and get back to you within 3-5 business days.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setActiveTab("mentee");
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 py-20 lg:py-28">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"></div>
          <div
            className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
          {/* Registration-themed decorative elements */}
          <div className="absolute top-16 left-20 w-10 h-10 border-2 border-rose-300 rounded-full opacity-40"></div>
          <div className="absolute bottom-20 right-20 w-6 h-6 bg-pink-300 transform rotate-45 opacity-50"></div>
          <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-orange-300 rounded-full opacity-40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-fadeInUp">
              {/* Enhanced badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-rose-600 mb-8 shadow-lg border border-rose-100">
                <User className="w-4 h-4 mr-2 text-rose-500" />
                Start Your Journey
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-800 mb-6 leading-tight">
                Join{" "}
                <span className="bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600">
                  KindlED
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto font-medium">
                Start your mentorship journey today. Choose your path below and
                become part of our thriving community.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 my-12">
        {/* Enhanced Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-xl p-2 mb-8 max-w-md mx-auto ">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setActiveTab("mentee")}
              className={`py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
                activeTab === "mentee"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
              }`}
            >
              <User className="h-5 w-5 mr-2" />
              Find a Mentor
            </button>
            <button
              onClick={() => setActiveTab("mentor")}
              className={`py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
                activeTab === "mentor"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
              }`}
            >
              <GraduationCap className="h-5 w-5 mr-2" />
              Become a Mentor
            </button>
          </div>
        </div>

        {/* Enhanced Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                  <User className="h-5 w-5 text-white" />
                </div>
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingLabelInput
                  label="First Name"
                  name="firstName"
                  icon={User}
                  required
                  register={register}
                  error={errors.firstName?.message}
                />
                <FloatingLabelInput
                  label="Last Name"
                  name="lastName"
                  icon={User}
                  required
                  register={register}
                  error={errors.lastName?.message}
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
                <FloatingLabelInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  icon={Phone}
                  required
                  register={register}
                  error={errors.phone?.message}
                />
                <FloatingLabelInput
                  label="Age"
                  name="age"
                  type="number"
                  required
                  register={register}
                  error={errors.age?.message}
                />
                <FloatingLabelInput
                  label="Grade Level"
                  name="gradeLevel"
                  type="select"
                  icon={GraduationCap}
                  required
                  register={register}
                  error={errors.gradeLevel?.message}
                  options={gradeLevels}
                />
              </div>
            </div>

            {/* Academic Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                  <Award className="h-5 w-5 text-white" />
                </div>
                Academic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingLabelInput
                  label="GPA"
                  name="gpa"
                  type="number"
                  required
                  register={register}
                  error={errors.gpa?.message}
                  placeholder="e.g., 3.75"
                />
                <FloatingLabelInput
                  label="Field of Interest"
                  name="fieldOfInterest"
                  type="select"
                  required
                  register={register}
                  error={errors.fieldOfInterest?.message}
                  options={academicFields}
                />
              </div>
              <FloatingLabelInput
                label="Academic Accomplishments"
                name="accomplishments"
                type="textarea"
                rows={4}
                required
                register={register}
                error={errors.accomplishments?.message}
                placeholder="Describe your academic achievements, awards, honors, etc."
              />
              <FloatingLabelInput
                label="Extracurricular Activities"
                name="extracurriculars"
                type="textarea"
                rows={4}
                required
                register={register}
                error={errors.extracurriculars?.message}
                placeholder="Describe your involvement in clubs, sports, volunteer work, etc."
              />
            </div>

            {/* Mentor-specific fields */}
            {activeTab === "mentor" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-orange-500" />
                  Mentor Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Leadership Experience Essay *
                    </label>
                    <textarea
                      {...register("leadershipExperience", {
                        required: "Leadership experience is required",
                      })}
                      rows={6}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Describe your leadership experience and why you want to become a mentor (minimum 200 words)"
                    />
                    {errors.leadershipExperience && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.leadershipExperience.message}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Standardized Test Scores
                      </label>
                      <input
                        {...register("testScores")}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="SAT, ACT, GRE, etc. (optional)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        University/Institution *
                      </label>
                      <input
                        {...register("university", {
                          required: "University is required",
                        })}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Current or most recent university/college"
                      />
                      {errors.university && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.university.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Availability & Commitment Level *
                    </label>
                    <select
                      {...register("availability", {
                        required: "Availability is required",
                      })}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select your availability</option>
                      <option value="2-3 hours/month">
                        2-3 hours per month
                      </option>
                      <option value="4-6 hours/month">
                        4-6 hours per month
                      </option>
                      <option value="7-10 hours/month">
                        7-10 hours per month
                      </option>
                      <option value="10+ hours/month">
                        10+ hours per month
                      </option>
                    </select>
                    {errors.availability && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.availability.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Mentee-specific fields */}
            {activeTab === "mentee" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2 text-orange-500" />
                  Mentee Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specific Goals & Objectives *
                    </label>
                    <textarea
                      {...register("specificGoals", {
                        required: "Please describe your goals",
                      })}
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="What do you hope to achieve through mentorship? (e.g., college applications, career guidance, skill development)"
                    />
                    {errors.specificGoals && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.specificGoals.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Areas Where You Need Support *
                    </label>
                    <textarea
                      {...register("challengesAreas", {
                        required: "Please describe areas where you need help",
                      })}
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="What challenges are you facing? What areas would you like guidance on?"
                    />
                    {errors.challengesAreas && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.challengesAreas.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Mentor Type *
                    </label>
                    <select
                      {...register("preferredMentorType", {
                        required: "Please select a preference",
                      })}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select preferred mentor type</option>
                      <option value="current-student">
                        Current University Student
                      </option>
                      <option value="recent-graduate">
                        Recent Graduate (1-3 years)
                      </option>
                      <option value="experienced-professional">
                        Experienced Professional (5+ years)
                      </option>
                      <option value="academic-faculty">
                        Academic Faculty/Researcher
                      </option>
                      <option value="no-preference">No Preference</option>
                    </select>
                    {errors.preferredMentorType && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.preferredMentorType.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced Submit Button */}
            <div className="pt-8 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:from-gray-300 disabled:to-gray-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-105 disabled:transform-none disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-6 w-6 mr-3" />
                    Submit {activeTab === "mentor" ? "Mentor" : "Mentee"}{" "}
                    Application
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="center my-10">
          <section className="bg-white p-8 rounded-2xl max-w-4xl mx-auto my-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                <User className="h-5 w-5 text-white" />
              </div>
              Application Form
            </h2>
            <div className="rounded-xl overflow-hidden">
              <iframe
                className="w-full h-[1000px]"
                src="https://docs.google.com/forms/d/e/1FAIpQLSftsjor8llJj8cPURwq3losYjNxb97pzVW6BCwYzf-tnTOaWg/viewform?embedded=true"
              >
                Loading…
              </iframe>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
