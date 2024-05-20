"use client";

import ColorPicker from "@/components/ColorPicker/ColorPicker";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { formatHex } from "@/lib/colors/colorFormat";
import { Theme } from "@/lib/colors/themes";
import { HslaColor } from "react-colorful";

type ThemePopoverProps = {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
};

export default function ColorPickers({ currentTheme, setTheme }: ThemePopoverProps) {
  const lightColors = currentTheme.colors.light;
  const darkColors = currentTheme.colors.dark;

  const onLightPickerChange = (color: string, value: HslaColor) => {
    setTheme({
      ...currentTheme,
      colors: {
        ...currentTheme.colors,
        light: {
          ...lightColors,
          [color]: value,
        },
      },
    });
  };

  return (
    <ScrollArea className="h-full">
      <div className="p-4 w-64">
          <LabeledPicker color="background" colorValue={{ ...lightColors.background, a: 1 }} onChange={onLightPickerChange} />
          <LabeledPicker color="foreground" colorValue={{ ...lightColors.foreground, a: 1 }} onChange={onLightPickerChange} />
          <Separator className="my-4" />
          <LabeledPicker color="card" colorValue={{ ...lightColors.card, a: 1 }} onChange={onLightPickerChange} />
          <LabeledPicker color="cardForeground" colorValue={{ ...lightColors.cardForeground, a: 1 }} onChange={onLightPickerChange} />
          <Separator className="my-4" />
          <LabeledPicker color="popover" colorValue={{ ...lightColors.popover, a: 1 }} onChange={onLightPickerChange} />
          <LabeledPicker color="popoverForeground" colorValue={{ ...lightColors.popoverForeground, a: 1 }} onChange={onLightPickerChange} />
          <Separator className="my-4" />
          <LabeledPicker color="primary" colorValue={{ ...lightColors.primary, a: 1 }} onChange={onLightPickerChange} />
          <LabeledPicker color="primaryForeground" colorValue={{ ...lightColors.primaryForeground, a: 1 }} onChange={onLightPickerChange} />
          <Separator className="my-4" />
          <LabeledPicker color="secondary" colorValue={{ ...lightColors.secondary, a: 1 }} onChange={onLightPickerChange} />
          <LabeledPicker color="secondaryForeground" colorValue={{ ...lightColors.secondaryForeground, a: 1 }} onChange={onLightPickerChange} />
          <Separator className="my-4" />
          <LabeledPicker color="muted" colorValue={{ ...lightColors.muted, a: 1 }} onChange={onLightPickerChange} />
          <LabeledPicker color="mutedForeground" colorValue={{ ...lightColors.mutedForeground, a: 1 }} onChange={onLightPickerChange} />
          <Separator className="my-4" />
          <LabeledPicker color="accent" colorValue={{ ...lightColors.accent, a: 1 }} onChange={onLightPickerChange} />
          <LabeledPicker color="accentForeground" colorValue={{ ...lightColors.accentForeground, a: 1 }} onChange={onLightPickerChange} />
          <Separator className="my-4" />
          <LabeledPicker color="destructive" colorValue={{ ...lightColors.destructive, a: 1 }} onChange={onLightPickerChange} />
          <LabeledPicker color="destructiveForeground" colorValue={{ ...lightColors.destructiveForeground, a: 1 }} onChange={onLightPickerChange} />
          <Separator className="my-4" />
          <LabeledPicker color="border" colorValue={{ ...lightColors.border, a: 1 }} onChange={onLightPickerChange} />
          <LabeledPicker color="input" colorValue={{ ...lightColors.input, a: 1 }} onChange={onLightPickerChange} />
          <LabeledPicker color="ring" colorValue={{ ...lightColors.ring, a: 1 }} onChange={onLightPickerChange} />
      </div>
    </ScrollArea>
  );
}

const LabeledPicker = ({
  color,
  colorValue,
  onChange,
}: {
  color: string;
  colorValue: HslaColor;
  onChange: (color: string, value: HslaColor) => void;
}) => {
  return (
    <div className="my-1.5">
      <span className="capitalize block mb-2 text-sm">{color}</span>
      <ColorPicker color={{ ...colorValue, a: 1 }} onChange={(val: HslaColor) => onChange(color, val)}>
        <Button variant="outline" className="w-full flex items-center justify-start">
          <div className="size-4 rounded-full border mr-2" style={{ backgroundColor: formatHex({ ...colorValue, a: 1 }) }}></div>
          {formatHex({ ...colorValue, a: 1 })}
        </Button>
      </ColorPicker>
    </div>
  );
};
