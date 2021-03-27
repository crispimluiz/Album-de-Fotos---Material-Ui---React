import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Cards from '../../components/Cards';


//Construtor de Stilos
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));


//Array onde joga a informação para cards. Componente Pai
const cards = [
  {
  id:'1',
  image:'https://cdn.pixabay.com/photo/2017/12/26/21/19/tech-3041437_960_720.jpg',
  title:'NoteBook',
  description:'Chegou a hora de Comprar seu note!'
},{
  id:'2',
  image:'https://cdn.pixabay.com/photo/2015/11/25/01/09/abstract-background-1061100_960_720.jpg',
  title:'NoteBook',
  description:'Compre seu note!'
},{
  id:'3',
  image:'https://cdn.pixabay.com/photo/2016/07/03/18/04/tech-1495181_960_720.jpg',
  title:'NoteBook',
  description:'Ultima hora para Comprar seu note!'
},{
  id:'4',
  image:'https://cdn.pixabay.com/photo/2016/07/03/18/04/tech-1495181_960_720.jpg',
  title:'NoteBook',
  description:'Não deixe para amanhã, Compre seu note!'
},{
  id:'5',
  image:'https://cdn.pixabay.com/photo/2016/07/03/18/04/tech-1495181_960_720.jpg',
  title:'NoteBook',
  description:'Não deixe para amanhã, Compre seu note!'
},{
  id:'6',
  image:'https://cdn.pixabay.com/photo/2016/07/03/18/04/tech-1495181_960_720.jpg',
  title:'NoteBook',
  description:'Não deixe para amanhã, Compre seu note!'
}
];


function App() {
  const classes = useStyles();


  return (
    <>
   
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Fotografia
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Recordações em Imagens
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Entrar
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Cancelar
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/*Companente Cards está aqui*/}
        <Container className={classes.cardGrid} maxWidth="md">
          <Cards data = {cards} />
        </Container>
      </main>
      </>
  );
}

export default App;