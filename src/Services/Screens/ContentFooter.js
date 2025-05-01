import React, { useEffect, useRef } from 'react';
import styles from '../Styles/ContentFooter.module.css';
import * as Icon from 'react-bootstrap-icons';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContentFooter = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  return (
    <div className={styles.footerContainer} ref={parallaxRef}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Services</h2>

          <ul className={styles.footerList}>
            <Link to="/servicepagen?tab=Application%20Integration%20Services&subtab=Our%20Approach">
              <li className={styles.footerItems}>Application Integration Services</li>
            </Link>
            <Link to="/servicepagen?tab=Cloud%20Consulting%20%26%20Advisory&subtab=Our%20Approach">
              <li className={styles.footerItems}>Cloud Consulting & Advisory</li>
            </Link>
            <Link to="/servicepagen?tab=ERP%20Implementations&subtab=Our%20Approach">
              <li className={styles.footerItems}>ERP Implementations</li>
            </Link>
            <Link to="/servicepagen?tab=Exhaustive%20Testing%20Services&subtab=Our%20Approach">
              <li className={styles.footerItems}>Exhaustive Testing Services</li>
            </Link>
            <Link to="/servicepagen?tab=Managed%20Services&subtab=Our%20Approach">
              <li className={styles.footerItems}>Managed Services</li>
            </Link>
            <Link to="/servicepagen?tab=Web%20Development&subtab=Our%20Approach">
              <li className={styles.footerItems}>Web Development</li>
            </Link>
          </ul>

        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Technologies</h2>
          <ul className={styles.footerList}>
            <Link to='/servicepage?service=apex'>
              <li>Oracle APEX (Application Express)</li>

            </Link>
            <Link to='/servicepage?service=oracle-cloud'>
              <li>Oracle Cloud</li>

            </Link>
            <Link to='/servicepage?service=ebs'>
              <li>Oracle E-Business Suite (EBS)</li>

            </Link>
            <Link to='/servicepage?service=oracle-cloudoracle-integration-cloud'>
              <li>Oracle Integration Cloud (OIC)</li>

            </Link>
            <Link to='/servicepage?service=vbcs'>
              <li>Oracle Visual Builder Cloud Service (VBCS)</li>
            </Link>


            <Link to="/servicepage?service=react">
              <li>React JS</li>
            </Link>
            <Link to="/servicepage?service=react-native">
              <li>React Native</li>
            </Link>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <Icon.GeoAlt className={styles.icon} />
              <p>Manikyapuri Colony, Habsiguda, Hyderabad, Telangana 500007</p>
            </div>
            <div className={styles.contactItem}>
              <Icon.GeoAlt className={styles.icon} />
              <p>2/4/2, Tekula Basthi, Bellampalli, Adilabad, Telangana, 504251</p>
            </div>
            <div className={styles.contactItem}>
              <Icon.Phone className={styles.icon} />
              <p>+91 6303593501</p>
            </div>
            <div className={styles.contactItem}>
              <Icon.Phone className={styles.icon} />
              <p>+1 (212) 935-5193</p>
            </div>
            <div className={styles.contactItem}>
            <Icon.Envelope className={styles.icon} />
  <a href="mailto:info@globalsparktek.com">
    <span className={styles.emailText}>info@globalsparktek.com</span>
  </a>
            </div>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Our Location</h2>
          <div className={styles.mapWrapper}>
            <iframe
              title="Global Spark Tek Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.052372324544!2d78.540965!3d17.4155975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9997d83acb1f%3A0x537da8095fea5a68!2sGlobal%20Spark%20Tek%20Solutions!5e0!3m2!1sen!2sin!4v1712572506509!5m2!1sen!2sin"
              className={styles.mapStyles}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className={styles.subContainer}>
        <div className={styles.footerContent}>
          <p className={styles.subFooterText}>
            Copyright ©2025
            <span className={styles.subFooter}> Global Spark Tek Solutions </span>
            <span className={styles.subFooterText}> - All Rights Reserved | </span>
            <Link to='/privacy' className={styles.subFooter}> Privacy Policy </Link>
          </p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/global-spark-tek/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentFooter;