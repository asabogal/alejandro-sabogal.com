export const projectCard = {
  padding: '1em',
  position: 'relative',
  width: '100%',
  borderRadius: '.1em',
  boxShadow: '.125em .125em .3125em rgba(0, 0, 0, 0.2)',
};

export const projectImg = {
  display: 'grid',
  width: '100%',
  height: 'auto'
};

export const cardOverlay = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: '100%',
  width: '100%',
  opacity: 0,
  transition: '.5s ease',
  backgroundColor: 'rgb(55, 68, 82)',
  ':hover': {
    opacity: 1
  }
};

export const text = {
  color: 'white',
  fontSize: '10px',
  position: 'absolute',
  top: '50%',
  left: '50%'
};

export const btnCircle = {
  width: '100px',
  height: '100px',
  padding: '6px 0px',
  borderRadius: '50px',
  textAlign: 'center',
  fontsize: '20px',
  lineHeight: 1.42857
}
