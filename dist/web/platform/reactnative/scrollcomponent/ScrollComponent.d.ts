/// <reference types="react" />
import BaseScrollComponent, { ScrollComponentProps } from "../../../core/scrollcomponent/BaseScrollComponent";
/***
 * The responsibility of a scroll component is to report its size, scroll events and provide a way to scroll to a given offset.
 * RecyclerListView works on top of this interface and doesn't care about the implementation. To support web we only had to provide
 * another component written on top of web elements
 */
export default class ScrollComponent extends BaseScrollComponent {
    static defaultProps: {
        contentHeight: number;
        contentWidth: number;
        externalScrollView: {};
        isHorizontal: boolean;
        scrollThrottle: number;
    };
    private static _defaultContainer;
    private _height;
    private _width;
    private _offset;
    private _isSizeChangedCalledOnce;
    private _scrollViewRef;
    private _dimensionsChangeSubscription;
    constructor(args: ScrollComponentProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    scrollTo(x: number, y: number, isAnimated: boolean): void;
    getScrollableNode(): number | null;
    render(): JSX.Element;
    private _getScrollViewRef;
    private _onScroll;
    private _onLayout;
}
