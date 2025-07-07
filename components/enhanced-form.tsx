"use client"

import type React from "react"
import { useState } from "react"
import { UseFormRegister, FieldValues, Path} from "react-hook-form";
import { Eye, EyeOff } from "lucide-react"

interface FloatingLabelInputProps<T extends FieldValues> {
  label: string;
  type?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  required?: boolean;
  error?: string;
  register: UseFormRegister<T>; // ✅ generic
  name: Path<T>;
  // ✅ ties input name to your form type
  placeholder?: string;
  rows?: number;
  options?: string[];
}

function FloatingLabelInput<T extends FieldValues>({
  label,
  type = "text",
  icon: Icon,
  required = false,
  error,
  register,
  name,
  placeholder,
  rows,
  options,
}: FloatingLabelInputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  if (type === "select" && options) {
    return (
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-orange-500">*</span>}
        </label>
        <div className="relative">
          {Icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
              <Icon className="h-5 w-5 text-gray-400" />
            </div>
          )}
          <select
            {...register(
              name,
              required ? { required: `${label} is required` } : {}
            )}
            className={`w-full ${
              Icon ? "pl-11" : "pl-4"
            } pr-4 py-3 border-2 rounded-xl transition-all duration-200 bg-white appearance-none ${
              error
                ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                : "border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
            }`}
          >
            <option value="">Select {label.toLowerCase()}</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {error && (
          <p className="text-red-500 text-sm mt-2 flex items-center">
            <span className="mr-1">⚠</span>
            {error}
          </p>
        )}
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-orange-500">*</span>}
        </label>
        <div className="relative">
          {Icon && (
            <div className="absolute left-3 top-3 z-10">
              <Icon className="h-5 w-5 text-gray-400" />
            </div>
          )}
          <textarea
            {...register(
              name,
              required ? { required: `${label} is required` } : {}
            )}
            rows={rows || 4}
            className={`w-full ${
              Icon ? "pl-11" : "pl-4"
            } pr-4 py-3 border-2 rounded-xl transition-all duration-200 bg-white resize-none ${
              error
                ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                : "border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
            }`}
            placeholder={placeholder}
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm mt-2 flex items-center">
            <span className="mr-1">⚠</span>
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          {...register(
            name,
            required ? { required: `${label} is required` } : {}
          )}
          type={type === "password" && showPassword ? "text" : type}
          className={`w-full ${Icon ? "pl-11" : "pl-4"} ${
            type === "password" ? "pr-11" : "pr-4"
          } py-3 border-2 rounded-xl transition-all duration-200 bg-white ${
            error
              ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
              : "border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          }`}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-2 flex items-center">
          <span className="mr-1">⚠</span>
          {error}
        </p>
      )}
    </div>
  );
}

export { FloatingLabelInput }
