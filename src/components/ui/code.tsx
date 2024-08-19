import { FlexType } from "@/types/FlexType"
import { useItem } from "@/contexts/ItemContext"

type CodeProps = {

} & FlexType

export default function Code({
    alignContent,
    alignItems,
    columnGap,
    display,
    flexDirection,
    flexWrap,
    gap,
    justifyContent,
    rowGap
}: CodeProps) {
    const { item } = useItem()

    return (
        <div>
            <code className="block bg-gray-200 p-2 rounded-md">
                <span className="text-gray-600">.flex</span> {'{'}
                <br />
                <span className="text-gray-600 pl-8">display</span>: {display};<br />
                <span className="text-gray-600 pl-8">flex-direction</span>: {flexDirection};<br />
                <span className="text-gray-600 pl-8">flex-wrap</span>: {flexWrap};<br />
                <span className="text-gray-600 pl-8">justify-content</span>: {justifyContent};<br />
                <span className="text-gray-600 pl-8">align-items</span>: {alignItems};<br />
                {alignContent && <><span className="text-gray-600 pl-8">align-content</span>: {alignContent};<br /></>}
                <span className="text-gray-600 pl-8">gap</span>: {gap}px;<br />
                {rowGap && <><span className="text-gray-600 pl-8">row-gap</span>: {rowGap};<br /></>}
                {columnGap && <><span className="text-gray-600 pl-8">column-gap</span>: {columnGap};<br /></>}
                {'}'}
                < br/>
                < br/>
                <span className="text-gray-600">.item</span> {'{'}
                <br />
                <span className="text-gray-600 pl-8">width</span>: {item.width};<br />
                <span className="text-gray-600 pl-8">height</span>: {item.height};<br />
                <span className="text-gray-600 pl-8">max-width</span>: {item.maxWidth};<br />
                <span className="text-gray-600 pl-8">max-height</span>: {item.maxHeight};<br />
                {'}'}
            </code>
        </div>
    )
}