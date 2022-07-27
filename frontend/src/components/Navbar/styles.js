import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px 10px',
    backgroundColor: '#4E5166',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: '#FFD7D7',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logout: {
    backgroundColor: '#FD2D01',
    margin: '10px 30px',
    color: '#FFD7D7',
    padding: '10px',
  },
}));
