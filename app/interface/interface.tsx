export  interface IncomeTSX {
    amount?: number,
    sourceOfIncome?: string,
    key?: any,
    idProps: string;
    userId?: string

  }
export  interface IncomeProps{
    income: IncomeTSX,
    idProps: string
  }
  export  interface ExspensesTSX {
    amount?: number,
    exspenses?: string,
    key?: any,
    idProps: string;
    userId?:string

  }
export  interface ExspenseProps{
    exspenses: ExspensesTSX
     idProps: string;

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
