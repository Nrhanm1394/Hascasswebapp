import "../style/featuredinfo.css"
import {ArrowDownward,
    ArrowUpward
} from "@material-ui/icons"


export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Header</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2222</span>
                <span className="featuredMoneyRate">
                    -11.4<ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Header2</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3322</span>
                <span className="featuredMoneyRate">
                    -21.4<ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">compared to last month</span>
        </div> <div className="featuredItem">
            <span className="featuredTitle">Header3</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$9922</span>
                <span className="featuredMoneyRate">
                    +221.4<ArrowUpward  className="featuredIcon"/>
                </span>
            </div>
            <span className="featuredSub">compared to last month</span>
        </div>
    </div>
  )
}
