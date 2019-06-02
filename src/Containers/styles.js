export const projectsContainer = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridTemplateRows: 'auto auto',
  alignItems: 'center',
  justifyContent: 'center',
  gridGap: '3em',
  paddingLeft: '40px',
  paddingRight: '80px',
  paddingBottom: '40px',
  textAlign: 'center',
  '@media (max-width: 1000px)': {
    gridTemplateColumns: 'auto'
    
  }
};

export const heading = {
  textAlign: 'center', 
  fontWeight: 200,  
};

export const description = {
  textAlign: 'center'
}