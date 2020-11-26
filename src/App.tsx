import React, {useState, useEffect} from 'react';
import data from './data/data.json'
import data1 from './data/data-1.json'
import Chart from './Chart'

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

  useEffect(()=>{
    setDatas((prev)=>prev.concat(data1.dataset, data.dataset))
  }, [])

  return (
    <>
    <div>
      hello world
    </div>
    <Chart chartdata={datas}/>
    </>

  );
}

export default App;
