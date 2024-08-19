"use client"

import { useContext, createContext, ReactNode, useState, SetStateAction } from "react";
import { FlexItemType } from "@/types/FlexItemType";

type ItemContextType = {
  item: FlexItemType;
  setItem: (item: SetStateAction<FlexItemType>) => void;
};

const ItemContext = createContext<ItemContextType | undefined>(undefined);

type ItemProviderProps = {
  children: ReactNode;
};

export function ItemProvider({ children }: ItemProviderProps) {
  const [item, setItem] = useState<FlexItemType>({
    width: "100px",
    height: "100px",
    maxWidth: "auto",
    maxHeight: "auto",
  });

  return (
    <ItemContext.Provider value={{ item, setItem }}>
      {children}
    </ItemContext.Provider>
  );
}

export function useItem() {
  const context = useContext(ItemContext);
  if (context === undefined) {
    throw new Error("useItem must be used within a ItemProvider");
  }
  return context;
}