import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { profileData } from '../data/profileData'
import '../styles/Contact.css'

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactLinks = [
    {
      label: 'Email',
      value: profileData.personal.email,
      icon: '✉️',
      href: `mailto:${profileData.personal.email}`,
    },
    {
      label: 'Téléphone',
      value: profileData.personal.phone,
      icon: '📱',
      href: `tel:${profileData.personal.phone}`,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/sarra-ben-sedrine',
      icon: '💼',
      href: profileData.personal.linkedin,
    },
    {
      label: 'Localisation',
      value: profileData.personal.location,
      icon: '📍',
      href: '#',
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          ref={ref}
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="section-header">
            <h2>Contactez-moi</h2>
            <div className="header-divider">
              <div className="constellation-line"></div>
            </div>
          </motion.div>

          {/* Intro Text */}
          <motion.p variants={itemVariants} className="contact-intro">
            Vous avez une idée de projet? Une opportunité intéressante? Ou vous voulez juste parler tech?
            Je suis toujours ouverte à une bonne conversation. Écrivez-moi! 👋
          </motion.p>

          {/* Two Column Layout */}
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sujet du message"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Votre message..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted}
                >
                  {submitted ? '✓ Message envoyé' : 'Envoyer le message'}
                </motion.button>

                {submitted && (
                  <motion.p
                    className="submit-message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Merci pour votre message! Je vous répondrai bientôt.
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="contact-info">
              <h3>Mes coordonnées</h3>

              <div className="contact-items">
                {contactLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    className="contact-item"
                    whileHover={{ x: 8 }}
                  >
                    <span className="contact-icon">{link.icon}</span>
                    <div className="contact-details">
                      <p className="contact-label">{link.label}</p>
                      <p className="contact-value">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                className="contact-cta"
                whileHover={{ y: -2 }}
              >
                <h4>Prêt à discuter?</h4>
                <p>
                  Je suis enthousiaste pour discuter de nouvelles opportunités et de projets
                  innovants en France.
                </p>
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Programmez un appel
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="social-links">
            <a href={profileData.personal.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="social-icon">in</span>
            </a>
            <a href="mailto:{profileData.personal.email}">
              <span className="social-icon">✉</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Background */}
      <div className="contact-decoration">
        <div className="pulse-circle pulse-1"></div>
        <div className="pulse-circle pulse-2"></div>
      </div>
    </section>
  )
}

export default Contact
