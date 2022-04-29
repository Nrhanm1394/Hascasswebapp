
import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import { userData } from "../../dummyData"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
  home: {
    flex:'4'
  },
  homeWidgets: {
    display: 'flex',
    margin: '20px',
  },
  container: {
    display: 'flex',
    marginTop: '10px'
  }

}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <FeaturedInfo/>
      <Chart data={userData} title="Analytics" grid dataKey="pv" dataKey2="uv"/>
      <div className={classes.homeWidgets}></div>
    </div>
  )
}
