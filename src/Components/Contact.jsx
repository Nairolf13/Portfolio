import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_JS_API_KEY
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
    <section id="contact" className="p-16 text-center relative z-10">
      <h2 className="text-3xl font-semibold mb-8 text-white bg-[#1a1a1a80] backdrop-blur-xl rounded-xl inline-block px-6 py-3">Contactez-moi</h2>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-md bg-about-bg backdrop-blur-xl rounded-xl p-6">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-center gap-4 w-full"
          >
            <div className="w-full flex flex-col gap-2">
              <label className="text-green-500 font-semibold text-left" htmlFor="name">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Votre nom"
                className="rounded-lg px-3 py-4 w-full border-none bg-white/10 outline outline-2 outline-gray-600 focus:outline-green-500 text-black placeholder:text-gray-700"
              />
            </div>

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
                className="rounded-lg px-3 py-4 w-full border-none bg-white/10 outline outline-2 outline-gray-600 focus:outline-green-500 text-black placeholder:text-gray-700"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label
                className="text-green-500 font-semibold text-left"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Votre message"
                rows="5"
                className="rounded-lg px-3 py-4 w-full border-none bg-white/10 outline outline-2 outline-gray-600 focus:outline-green-500 text-black placeholder:text-gray-700"
              ></textarea>
            </div>

            <input
              type="hidden"
              name="to_email"
              value="bricchi.florian@outlook.com"
            />

            <button
              type="submit"
              className="px-4 py-3 w-full flex items-center justify-center gap-2 rounded-full bg-green-600 text-[#efefef] font-semibold text-sm transition-all duration-300 hover:bg-green-500 hover:text-gray-700"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
