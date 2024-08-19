import FlexItem from "./flex-card";
import { FlexType } from "@/types/FlexType";

type FlexParentProps = {
    quantityItems?: number,
} & FlexType

export default function FlexParent({
    quantityItems = 1,
    display = "flex",
    flexDirection = "row",
    flexWrap = "nowrap",
    justifyContent = "flex-start",
    alignItems = "stretch",
    alignContent,
    rowGap,
    columnGap,
    gap
}
    : FlexParentProps) {
    return (
        <div style={{
            display,
            flexDirection,
            flexWrap,
            justifyContent,
            alignItems,
            alignContent,
            gap: `${gap}px`,
            rowGap: `${rowGap}px`,
            columnGap: `${columnGap}px`
        }}
            className="flex w-full"
        >
            {Array.from({ length: quantityItems }).map((_, index) => (
                <FlexItem key={index} index={index} />
            ))}
        </div>
    )
}