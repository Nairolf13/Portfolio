import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../LanguageContext";
import Modal from "./Modal";
import "../Assets/css/Contact.css";

function Contact() {
  const { t } = useLanguage();
  const form = useRef();
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  const showModal = (type, title, message) => {
    setModalState({
      isOpen: true,
      type,
      title,
      message,
    });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

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
          showModal(
            "success",
            t('contact.modal.success.title'),
            t('contact.modal.success.message')
          );
          form.current.reset();
        },
        (error) => {
          console.log("Erreur :", error.text);
          showModal(
            "error",
            t('contact.modal.error.title'),
            t('contact.modal.error.message')
          );
        }
      );
  };

  return (
    <section
      id="contact"
      className="p-4 md:p-8 lg:p-16 text-center relative z-10"
    >
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl about-blur-bg rounded-xl p-4 sm:p-6 md:p-8 lg:p-20 flex flex-col items-center gap-8">
          <h2 
            className="text-3xl font-semibold rounded-xl px-6 py-3 font-orbitron mx-auto w-fit text-center mb-8"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('contact.title')}
          </h2>
          
          <div className="w-full text-center mb-8">
            <p 
              className="text-xl md:text-2xl leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              <strong style={{ color: 'var(--accent-color)' }}>
                {t('contact.description')}
              </strong>
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row w-full gap-12 items-stretch">
            <div className="md:w-1/2 w-full flex flex-col justify-center items-center text-center">
              <p 
                className="text-xl md:text-2xl leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span 
                  className="font-semibold"
                  style={{ color: 'var(--accent-color)' }}
                >
                  {t('contact.whyContact')}&nbsp;
                </span>
                <br />
                {t('contact.content.intro')}
                <br />
                <br />
                {t('contact.content.skills')}
                <br />
                {t('contact.content.listening')}
                <br />
                {t('contact.content.teamwork')}
                <br />
                <br />
                <span className="font-semibold" style={{ color: 'var(--accent-color)' }}>
                  {t('contact.content.opportunity')}&nbsp;
                </span>
                <br />
                {t('contact.content.invitation')}
                <br />
                <br />
                <span className="italic">
                  {t('contact.content.commitment')}
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
                  className="contact-label font-semibold text-left"
                  htmlFor="name"
                >
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={t('contact.form.placeholder.name')}
                  className="contact-form-field rounded-lg px-3 py-4 w-full transition-all duration-300"
                />
              </div>

              <div className="w-full flex flex-col gap-2">
                <label
                  className="contact-label font-semibold text-left"
                  htmlFor="email"
                >
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={t('contact.form.placeholder.email')}
                  className="contact-form-field rounded-lg px-3 py-4 w-full transition-all duration-300"
                />
              </div>

              <div className="w-full flex flex-col gap-2">
                <label
                  className="contact-label font-semibold text-left"
                  htmlFor="message"
                >
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder={t('contact.form.placeholder.message')}
                  rows="5"
                  className="contact-form-field rounded-lg px-3 py-4 w-full transition-all duration-300"
                ></textarea>
              </div>

              <input
                type="hidden"
                name="to_email"
                value="bricchi.florian@outlook.com"
              />

              <button
                type="submit"
                className="px-4 py-3 w-full flex items-center justify-center gap-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(to right, var(--accent-color), var(--accent-secondary))`,
                  color: 'var(--text-primary)'
                }}
              >
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
        title={modalState.title}
        message={modalState.message}
      />
    </section>
  );
}

export default Contact;
