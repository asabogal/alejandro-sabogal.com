import Radium from 'radium'

// HEADER //
export const header = {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 999,
};

// BUTTON //
export const button = {
  margin: '0 10px',
  height: '40px',
  width: '40px',
  padding: '1em',
};

const fadeDown = Radium.keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(0%)'
  },
  '20%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(20%)'
  }
});

const fadeIn = Radium.keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  }
});

export const animations = {
  fadeIcon: {
    opacity: 0,
    animation: '1s ease 1s forwards',
    animationName: fadeDown,
    animationDelay: '3s',
    transform: 'translateY(20%)'
  },
  fadeHome: {
    opacity: 0,
    animation: '1s ease 1s forwards',
    animationName: fadeIn,
    animationDelay: '.2s',
  },
  fadeAbout: {
    opacity: 0,
    animation: '1s ease 1s forwards',
    animationName: fadeIn,
    animationDelay: '.3s',
  },
  fadePortfolio: {
    opacity: 0,
    animation: '1s ease 1s forwards',
    animationName: fadeIn,
    animationDelay: '.4s',
  },
  fadeResume: {
    opacity: 0,
    animation: '1s ease 1s forwards',
    animationName: fadeIn,
    animationDelay: '.5s',
  },
  fadeContact: {
    opacity: 0,
    animation: '1s ease 1s forwards',
    animationName: fadeIn,
    animationDelay: '.6s',
  }
};

// NAV MENU //



