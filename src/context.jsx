import { createContext, useContext, useEffect } from "react";
import { getCurrentUser, logout as apiLogout } from "./db/apiAuth";
import useFetch from "./hooks/use-fetch";

const UrlContext = createContext();

const UrlProvider = ({ children }) => {
    const { data: user, loading, fn: fetchUser } = useFetch(getCurrentUser);

    const isAuthenticated = !!user;

    useEffect(() => {
        fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const signOut = async () => {
        try {
            await apiLogout();
        } finally {
            // refresh user state
            fetchUser();
        }
    };

    return (
        <UrlContext.Provider value={{ user, fetchUser, loading, isAuthenticated, signOut }}>
            {children}
        </UrlContext.Provider>
    );
};

export const UrlState = () => {
    return useContext(UrlContext);
};

export default UrlProvider;