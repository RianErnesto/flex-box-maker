"use client"

import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { useItem } from "@/contexts/ItemContext";

type FlexItemProps = {
    index: number
}

export default function FlexItem({ index }: FlexItemProps) {
    const { item } = useItem()
    const randomColor = useMemo(() => Math.floor(Math.random() * 16777215).toString(16), [])

    return (
        <div style={{
            backgroundColor: `#${randomColor}`,
            width: item.width,
            height: item.height,
            maxWidth: item.maxWidth,
            maxHeight: item.maxHeight
        }} className={cn("rounded-3xl border border-white flex justify-center items-center")}>
            <span className="w-8 h-8 flex justify-center items-center rounded-lg bg-black text-white text-2xl font-bold">
                {index}
            </span>
        </div>
    )
}