import React, { useContext, useState } from "react";

type SettingsContextType = {
    isMultiplyOn: boolean;
    setIsMultiplyOn: React.Dispatch<React.SetStateAction<boolean>>;
    multiplyMaxValue: number;
    setMultiplyMaxValue: React.Dispatch<React.SetStateAction<number>>;

    isAddOn: boolean;
    setIsAddOn: React.Dispatch<React.SetStateAction<boolean>>;
    addMaxValue: number;
    setAddMaxValue: React.Dispatch<React.SetStateAction<number>>;

    isMinusOn: boolean;
    setIsMinusOn: React.Dispatch<React.SetStateAction<boolean>>;
    minusMaxValue: number;
    setMinusMaxValue: React.Dispatch<React.SetStateAction<number>>;

    isDivideOn: boolean;
    setIsDivideOn: React.Dispatch<React.SetStateAction<boolean>>;
    divideMaxValue: number;
    setDivideMaxValue: React.Dispatch<React.SetStateAction<number>>;
};

export const SettingsContext = React.createContext<SettingsContextType | null>(
    null
);

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (context === null) {
        throw new Error("useSettings must be used within a SettingsProvider");
    }
    return context;
};

export function SettingsProvider({ children }: { children: React.ReactNode }) {
    console.log("SettingsProvider Rerender");

    const [isMultiplyOn, setIsMultiplyOn] = useState(true);
    const [multiplyMaxValue, setMultiplyMaxValue] = useState(100);

    const [isAddOn, setIsAddOn] = useState(true);
    const [addMaxValue, setAddMaxValue] = useState(100);

    const [isMinusOn, setIsMinusOn] = useState(true);
    const [minusMaxValue, setMinusMaxValue] = useState(100);

    const [isDivideOn, setIsDivideOn] = useState(true);
    const [divideMaxValue, setDivideMaxValue] = useState(100);

    const settingsValues = {
        isMultiplyOn,
        setIsMultiplyOn,
        multiplyMaxValue,
        setMultiplyMaxValue,
        isAddOn,
        setIsAddOn,
        addMaxValue,
        setAddMaxValue,
        isMinusOn,
        setIsMinusOn,
        minusMaxValue,
        setMinusMaxValue,
        isDivideOn,
        setIsDivideOn,
        divideMaxValue,
        setDivideMaxValue,
    };

    return (
        <SettingsContext.Provider value={settingsValues}>
            {children}
        </SettingsContext.Provider>
    );
}
