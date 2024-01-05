import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Sticky,
  batch,
  Fade,
  MoveOut,
  StickyIn,
  FadeIn,
  ZoomIn,
  Move,
  MoveIn,
  ZoomOut,
} from 'react-scroll-motion';
import { useInView } from 'react-intersection-observer';
import { osName } from 'react-device-detect';
import Cursor from '../../components/Cursor';
import favicon from '../../images/favicon.ico';
import appleIcon from '../../images/apple-touch-icon.png';
import favicon32 from '../../images/favicon-32x32.png';
import favicon16 from '../../images/favicon-16x16.png';
import siteManifest from '../../images/site.webmanifest';
import SocialIcons from '../../components/SocialIcons';
import meBg1 from '../../images/meBg1.jpg';
import CloudsBG from '../../images/clouds-png-13378.png';
import DockerBG from '../../images/ian-taylor-jOqJbvo1P9g-unsplash.jpg';
// import RickRoll from '../../images/Rick-Roll.mp4';
import RickRoll from '../../components/RickRoll';
import ErrorWindows from '../../components/ErrorWindows';

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function Me() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [mobile, setMobile] = useState(false);
  const [tablet, setTablet] = useState(false);
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    if (windowSize.innerWidth < 1024) {
      setTablet(true);
    } else {
      setTablet(false);
    }
  }, [windowSize]);

  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);
  // console.log((offsetY/(500*windowSize.innerHeight) * 100))
  // useEffect(() => {
  //     window.addEventListener('scroll', handleScroll);

  //     return () => window.addEventListener('scroll', handleScroll);
  // }, [])

  // Rick Roll shh
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Nguyen</title>
        <link rel="canonical" href={window.location.href} />
        <link rel="icon" href={favicon} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="manifest" href={siteManifest} />

        {/* Meta Info */}
        <meta name="title" content="About Nguyen" />
        <meta name="description" content="Nguyen Hieu's personal website" />
        <meta
          name="keywords"
          content="Nguyen Hieu, Personal Website, Developer, Open Sourcer, Devops Engineer, Student"
        />
        <meta name="author" content="Nguyen Hieu" />

        {/* Open Graph */}
        <meta property="og:title" content="About Nguyen" />
        <meta
          property="og:description"
          content="Nguyen Hieu's personal website"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="images/bgDesktop2.jpg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta
          property="og:image:alt"
          content="Nguyen Hieu's personal website"
        />
        <meta property="og:site_name" content="Nguyen Hieu" />
        <meta property="og:locale" content="en_US" />

        {/* twitter meta */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About Nguyen" />
        <meta
          name="twitter:description"
          content="Nguyen Hieu's personal website"
        />
        <meta name="twitter:image" content="images/bgDesktop2.jpg" />
        <meta
          name="twitter:image:alt"
          content="Nguyen Hieu's personal website"
        />
        <meta name="twitter:site" content="@aps_codes" />
        <meta name="twitter:creator" content="@aps_codes" />
      </Helmet>
      <Wrapper>
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -2000))}>
              <Text2>Hi.</Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
              <Text2>I am Nguyen.</Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Sticky(0, 0), Fade())}>
              <div
                style={{
                  position: 'absolute',
                  zIndex: -1,
                  background: '#748DA6',
                  height: '100vh',
                  width: '100vw',
                }}
              ></div>
            </Animator>
            <Animator animation={batch(StickyIn(), Fade(), MoveIn())}>
              <Text2 style={{ color: '#F2D7D9' }}>
                I am a Full Stack Engineer,
              </Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Sticky(0, 0), Fade())}>
              <div
                style={{
                  position: 'absolute',
                  zIndex: -1,
                  background: '#576F72',
                  height: '100vh',
                  width: '100vw',
                }}
              ></div>
            </Animator>
            <Animator animation={batch(StickyIn(), Fade())}>
              <Text2 style={{ color: '#F0EBE3' }}>
                Open Source Enthusiast,
              </Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage></ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Sticky(0, 0), Fade())}>
              <div
                style={{
                  position: 'absolute',
                  zIndex: -1,
                  background: `url(${meBg1}) no-repeat 10% 20%`,
                  filter: 'brightness(75%)',
                  height: '100vh',
                  width: '100vw',
                }}
              ></div>
            </Animator>
            <Animator animation={batch(Sticky(), Fade(), MoveIn())}>
              <Text2
                style={{
                  fontSize: '5rem',
                  color: '#F2D7D9',
                  mixBlendMode: 'difference',
                }}
              >
                I love{' '}
                <span
                  style={{
                    textDecoration: 'none',
                    background: 'linear-gradient(to right, #748DA6, #F2D7D9)',
                    backgroundRepeat: 'repeat-x',
                    backgroundSize: '100% 5px',
                    backgroundPosition: '0 95%',
                  }}
                >
                  Trekking
                </span>
                ,{' '}
                <span
                  style={{
                    textDecoration: 'none',
                    background: 'linear-gradient(to right, #F37878, #D9F8C4)',
                    backgroundRepeat: 'repeat-x',
                    backgroundSize: '100% 5px',
                    backgroundPosition: '0 95%',
                  }}
                >
                  Cycling
                </span>{' '}
                and{' '}
                <span
                  style={{
                    textDecoration: 'none',
                    background: 'linear-gradient(to right, #DFF6FF, #1363DF)',
                    backgroundRepeat: 'repeat-x',
                    backgroundSize: '100% 5px',
                    backgroundPosition: '0 95%',
                  }}
                >
                  Swimming
                </span>
                .
              </Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage></ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), Move())}>
              <Text2 style={{ fontSize: '3rem' }}>
                Grab something to eat as this is going to be long.
              </Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage></ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), Move())}>
              <Text2 style={{ fontSize: '3rem' }}>Keep scrollin'!</Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage></ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky())}>
              <Text2 style={{ fontSize: '3rem' }}>Here's my journey.</Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage></ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Sticky(), Fade(), MoveIn())}>
              <Text2 style={{ fontSize: '2rem' }}>
                I graduated from Nanyang Technological University Singapore in
                2016.
              </Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage></ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Sticky(), Fade())}>
              <Text2 style={{ fontSize: '2rem' }}>
                I learned and studied Japanese in The Japanese School in Ho Chi
                Minh City in 2017.
              </Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage></ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), Move())}>
              <Text2 style={{ fontSize: '2rem' }}>
                Here are my work history.
              </Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage></ScrollPage>

          <ScrollPage>
            <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
              <Text2 style={{ fontSize: '2rem' }}>
                Frontend Developer, CrowdWors, 2017-2018
              </Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage></ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky())}>
              <Text2 style={{ fontSize: '2rem' }}>
                Full Stack Developer, Waverley Software Vietnam, 2019-2021
              </Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage></ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), Move())}>
              <Text2 style={{ fontSize: '2rem' }}>
                Full Stack Engineer, Destify, 2021-2023
              </Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), Move())}>
              <Text2
                style={{
                  fontSize: '2rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Languages:{' '}
                <img
                  alt=""
                  style={{ width: '48px' }}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                />{' '}
                <img
                  alt=""
                  style={{ width: '48px' }}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                />{' '}
                <img
                  alt=""
                  style={{ width: '48px' }}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
                />{' '}
                <img
                  alt=""
                  style={{ width: '48px' }}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                />
              </Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage></ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), Move())}>
              <Text2
                style={{
                  fontSize: '2rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Framworks :{' '}
                <img
                  alt=""
                  style={{ width: '48px' }}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                />{' '}
                <img
                  alt=""
                  style={{ width: '48px' }}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                />{' '}
                <img
                  alt=""
                  style={{ width: '48px' }}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                />{' '}
                <img
                  alt=""
                  style={{ width: '48px' }}
                  src="https://cdn.simpleicons.org/tailwindcss/06B6D4"
                />{' '}
                <img
                  alt=""
                  style={{ width: '48px' }}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                />{' '}
                <img
                  alt=""
                  style={{ width: '48px' }}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"
                />{' '}
                <img
                  alt=""
                  style={{ width: '48px' }}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
                />
              </Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Sticky(), FadeIn())}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <Text2 style={{ fontSize: '3.25rem' }}>Me.</Text2>
                <span style={{ marginTop: '1rem' }}>
                  <SocialIcons color="#999" email="trungquann411@gmail.com" />
                </span>
              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={Sticky()}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <Text2 style={{ fontSize: '3.25rem' }}>Me.</Text2>
                <span style={{ marginTop: '1rem' }}>
                  <SocialIcons color="#999" email="trungquann411@gmail.com" />
                </span>
              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={Sticky()}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <Text2 style={{ fontSize: '3.25rem' }}>Me.</Text2>
                <span style={{ marginTop: '1rem' }}>
                  <SocialIcons color="#999" email="trungquann411@gmail.com" />
                </span>
              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={Sticky()}>
              <ErrorWindows />
            </Animator>
          </ScrollPage>

          <ScrollPage></ScrollPage>

          <ScrollPage>
            <Animator animation={Sticky()}>
              <Text2 style={{ fontSize: '4rem', fontWeight: '900' }}>
                That's probably enough for today!
                <br />
                Stop scrolling!
              </Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={Sticky()}>
              <Text2 style={{ fontSize: '4rem', fontWeight: '900' }}>
                That's probably enough for today!
                <br />
                Stop scrolling!
              </Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={Sticky()}>
              <Text2 style={{ fontSize: '4rem', fontWeight: '900' }}>
                That's probably enough for today!
                <br />
                Stop scrolling!
              </Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage></ScrollPage>

          <ScrollPage>
            <Animator animation={Sticky()}>
              <Text2 style={{ fontSize: '4rem', fontWeight: '900' }}>
                Still scrollin'?
              </Text2>
            </Animator>
          </ScrollPage>

          <ScrollPage></ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Sticky(), Fade())}>
              <div
                ref={ref}
                style={{ width: '100vw', height: '100vh', background: '#000' }}
              >
                {inView ? <RickRoll os={osName} /> : null}
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
        <GoBack to="/" id="home">
          ← Home
        </GoBack>
        <ScrollDown>Scroll ↓</ScrollDown>
        {!tablet ? <Cursor /> : null}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
  }
  background: #111;
`;

const GoBack = styled(Link)`
  position: fixed;
  top: 1rem;
  left: 1rem;
  color: #999;
  text-decoration: none;
`;

const ScrollDown = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  color: #999;
`;

const Text2 = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 8rem;
  color: #f6fbf4;
  mix-blend-mode: difference;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 3rem !important;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem !important;
  }
`;
