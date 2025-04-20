import { createContext, useContext, useState } from "react";

const SearchContext = createContext()

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    return (
        <SearchContext.Provider
            value={{ searchTerm, setSearchTerm, results, setResults }}
        >
            {children}
        </SearchContext.Provider>
    );
}