import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./Components/SearchForm";
import { TransactionsTable, TransactionsContainer, PriceHighlight } from "./styles";

export function Transactions() {
    return(
        <div>
            <Header />
            <Summary/>

            <TransactionsContainer>
                <SearchForm/>
                
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width='40%'>Desenvolvimento de Site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>29/01/2026</td>
                        </tr>
                        <tr>
                            <td>Violão</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    -R$ 2.000,00
                                </PriceHighlight>
                            </td>
                            <td>Lazer</td>
                            <td>29/01/2026</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}