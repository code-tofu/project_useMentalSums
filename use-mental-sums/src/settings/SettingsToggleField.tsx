import React from "react";
import { Switch, HStack, NumberInput } from "@chakra-ui/react";

type ToggleProps = {
    label: string;
    toggleFlag: boolean;
    setToggleFlag: React.Dispatch<React.SetStateAction<boolean>>;
    toggleValue: number;
    setToggleValue: React.Dispatch<React.SetStateAction<number>>;
};

const SettingsToggleField: React.FC<ToggleProps> = (props: ToggleProps) => {
    console.log(props.label + ":" + props.toggleFlag);
    return (
        <HStack align="center">
            <Switch.Root
                checked={props.toggleFlag}
                onCheckedChange={(e) => props.setToggleFlag(e.checked)}
            >
                <Switch.HiddenInput />
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
                <Switch.Label>{props.label}</Switch.Label>
            </Switch.Root>
            <NumberInput.Root
                value={props.toggleValue.toString()}
                onValueChange={(e) => props.setToggleValue(parseInt(e.value))}
            >
                <NumberInput.Control>
                    <NumberInput.IncrementTrigger />
                    <NumberInput.DecrementTrigger />
                </NumberInput.Control>
                <NumberInput.Scrubber />
                <NumberInput.Input />
            </NumberInput.Root>
            '
        </HStack>
    );
};

export default SettingsToggleField;
