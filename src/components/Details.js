const Details = ({data}) => {
    
    return ( 
        <div class = "container2">
            <div className="workout-details">
                
                <div class = "data_box">
                    <h3 style = {{textAlign:"center"}}>ETH</h3>
                    <img style = {{position:"relative",left:"-1px",top:"-10px",justifyContent:"center",height:"100px",width:"130px"}} src={require('../assets/images/eth.png')} alt="" />
                    <h5 style ={{textAlign:"center"}}>{data[0]} USD</h5>
                </div>
                <div class = "data_box">
                    <h3 style = {{textAlign:"center"}}>BTC</h3>
                    <img style = {{position:"relative",left:"-1px",top:"-5px",justifyContent:"center",height:"100px",width:"100px"}} src={require('../assets/images/btc.png')} alt="" />
                    <h5 style ={{textAlign:"center"}}>{data[1]} USD</h5>
                </div>
                <div class = "data_box">
                    <h3 style = {{textAlign:"center"}}>LTC</h3>
                    <img style = {{position:"relative",left:"-1px",top:"-5px",justifyContent:"center",height:"100px",width:"100px"}} src={require('../assets/images/ltc.png')} alt="" />
                    <h5 style ={{textAlign:"center"}}>{data[2]} USD</h5>
                </div>
                <div class = "data_box">
                    <h3 style = {{textAlign:"center"}}>BCH</h3>
                    <img style = {{position:"relative",left:"-1px",top:"-5px",justifyContent:"center",height:"100px",width:"100px"}} src={require('../assets/images/bch.png')} alt="" />
                    <h5 style ={{textAlign:"center"}}>{data[3]} USD</h5>
                </div>
                <div class = "data_box">
                    <h3 style = {{textAlign:"center"}}>XRP</h3>
                    <img style = {{position:"relative",left:"-1px",top:"-5px",justifyContent:"center",height:"100px",width:"100px"}} src={require('../assets/images/xrp.png')} alt="" />
                    <h5 style ={{textAlign:"center"}}>{data[4]} USD</h5>
                </div>
                <div class = "data_box">
                    <h3 style = {{textAlign:"center"}}>BNB</h3>
                    <img style = {{position:"relative",left:"-1px",top:"-5px",justifyContent:"center",height:"100px",width:"100px"}} src={require('../assets/images/bnb.png')} alt="" />
                    <h5 style ={{textAlign:"center"}}>{data[5]} USD</h5>
                </div>
                <div class = "data_box">
                    <h3 style = {{textAlign:"center"}}>EOS</h3>
                    <img style = {{position:"relative",left:"-1px",top:"-5px",justifyContent:"center",height:"100px",width:"100px"}} src={require('../assets/images/eos.png')} alt="" />
                    <h5 style ={{textAlign:"center"}}>{data[6]} USD</h5>
                </div>
                <div class = "data_box">
                    <h3 style = {{textAlign:"center"}}>XLM</h3>
                    <img style = {{position:"relative",left:"-1px",top:"-5px",justifyContent:"center",height:"100px",width:"100px"}} src={require('../assets/images/xlm.png')} alt="" />
                    <h5 style ={{textAlign:"center"}}>{data[7]} USD</h5>
                </div>
                <div class = "data_box">
                    <h3 style = {{textAlign:"center"}}>LINK</h3>
                    <img style = {{position:"relative",left:"-1px",top:"-5px",justifyContent:"center",height:"100px",width:"100px"}} src={require('../assets/images/link.png')} alt="" />
                    <h5 style ={{textAlign:"center"}}>{data[8]} USD</h5>
                </div>
                <div class = "data_box">
                    <h3 style = {{textAlign:"center"}}>DOT</h3>
                    <img style = {{position:"relative",left:"-1px",top:"-5px",justifyContent:"center",height:"100px",width:"100px"}} src={require('../assets/images/dot.png')} alt="" />
                    <h5 style ={{textAlign:"center"}}>{data[9]} USD</h5>
                </div>
       

            </div>
        </div>
    );
}
 
export default Details;