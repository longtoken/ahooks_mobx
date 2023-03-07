import { ReactNode } from "react"

export interface CommonCardProps  { 
  children?: ReactNode;
  getName: () => string;
}