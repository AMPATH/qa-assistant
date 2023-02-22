import React from "react";

export interface AppContextType {
    patients: [];
    searchPatient: (query: string) => Promise<void>;
}

export const AppContext = React.createContext<AppContextType>({
    patients: [],
    searchPatient: async (query: string) => {}
})