/* eslint-disable react/jsx-no-comment-textnodes */
"use client"

import FlexParent from "@/components/ui/flex-box";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlignContentType, AlignItemsType, FlexDirectionType, FlexType, FlexWrapType, JustifyContentType } from "@/types/FlexType";
import { DisplayType } from "@/types/FlexType";
import { useState } from "react";
import { useItem } from "@/contexts/ItemContext";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FlexCode from "@/components/ui/code"
import { FaRegQuestionCircle } from "react-icons/fa";

export default function Home() {
  const { item, setItem } = useItem()
  const [quantityItems, setQuantityItems] = useState(4)
  const [flex, setFlex] = useState<FlexType>({
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    gap: 0,
  })

  function handleDisplayChange(display: DisplayType) {
    setFlex((prev) => ({ ...prev, display }));
  }

  function handleJustifyContentChange(justifyContent: JustifyContentType) {
    setFlex((prev) => ({ ...prev, justifyContent }));
  }

  function handleGapChange(newGap: string) {
    const gap = parseInt(newGap);
    setFlex((prev) => ({ ...prev, gap }));
  }

  function handleRowGapChange(newRowGap: string) {
    const rowGap = parseInt(newRowGap);
    setFlex((prev) => ({ ...prev, rowGap }));
  }

  function handleColumnGapChange(newColumnGap: string) {
    const columnGap = parseInt(newColumnGap);
    setFlex((prev) => ({ ...prev, columnGap }));
  }

  function handleFlexDirectionChange(flexDirection: FlexDirectionType) {
    setFlex((prev) => ({ ...prev, flexDirection }));
  }

  function handleFlexWrapChange(flexWrap: FlexWrapType) {
    setFlex((prev) => ({ ...prev, flexWrap }));
  }

  function handleAlignItemsChange(alignItems: AlignItemsType) {
    setFlex((prev) => ({ ...prev, alignItems }));
  }

  function handleAlignContentChange(alignContent: AlignContentType) {
    setFlex((prev) => ({ ...prev, alignContent }));
  }

  function handleItemWidthChange(itemWidth: number) {
    setItem((prev) => ({ ...prev, width: `${itemWidth}px` }));
  }

  function handleItemWidthPercentageChange(itemWidthPercentage: number) {
    console.log(itemWidthPercentage)
    setItem((prev) => ({ ...prev, width: `${itemWidthPercentage}%` }));
  }

  function handleItemHeightChange(itemHeight: number) {
    setItem((prev) => ({ ...prev, height: `${itemHeight}px` }));
  }

  function handleItemHeightPercentageChange(itemHeightPercentage: number) {
    setItem((prev) => ({ ...prev, height: `${itemHeightPercentage}%` }));
  }

  function handleItemMaxWidthChange(itemMaxWidth: number) {
    setItem((prev) => ({ ...prev, maxWidth: `${itemMaxWidth}px` }));
  }

  function handleItemMaxHeightChange(itemMaxHeight: number) {
    setItem((prev) => ({ ...prev, maxHeight: `${itemMaxHeight}px` }));
  }

  function handleQuantityItemsChange(newQuantityItems: string) {
    const quantityItems = parseInt(newQuantityItems);
    setQuantityItems(quantityItems);
  }

  return (
    <div className="min-h-screen w-full flex flex-col gap-12 bg-black">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 items-start justify-center">
          <span className="text-xl text-white font-bold">
            Container
          </span>
          <div className="flex gap-2 flex-wrap justify-start">
            <Select defaultValue={flex.display} onValueChange={handleDisplayChange} label={
              <div className="flex justify-start items-center gap-1">
                <span>Display</span>
                <Dialog>
                  <DialogTrigger>
                    <FaRegQuestionCircle size={16} />
                  </DialogTrigger>
                  <DialogContent>
                    <p>
                      This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.
                    </p>
                    <code className="block bg-gray-200 p-2 rounded-md">
                      <span className="text-gray-600">.container</span> {'{'}
                      <br />
                      <span className="text-gray-600 pl-8">display</span>: flex; <i className="opacity-50">/* or inline-flex */</i><br />
                      {'}'}
                    </code>
                  </DialogContent>
                </Dialog>
              </div>
            }>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione um display" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flex">flex</SelectItem>
                <SelectItem value="inline-flex">inline-flex</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue={flex.justifyContent} label={
              <div className="flex justify-start items-center gap-1">
                <span>Justify Content</span>
                <Dialog>
                  <DialogTrigger>
                    <FaRegQuestionCircle size={16} />
                  </DialogTrigger>
                  <DialogContent>
                    <p>
                      This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size.
                    </p>
                    <code className="block bg-gray-200 p-2 rounded-md">
                      <span className="text-gray-600">.container</span> {'{'}
                      <br />
                      <span className="text-gray-600 pl-8">justify-content</span>: center; <i className="opacity-50">/* or flex-start | flex-end | space-between | space-around | space-evenly */</i><br />
                      {'}'}
                    </code>
                  </DialogContent>
                </Dialog>
              </div>
            } onValueChange={handleJustifyContentChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione um justify-content" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="center">center</SelectItem>
                <SelectItem value="flex-start">flex-start</SelectItem>
                <SelectItem value="flex-end">flex-end</SelectItem>
                <SelectItem value="space-between">space-between</SelectItem>
                <SelectItem value="space-around">space-around</SelectItem>
                <SelectItem value="space-evenly">space-evenly</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue={flex.flexDirection} label={
              <div className="flex justify-start items-center gap-1">
                <span>Flex Direction</span>
                <Dialog>
                  <DialogTrigger>
                    <FaRegQuestionCircle size={16} />
                  </DialogTrigger>
                  <DialogContent>
                    <p>
                      This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.
                    </p>
                    <code className="block bg-gray-200 p-2 rounded-md">
                      <span className="text-gray-600">.container</span> {'{'}
                      <br />
                      <span className="text-gray-600 pl-8">flex-direction</span>: row; <i className="opacity-50">/* or row-reverse | column | column-reverse */</i><br />
                      {'}'}
                    </code>
                  </DialogContent>
                </Dialog>
              </div>
            } onValueChange={handleFlexDirectionChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione um flex-direction" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="row">row</SelectItem>
                <SelectItem value="column">column</SelectItem>
                <SelectItem value="column-reverse">column-reverse</SelectItem>
                <SelectItem value="row-reverse">row-reverse</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue={flex.flexWrap} label={
              <div className="flex justify-start items-center gap-1">
                <span>Flex Wrap</span>
                <Dialog>
                  <DialogTrigger>
                    <FaRegQuestionCircle size={16} />
                  </DialogTrigger>
                  <DialogContent>
                    <p>
                      By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.
                    </p>
                    <code className="block bg-gray-200 p-2 rounded-md">
                      <span className="text-gray-600">.container</span> {'{'}
                      <br />
                      <span className="text-gray-600 pl-8">flex-wrap</span>: nowrap; <i className="opacity-50">/* or wrap | wrap-reverse */</i><br />
                      {'}'}
                    </code>
                  </DialogContent>
                </Dialog>
              </div>
            } onValueChange={handleFlexWrapChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione um flex-wrap" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wrap">wrap</SelectItem>
                <SelectItem value="nowrap">nowrap</SelectItem>
                <SelectItem value="wrap-reverse">wrap-reverse</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue={flex.alignItems} label={
              <div className="flex justify-start items-center gap-1">
                <span>Align Items</span>
                <Dialog>
                  <DialogTrigger>
                    <FaRegQuestionCircle size={16} />
                  </DialogTrigger>
                  <DialogContent>
                    <p>
                      This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).
                    </p>
                    <code className="block bg-gray-200 p-2 rounded-md">
                      <span className="text-gray-600">.container</span> {'{'}
                      <br />
                      <span className="text-gray-600 pl-8">align-items</span>: center; <i className="opacity-50">/* or flex-start | flex-end | stretch | baseline */</i><br />
                      {'}'}
                    </code>
                  </DialogContent>
                </Dialog>
              </div>
            } onValueChange={handleAlignItemsChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione um align-items" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="center">center</SelectItem>
                <SelectItem value="flex-start">flex-start</SelectItem>
                <SelectItem value="flex-end">flex-end</SelectItem>
                <SelectItem value="stretch">stretch</SelectItem>
                <SelectItem value="baseline">baseline</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue={flex.alignContent} label={
              <div className="flex justify-start items-center gap-1">
                <span>Align Content</span>
                <Dialog>
                  <DialogTrigger>
                    <FaRegQuestionCircle size={16} />
                  </DialogTrigger>
                  <DialogContent>
                    <p>
                      This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.
                    </p>
                    <code className="block bg-gray-200 p-2 rounded-md">
                      <span className="text-gray-600">.container</span> {'{'}
                      <br />
                      <span className="text-gray-600 pl-8">align-content</span>: center; <i className="opacity-50">/* or flex-start | flex-end | space-between | space-around | stretch */</i><br />
                      {'}'}
                    </code>
                  </DialogContent>
                </Dialog>
              </div>
            } onValueChange={handleAlignContentChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione um align-content" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="center">center</SelectItem>
                <SelectItem value="flex-start">flex-start</SelectItem>
                <SelectItem value="flex-end">flex-end</SelectItem>
                <SelectItem value="space-between">space-between</SelectItem>
                <SelectItem value="space-around">space-around</SelectItem>
                <SelectItem value="stretch">stretch</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="number"
              value={flex.rowGap}
              label={
                <div className="flex justify-start items-center gap-1">
                  <span>Row Gap</span>
                  <Dialog>
                    <DialogTrigger>
                      <FaRegQuestionCircle size={16} />
                    </DialogTrigger>
                    <DialogContent>
                      <p>
                        This defines the space between the rows in a grid layout.
                      </p>
                      <code className="block bg-gray-200 p-2 rounded-md">
                        <span className="text-gray-600">.container</span> {'{'}
                        <br />
                        <span className="text-gray-600 pl-8">row-gap</span>: 10px;<br />
                        {'}'}
                      </code>
                    </DialogContent>
                  </Dialog>
                </div>
              }
              placeholder="Selecione o row-gap"
              min={0}
              onChange={(e) => handleRowGapChange(e.target.value)}
            />
            <Input
              type="number"
              value={flex.columnGap}
              label={
                <div className="flex justify-start items-center gap-1">
                  <span>Column Gap</span>
                  <Dialog>
                    <DialogTrigger>
                      <FaRegQuestionCircle size={16} />
                    </DialogTrigger>
                    <DialogContent>
                      <p>
                        This defines the space between the columns in a grid layout.
                      </p>
                      <code className="block bg-gray-200 p-2 rounded-md">
                        <span className="text-gray-600">.container</span> {'{'}
                        <br />
                        <span className="text-gray-600 pl-8">column-gap</span>: 10px;<br />
                        {'}'}
                      </code>
                    </DialogContent>
                  </Dialog>
                </div>
              }
              placeholder="Selecione o column-gap"
              min={0}
              onChange={(e) => handleColumnGapChange(e.target.value)}
            />
            <Input
              type="number"
              value={flex.gap}
              label={
                <div className="flex justify-start items-center gap-1">
                  <span>Gap</span>
                  <Dialog>
                    <DialogTrigger>
                      <FaRegQuestionCircle size={16} />
                    </DialogTrigger>
                    <DialogContent>
                      <p>
                        This defines the space between the flex items.
                      </p>
                      <code className="block bg-gray-200 p-2 rounded-md">
                        <span className="text-gray-600">.container</span> {'{'}
                        <br />
                        <span className="text-gray-600 pl-8">gap</span>: 10px;<br />
                        {'}'}
                      </code>
                    </DialogContent>
                  </Dialog>
                </div>
              }
              placeholder="Selecione o gap"
              min={0}
              onChange={(e) => handleGapChange(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start justify-center">
          <span className="text-xl text-white font-bold">
            Items
          </span>
          <div className="flex gap-2 flex-wrap justify-start items-start">
            <Input
              type="number"
              value={quantityItems}
              label="Quantity Items"
              placeholder="Selecione a quantidade de items"
              min={0}
              onChange={(e) => handleQuantityItemsChange(e.target.value)}
            />
            <div className="flex flex-col gap-4">
              <Input
                type="number"
                label="Width (px)"
                placeholder="Selecione a largura"
                defaultValue={Number(item.width.replace("px", ""))}
                min={0}
                onChange={(e) => handleItemWidthChange(parseInt(e.target.value))}
              />
              <div className="space-y-1">
                <span className="text-white font-medium text-sm text-center">Width Percentage</span>
                <Slider
                  defaultValue={[50]}
                  onValueChange={(values) => handleItemWidthPercentageChange(values[0])}
                  min={0}
                  max={100}
                />
                <span className="text-white font-extralight text-sm text-center">
                  {item.width}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Input
                type="number"
                label="Height (px)"
                placeholder="Height (px)"
                defaultValue={Number(item.height.replace("px", ""))}
                min={0}
                onChange={(e) => handleItemHeightChange(parseInt(e.target.value))}
              />
              <div className="space-y-1">
                <span className="text-white font-medium text-sm text-center">Height Percentage</span>
                <Slider
                  defaultValue={[50]}
                  onValueChange={(values) => handleItemHeightPercentageChange(values[0])}
                  min={0}
                  max={100}
                />
                <span className="text-white font-extralight text-sm text-center">
                  {item.height}
                </span>
              </div>
            </div>
            <Input
              type="number"
              label="Max Width (px)"
              placeholder="Selecione a largura máxima"
              defaultValue={Number(item.maxWidth.replace("px", ""))}
              min={0}
              onChange={(e) => handleItemMaxWidthChange(parseInt(e.target.value))}
            />
            <Input
              type="number"
              label="Max Height (px)"
              placeholder="Selecione a altura máxima"
              defaultValue={Number(item.maxHeight.replace("px", ""))}
              min={0}
              onChange={(e) => handleItemMaxHeightChange(parseInt(e.target.value))}
            />
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              Gerar código
            </Button>
          </DialogTrigger>
          <DialogContent>
            <FlexCode {...flex} />
          </DialogContent>
        </Dialog>
      </div>
      <FlexParent quantityItems={quantityItems} {...flex} />
    </div>
  );
}
