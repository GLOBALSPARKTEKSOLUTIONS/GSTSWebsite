import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import Header from '../../Home/Screens/Header';
import ContentFooter from '../../Services/Screens/ContentFooter';
import { motion } from 'framer-motion';
import styles from '../Styles/ServicesPageN.module.css';

const Services = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get('tab')
    ? decodeURIComponent(queryParams.get('tab'))
    : 'Application Integration Services';
  const initialSubTab = queryParams.get('subtab')
    ? decodeURIComponent(queryParams.get('subtab'))
    : 'Our Approach';

  const [activeTab, setActiveTab] = useState(initialTab);
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab);
  const tabRef = useRef(null);
  const tabsContainerRef = useRef(null);
  const contentContainerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const headerHeight = document.querySelector('header')?.offsetHeight || 70;
    if (tabsContainerRef.current) {
      tabsContainerRef.current.style.top = `${headerHeight}px`;
    }
  }, []);

  useEffect(() => {
    const newTab = queryParams.get('tab')
      ? decodeURIComponent(queryParams.get('tab'))
      : 'Application Integration Services';
    const newSubTab = queryParams.get('subtab')
      ? decodeURIComponent(queryParams.get('subtab'))
      : 'Our Approach';

    if (tabs.includes(newTab) && newTab !== activeTab) {
      setActiveTab(newTab);
    }
    if (subTabs.includes(newSubTab) && newSubTab !== activeSubTab) {
      setActiveSubTab(newSubTab);
    }
  }, [location.search]);

  useEffect(() => {
    if (contentContainerRef.current && (queryParams.get('tab') || queryParams.get('subtab'))) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 70;
      const tabsHeight = tabsContainerRef.current?.offsetHeight || 50;
      const offset = headerHeight + tabsHeight + 20;

      const scrollToContent = () => {
        const contentPosition = contentContainerRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: contentPosition - offset,
          behavior: 'auto',
        });
      };

      requestAnimationFrame(scrollToContent);
    }
  }, [activeTab, location.search]);

  const tabs = [
    'Application Integration Services',
    'ERP Implementations',
    'Managed Services',
    'Exhaustive Testing Services',
    'Cloud Consulting & Advisory',
    'Web Development',
  ].sort();

  const subTabs = ['Our Approach', 'Benefits', 'Offerings'];

  const content = {
    'ERP Implementations': {
      'Our Approach': (
        <div>
          <h3 className={styles.contentHeading}>Our ERP Implementation Approach</h3>
          <p className={styles.contentText}>
            Our ERP implementation methodology is rooted in a phased approach, ensuring minimal disruption and maximum alignment with your business objectives. We begin with a comprehensive discovery phase to map your processes, followed by blueprinting to design tailored solutions. Using agile practices, we execute configuration, testing, and training in iterative cycles. Our team leverages tools like Oracle Fusion Middleware and SAP Solution Manager to streamline integration with existing systems, ensuring data integrity and compliance with industry standards such as GDPR and SOX.
          </p>
          <p className={styles.contentText}>
            We emphasize stakeholder engagement through workshops and regular checkpoints, fostering collaboration between your team and ours. Post-go-live, we provide hyper-care support to address immediate needs and ensure a smooth transition to steady-state operations.
          </p>
        </div>
      ),
      'Benefits': (
        <div>
          <h3 className={styles.contentHeading}>Benefits of Our ERP Solutions</h3>
          <ul className={styles.contentList}>
            <li>Streamlined business processes, reducing operational inefficiencies by up to 30%.</li>
            <li>Enhanced data visibility with real-time analytics, enabling faster decision-making.</li>
            <li>Scalable systems that support business growth without costly reconfigurations.</li>
            <li>Improved compliance through automated audit trails and reporting.</li>
            <li>Reduced total cost of ownership with optimized resource utilization.</li>
          </ul>
        </div>
      ),
      'Offerings': (
        <div>
          <h3 className={styles.contentHeading}>Our ERP Offerings</h3>
          <p className={styles.contentText}>
            We deliver end-to-end ERP solutions tailored for industries including manufacturing, retail, healthcare, and finance. Our expertise spans platforms like Oracle NetSuite, SAP S/4HANA, and Microsoft Dynamics 365, covering modules for finance, supply chain, HR, and CRM.
          </p>
          <ul className={styles.contentList}>
            <li>Full-cycle ERP implementations, from planning to go-live.</li>
            <li>System upgrades and migrations to cloud-based ERP platforms.</li>
            <li>Custom module development for unique business needs.</li>
            <li>Integration with third-party tools like Salesforce and Workday.</li>
            <li>Ongoing support and optimization services.</li>
          </ul>
        </div>
      ),
    },
    'Application Integration Services': {
      'Our Approach': (
        <div>
          <h3 className={styles.contentHeading}>Integration Approach</h3>
          <p className={styles.contentText}>
            Our application integration services are designed to create a unified ecosystem by connecting disparate systems, whether on-premise, cloud, or hybrid. We start with an architecture assessment to identify integration points, followed by the design of robust APIs or middleware solutions using tools like MuleSoft, Dell Boomi, or Oracle Integration Cloud. Our iterative approach includes prototyping, testing, and validation to ensure seamless data flow and minimal latency.
          </p>
          <p className={styles.contentText}>
            Security is paramount—we implement OAuth 2.0, JWT, and encryption protocols to safeguard data exchanges. We also prioritize scalability, designing integrations that adapt to growing transaction volumes and evolving business needs.
          </p>
        </div>
      ),
      'Benefits': (
        <div>
          <h3 className={styles.contentHeading}>Integration Benefits</h3>
          <ul className={styles.contentList}>
            <li>Improved interoperability, enabling seamless communication between apps.</li>
            <li>Real-time data access, reducing data silos by up to 40%.</li>
            <li>Enhanced operational efficiency through automated workflows.</li>
            <li>Faster onboarding of new applications with reusable connectors.</li>
            <li>Lower maintenance costs with standardized integration frameworks.</li>
          </ul>
        </div>
      ),
      'Offerings': (
        <div>
          <h3 className={styles.contentHeading}>Integration Offerings</h3>
          <p className={styles.contentText}>
            We provide comprehensive integration solutions for platforms like Salesforce, SAP, Oracle Cloud, and Microsoft Azure, serving industries such as e-commerce, logistics, and healthcare.
          </p>
          <ul className={styles.contentList}>
            <li>API development and management for REST and SOAP interfaces.</li>
            <li>Middleware solutions using MuleSoft Anypoint or Apache Camel.</li>
            <li>Event-driven integrations with Kafka or RabbitMQ.</li>
            <li>Data synchronization for CRM, ERP, and marketing platforms.</li>
            <li>Legacy system modernization with hybrid integration strategies.</li>
          </ul>
        </div>
      ),
    },
    'Managed Services': {
      'Our Approach': (
        <div>
          <h3 className={styles.contentHeading}>Managed Services Approach</h3>
          <p className={styles.contentText}>
            Our managed services are built on a proactive, client-centric model, leveraging ITIL frameworks to deliver reliable IT operations. We begin with a detailed assessment of your infrastructure, followed by the deployment of monitoring tools like SolarWinds, Nagios, or AWS CloudWatch. Our 24/7 Network Operations Center (NOC) ensures real-time issue detection and resolution, while our service desk provides multi-channel support.
          </p>
          <p className={styles.contentText}>
            We tailor SLAs to your business needs, focusing on uptime, performance, and security. Regular performance reviews and optimization recommendations ensure your IT environment evolves with your organization.
          </p>
        </div>
      ),
      'Benefits': (
        <div>
          <h3 className={styles.contentHeading}>Managed Services Benefits</h3>
          <ul className={styles.contentList}>
            <li>Cost-effective IT operations, reducing overhead by up to 25%.</li>
            <li>Enhanced security with proactive threat detection and patching.</li>
            <li>99.9% uptime guarantees through robust monitoring.</li>
            <li>Access to certified experts across cloud, networking, and cybersecurity.</li>
            <li>Faster incident resolution with automated ticketing systems.</li>
          </ul>
        </div>
      ),
      'Offerings': (
        <div>
          <h3 className={styles.contentHeading}>Managed Services Offerings</h3>
          <p className={styles.contentText}>
            Our managed services cover the full IT lifecycle, supporting businesses in finance, healthcare, retail, and more, with a focus on cloud and hybrid environments.
          </p>
          <ul className={styles.contentList}>
            <li>Cloud infrastructure management for AWS, Azure, and Google Cloud.</li>
            <li>Cybersecurity services, including SIEM and endpoint protection.</li>
            <li>Application support for ERP, CRM, and custom software.</li>
            <li>Disaster recovery and backup solutions with RTO/RPO optimization.</li>
            <li>Network and server administration with performance tuning.</li>
          </ul>
        </div>
      ),
    },
    'Exhaustive Testing Services': {
      'Our Approach': (
        <div>
          <h3 className={styles.contentHeading}>Testing Approach</h3>
          <p className={styles.contentText}>
            Our testing services combine manual and automated strategies to ensure software reliability and performance. We follow a risk-based testing approach, prioritizing critical functionalities using frameworks like ISTQB and TMMi. Tools such as Selenium, JMeter, and TestRail enable us to automate functional, regression, and load testing, while our manual testing ensures usability and edge-case coverage.
          </p>
          <p className={styles.contentText}>
            We integrate testing into the DevOps pipeline, enabling continuous testing with CI/CD tools like Jenkins and GitLab. Our focus on early defect detection reduces rework costs and accelerates delivery timelines.
          </p>
        </div>
      ),
      'Benefits': (
        <div>
          <h3 className={styles.contentHeading}>Testing Benefits</h3>
          <ul className={styles.contentList}>
            <li>Improved application quality with 95%+ defect detection rates.</li>
            <li>Faster time-to-market by automating up to 70% of test cases.</li>
            <li>Reduced post-launch issues, lowering support costs.</li>
            <li>Enhanced user satisfaction through rigorous usability testing.</li>
            <li>Compliance with industry standards like ISO 27001 and HIPAA.</li>
          </ul>
        </div>
      ),
      'Offerings': (
        <div>
          <h3 className={styles.contentHeading}>Testing Offerings</h3>
          <p className={styles.contentText}>
            We provide end-to-end testing for web, mobile, and enterprise applications, serving industries like banking, e-commerce, and healthcare.
          </p>
          <ul className={styles.contentList}>
            <li>Functional testing (unit, integration, system, UAT).</li>
            <li>Performance testing (load, stress, scalability).</li>
            <li>Security testing, including penetration testing and vulnerability scans.</li>
            <li>Accessibility testing for WCAG 2.1 compliance.</li>
            <li>Test automation frameworks using Selenium, Cypress, and Appium.</li>
          </ul>
        </div>
      ),
    },
    'Cloud Consulting & Advisory': {
      'Our Approach': (
        <div>
          <h3 className={styles.contentHeading}>Cloud Consulting Approach</h3>
          <p className={styles.contentText}>
            Our cloud consulting begins with a maturity assessment to evaluate your current infrastructure, followed by a tailored roadmap for adoption or optimization. We use frameworks like AWS Well-Architected and Azure CAF to design secure, scalable cloud architectures. Our migration process includes lift-and-shift, re-platforming, or re-architecting, executed with tools like AWS Migration Hub and Azure Migrate.
          </p>
          <p className={styles.contentText}>
            Post-migration, we focus on cost optimization and governance, leveraging FinOps practices to monitor usage and maximize ROI. Our advisory services ensure alignment with business goals, from digital transformation to disaster recovery.
          </p>
        </div>
      ),
      'Benefits': (
        <div>
          <h3 className={styles.contentHeading}>Cloud Benefits</h3>
          <ul className={styles.contentList}>
            <li>Cost optimization, reducing cloud spend by up to 20%.</li>
            <li>Scalable infrastructure supporting dynamic workloads.</li>
            <li>Enhanced agility with serverless and containerized solutions.</li>
            <li>Improved resilience with multi-region failover strategies.</li>
            <li>Faster innovation through access to AI/ML and analytics services.</li>
          </ul>
        </div>
      ),
      'Offerings': (
        <div>
          <h3 className={styles.contentHeading}>Cloud Offerings</h3>
          <p className={styles.contentText}>
            We provide comprehensive cloud services for AWS, Azure, Google Cloud, and hybrid environments, serving startups, enterprises, and public sector clients.
          </p>
          <ul className={styles.contentList}>
            <li>Cloud strategy and architecture design.</li>
            <li>Workload migration and modernization (e.g., Kubernetes, ECS).</li>
            <li>Cloud-native development with Lambda, Azure Functions, or Cloud Run.</li>
            <li>Cost management and governance using CloudHealth or Azure Cost Management.</li>
            <li>Security and compliance solutions for SOC 2, PCI DSS, and more.</li>
          </ul>
        </div>
      ),
    },
    'Web Development': {
      'Our Approach': (
        <div>
          <h3 className={styles.contentHeading}>Web Development Approach</h3>
          <p className={styles.contentText}>
            Our web development process is user-centric, blending design thinking with agile methodologies. We start with wireframing and prototyping using tools like Figma and Adobe XD, followed by development with modern frameworks like React, Angular, or Vue.js. Backend integration leverages Node.js, Django, or .NET Core, ensuring robust APIs and database connectivity.
          </p>
          <p className={styles.contentText}>
            We prioritize performance with lazy loading, code splitting, and CDN integration, while SEO best practices ensure discoverability. Our iterative testing includes cross-browser compatibility and responsive design validation for mobile, tablet, and desktop.
          </p>
        </div>
      ),
      'Benefits': (
        <div>
          <h3 className={styles.contentHeading}>Web Development Benefits</h3>
          <ul className={styles.contentList}>
            <li>Enhanced user experience with intuitive interfaces, boosting engagement by 25%.</li>
            <li>SEO-optimized websites, improving organic traffic rankings.</li>
            <li>Cross-platform compatibility, supporting 99% of modern devices.</li>
            <li>Faster load times with optimized assets and caching strategies.</li>
            <li>Secure applications with OWASP-compliant coding practices.</li>
          </ul>
        </div>
      ),
      'Offerings': (
        <div>
          <h3 className={styles.contentHeading}>Web Development Offerings</h3>
          <p className={styles.contentText}>
            We build scalable web solutions for e-commerce, education, healthcare, and more, using cutting-edge technologies to meet diverse business needs.
          </p>
          <ul className={styles.contentList}>
            <li>Custom web applications with React, Next.js, or Gatsby.</li>
            <li>E-commerce platforms using Shopify, WooCommerce, or Magento.</li>
            <li>CMS development with WordPress, Drupal, or headless CMS like Contentful.</li>
            <li>Progressive web apps (PWAs) for offline and mobile-first experiences.</li>
            <li>Web maintenance and performance optimization services.</li>
          </ul>
        </div>
      ),
    },
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveSubTab('Our Approach');
    const encodedTab = encodeURIComponent(tab);
    window.history.pushState({}, '', `?tab=${encodedTab}&subtab=Our%20Approach`);
  };

  const handleSubTabClick = (subTab) => {
    setActiveSubTab(subTab);
    const encodedTab = encodeURIComponent(activeTab);
    const encodedSubTab = encodeURIComponent(subTab);
    window.history.pushState({}, '', `?tab=${encodedTab}&subtab=${encodedSubTab}`);
  };

  return (
    <>
      <Header />
      <motion.div
        className={styles.pageContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.heroSection}>
          <div className={styles.heroOverlay}>
            <motion.h3
              className={styles.heroTitle}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Discover Our Services
            </motion.h3>
            <p className={styles.heroSubtitle}>
              Tailored solutions to elevate your business to new heights.
            </p>
          </div>
        </div>

        <div className={styles.tabsContainer} ref={tabsContainerRef}>
          <div className={styles.tabsWrapper}>
            <div className={styles.tabs}>
              {tabs.map((tab) => (
                <motion.button
                  key={tab}
                  ref={activeTab === tab ? tabRef : null}
                  className={classNames(styles.tab, { [styles.tabActive]: activeTab === tab })}
                  onClick={() => handleTabClick(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={styles.tabText}>{tab}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.contentContainer} ref={contentContainerRef}>
          <div className={styles.contentFlex}>
            <div className={styles.subtabsContainer}>
              <h3 className={styles.subtabsTitle}>Explore {activeTab}</h3>
              <div className={styles.subtabs}>
                {subTabs.map((subTab) => (
                  <motion.button
                    key={subTab}
                    className={classNames(styles.subtab, {
                      [styles.subtabActive]: activeSubTab === subTab,
                    })}
                    onClick={() => handleSubTabClick(subTab)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={styles.subtabText}>{subTab}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className={styles.contentArea}>
              <div className={styles.contentInner}>
                {content[activeTab]?.[activeSubTab] || (
                  <p className={styles.contentText}>Content not available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <ContentFooter />
    </>
  );
};

export default Services;