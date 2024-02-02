import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Typewriter from "typewriter-effect";
import toast from "react-hot-toast";

const ContactArea = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c46rkq7",
        "template_ex2bikq",
        form.current,
        "mMgSwdb3O0YnP0gZY"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully", result.text);
        },
        (error) => {
          toast.error("Message is getting error", error.text);
        }
      );
    form.current.reset();
  };
  return (
    <div className="mt-20 mx-3" data-aos="fade-left" data-aos-duration="800">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="col-span-2 bg-transparent rounded-3xl p-7"
      >
        <h2 className="text-[#453F41] lg:text-4xl text-xl font-medium mt-2 mb-7">
          Let's talk{" "}
          <p className="text-[#0C5ADB] inline-block">
            {" "}
            <Typewriter
              options={{
                strings: ["with us."],
                autoStart: true,
                loop: true,
                cursor: "|",
              }}
            />
          </p>
        </h2>
        <div className="mb-4">
          <input
            className="px-4 py-3 bg-gradient-to-br from-[#505050] via-[#2e2d2d] to-[#6893d8] outline-none w-full rounded-lg text-white text-sm"
            id="name"
            type="text"
            name="from_name"
            placeholder="Name *"
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="px-4 py-3 bg-gradient-to-br from-[#505050] via-[#2e2d2d] to-[#6893d8] outline-none w-full rounded-lg text-white text-sm"
            id="email"
            type="email"
            name="from_email"
            placeholder="Email *"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            className="px-4 py-3 bg-gradient-to-br from-[#505050] via-[#2e2d2d] to-[#6893d8] outline-none w-full rounded-lg text-white text-sm"
            id="message"
            name="message"
            rows={5}
            placeholder="Message *"
            defaultValue={""}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="btn bg-gradient-to-br from-[#323232] via-[#323232] to-[#323232] outline-none w-1/3 rounded-lg text-white py-2 px-4 border-none hover:text-[#0C5ADB]"
            type="submit"
            value="Send"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactArea;
