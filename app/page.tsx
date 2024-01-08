import Link from "next/link";
import styles from "../app/styles/home.module.css";
import pstyles from "../app/styles/parallax-stars.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="#home">Rocky Memories</Link>
        <Link href="#about">Sobre el proyecto</Link>
        <Link href="#team">Equipo de trabajo</Link>
        <Link href="#development">Desarrollo del proyecto</Link>
        <Link href="#technologies">Tecnologias</Link>
        <Link href="#gallery">Galeria</Link>
        <Link href="#contact">Contacto</Link>
      </nav>
      <div id="stars" className={pstyles.stars}></div>
      <div id="stars2" className={pstyles.stars2}></div>
      <div id="stars3" className={pstyles.stars3}></div>
      <section id="home" className={styles.section}>
        <h1>Rocky Memories</h1>
      </section>

      <section id="about" className={styles.section}>
        <h2>Sobre el proyecto</h2>
      </section>

      <section id="team" className={styles.section}>
        <h2>Equipo de trabajo</h2>
      </section>

      <section id="development" className={styles.section}>
        <h2>Desarrollo del proyecto</h2>
      </section>

      <section id="technologies" className={styles.section}>
        <h2>Tecnologias</h2>
      </section>

      <section id="gallery" className={styles.section}>
        <h2>Galeria</h2>
      </section>

      <section id="contact" className={styles.section}>
        <h2>Contacto</h2>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 - Rocky Memories</p>
      </footer>
    </div>
  );
}
