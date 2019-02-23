import Radium from 'radium'
export const header = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
};

export const button = {
  margin: '0 10px',
  height: '40px',
  width: '40px',
  padding: '1em',
};

export const fadeDown = Radium.keyframes({
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

export const animations = {
  fadeIcon: {
    opacity: 0,
    animation: '1s ease 1s forwards',
    animationName: fadeDown,
    animationDelay: '3s',
    transform: 'translateY(20%)'
  }
};