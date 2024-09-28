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
    <section id="contact" className=" w-full py-9 ">
      <div className="w-full ">
        <h2 className="md:text-3xl text-xl border-b-[1px] border-gray-300 font-bold mb-8 text-gray-800 md:pb-5 pb-3">
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
              className="block  text-sm font-medium text-gray-800"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="to_name"
              required
              className="mt-1 block w-full px-3 py-2 bg-transparent border-gray-400 rounded-[5px] shadow-sm focus:outline-none  text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block  text-sm font-medium text-gray-800"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="user_email"
              required
              className="mt-1 block w-full px-3 py-2 bg-transparent border-gray-400 rounded-[5px] shadow-sm focus:outline-none  text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block  text-sm font-medium text-gray-800"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 block w-full px-3 py-2 bg-transparent border-gray-400 rounded-[5px] shadow-sm focus:outline-none  text-sm"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full bg-neutral-900 text-white py-4 rounded-[4px] focus:outline-none flex items-center justify-center"
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
