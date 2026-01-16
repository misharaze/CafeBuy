import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import './ContactPage.scss';

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = (data) => {
    setSending(true);

    emailjs.send('service_id', 'contact_template', data, 'user_key')
      .then(() => {
        setSent(true);
        setSending(false);
        reset();
      })
      .catch((err) => {
        console.error('Erreur :', err);
        setSending(false);
      });
  };

  return (
    <motion.div
      className="page contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Nous contacter
      </motion.h2>

      <AnimatePresence>
        {sent ? (
          <motion.p
            className="success"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Message envoyé ☕  
            Nous vous contacterons très prochainement.
          </motion.p>
        ) : (
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="contact-form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="input-wrapper">
              <input {...register('name', { required: 'Veuillez saisir votre nom' })} />
              <label>Nom</label>
              {errors.name && <span className="error">{errors.name.message}</span>}
            </div>

            <div className="input-wrapper">
              <input
                {...register('email', {
                  required: 'Veuillez saisir votre email',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Format d’email invalide'
                  }
                })}
              />
              <label>Email</label>
              {errors.email && <span className="error">{errors.email.message}</span>}
            </div>

            <div className="input-wrapper">
              <textarea {...register('message', { required: 'Veuillez saisir votre message' })} />
              <label>Message</label>
              {errors.message && <span className="error">{errors.message.message}</span>}
            </div>

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.05, boxShadow: "0 0 16px rgba(198,156,109,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              {sending ? "Envoi en cours..." : "Envoyer"}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
