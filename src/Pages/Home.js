import Main from '../components/Main'
import {useState,useEffect} from 'react'
import Details from '../components/Details'
const Home = () => {
    const [data,setData] = useState(null)
    const [load,setLoad] = useState(false)

    useEffect(() =>{
        const fetch_eth = async()=>{
            var requestURL = 'https://api.coingecko.com/api/v3/exchange_rates';
            const response = await fetch(requestURL)
            const json = await response.json()
            const data_eth = await (json.rates.usd.value)/(json.rates.eth.value)//1
            const data_bit = await (json.rates.usd.value)                       //2
            const data_ltc = await (json.rates.usd.value)/(json.rates.ltc.value)//3
            const data_bch = await (json.rates.usd.value)/(json.rates.bch.value)//4
            const data_xrp = await (json.rates.usd.value)/(json.rates.xrp.value)//5
            const data_bnb = await (json.rates.usd.value)/(json.rates.bnb.value)//6
            const data_eos = await (json.rates.usd.value)/(json.rates.eos.value)//7
            const data_xlm = await (json.rates.usd.value)/(json.rates.xlm.value)//8
            const data_link = await (json.rates.usd.value)/(json.rates.link.value)//9
            const data_dot = await (json.rates.usd.value)/(json.rates.dot.value)//10

            var arr = [data_eth,data_bit,data_ltc,data_bch,data_xrp,data_bnb,data_eos,data_xlm,data_link,data_dot]
            if(response.ok){
                setData(arr)
                setLoad(true)
            }
        }
        fetch_eth()
    },[])
    return (
        <div className="home">
            {load && <Main/> }
            
            {load && <Details data = {data}/>}
        </div>
     );
}

export default Home;
