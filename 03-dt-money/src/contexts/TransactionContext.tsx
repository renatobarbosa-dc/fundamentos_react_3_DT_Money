import { createContext } from "use-context-selector";
import type { TransactionContextType } from "./TransactionsProvider";

export const TransactionsContext = createContext({} as TransactionContextType);
