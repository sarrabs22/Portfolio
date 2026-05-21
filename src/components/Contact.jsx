import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { profileData } from '../data/profileData'
import PortfolioIcon from './PortfolioIcon'
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
    console.log('Form submitted:', formData)
    setSubmitted(true)

    window.setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactLinks = [
    {
      label: 'Email',
      value: profileData.personal.email,
      icon: 'mail',
      href: `mailto:${profileData.personal.email}`,
    },
    {
      label: 'Telephone',
      value: profileData.personal.phone,
      icon: 'phone',
      href: `tel:${profileData.personal.phone}`,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/sarra-ben-sedrine',
      icon: 'linkedin',
      href: profileData.personal.linkedin,
    },
    {
      label: 'Localisation',
      value: profileData.personal.location,
      icon: 'mapPin',
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
          <motion.div variants={itemVariants} className="section-header">
            <h2>Contactez-moi</h2>
            <div className="header-divider">
              <div className="constellation-line"></div>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="contact-intro">
            Vous avez une idee de projet? Une opportunite interessante? Ou vous voulez juste parler
            tech? Je suis toujours ouverte a une bonne conversation. Ecrivez-moi!
          </motion.p>

          <div className="contact-grid">
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
                  {submitted ? (
                    <>
                      <PortfolioIcon name="check" size={18} />
                      Message envoye
                    </>
                  ) : (
                    'Envoyer le message'
                  )}
                </motion.button>

                {submitted && (
                  <motion.p
                    className="submit-message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Merci pour votre message! Je vous repondrai bientot.
                  </motion.p>
                )}
              </form>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-info">
              <h3>Mes coordonnees</h3>

              <div className="contact-items">
                {contactLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="contact-item"
                    whileHover={{ x: 8 }}
                  >
                    <span className="contact-icon" aria-hidden="true">
                      <PortfolioIcon name={link.icon} size={22} />
                    </span>
                    <div className="contact-details">
                      <p className="contact-label">{link.label}</p>
                      <p className="contact-value">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div className="contact-cta" whileHover={{ y: -2 }}>
                <h4>Pret a discuter?</h4>
                <p>
                  Je suis enthousiaste pour discuter de nouvelles opportunites et de projets
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

          <motion.div variants={itemVariants} className="social-links">
            <a href={profileData.personal.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="social-icon" aria-hidden="true">
                <PortfolioIcon name="linkedin" size={22} />
              </span>
            </a>
            <a href={`mailto:${profileData.personal.email}`}>
              <span className="social-icon" aria-hidden="true">
                <PortfolioIcon name="mail" size={22} />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="contact-decoration">
        <div className="pulse-circle pulse-1"></div>
        <div className="pulse-circle pulse-2"></div>
      </div>
    </section>
  )
}

export default Contact
