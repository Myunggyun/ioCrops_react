import React, {useState, useEffect} from 'react';
import data from './data/data.json'
import data1 from './data/data-1.json'
import LowValuesChart from './Charts/LowValuesChart'
import MessValuesChart from './Charts/MessValuesChart'
import SimilarGraph1Chart from './Charts/SimilarGraph1Chart'
import SimilarGraph2Chart from './Charts/SimilarGraph2Chart'
import MiddleValuesChart from './Charts/MiddleValuesChart'
import HighValuesChart from './Charts/HighValuesChart'
import UltraValuesChart from './Charts/UltraValuesChart'

type JsonData = {
    time:string;
    EC_slab1:number | string;
    EC_slab2:number | string;
    EC_drain_PC:number | string;
    WC_slab1:number | string;
    WC_slab2:number | string;
    CO2air:number | string;
    HumDef:number | string;
    Rhair:number | string;
    Tair:number | string;
    EnScr:number | string;
    BlackScr:number | string;
    PipeGrow:number | string;
    PipeLow:number | string;
    Iglob:number | string;
    RadSum:number | string;
    Tout:number | string;
}[]

function App() {
  const [datas, setDatas] = useState<JsonData>([])
  const [lowValues, setLowValues] = useState<JsonData>([])
  const [middleValues, setMiddleValues] = useState<JsonData>([])
  const [highValues, setHighValues] = useState<JsonData>([])
  const [ultraValues, setUltraValues] = useState<JsonData>([])
  const [messValues, setMessValues] = useState<JsonData>([])
  const [similar1Values, setSimilar1Values] = useState<JsonData>([])
  const [similar2Values, setsimilar2Values] = useState<JsonData>([])


  useEffect(()=> {
    setDatas((prev)=>prev.concat(data1.dataset, data.dataset))
  }, [])

  useEffect(()=>{
    setLowValues(datas.filter(data=>data.EC_slab1||data.EC_slab2||data.EC_drain_PC||data.time))
    setMiddleValues(datas.filter(data=>data.Rhair||data.WC_slab1||data.WC_slab2||data.time))
    setHighValues(datas.filter(data=>data.CO2air||data.Iglob||data.time))
    setUltraValues(datas.filter(data=>data.RadSum||data.time))
    setMessValues(datas.filter(data=>data.PipeGrow||data.PipeLow||data.Tout||data.time))
    setSimilar1Values(datas.filter(data=>data.HumDef||data.Tair||data.time))
    setsimilar2Values(datas.filter(data=>data.BlackScr||data.EnScr||data.time))
  }, [datas])

  return (
    <div>
      <LowValuesChart chartdata={lowValues}/>
      <MiddleValuesChart chartdata={middleValues}/>
      <HighValuesChart chartdata={highValues}/>
      <UltraValuesChart chartdata={ultraValues}/>
      <MessValuesChart chartdata={messValues}/>
      <SimilarGraph1Chart chartdata={similar1Values}/>
      <SimilarGraph2Chart chartdata={similar2Values}/>
    </div>
  );
}

export default App;
