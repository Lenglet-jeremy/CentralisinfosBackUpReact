// src/contexts/ContentContext.jsx
import React, { createContext, useState } from 'react';

export const ContentContext = createContext();

export function ContentProvider({ children }) {
    const [content, setContent] = useState("");

    return (
        <ContentContext.Provider value={{ content, setContent }}>
            {children}
        </ContentContext.Provider>
    );
}
