import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
      process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAIL_JS_API_KEY
    )
      .then(
        (result) => {
          console.log("Message envoyé :", result.text);
          alert("Message envoyé avec succès !");
          form.current.reset();
        },
        (error) => {
          console.log("Erreur :", error.text);
          alert("Une erreur s'est produite, veuillez réessayer.");
        }
      );
  };

  return (
    <section id="contact" className="p-16 bg-vanta-custom text-center">
      <h2 className="text-3xl font-semibold mb-8 text-white">Contactez-moi</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto"
      >
        <div className="w-full flex flex-col gap-2">
          <label className="text-green-500 font-semibold text-left" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Votre email"
            className="rounded-lg px-3 py-4 w-full border-none bg-[#9c9c9c60] outline outline-2 outline-gray-600 focus:outline-green-500"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="text-green-500 font-semibold text-left" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Votre message"
            rows="5"
            className="rounded-lg px-3 py-4 w-full border-none bg-[#9c9c9c60] outline outline-2 outline-gray-600 focus:outline-green-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-3 w-full flex items-center justify-center gap-2 rounded-full bg-gray-600 text-[#efefef] font-semibold text-sm transition-all duration-300 hover:bg-green-500 hover:text-gray-700"
        >
          Envoyer
        </button>

        <span className="text-gray-600 text-sm">
          Vous pouvez aussi me contacter via{" "}
          <a href="mailto:bricchi.florian@outlook.com" className="text-green-500 underline">
            mon email
          </a>
        </span>
      </form>
    </section>
  );
}

export default Contact;
