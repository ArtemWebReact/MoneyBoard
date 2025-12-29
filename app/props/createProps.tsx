import { DataProps } from "../interface/interface"
export default function CreateProps({ setSomeAmount, setType, dataFunction } : DataProps){
    return(
        <>
        <div className="flex justify-around items-center flex-col xl:flex-row gap-3 border-1 border-white border-solid p-2 rounded-xl m-1">
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