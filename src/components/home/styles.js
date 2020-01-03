import Radium from 'radium'

export const titleTop = {
  fontSize: '30px',
  width: '100%',
  fontWeight: '200',
  letterSpacing: '10px',
  '@media (max-width: 720px)': {
    fontSize: '1.4rem',
    fontWeight: '300',
    letterSpacing: '8px',
    }
}

export const titleCenter = {
  fontSize: '60px',
  marginTop: '2px',
  textAlign: 'center',
  '@media (max-width: 700px)': {
    fontSize: '3.5rem',
    }
  }

export const fadeUp = Radium.keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(50%)'
  },
  '20%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0%)'
  }
});


export const expand = Radium.keyframes({
  '0%': {
    marginBottom: '-30px',
  },
  '30%': {
    letterSpacing: '25px',
    marginBottom: '-30px',
  },
  '85%': {
    letterSpacing: '8px',
    marginBottom: '-20px',
  }
})


export const animations = {
  fadeTitle: {
    opacity: 0,
    animation: '4s ease 0.1s forwards',
    animationName: fadeUp,
    transform: 'translateY(20%)'
  },
  expandTitle: {
    animation: 'all 3s 1',
    animationName: expand,
    '@media (max-width: 620px)': {
      animationName: fadeUp
      }
  }
};

