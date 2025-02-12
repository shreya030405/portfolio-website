import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [,setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const validateForm = useCallback(() => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmitStatus("error");
    }
  };

  type FormField = "name" | "email" | "message";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as { name: FormField; value: string };
  
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name]; // Removes the error when the user starts typing
        return newErrors;
      });
    }
  };
  

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-r from-blue-50 to-pink-50"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-30 bg-[url('/contact-pattern.svg')] bg-cover"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative text-center mb-16"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent mb-6">
          Get in Touch
        </h2>
        <p className="max-w-3xl mx-auto text-xl text-gray-700">
          Have a project in mind?{" "}
          <span className="font-bold text-pink-600">Let's build something amazing!</span>
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg border border-gray-200"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email"].map((field) => (
              <div key={field} className="relative">
                {field === "name" && (
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                )}
                {field === "email" && (
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                )}
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field as keyof typeof formData]} // Fix applied here
                  onChange={handleChange}
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent
                    ${
                      errors[field]
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                />
                {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
              </div>
            ))}

            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent resize-none
                  ${
                    errors.message
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-3 rounded-lg shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="inline-block mr-2" /> Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
          <div className="space-y-6">
            {[
              { icon: Mail, title: "Email", content: "shreyaugc004@gmail.com", color: "text-blue-500" },
              { icon: Phone, title: "Phone", content: "+82 010-2350-4897", color: "text-pink-500" },
              { icon: MapPin, title: "Location", content: "South Korea, 경기도 시흥시 군서로18번길 36", color: "text-green-500" },
            ].map(({ icon: Icon, title, content, color }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <Icon className={`w-6 h-6 ${color}`} />
                <div>
                  <p className="font-semibold text-gray-700">{title}</p>
                  <p className="text-gray-600">{content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
