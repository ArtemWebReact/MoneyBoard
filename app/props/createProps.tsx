import { DataProps } from "../interface/interface"
export default function CreateProps({ setSomeAmount, setType, dataFunction } : DataProps){
    return(
        <>
        <div className="flex justify-around items-center ">
        <input className = "text-gray bg-white rounded-lg  h-auto" onChange={((e)=>{
            const value:number = Number(e.target.value)
            setSomeAmount(value)
        })} placeholder="amount"></input>
                <input className = "text-gray bg-white rounded-lg  h-auto" onChange={((e)=>{
            const value:string = String(e.target.value)
            setType(value)
        })} placeholder="exspenses"></input>
           <button className = "text-white" onClick={dataFunction}>+</button>
           </div>
        </>
        
      )
}