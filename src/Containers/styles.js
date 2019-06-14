export const projectsContainer = {
  display: 'grid',
  gridTemplateColumns: '40% 40%',
  gridTemplateRows: 'auto auto',
  alignItems: 'center',
  justifyContent: 'center',
  gridGap: '3em',
  paddingLeft: '40px',
  paddingRight: '80px',
  paddingBottom: '40px',
  textAlign: 'center',
  '@media (max-width: 920px)': {
    gridTemplateColumns: 'auto',
    gridTemplateRows: 'auto'
    
  }
};

export const heading = {
  textAlign: 'center', 
  fontWeight: 300,  
};

export const description = {
  textAlign: 'center',
  padding: '20px'
}