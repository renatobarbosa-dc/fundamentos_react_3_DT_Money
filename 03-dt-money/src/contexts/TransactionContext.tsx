import { createContext } from "react";
import type { TransactionContextType } from "./TransactionsProvider";

export const TransactionsContext = createContext({} as TransactionContextType);
