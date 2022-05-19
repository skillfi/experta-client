import {useMemo} from "react";

export const useSortedFacts = (facts, sort) => {
    const sortedFacts = useMemo(() => {
        if(sort) {
            return [...facts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return facts;
    }, [sort, facts])

    return sortedFacts;
}

export const useFacts = (facts, sort, query) => {
    const sortedFacts = useSortedFacts(facts, sort);

    const sortedAndSearchedFacts = useMemo(() => {
        return sortedFacts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedFacts])

    return sortedAndSearchedFacts;
}