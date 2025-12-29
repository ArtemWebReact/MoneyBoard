'use client'
import { createContext } from "react"
interface MoneyContextType {
  sumIncome: number;
  setSumIncome: React.Dispatch<React.SetStateAction<number>>;
  sumExspense: number;
  setSumExspense: React.Dispatch<React.SetStateAction<number>>;
  visible2: number;
  setVisible2:React.Dispatch<React.SetStateAction<number>>;
}

export const MoneyContext = createContext<MoneyContextType | null>(null);

export default MoneyContext
