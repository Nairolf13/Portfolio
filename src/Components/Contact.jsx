import { useRef } from "react";
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
    <section id="contact" className="p-4 md:p-8 lg:p-16 text-center relative z-10">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl about-blur-bg rounded-xl p-4 sm:p-6 md:p-8 lg:p-20 flex flex-col items-center gap-8">
          <h2 className="text-3xl font-semibold text-white rounded-xl px-6 py-3 font-orbitron mx-auto w-fit text-center mb-8">
            Contactez-moi
          </h2>
          <div className="flex flex-col md:flex-row w-full gap-12 items-stretch">
            <div className="md:w-1/2 w-full flex flex-col justify-center items-center text-center">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                <strong className="text-green-400">
                  Actuellement à la recherche d'un CDI en tant que Développeur Web
                </strong>
                <br />
                <br />
                Passionné par la création d’expériences numériques modernes, je
                souhaite rejoindre une équipe dynamique pour contribuer à des projets
                innovants, en front-end, back-end ou fullstack.
                <br />
                <br />
                <span className="text-green-400 font-semibold">
                  Pourquoi me contacter&nbsp;?
                </span>
                <br />
                • Expertise en React, Tailwind CSS, JavaScript, Node.js
                <br />
                • Sensibilité UX/UI et rigueur technique
                <br />
                • Esprit d’équipe, autonomie et communication professionnelle
                <br />
                <br />
                <span className="text-green-400 font-semibold">
                  Vous avez une opportunité&nbsp;?
                </span>
                <br />
                N’hésitez pas à me solliciter pour un poste, une mission freelance ou
                une collaboration technique.
                <br />
                <br />
                <span className="italic">
                  Je m’engage à répondre rapidement et avec sérieux à chaque message.
                </span>
              </p>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col items-center gap-4 w-full md:w-1/2 md:self-center"
            >
              <div className="w-full flex flex-col gap-2">
                <label
                  className="text-green-500 font-semibold text-left"
                  htmlFor="name"
                >
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
                <label
                  className="text-green-500 font-semibold text-left"
                  htmlFor="email"
                >
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
      </div>
    </section>
  );
}

export default Contact;
