export type DisplayType = "flex" | "inline-flex"
export type FlexDirectionType = "row" | "column" | "column-reverse" | "row-reverse"
export type FlexWrapType = "wrap" | "nowrap" | "wrap-reverse"
export type JustifyContentType = "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly"
export type AlignItemsType = "center" | "flex-start" | "flex-end" | "stretch" | "baseline"
export type AlignContentType = "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "stretch"

export type FlexType = {
    display?: DisplayType
    flexDirection?: FlexDirectionType
    flexWrap?: FlexWrapType
    justifyContent?: JustifyContentType
    alignItems?: AlignItemsType
    alignContent?: AlignContentType
    gap?: number
    rowGap?: number
    columnGap?: number
}