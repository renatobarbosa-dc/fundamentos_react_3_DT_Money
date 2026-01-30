import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
    return(
        <SearchFormContainer>
            <input type="text" placeholder="Busque uma transação..."/>

            <button type="button">
                <MagnifyingGlass size={20}/>
            </button>
        </SearchFormContainer>
    )
}