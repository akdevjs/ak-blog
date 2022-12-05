import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";
function Hero() {
  return (
    <div className={styles.hero__main}>
      <div className={styles.hero__main__bg}>
        <Image src="/imgs/hero-bg.png" fill />
      </div>
      <div className={styles.hero__child}>
        <div className={styles.hero__main__heading}>
          {<h1>Learn coding by teaching others</h1>}
          <div></div>
          <div></div>
        </div>
        <div className={styles.hero__main__para}>
          <p className="primary">
            Programming is an intriguing sector as it gives us the superpower to
            regulate computer programs on the go. It can be used for ships,
            traffic control, robotics, self-driving vehicles, smartphone
            applications, websites, and many other things. To ensure that you
            remain up to date on standards and protocols, and even more so in
            the field of coding, it is important to track developments in your
            field. Programmers of all specialties can easily benefit from
            keeping track of the new developments & following industry-leading
            blogs and websites. These bloggers have made a name for themselves
            in the programming world by posting important, high-quality data and
            tips for coders. You can learn tricks and shortcuts you would never
            have dreamed of doing otherwise by following programming blogs.
          </p>
        </div>
        <div className={styles.hero__main__author__info}>
          <div className={styles.authon__profile}>
            <Image src="/imgs/dummy_profile.JPG" fill />
          </div>
          <div className={styles.authon__info}>
            <span className="primary">Abdullah Khan</span>
            <div className={styles.authon__views__date}>
              <span className="secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                200+
              </span>
              <span className="secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
                17 July, 2022
              </span>
            </div>
          </div>
        </div>
        <button className="primary">Continue reading</button>
      </div>
    </div>
  );
}

export default Hero;
