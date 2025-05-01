import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../Styles/technology.module.css";
import Header from "../../Home/Screens/Header";
import ContentFooter from "./ContentFooter";

const Technology = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get("service");
  const [isMobile, setIsMobile] = useState(false);
  const [selectedService, setSelectedService] = useState(serviceId || "apex");

  const servicesData = [
    {
      id: "apex",
      name: "Oracle APEX",
      image: require("../../Assets/apex.jfif"),
      content: (
        <div className={styles.contentCardInner}>
          <h2 className={styles.title}>Oracle APEX Development</h2>
          <p className={styles.subtitle}>Rapid Innovation, Simplified</p>
          <p className={styles.subtitle}>
            Build robust applications faster than ever with our APEX expertise:
          </p>
          <ul className={styles.featureList}>
            <li>Low-code platform for quick deployment</li>
            <li>Responsive web applications for all devices</li>
            <li>Mobile-first design with modern UI</li>
            <li>Seamless integration with Oracle databases</li>
            <li>Custom plugins and extensions</li>
          </ul>
          <div className={styles.interactiveSection}>
            <div className={styles.demoPreview}>
              <span className={styles.previewText}>Live Preview Available</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "ebs",
      name: "Oracle E-Business Suite",
      image: require("../../Assets/ebs.jfif"),
      content: (
        <div className={styles.contentCardInner}>
          <h2 className={styles.title}>Oracle E-Business Suite</h2>
          <p className={styles.subtitle}>Enterprise Excellence Unleashed</p>
          <p>Streamline your business operations with our EBS solutions:</p>
          <ul className={styles.featureList}>
            <li>Advanced financial management tools</li>
            <li>Supply chain optimization strategies</li>
            <li>Comprehensive HR management systems</li>
            <li>Custom extensions for unique needs</li>
            <li>Data-driven decision-making support</li>
          </ul>
        </div>
      ),
    },
    {
      id: "oracle-cloud",
      name: "Oracle Cloud",
      image: require("../../Assets/oracle cloud.jfif"),
      content: (
        <div className={styles.contentCardInner}>
          <h2 className={styles.title}>Oracle Cloud Solutions</h2>
          <p className={styles.subtitle}>
            Elevate Your Business to New Heights
          </p>
          <p>
            Transform your operations with our cutting-edge cloud services
            designed for the future:
          </p>
          <ul className={styles.featureList}>
            <li>Seamless cloud migration with zero downtime</li>
            <li>Comprehensive IaaS, PaaS, and SaaS solutions</li>
            <li>Scalable infrastructure for growing businesses</li>
            <li>24/7 monitoring with AI-driven insights</li>
            <li>Cost optimization and performance tuning</li>
          </ul>
          <div className={styles.interactiveSection}>
            <div className={styles.stats}>
              <span>99.9% Uptime</span>
              <span>50+ Successful Migrations</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "oracle-integration-cloud",
      name: "Oracle Integration Cloud",
      image: require("../../Assets/oic-1.png"),
      content: (
        <div className={styles.contentCardInner}>
          <h2 className={styles.title}>Oracle Integration Cloud</h2>
          <p className={styles.subtitle}>Cloud Connectivity, Simplified</p>
          <p>Integrate your cloud ecosystem with:</p>
          <ul className={styles.featureList}>
            <li>100+ application connectors</li>
            <li>Automated process workflows</li>
            <li>Visual builder for rapid design</li>
            <li>AI-driven predictive insights</li>
            <li>Secure data transfer protocols</li>
          </ul>
        </div>
      ),
    },
    {
      id: "react",
      name: "React JS",
      image: require("../../Assets/react.jfif"),
      content: (
        <div className={styles.contentCardInner}>
          <h2 className={styles.title}>React Development</h2>
          <p className={styles.subtitle}>Modern Web, Made Simple</p>
          <p>Build dynamic, high-performance web applications:</p>
          <ul className={styles.featureList}>
            <li>Component-based architecture for scalability</li>
            <li>Lightning-fast rendering with Virtual DOM</li>
            <li>Advanced state management solutions</li>
            <li>Reusable UI components for consistency</li>
            <li>SEO-friendly single-page applications</li>
          </ul>
        </div>
      ),
    },
    {
      id: "react-native",
      name: "React Native",
      image: require("../../Assets/react native.jfif"),
      content: (
        <div className={styles.contentCardInner}>
          <h2 className={styles.title}>React Native Apps</h2>
          <p className={styles.subtitle}>One Code, All Platforms</p>
          <p>Develop powerful mobile apps with a single codebase:</p>
          <ul className={styles.featureList}>
            <li>Native performance on iOS and Android</li>
            <li>Unified development for faster delivery</li>
            <li>Accelerated development cycles</li>
            <li>Rich, customizable UI components</li>
            <li>Over-the-air updates support</li>
          </ul>
        </div>
      ),
    },
    {
      id: "vbcs",
      name: "Oracle VBCS",
      image: require("../../Assets/vbcs1.png"),
      content: (
        <div className={styles.contentCardInner}>
          <h2 className={styles.title}>Visual Builder Cloud Service</h2>
          <p className={styles.subtitle}>Design Meets Functionality</p>
          <p>Create visually stunning applications effortlessly:</p>
          <ul className={styles.featureList}>
            <li>Intuitive drag-and-drop interface</li>
            <li>Cross-platform web and mobile development</li>
            <li>Deep integration with Oracle SaaS</li>
            <li>Custom business logic implementation</li>
            <li>Real-time preview capabilities</li>
          </ul>
        </div>
      ),
    },
  ];


  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceId = entry.target.id;
            setSelectedService(serviceId);

            // Scroll the nav item into view
            const navItem = document.querySelector(
              `.${styles.navItem}[data-service-id="${serviceId}"]`
            );
            if (navItem) {
              navItem.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
              });
            }
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px" }
    );

    servicesData.forEach((service) => {
      const element = document.getElementById(service.id);
      if (element) observer.observe(element);
    });

    return () => {
      servicesData.forEach((service) => {
        const element = document.getElementById(service.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [isMobile]);

  const handleNavClick = (id) => {
    if (isMobile) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "start",
        });
        const sidebar = document.querySelector(`.${styles.sidebar}`);
        if (sidebar) {
          const sidebarHeight = sidebar.offsetHeight;
          window.scrollBy({ top: -sidebarHeight, behavior: "smooth" });
        }
      }
    } else {
      setSelectedService(id);
    }
  };


  const sortedServices = [...servicesData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <>
      <Header />
      <div className={styles.servicesContainer}>
        <div className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>Our Technologies</h3>
          <nav className={styles.nav}>
            {sortedServices.map((service) => (
              <button
                key={service.id}
                data-service-id={service.id}
                className={`${styles.navItem} ${selectedService === service.id ? styles.active : ""
                  }`}
                onClick={() => handleNavClick(service.id)}
              >
                <span className={styles.navText}>{service.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className={styles.contentArea}>
          <div className={styles.contentWrapper}>
            {isMobile ? (
              sortedServices.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={styles.contentCard}
                >
                  <div className={styles.contentWithImage}>
                    <div className={styles.imageContainer}>
                      <img
                        src={service.image}
                        alt={service.name}
                        className={styles.serviceImage}
                      />
                    </div>
                    {service.content}
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.contentCard}>
                {(() => {
                  const selected = sortedServices.find(
                    (s) => s.id === selectedService
                  );
                  return selected ? (
                    <div className={styles.contentWithImage}>
                      <div className={styles.imageContainer}>
                        <img
                          src={selected.image}
                          alt={selected.name}
                          className={styles.serviceImage}
                        />
                      </div>
                      {selected.content}
                    </div>
                  ) : (
                    <div>Select a service</div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
      <ContentFooter />
    </>
  );
};

export default Technology;
