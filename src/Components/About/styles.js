export const pageContainer = {
  display: 'grid',
  gridTemplateColumns: 'auto',
  gridAutoRows: 'auto'
};

export const pictureContainer = {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  gridTemplateColumns: 'auto'
};

export const header = {
  padding: '0 10px',
  textAlign: 'center',
  color: '#afb9b9'
}

export const iconsContainer = {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  gridTemplateColumns: 'auto auto auto auto',
  gridColumnGap: '2em',
  padding: '20px',
  textAlign: 'center',
  '@media (max-width: 750px)': {
    gridTemplateColumns: 'auto auto'
  }
};

export const iconsContainer2 = {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  gridTemplateColumns: 'auto auto auto auto auto auto',
  gridColumnGap: '2em',
  padding: '20px',
  textAlign: 'center',
  '@media (max-width: 750px)': {
    gridTemplateColumns: 'auto auto'
  }
};

export const pic = {
  width: '250px',
  height: '250px',
  padding: '6px 0px',
  borderRadius: '175px',
  boderColor: 'blue',
  opacity: '0.9'
};

export const textContainer = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridAutoRows: 'auto',
  gridColumnGap: '2em',
  paddingLeft: '40px',
  paddingRight: '40px',
  '@media (max-width: 500px)': {
    gridTemplateColumns: 'auto'
  }
};

export const bigText = {
  fontSize: '30px',
  fontWeight: '800',
  textAlign: 'left',
  '@media (max-width: 500px)': {
    textAlign: 'left'
  }
};

export const smallText = {
  fontSize: '18px',
  fontWeight: '300',
};
