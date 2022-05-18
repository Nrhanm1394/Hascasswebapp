import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
  chart : {
    margin: '20px',
    padding: '20px',
    WebkitBoxShadow:'0px 0px 15px -10px #000000',
    boxShadow:'0px 0px 15px -10px #000000',

  },
  chartTitle: {
    marginBottom: '20px'
  }

}));


export default function Chart({title,data,dataKey,grid}) {
  const classes = useStyles();
  return (
    <div className={classes.chart}>
      <h3 className={classes.chartTitle}>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
        <XAxis dataKey="name" stroke="#5550bd"/>
        <Tooltip />
        <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
        {grid && <Line  type="monotone" dataKey={dataKey} stroke="#5550bd" />}
        {grid && <Line  type="monotone" dataKey="uv"  stroke="#D83C1D" />}
        <Legend/>
    </LineChart>
    </ResponsiveContainer>
    </div>
  );
}
