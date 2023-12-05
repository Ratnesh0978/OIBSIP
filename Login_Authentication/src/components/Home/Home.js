import React from "react";
import styles from "./Home.module.css";

export default function Home(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.center}>
        <h1>Animation World</h1>
        <h3>
          {props.name ? `Welcome to our World @${props.name}` : "Login Please"}
        </h3>
        ;
      </div>
    </div>
  );
}
