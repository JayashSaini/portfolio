"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Loader2 } from "lucide-react";

const ContactMe: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsloading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsloading(true);
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_KEY,
          process.env.NEXT_PUBLIC_TEMPLATE_KEY,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          () => {
            toast.success("email sent successfully");
            setIsloading(false);
          },
          (error) => {
            console.log("Failed to send email" + error);
            toast.error("Failed to send email");
            setIsloading(false);
          }
        );
    }
  };

  return (
    <section id="contact" className="w-full py-9 max-w-screen-lg">
      <div className="mx-auto px-4 md:px-8">
        <h2 className="md:text-4xl text-2xl font-bold mb-8 font-fam fontColor border-b-2 border-[#f3bb7793] md:pb-5 pb-3">
          Get in Touch
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto text-lg"
          name="from_name"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block md:text-lg text-sm font-medium fontColor"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="to_name"
              required
              className="mt-1 block w-full px-3 py-2 bg-transparent border-[#402a23] rounded-md shadow-sm focus:outline-none focus:border-none sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block md:text-lg text-sm font-medium fontColor"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="user_email"
              required
              className="mt-1 block w-full px-3 py-2 bg-transparent border-[#402a23] rounded-md shadow-sm focus:outline-none focus:border-none sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block md:text-lg text-sm font-medium fontColor"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 block w-full px-3 py-2 bg-transparent border-[#402a23] rounded-md shadow-sm focus:outline-none focus:border-none sm:text-sm"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full bg-color py-5 rounded-[4px] focus:outline-none flex items-center justify-center"
            >
              {isLoading ? (
                <Loader2 className="animate-spin text-xl" />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
