import React from 'react'
import { useTranslation } from 'react-i18next';
import video1 from '../assets/img/about-vid.mp4'
import Review from './Review';

const About = () => {
  const {t}=useTranslation();
  return (
    <>
    

      <div className="section">
        <h1 className="heading">{t("about.1")}</h1>

        <div className="wrapper">
          <div className="lefts">
            <video width={500} src={video1} loop autoPlay muted></video>
            <h3> {t("about.2")}</h3>
          </div>
          
          <div className="rights">
            <h4> {t("about.3")}</h4>
            {/* <p>{t("about.4")}</p> */}
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
      </div>

      {/* <section class="about container" id="about">
        <h1 class="heading">
          <span> about </span> us
        </h1>

        <div class="row">
          <div class="video-container">
            <video width={100} src={video1} loop autoPlay muted></video>
            <h3>best flower sellers</h3>
          </div>

          <div class="content">
            <h3>why choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              cumque sit nemo pariatur corporis perspiciatis aspernatur a ullam
              repudiandae autem asperiores quibusdam omnis commodi alias
              repellat illum, unde optio temporibus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium ea est commodi incidunt magni quia molestias
              perspiciatis, unde repudiandae quidem.
            </p>
          </div>
        </div>
      </section> */}
      <Review />
    </>
  );
}

export default About
