export  interface IncomeTSX {
    amount?: number,
    sourceOfIncome?: string,
    key?: any,
    userId?: string

  }
export  interface IncomeProps{
    income: IncomeTSX
  }
  export  interface ExspensesTSX {
    amount?: number,
    exspenses?: string,
    key?: any,
    id: string;
    userId?:string

  }
export  interface ExspenseProps{
    exspenses: ExspensesTSX

  }
export interface IncomeSum{
   sumIncomes?: number,
   sumExspenses?: number;
}
 export interface DataProps {
  setSomeAmount: React.Dispatch<React.SetStateAction<number>>,
  setType: React.Dispatch<React.SetStateAction<string>>,
  dataFunction: ()=> Promise<void>

 }