import { PaletteRGB } from "../palette";
import { Swatch, SwatchRGB } from "../swatch";

/**
 * @internal
 */
export function neutralFillStealth(
    palette: PaletteRGB,
    reference: Swatch,
    restDelta: number,
    hoverDelta: number,
    activeDelta: number,
    focusDelta: number,
    selectedDelta: number,
    fillRestDelta: number,
    fillHoverDelta: number,
    fillActiveDelta: number,
    fillFocusDelta: number
): Record<"rest" | "hover" | "active" | "focus" | "selected", SwatchRGB> {
    const swapThreshold = Math.max(
        restDelta,
        hoverDelta,
        activeDelta,
        focusDelta,
        fillRestDelta,
        fillHoverDelta,
        fillActiveDelta,
        fillFocusDelta
    );

    const referenceIndex = palette.closestIndexOf(reference);
    const direction: 1 | -1 = referenceIndex >= swapThreshold ? -1 : 1;

    return {
        rest: palette.get(referenceIndex + direction * restDelta),
        hover: palette.get(referenceIndex + direction * hoverDelta),
        active: palette.get(referenceIndex + direction * activeDelta),
        focus: palette.get(referenceIndex + direction * focusDelta),
        selected: palette.get(referenceIndex + direction * selectedDelta),
    };
}