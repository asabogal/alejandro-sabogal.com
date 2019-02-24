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

// NAV MENU //

// export const menuItems = {
//   item: {
//     fontSize: '4rem',
//     opacity: 0,
//     textShadow: '2px 2px #000',
//     margin: 0,
//     padding: 0
// }