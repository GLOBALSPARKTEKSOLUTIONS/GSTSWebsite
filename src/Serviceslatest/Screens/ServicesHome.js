import { useNavigate } from 'react-router-dom';
import styles from '../Styles/serv.module.css';
import erpIcon from '../../Assets/erpIcon.png';
import applicationIcon from '../../Assets/applicationIcon.png';
import managed from '../../Assets/serviceIcon.png';
import testing from '../../Assets/testing.png';
import cloudIcon from '../../Assets/cloudIcon.png';
import webIcon from '../../Assets/webIcon.png';

const ServicesHome = () => {
  const navigate = useNavigate();

  const services = [
    { name: 'ERP Implementations', icon: erpIcon, alt: 'ERP Implementations' },
    { name: 'Application Integration Services', icon: applicationIcon, alt: 'Application Integration Services' },
    { name: 'Managed Services', icon: managed, alt: 'Managed Services' },
    { name: 'Exhaustive Testing Services', icon: testing, alt: 'Exhaustive Testing Services' },
    { name: 'Cloud Consulting & Advisory', icon: cloudIcon, alt: 'Cloud Consulting & Advisory' },
    { name: 'Web Development', icon: webIcon, alt: 'Web Development' },
  ];

  const handleCardClick = (serviceName) => {
    navigate(`/servicepage?tab=${encodeURIComponent(serviceName)}`);
  };

  return (
    <div id={styles.mainWrapper}>
      <div className={styles.innerWrapper}>
        <h3>Our Services</h3>
        <p>
          Global Spark Tek Solutions is an Oracle consulting services firm. Our experts refine business processes and deliver services tailored to the client needs.
        </p>
        <div className={styles.serviceContainer}>
          <div className={styles.firstRow}>
            {services.slice(0, 3).map((service) => (
              <div
                key={service.name}
                className={styles.eachService}
                onClick={() => handleCardClick(service.name)}
                style={{ cursor: 'pointer' }}
              >
                <div id={styles.imgContainer}>
                  <img src={service.icon} alt={service.alt} width={80} height={80} />
                </div>
                <h6>{service.name}</h6>
              </div>
            ))}
          </div>
          <div className={styles.firstRow}>
            {services.slice(3).map((service) => (
              <div
                key={service.name}
                className={styles.eachService}
                onClick={() => handleCardClick(service.name)}
                style={{ cursor: 'pointer' }}
              >
                <div id={styles.imgContainer}>
                  <img src={service.icon} alt={service.alt} />
                </div>
                <h6>{service.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;