import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_hzozvfs", // replace with your EmailJS Service ID
        "template_9eameea", // replace with your EmailJS Template ID
        formRef.current,
        { publicKey: "lR5bD2XOZKcGK_TgM" } // replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSubmitting(false);
          toast({
            title: "Message sent!",
            description: "Thank you for contacting us. We'll get back to you soon.",
          });
          formRef.current?.reset();
        },
        (error) => {
          setIsSubmitting(false);
          toast({
            title: "Failed to send",
            description: error.text || "Something went wrong, please try again.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gradient-hero py-20 px-6" // ✅ same gradient as HeroSection
    >
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Get in Touch</h2>
            <p className="text-lg mb-4 text-gray-800">I'd like to hear from you!</p>
            <p className="text-gray-600 mb-8">
              If you have any inquiries or just want to say hi, please use the contact form!
            </p>

            <p className="text-base">
              <span className="font-semibold">Email: </span>
              <a href="mailto:mist.contact67@gmail.com" className="text-primary hover:underline">
                mist.contact67@gmail.com
              </a>
            </p>
          </div>

          {/* Right Side (Form) */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* First + Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first_name" className="block mb-1 text-gray-700">First Name</label>
                  <input
                    id="first_name"
                    name="first_name"
                    required
                    className="w-full h-12 border border-gray-400 bg-white text-black px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block mb-1 text-gray-700">Last Name</label>
                  <input
                    id="last_name"
                    name="last_name"
                    required
                    className="w-full h-12 border border-gray-400 bg-white text-black px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="user_email" className="block mb-1 text-gray-700">Email *</label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  className="w-full h-12 border border-gray-400 bg-white text-black px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-1 text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full border border-gray-400 bg-white text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-white px-8 py-2 font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
