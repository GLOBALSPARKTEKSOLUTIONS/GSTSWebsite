import React from 'react';
import styles from '../Styles/AboutUsStyles.module.css';
import { FaHandshake, FaTools, FaRocket } from 'react-icons/fa';
import AboutService from '../../AboutServices/aboutServices';

const AboutUs = () => {
  return (
    <section className={styles.aboutSection}>


      <div className={styles.contentWrapper}>
        <div className={styles.introCard}>
          <h2 className={styles.sectionTitle}>Global Spark Tek Solutions</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.sectionText}>
            We are a premium Oracle Consulting firm dedicated to delivering top-tier professional services to small and medium enterprises. Our founders, a team of Oracle Technology experts with over 15 years of combined experience, are committed to providing innovative, cost-effective solutions tailored to your needs.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <FaHandshake className={styles.featureIcon} />
            <h3 className={styles.featureTitle}>Trusted Partnership</h3>
            <p className={styles.featureText}>
              Open communication is at the heart of our process. We work closely with you to develop reliable, scalable solutions that adapt to industry changes.
            </p>
          </div>
          <div className={styles.featureItem}>
            <FaTools className={styles.featureIcon} />
            <h3 className={styles.featureTitle}>Consulting Mastery</h3>
            <p className={styles.featureText}>
              We bring the right technologies and processes to optimize your operations, ensuring efficiency and growth.
            </p>
          </div>
          <div className={styles.featureItem}>
            <FaRocket className={styles.featureIcon} />
            <h3 className={styles.featureTitle}>End-to-End Support</h3>
            <p className={styles.featureText}>
              From first-time Oracle implementations to cloud transitions and system integrations, we’re with you every step of the way.
            </p>
          </div>
        </div>
        <AboutService />
        <div className={styles.callout}>
          <h5 className={styles.calloutText}>
            "At Global Spark Tek, we don’t just solve problems—we spark transformation."
          </h5>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;