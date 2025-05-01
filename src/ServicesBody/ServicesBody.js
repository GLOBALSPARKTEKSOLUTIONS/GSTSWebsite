import styles from './ServicesBody.module.css';
import ReactJs from '../Assets/ReactJS.png'
import ReactN from '../Assets/ReactN.png'

const ServicesBody = () => {

    return (
        <div className={styles.container}>
            <h3 className={styles.servicesHeading}>Our Services</h3>
            <div className={styles.innerContainer}>
                <div className={styles.imageContainer}>
                    <img src={ReactJs} alt="React JS" />

                </div>
                <div className={styles.contentContainer}>
                    <h4>React Js</h4>
                    <p>
                        We offer end-to-end React JS development services to build high-performance, scalable, and interactive web applications tailored to your business goals. With React’s component-based architecture, we create reusable UI components, resulting in faster development and consistent user experiences.
                    </p>
                    <ul>
                        <li>Virtual DOM for efficient rendering</li>
                        <li>Reusable, encapsulated components</li>
                        <li>Unidirectional data flow for better state management</li>
                        <li>Rich ecosystem including Redux, React Router, and Hooks</li>
                        <li>SEO-friendly with server-side rendering options</li>
                    </ul>
                </div>
            </div>

            <div className={styles.innerContainer}>
                <div className={styles.contentContainer}>
                    <h4>React Js</h4>
                    <p>
                        We offer end-to-end React JS development services to build high-performance, scalable, and interactive web applications tailored to your business goals. With React’s component-based architecture, we create reusable UI components, resulting in faster development and consistent user experiences.
                    </p>
                    <ul>
                        <li>Virtual DOM for efficient rendering</li>
                        <li>Reusable, encapsulated components</li>
                        <li>Unidirectional data flow for better state management</li>
                        <li>Rich ecosystem including Redux, React Router, and Hooks</li>
                        <li>SEO-friendly with server-side rendering options</li>
                    </ul>
                </div>
                <div className={styles.imageContainer}>
                    <img src={ReactN} alt="React JS" width={410} height={410} />

                </div>

            </div>

        </div>)
}


export default ServicesBody