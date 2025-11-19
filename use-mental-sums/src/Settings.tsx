import React from "react";
import { Card } from "@chakra-ui/react";
import { useSettings } from "./settings/useSettings";
import SettingsToggleField from "./settings/SettingsToggleField";

function Settings() {
    const settings = useSettings();
    console.log("Settings Rerender")
    return (
        <>
            <SettingsToggleField
                label="Enable Addition"
                toggleFlag={settings.isAddOn}
                setToggleFlag={settings.setIsAddOn}
                toggleValue={settings.addMaxValue}
                setToggleValue={settings.setAddMaxValue}
            />

            <SettingsToggleField
                label="Enable Subtraction"
                toggleFlag={settings.isMinusOn}
                setToggleFlag={settings.setIsMinusOn}
                toggleValue={settings.minusMaxValue}
                setToggleValue={settings.setMinusMaxValue}
            />

            <SettingsToggleField
                label="Enable Multiplication"
                toggleFlag={settings.isMultiplyOn}
                setToggleFlag={settings.setIsMultiplyOn}
                toggleValue={settings.multiplyMaxValue}
                setToggleValue={settings.setMultiplyMaxValue}
            />

            <SettingsToggleField
                label="Enable Division"
                toggleFlag={settings.isDivideOn}
                setToggleFlag={settings.setIsDivideOn}
                toggleValue={settings.divideMaxValue}
                setToggleValue={settings.setDivideMaxValue}
            />

            <Card.Root>
                <Card.Header>Settings</Card.Header>
                <Card.Body>{JSON.stringify(settings)}</Card.Body>
            </Card.Root>
        </>
    );
}

export default Settings;
