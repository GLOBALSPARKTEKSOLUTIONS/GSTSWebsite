import React, { useState } from "react";
import bannerImage from "../Assets/careercover.jpg";
import styles from "./careerBody.module.css";

const JobCard = ({ title, location, type, role, description, responsibilities, requirements, email }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${styles.jobCard} ${isExpanded ? styles.expanded : ""}`}>
      <div className={styles.jobHeader} onClick={() => setIsExpanded(!isExpanded)}>
        <h2 className={styles.jobTitle}>{title}</h2>
        <span className={styles.toggleIcon}>{isExpanded ? "✕" : "➕"}</span>
      </div>

      {isExpanded && (
        <div className={styles.jobDetails}>
          <p className={styles.jobLocation}>
            <span className={styles.icon}>🌍</span> {location} | {type}
          </p>

          <p className={styles.jobDescription}>{description}</p>

          <div className={styles.jobSection}>
            <h3>Responsibilities:</h3>
            <ul>
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.jobSection}>
            <h3>Requirements:</h3>
            <ul>
              {requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <p className={styles.jobEmail}>
            <span className={styles.icon}>✉️</span> Apply at:{" "}
            <a href={`mailto:${email}`} className={styles.applyLink}>
              {email}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

const CareerBody = () => {
  return (
    <div className={styles.careersPage}>
      <div
        className={styles.headerBanner}
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(115, 150, 211, 0.9), rgba(0, 37, 84, 0.8)), url(${bannerImage})`,
        }}
      >
        <h3 className={styles.pageTitle}>Launch Your Future</h3>
        <p className={styles.tagline}>Join Global Spark Tek Solutions to Innovate, Create, and Celebrate Impact</p>
      </div>

      <div className={styles.jobListContainer}>
        <div className={styles.jobList}>
          <JobCard
            title="Oracle EBS Technical Consultant"
            location="Hyderabad, India"
            type="Full-time"
            responsibilities={[
              "Extensive experience in Oracle ERP/Fusion SaaS/PaaS project implementations as a technical developer",
              "Completed at least 2 full Oracle Cloud (Fusion) Implementation",
              "Extensive Knowledge on database structure for ERP/Oracle Cloud (Fusion)",
              "Extensively worked on BI Publisher reports, FBDI/OTBI/VBCS and Oracle Integration Cloud (OIC)",
              "Strong technical knowledge on Oracle Database SQL and PLSQL",
              "Providing technical support and troubleshooting for Oracle Fusion applications",
              "Collaborating with functional consultants to ensure that technical solutions meet business requirements",
              "Developing and executing test plans to ensure the quality of technical solutions",
              "Providing technical leadership and mentoring to junior team members",
              "Participating in the full software development life cycle (SDLC), including requirements gathering, design, development, testing, and deployment",
              "Staying up to date with emerging Oracle technologies and best practices and providing recommendations to clients for new technology solutions",
              "Providing input into project plans, timelines, and budgets",
              "Communicating effectively with clients, project managers, and other team members to ensure that technical solutions are delivered on-time and within budget"

            ]}
            requirements={[
              "Bachelor’s or Master’s degree (B.E./B.Tech/M.Tech) in Computer Science or Information Technology.",
              "Proven experience in developing with Oracle Application Framework (OAF).",
              "Hands-on experience working with Oracle APEX for web application development.",
              "Strong functional understanding of Supply Chain Management (SCM) and Finance modules.",
              "4 to 10 years of relevant industry experience in Oracle technologies."
            ]}

            email="careers@globalsparktek.com"
          />

          <JobCard
            title="Oracle Cloud/Fusion Technical Consultant"
            location="Hyderabad, India"
            type="Full-time"
            responsibilities={[
              "Implementation and ongoing product support for Oracle Fusion applications",
              "Design and development of custom reports and analysis reports using Oracle BI and related tools",
              "Customization of reports based on specific client requirements and business needs",
              "Performance tuning and optimization of complex SQL queries",
              "Collaborating with Oracle Support to troubleshoot and resolve open issues",
              "Executing data conversions and developing Infolets for dynamic data visualization",
              "Creating and managing scheduled jobs within the Oracle Fusion environment",

            ]
            }
            requirements={[
              "Working experience with Oracle APEX for low-code application development",
              "Functional knowledge of Supply Chain Management (SCM) and Finance modules",
              "Experience with Oracle Integration Cloud (OIC) for system integrations",
              "Experience with Visual Builder Cloud Service (VBCS) for building web and mobile applications",
              "Bachelor’s or Master’s degree (B.E./B.Tech/M.Tech) in Computer Science or Information Technology, or MCA",
              "4 to 10 years of hands-on experience in Oracle Fusion application development and support"
            ]

            }
            email="careers@globalsparktek.com"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerBody;
