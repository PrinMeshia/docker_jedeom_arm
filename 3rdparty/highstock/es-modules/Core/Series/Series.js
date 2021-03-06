/* *
 *
 *  (c) 2010-2020 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
import H from '../Globals.js';
import LegendSymbolMixin from '../../Mixins/LegendSymbol.js';
import O from '../Options.js';
var defaultOptions = O.defaultOptions;
import Point from './Point.js';
import SVGElement from '../Renderer/SVG/SVGElement.js';
import U from '../Utilities.js';
var addEvent = U.addEvent, animObject = U.animObject, arrayMax = U.arrayMax, arrayMin = U.arrayMin, clamp = U.clamp, correctFloat = U.correctFloat, defined = U.defined, erase = U.erase, error = U.error, extend = U.extend, find = U.find, fireEvent = U.fireEvent, getNestedProperty = U.getNestedProperty, isArray = U.isArray, isFunction = U.isFunction, isNumber = U.isNumber, isString = U.isString, merge = U.merge, objectEach = U.objectEach, pick = U.pick, removeEvent = U.removeEvent, seriesType = U.seriesType, splat = U.splat, syncTimeout = U.syncTimeout;
/**
 * This is a placeholder type of the possible series options for
 * [Highcharts](../highcharts/series), [Highstock](../highstock/series),
 * [Highmaps](../highmaps/series), and [Gantt](../gantt/series).
 *
 * In TypeScript is this dynamically generated to reference all possible types
 * of series options.
 *
 * @ignore-declaration
 * @typedef {Highcharts.SeriesOptions|Highcharts.Dictionary<*>} Highcharts.SeriesOptionsType
 */
/**
 * Options for `dataSorting`.
 *
 * @interface Highcharts.DataSortingOptionsObject
 * @since 8.0.0
 */ /**
* Enable or disable data sorting for the series.
* @name Highcharts.DataSortingOptionsObject#enabled
* @type {boolean|undefined}
*/ /**
* Whether to allow matching points by name in an update.
* @name Highcharts.DataSortingOptionsObject#matchByName
* @type {boolean|undefined}
*/ /**
* Determines what data value should be used to sort by.
* @name Highcharts.DataSortingOptionsObject#sortKey
* @type {string|undefined}
*/
/**
 * Function callback when a series has been animated.
 *
 * @callback Highcharts.SeriesAfterAnimateCallbackFunction
 *
 * @param {Highcharts.Series} this
 *        The series where the event occured.
 *
 * @param {Highcharts.SeriesAfterAnimateEventObject} event
 *        Event arguments.
 */
/**
 * Event information regarding completed animation of a series.
 *
 * @interface Highcharts.SeriesAfterAnimateEventObject
 */ /**
* Animated series.
* @name Highcharts.SeriesAfterAnimateEventObject#target
* @type {Highcharts.Series}
*/ /**
* Event type.
* @name Highcharts.SeriesAfterAnimateEventObject#type
* @type {"afterAnimate"}
*/
/**
 * Function callback when the checkbox next to the series' name in the legend is
 * clicked.
 *
 * @callback Highcharts.SeriesCheckboxClickCallbackFunction
 *
 * @param {Highcharts.Series} this
 *        The series where the event occured.
 *
 * @param {Highcharts.SeriesCheckboxClickEventObject} event
 *        Event arguments.
 */
/**
 * Event information regarding check of a series box.
 *
 * @interface Highcharts.SeriesCheckboxClickEventObject
 */ /**
* Whether the box has been checked.
* @name Highcharts.SeriesCheckboxClickEventObject#checked
* @type {boolean}
*/ /**
* Related series.
* @name Highcharts.SeriesCheckboxClickEventObject#item
* @type {Highcharts.Series}
*/ /**
* Related series.
* @name Highcharts.SeriesCheckboxClickEventObject#target
* @type {Highcharts.Series}
*/ /**
* Event type.
* @name Highcharts.SeriesCheckboxClickEventObject#type
* @type {"checkboxClick"}
*/
/**
 * Function callback when a series is clicked. Return false to cancel toogle
 * actions.
 *
 * @callback Highcharts.SeriesClickCallbackFunction
 *
 * @param {Highcharts.Series} this
 *        The series where the event occured.
 *
 * @param {Highcharts.SeriesClickEventObject} event
 *        Event arguments.
 */
/**
 * Common information for a click event on a series.
 *
 * @interface Highcharts.SeriesClickEventObject
 * @extends global.Event
 */ /**
* Nearest point on the graph.
* @name Highcharts.SeriesClickEventObject#point
* @type {Highcharts.Point}
*/
/**
 * Gets fired when the series is hidden after chart generation time, either by
 * clicking the legend item or by calling `.hide()`.
 *
 * @callback Highcharts.SeriesHideCallbackFunction
 *
 * @param {Highcharts.Series} this
 *        The series where the event occured.
 *
 * @param {global.Event} event
 *        The event that occured.
 */
/**
 * The SVG value used for the `stroke-linecap` and `stroke-linejoin` of a line
 * graph.
 *
 * @typedef {"butt"|"round"|"square"|string} Highcharts.SeriesLinecapValue
 */
/**
 * Gets fired when the legend item belonging to the series is clicked. The
 * default action is to toggle the visibility of the series. This can be
 * prevented by returning `false` or calling `event.preventDefault()`.
 *
 * @callback Highcharts.SeriesLegendItemClickCallbackFunction
 *
 * @param {Highcharts.Series} this
 *        The series where the event occured.
 *
 * @param {Highcharts.SeriesLegendItemClickEventObject} event
 *        The event that occured.
 */
/**
 * Information about the event.
 *
 * @interface Highcharts.SeriesLegendItemClickEventObject
 */ /**
* Related browser event.
* @name Highcharts.SeriesLegendItemClickEventObject#browserEvent
* @type {global.PointerEvent}
*/ /**
* Prevent the default action of toggle the visibility of the series.
* @name Highcharts.SeriesLegendItemClickEventObject#preventDefault
* @type {Function}
*/ /**
* Related series.
* @name Highcharts.SeriesCheckboxClickEventObject#target
* @type {Highcharts.Series}
*/ /**
* Event type.
* @name Highcharts.SeriesCheckboxClickEventObject#type
* @type {"checkboxClick"}
*/
/**
 * Gets fired when the mouse leaves the graph.
 *
 * @callback Highcharts.SeriesMouseOutCallbackFunction
 *
 * @param {Highcharts.Series} this
 *        Series where the event occured.
 *
 * @param {global.PointerEvent} event
 *        Event that occured.
 */
/**
 * Gets fired when the mouse enters the graph.
 *
 * @callback Highcharts.SeriesMouseOverCallbackFunction
 *
 * @param {Highcharts.Series} this
 *        Series where the event occured.
 *
 * @param {global.PointerEvent} event
 *        Event that occured.
 */
/**
 * Translation and scale for the plot area of a series.
 *
 * @interface Highcharts.SeriesPlotBoxObject
 */ /**
* @name Highcharts.SeriesPlotBoxObject#scaleX
* @type {number}
*/ /**
* @name Highcharts.SeriesPlotBoxObject#scaleY
* @type {number}
*/ /**
* @name Highcharts.SeriesPlotBoxObject#translateX
* @type {number}
*/ /**
* @name Highcharts.SeriesPlotBoxObject#translateY
* @type {number}
*/
/**
 * Gets fired when the series is shown after chart generation time, either by
 * clicking the legend item or by calling `.show()`.
 *
 * @callback Highcharts.SeriesShowCallbackFunction
 *
 * @param {Highcharts.Series} this
 *        Series where the event occured.
 *
 * @param {global.Event} event
 *        Event that occured.
 */
/**
 * Possible key values for the series state options.
 *
 * @typedef {"hover"|"inactive"|"normal"|"select"} Highcharts.SeriesStateValue
 */
''; // detach doclets above
var seriesTypes = H.seriesTypes, win = H.win;
/**
 * This is the base series prototype that all other series types inherit from.
 * A new series is initialized either through the
 * [series](https://api.highcharts.com/highcharts/series)
 * option structure, or after the chart is initialized, through
 * {@link Highcharts.Chart#addSeries}.
 *
 * The object can be accessed in a number of ways. All series and point event
 * handlers give a reference to the `series` object. The chart object has a
 * {@link Highcharts.Chart#series|series} property that is a collection of all
 * the chart's series. The point objects and axis objects also have the same
 * reference.
 *
 * Another way to reference the series programmatically is by `id`. Add an id
 * in the series configuration options, and get the series object by
 * {@link Highcharts.Chart#get}.
 *
 * Configuration options for the series are given in three levels. Options for
 * all series in a chart are given in the
 * [plotOptions.series](https://api.highcharts.com/highcharts/plotOptions.series)
 * object. Then options for all series of a specific type
 * are given in the plotOptions of that type, for example `plotOptions.line`.
 * Next, options for one single series are given in the series array, or as
 * arguments to `chart.addSeries`.
 *
 * The data in the series is stored in various arrays.
 *
 * - First, `series.options.data` contains all the original config options for
 *   each point whether added by options or methods like `series.addPoint`.
 *
 * - Next, `series.data` contains those values converted to points, but in case
 *   the series data length exceeds the `cropThreshold`, or if the data is
 *   grouped, `series.data` doesn't contain all the points. It only contains the
 *   points that have been created on demand.
 *
 * - Then there's `series.points` that contains all currently visible point
 *   objects. In case of cropping, the cropped-away points are not part of this
 *   array. The `series.points` array starts at `series.cropStart` compared to
 *   `series.data` and `series.options.data`. If however the series data is
 *   grouped, these can't be correlated one to one.
 *
 * - `series.xData` and `series.processedXData` contain clean x values,
 *   equivalent to `series.data` and `series.points`.
 *
 * - `series.yData` and `series.processedYData` contain clean y values,
 *   equivalent to `series.data` and `series.points`.
 *
 * @class
 * @name Highcharts.Series
 *
 * @param {Highcharts.Chart} chart
 *        The chart instance.
 *
 * @param {Highcharts.SeriesOptionsType|object} options
 *        The series options.
 */ /**
* The line series is the base type and is therefor the series base prototype.
*
* @private
* @class
* @name Highcharts.seriesTypes.line
*
* @augments Highcharts.Series
*/
H.Series = seriesType('line', 
/**
 * Series options for specific data and the data itself. In TypeScript you
 * have to cast the series options to specific series types, to get all
 * possible options for a series.
 *
 * @example
 * // TypeScript example
 * Highcharts.chart('container', {
 *     series: [{
 *         color: '#06C',
 *         data: [[0, 1], [2, 3]]
 *     } as Highcharts.SeriesLineOptions ]
 * });
 *
 * @type      {Array<*>}
 * @apioption series
 */
/**
 * An id for the series. This can be used after render time to get a pointer
 * to the series object through `chart.get()`.
 *
 * @sample {highcharts} highcharts/plotoptions/series-id/
 *         Get series by id
 *
 * @type      {string}
 * @since     1.2.0
 * @apioption series.id
 */
/**
 * The index of the series in the chart, affecting the internal index in the
 * `chart.series` array, the visible Z index as well as the order in the
 * legend.
 *
 * @type      {number}
 * @since     2.3.0
 * @apioption series.index
 */
/**
 * The sequential index of the series in the legend.
 *
 * @see [legend.reversed](#legend.reversed),
 *      [yAxis.reversedStacks](#yAxis.reversedStacks)
 *
 * @sample {highcharts|highstock} highcharts/series/legendindex/
 *         Legend in opposite order
 *
 * @type      {number}
 * @apioption series.legendIndex
 */
/**
 * The name of the series as shown in the legend, tooltip etc.
 *
 * @sample {highcharts} highcharts/series/name/
 *         Series name
 * @sample {highmaps} maps/demo/category-map/
 *         Series name
 *
 * @type      {string}
 * @apioption series.name
 */
/**
 * This option allows grouping series in a stacked chart. The stack option
 * can be a string or anything else, as long as the grouped series' stack
 * options match each other after conversion into a string.
 *
 * @sample {highcharts} highcharts/series/stack/
 *         Stacked and grouped columns
 *
 * @type      {number|string}
 * @since     2.1
 * @product   highcharts highstock
 * @apioption series.stack
 */
/**
 * The type of series, for example `line` or `column`. By default, the
 * series type is inherited from [chart.type](#chart.type), so unless the
 * chart is a combination of series types, there is no need to set it on the
 * series level.
 *
 * @sample {highcharts} highcharts/series/type/
 *         Line and column in the same chart
 * @sample highcharts/series/type-dynamic/
 *         Dynamic types with button selector
 * @sample {highmaps} maps/demo/mapline-mappoint/
 *         Multiple types in the same map
 *
 * @type      {string}
 * @apioption series.type
 */
/**
 * When using dual or multiple x axes, this number defines which xAxis the
 * particular series is connected to. It refers to either the
 * {@link #xAxis.id|axis id}
 * or the index of the axis in the xAxis array, with 0 being the first.
 *
 * @type      {number|string}
 * @default   0
 * @product   highcharts highstock
 * @apioption series.xAxis
 */
/**
 * When using dual or multiple y axes, this number defines which yAxis the
 * particular series is connected to. It refers to either the
 * {@link #yAxis.id|axis id}
 * or the index of the axis in the yAxis array, with 0 being the first.
 *
 * @sample {highcharts} highcharts/series/yaxis/
 *         Apply the column series to the secondary Y axis
 *
 * @type      {number|string}
 * @default   0
 * @product   highcharts highstock
 * @apioption series.yAxis
 */
/**
 * Define the visual z index of the series.
 *
 * @sample {highcharts} highcharts/plotoptions/series-zindex-default/
 *         With no z index, the series defined last are on top
 * @sample {highcharts} highcharts/plotoptions/series-zindex/
 *         With a z index, the series with the highest z index is on top
 * @sample {highstock} highcharts/plotoptions/series-zindex-default/
 *         With no z index, the series defined last are on top
 * @sample {highstock} highcharts/plotoptions/series-zindex/
 *         With a z index, the series with the highest z index is on top
 *
 * @type      {number}
 * @product   highcharts highstock
 * @apioption series.zIndex
 */
null, 
/**
 * General options for all series types.
 *
 * @optionparent plotOptions.series
 */
{
    /**
     * The SVG value used for the `stroke-linecap` and `stroke-linejoin`
     * of a line graph. Round means that lines are rounded in the ends and
     * bends.
     *
     * @type       {Highcharts.SeriesLinecapValue}
     * @default    round
     * @since      3.0.7
     * @apioption  plotOptions.line.linecap
     */
    /**
     * Pixel width of the graph line.
     *
     * @see In styled mode, the line stroke-width can be set with the
     *      `.highcharts-graph` class name.
     *
     * @sample {highcharts} highcharts/plotoptions/series-linewidth-general/
     *         On all series
     * @sample {highcharts} highcharts/plotoptions/series-linewidth-specific/
     *         On one single series
     *
     * @product highcharts highstock
     *
     * @private
     */
    lineWidth: 2,
    /**
     * For some series, there is a limit that shuts down initial animation
     * by default when the total number of points in the chart is too high.
     * For example, for a column chart and its derivatives, animation does
     * not run if there is more than 250 points totally. To disable this
     * cap, set `animationLimit` to `Infinity`.
     *
     * @type      {number}
     * @apioption plotOptions.series.animationLimit
     */
    /**
     * Allow this series' points to be selected by clicking on the graphic
     * (columns, point markers, pie slices, map areas etc).
     *
     * The selected points can be handled by point select and unselect
     * events, or collectively by the [getSelectedPoints
     * ](/class-reference/Highcharts.Chart#getSelectedPoints) function.
     *
     * And alternative way of selecting points is through dragging.
     *
     * @sample {highcharts} highcharts/plotoptions/series-allowpointselect-line/
     *         Line
     * @sample {highcharts} highcharts/plotoptions/series-allowpointselect-column/
     *         Column
     * @sample {highcharts} highcharts/plotoptions/series-allowpointselect-pie/
     *         Pie
     * @sample {highcharts} highcharts/chart/events-selection-points/
     *         Select a range of points through a drag selection
     * @sample {highmaps} maps/plotoptions/series-allowpointselect/
     *         Map area
     * @sample {highmaps} maps/plotoptions/mapbubble-allowpointselect/
     *         Map bubble
     *
     * @since 1.2.0
     *
     * @private
     */
    allowPointSelect: false,
    /**
     * When true, each point or column edge is rounded to its nearest pixel
     * in order to render sharp on screen. In some cases, when there are a
     * lot of densely packed columns, this leads to visible difference
     * in column widths or distance between columns. In these cases,
     * setting `crisp` to `false` may look better, even though each column
     * is rendered blurry.
     *
     * @sample {highcharts} highcharts/plotoptions/column-crisp-false/
     *         Crisp is false
     *
     * @since   5.0.10
     * @product highcharts highstock gantt
     *
     * @private
     */
    crisp: true,
    /**
     * If true, a checkbox is displayed next to the legend item to allow
     * selecting the series. The state of the checkbox is determined by
     * the `selected` option.
     *
     * @productdesc {highmaps}
     * Note that if a `colorAxis` is defined, the color axis is represented
     * in the legend, not the series.
     *
     * @sample {highcharts} highcharts/plotoptions/series-showcheckbox-true/
     *         Show select box
     *
     * @since 1.2.0
     *
     * @private
     */
    showCheckbox: false,
    /**
     * Enable or disable the initial animation when a series is displayed.
     * The animation can also be set as a configuration object. Please
     * note that this option only applies to the initial animation of the
     * series itself. For other animations, see [chart.animation](
     * #chart.animation) and the animation parameter under the API methods.
     * The following properties are supported:
     *
     * - `defer`: The animation delay time in milliseconds.
     *
     * - `duration`: The duration of the animation in milliseconds.
     *
     * - `easing`: Can be a string reference to an easing function set on
     *   the `Math` object or a function. See the _Custom easing function_
     *   demo below.
     *
     * Due to poor performance, animation is disabled in old IE browsers
     * for several chart types.
     *
     * @sample {highcharts} highcharts/plotoptions/series-animation-disabled/
     *         Animation disabled
     * @sample {highcharts} highcharts/plotoptions/series-animation-slower/
     *         Slower animation
     * @sample {highcharts} highcharts/plotoptions/series-animation-easing/
     *         Custom easing function
     * @sample {highstock} stock/plotoptions/animation-slower/
     *         Slower animation
     * @sample {highstock} stock/plotoptions/animation-easing/
     *         Custom easing function
     * @sample {highmaps} maps/plotoptions/series-animation-true/
     *         Animation enabled on map series
     * @sample {highmaps} maps/plotoptions/mapbubble-animation-false/
     *         Disabled on mapbubble series
     *
     * @type    {boolean|Partial<Highcharts.AnimationOptionsObject>}
     * @default {highcharts} true
     * @default {highstock} true
     * @default {highmaps} false
     *
     * @private
     */
    animation: {
        /** @internal */
        duration: 1000
    },
    /**
     * @default   0
     * @type      {number}
     * @since 8.2.0
     * @apioption plotOptions.series.animation.defer
     */
    /**
     * An additional class name to apply to the series' graphical elements.
     * This option does not replace default class names of the graphical
     * element.
     *
     * @type      {string}
     * @since     5.0.0
     * @apioption plotOptions.series.className
     */
    /**
     * Disable this option to allow series rendering in the whole plotting
     * area.
     *
     * **Note:** Clipping should be always enabled when
     * [chart.zoomType](#chart.zoomType) is set
     *
     * @sample {highcharts} highcharts/plotoptions/series-clip/
     *         Disabled clipping
     *
     * @default   true
     * @type      {boolean}
     * @since     3.0.0
     * @apioption plotOptions.series.clip
     */
    /**
     * The main color of the series. In line type series it applies to the
     * line and the point markers unless otherwise specified. In bar type
     * series it applies to the bars unless a color is specified per point.
     * The default value is pulled from the `options.colors` array.
     *
     * In styled mode, the color can be defined by the
     * [colorIndex](#plotOptions.series.colorIndex) option. Also, the series
     * color can be set with the `.highcharts-series`,
     * `.highcharts-color-{n}`, `.highcharts-{type}-series` or
     * `.highcharts-series-{n}` class, or individual classes given by the
     * `className` option.
     *
     * @productdesc {highmaps}
     * In maps, the series color is rarely used, as most choropleth maps use
     * the color to denote the value of each point. The series color can
     * however be used in a map with multiple series holding categorized
     * data.
     *
     * @sample {highcharts} highcharts/plotoptions/series-color-general/
     *         General plot option
     * @sample {highcharts} highcharts/plotoptions/series-color-specific/
     *         One specific series
     * @sample {highcharts} highcharts/plotoptions/series-color-area/
     *         Area color
     * @sample {highcharts} highcharts/series/infographic/
     *         Pattern fill
     * @sample {highmaps} maps/demo/category-map/
     *         Category map by multiple series
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @apioption plotOptions.series.color
     */
    /**
     * Styled mode only. A specific color index to use for the series, so
     * its graphic representations are given the class name
     * `highcharts-color-{n}`.
     *
     * @type      {number}
     * @since     5.0.0
     * @apioption plotOptions.series.colorIndex
     */
    /**
     * Whether to connect a graph line across null points, or render a gap
     * between the two points on either side of the null.
     *
     * @sample {highcharts} highcharts/plotoptions/series-connectnulls-false/
     *         False by default
     * @sample {highcharts} highcharts/plotoptions/series-connectnulls-true/
     *         True
     *
     * @type      {boolean}
     * @default   false
     * @product   highcharts highstock
     * @apioption plotOptions.series.connectNulls
     */
    /**
     * You can set the cursor to "pointer" if you have click events attached
     * to the series, to signal to the user that the points and lines can
     * be clicked.
     *
     * In styled mode, the series cursor can be set with the same classes
     * as listed under [series.color](#plotOptions.series.color).
     *
     * @sample {highcharts} highcharts/plotoptions/series-cursor-line/
     *         On line graph
     * @sample {highcharts} highcharts/plotoptions/series-cursor-column/
     *         On columns
     * @sample {highcharts} highcharts/plotoptions/series-cursor-scatter/
     *         On scatter markers
     * @sample {highstock} stock/plotoptions/cursor/
     *         Pointer on a line graph
     * @sample {highmaps} maps/plotoptions/series-allowpointselect/
     *         Map area
     * @sample {highmaps} maps/plotoptions/mapbubble-allowpointselect/
     *         Map bubble
     *
     * @type      {string|Highcharts.CursorValue}
     * @apioption plotOptions.series.cursor
     */
    /**
     * A reserved subspace to store options and values for customized
     * functionality. Here you can add additional data for your own event
     * callbacks and formatter callbacks.
     *
     * @sample {highcharts} highcharts/point/custom/
     *         Point and series with custom data
     *
     * @type      {Highcharts.Dictionary<*>}
     * @apioption plotOptions.series.custom
     */
    /**
     * Name of the dash style to use for the graph, or for some series types
     * the outline of each shape.
     *
     * In styled mode, the
     * [stroke dash-array](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/series-dashstyle/)
     * can be set with the same classes as listed under
     * [series.color](#plotOptions.series.color).
     *
     * @sample {highcharts} highcharts/plotoptions/series-dashstyle-all/
     *         Possible values demonstrated
     * @sample {highcharts} highcharts/plotoptions/series-dashstyle/
     *         Chart suitable for printing in black and white
     * @sample {highstock} highcharts/plotoptions/series-dashstyle-all/
     *         Possible values demonstrated
     * @sample {highmaps} highcharts/plotoptions/series-dashstyle-all/
     *         Possible values demonstrated
     * @sample {highmaps} maps/plotoptions/series-dashstyle/
     *         Dotted borders on a map
     *
     * @type      {Highcharts.DashStyleValue}
     * @default   Solid
     * @since     2.1
     * @apioption plotOptions.series.dashStyle
     */
    /**
     * A description of the series to add to the screen reader information
     * about the series.
     *
     * @type      {string}
     * @since     5.0.0
     * @requires  modules/accessibility
     * @apioption plotOptions.series.description
     */
    /**
     * Options for the series data sorting.
     *
     * @type      {Highcharts.DataSortingOptionsObject}
     * @since     8.0.0
     * @product   highcharts highstock
     * @apioption plotOptions.series.dataSorting
     */
    /**
     * Enable or disable data sorting for the series. Use [xAxis.reversed](
     * #xAxis.reversed) to change the sorting order.
     *
     * @sample {highcharts} highcharts/datasorting/animation/
     *         Data sorting in scatter-3d
     * @sample {highcharts} highcharts/datasorting/labels-animation/
     *         Axis labels animation
     * @sample {highcharts} highcharts/datasorting/dependent-sorting/
     *         Dependent series sorting
     * @sample {highcharts} highcharts/datasorting/independent-sorting/
     *         Independent series sorting
     *
     * @type      {boolean}
     * @since     8.0.0
     * @apioption plotOptions.series.dataSorting.enabled
     */
    /**
     * Whether to allow matching points by name in an update. If this option
     * is disabled, points will be matched by order.
     *
     * @sample {highcharts} highcharts/datasorting/match-by-name/
     *         Enabled match by name
     *
     * @type      {boolean}
     * @since     8.0.0
     * @apioption plotOptions.series.dataSorting.matchByName
     */
    /**
     * Determines what data value should be used to sort by.
     *
     * @sample {highcharts} highcharts/datasorting/sort-key/
     *         Sort key as `z` value
     *
     * @type      {string}
     * @since     8.0.0
     * @default   y
     * @apioption plotOptions.series.dataSorting.sortKey
     */
    /**
     * Enable or disable the mouse tracking for a specific series. This
     * includes point tooltips and click events on graphs and points. For
     * large datasets it improves performance.
     *
     * @sample {highcharts} highcharts/plotoptions/series-enablemousetracking-false/
     *         No mouse tracking
     * @sample {highmaps} maps/plotoptions/series-enablemousetracking-false/
     *         No mouse tracking
     *
     * @type      {boolean}
     * @default   true
     * @apioption plotOptions.series.enableMouseTracking
     */
    /**
     * Whether to use the Y extremes of the total chart width or only the
     * zoomed area when zooming in on parts of the X axis. By default, the
     * Y axis adjusts to the min and max of the visible data. Cartesian
     * series only.
     *
     * @type      {boolean}
     * @default   false
     * @since     4.1.6
     * @product   highcharts highstock gantt
     * @apioption plotOptions.series.getExtremesFromAll
     */
    /**
     * An array specifying which option maps to which key in the data point
     * array. This makes it convenient to work with unstructured data arrays
     * from different sources.
     *
     * @see [series.data](#series.line.data)
     *
     * @sample {highcharts|highstock} highcharts/series/data-keys/
     *         An extended data array with keys
     * @sample {highcharts|highstock} highcharts/series/data-nested-keys/
     *         Nested keys used to access object properties
     *
     * @type      {Array<string>}
     * @since     4.1.6
     * @apioption plotOptions.series.keys
     */
    /**
     * The line cap used for line ends and line joins on the graph.
     *
     * @type       {Highcharts.SeriesLinecapValue}
     * @default    round
     * @product    highcharts highstock
     * @apioption  plotOptions.series.linecap
     */
    /**
     * The [id](#series.id) of another series to link to. Additionally,
     * the value can be ":previous" to link to the previous series. When
     * two series are linked, only the first one appears in the legend.
     * Toggling the visibility of this also toggles the linked series.
     *
     * If master series uses data sorting and linked series does not have
     * its own sorting definition, the linked series will be sorted in the
     * same order as the master one.
     *
     * @sample {highcharts|highstock} highcharts/demo/arearange-line/
     *         Linked series
     *
     * @type      {string}
     * @since     3.0
     * @product   highcharts highstock gantt
     * @apioption plotOptions.series.linkedTo
     */
    /**
     * Options for the corresponding navigator series if `showInNavigator`
     * is `true` for this series. Available options are the same as any
     * series, documented at [plotOptions](#plotOptions.series) and
     * [series](#series).
     *
     * These options are merged with options in [navigator.series](
     * #navigator.series), and will take precedence if the same option is
     * defined both places.
     *
     * @see [navigator.series](#navigator.series)
     *
     * @type      {Highcharts.PlotSeriesOptions}
     * @since     5.0.0
     * @product   highstock
     * @apioption plotOptions.series.navigatorOptions
     */
    /**
     * The color for the parts of the graph or points that are below the
     * [threshold](#plotOptions.series.threshold). Note that `zones` takes
     * precedence over the negative color. Using `negativeColor` is
     * equivalent to applying a zone with value of 0.
     *
     * @see In styled mode, a negative color is applied by setting this option
     *      to `true` combined with the `.highcharts-negative` class name.
     *
     * @sample {highcharts} highcharts/plotoptions/series-negative-color/
     *         Spline, area and column
     * @sample {highcharts} highcharts/plotoptions/arearange-negativecolor/
     *         Arearange
     * @sample {highcharts} highcharts/css/series-negative-color/
     *         Styled mode
     * @sample {highstock} highcharts/plotoptions/series-negative-color/
     *         Spline, area and column
     * @sample {highstock} highcharts/plotoptions/arearange-negativecolor/
     *         Arearange
     * @sample {highmaps} highcharts/plotoptions/series-negative-color/
     *         Spline, area and column
     * @sample {highmaps} highcharts/plotoptions/arearange-negativecolor/
     *         Arearange
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @since     3.0
     * @apioption plotOptions.series.negativeColor
     */
    /**
     * Same as
     * [accessibility.pointDescriptionFormatter](#accessibility.pointDescriptionFormatter),
     * but for an individual series. Overrides the chart wide configuration.
     *
     * @type      {Function}
     * @since     5.0.12
     * @apioption plotOptions.series.pointDescriptionFormatter
     */
    /**
     * If no x values are given for the points in a series, `pointInterval`
     * defines the interval of the x values. For example, if a series
     * contains one value every decade starting from year 0, set
     * `pointInterval` to `10`. In true `datetime` axes, the `pointInterval`
     * is set in milliseconds.
     *
     * It can be also be combined with `pointIntervalUnit` to draw irregular
     * time intervals.
     *
     * Please note that this options applies to the _series data_, not the
     * interval of the axis ticks, which is independent.
     *
     * @sample {highcharts} highcharts/plotoptions/series-pointstart-datetime/
     *         Datetime X axis
     * @sample {highstock} stock/plotoptions/pointinterval-pointstart/
     *         Using pointStart and pointInterval
     *
     * @type      {number}
     * @default   1
     * @product   highcharts highstock gantt
     * @apioption plotOptions.series.pointInterval
     */
    /**
     * On datetime series, this allows for setting the
     * [pointInterval](#plotOptions.series.pointInterval) to irregular time
     * units, `day`, `month` and `year`. A day is usually the same as 24
     * hours, but `pointIntervalUnit` also takes the DST crossover into
     * consideration when dealing with local time. Combine this option with
     * `pointInterval` to draw weeks, quarters, 6 months, 10 years etc.
     *
     * Please note that this options applies to the _series data_, not the
     * interval of the axis ticks, which is independent.
     *
     * @sample {highcharts} highcharts/plotoptions/series-pointintervalunit/
     *         One point a month
     * @sample {highstock} highcharts/plotoptions/series-pointintervalunit/
     *         One point a month
     *
     * @type       {string}
     * @since      4.1.0
     * @product    highcharts highstock gantt
     * @validvalue ["day", "month", "year"]
     * @apioption  plotOptions.series.pointIntervalUnit
     */
    /**
     * Possible values: `"on"`, `"between"`, `number`.
     *
     * In a column chart, when pointPlacement is `"on"`, the point will not
     * create any padding of the X axis. In a polar column chart this means
     * that the first column points directly north. If the pointPlacement is
     * `"between"`, the columns will be laid out between ticks. This is
     * useful for example for visualising an amount between two points in
     * time or in a certain sector of a polar chart.
     *
     * Since Highcharts 3.0.2, the point placement can also be numeric,
     * where 0 is on the axis value, -0.5 is between this value and the
     * previous, and 0.5 is between this value and the next. Unlike the
     * textual options, numeric point placement options won't affect axis
     * padding.
     *
     * Note that pointPlacement needs a [pointRange](
     * #plotOptions.series.pointRange) to work. For column series this is
     * computed, but for line-type series it needs to be set.
     *
     * For the `xrange` series type and gantt charts, if the Y axis is a
     * category axis, the `pointPlacement` applies to the Y axis rather than
     * the (typically datetime) X axis.
     *
     * Defaults to `undefined` in cartesian charts, `"between"` in polar
     * charts.
     *
     * @see [xAxis.tickmarkPlacement](#xAxis.tickmarkPlacement)
     *
     * @sample {highcharts|highstock} highcharts/plotoptions/series-pointplacement-between/
     *         Between in a column chart
     * @sample {highcharts|highstock} highcharts/plotoptions/series-pointplacement-numeric/
     *         Numeric placement for custom layout
     * @sample {highcharts|highstock} maps/plotoptions/heatmap-pointplacement/
     *         Placement in heatmap
     *
     * @type      {string|number}
     * @since     2.3.0
     * @product   highcharts highstock gantt
     * @apioption plotOptions.series.pointPlacement
     */
    /**
     * If no x values are given for the points in a series, pointStart
     * defines on what value to start. For example, if a series contains one
     * yearly value starting from 1945, set pointStart to 1945.
     *
     * @sample {highcharts} highcharts/plotoptions/series-pointstart-linear/
     *         Linear
     * @sample {highcharts} highcharts/plotoptions/series-pointstart-datetime/
     *         Datetime
     * @sample {highstock} stock/plotoptions/pointinterval-pointstart/
     *         Using pointStart and pointInterval
     *
     * @type      {number}
     * @default   0
     * @product   highcharts highstock gantt
     * @apioption plotOptions.series.pointStart
     */
    /**
     * Whether to select the series initially. If `showCheckbox` is true,
     * the checkbox next to the series name in the legend will be checked
     * for a selected series.
     *
     * @sample {highcharts} highcharts/plotoptions/series-selected/
     *         One out of two series selected
     *
     * @type      {boolean}
     * @default   false
     * @since     1.2.0
     * @apioption plotOptions.series.selected
     */
    /**
     * Whether to apply a drop shadow to the graph line. Since 2.3 the
     * shadow can be an object configuration containing `color`, `offsetX`,
     * `offsetY`, `opacity` and `width`.
     *
     * @sample {highcharts} highcharts/plotoptions/series-shadow/
     *         Shadow enabled
     *
     * @type      {boolean|Highcharts.ShadowOptionsObject}
     * @default   false
     * @apioption plotOptions.series.shadow
     */
    /**
     * Whether to display this particular series or series type in the
     * legend. Standalone series are shown in legend by default, and linked
     * series are not. Since v7.2.0 it is possible to show series that use
     * colorAxis by setting this option to `true`.
     *
     * @sample {highcharts} highcharts/plotoptions/series-showinlegend/
     *         One series in the legend, one hidden
     *
     * @type      {boolean}
     * @apioption plotOptions.series.showInLegend
     */
    /**
     * Whether or not to show the series in the navigator. Takes precedence
     * over [navigator.baseSeries](#navigator.baseSeries) if defined.
     *
     * @type      {boolean}
     * @since     5.0.0
     * @product   highstock
     * @apioption plotOptions.series.showInNavigator
     */
    /**
     * If set to `true`, the accessibility module will skip past the points
     * in this series for keyboard navigation.
     *
     * @type      {boolean}
     * @since     5.0.12
     * @apioption plotOptions.series.skipKeyboardNavigation
     */
    /**
     * Whether to stack the values of each series on top of each other.
     * Possible values are `undefined` to disable, `"normal"` to stack by
     * value or `"percent"`.
     *
     * When stacking is enabled, data must be sorted
     * in ascending X order.
     *
     * Some stacking options are related to specific series types. In the
     * streamgraph series type, the stacking option is set to `"stream"`.
     * The second one is `"overlap"`, which only applies to waterfall
     * series.
     *
     * @see [yAxis.reversedStacks](#yAxis.reversedStacks)
     *
     * @sample {highcharts} highcharts/plotoptions/series-stacking-line/
     *         Line
     * @sample {highcharts} highcharts/plotoptions/series-stacking-column/
     *         Column
     * @sample {highcharts} highcharts/plotoptions/series-stacking-bar/
     *         Bar
     * @sample {highcharts} highcharts/plotoptions/series-stacking-area/
     *         Area
     * @sample {highcharts} highcharts/plotoptions/series-stacking-percent-line/
     *         Line
     * @sample {highcharts} highcharts/plotoptions/series-stacking-percent-column/
     *         Column
     * @sample {highcharts} highcharts/plotoptions/series-stacking-percent-bar/
     *         Bar
     * @sample {highcharts} highcharts/plotoptions/series-stacking-percent-area/
     *         Area
     * @sample {highcharts} highcharts/plotoptions/series-waterfall-with-normal-stacking
     *         Waterfall with normal stacking
     * @sample {highcharts} highcharts/plotoptions/series-waterfall-with-overlap-stacking
     *         Waterfall with overlap stacking
     * @sample {highstock} stock/plotoptions/stacking/
     *         Area
     *
     * @type       {string}
     * @product    highcharts highstock
     * @validvalue ["normal", "overlap", "percent", "stream"]
     * @apioption  plotOptions.series.stacking
     */
    /**
     * Whether to apply steps to the line. Possible values are `left`,
     * `center` and `right`.
     *
     * @sample {highcharts} highcharts/plotoptions/line-step/
     *         Different step line options
     * @sample {highcharts} highcharts/plotoptions/area-step/
     *         Stepped, stacked area
     * @sample {highstock} stock/plotoptions/line-step/
     *         Step line
     *
     * @type       {string}
     * @since      1.2.5
     * @product    highcharts highstock
     * @validvalue ["left", "center", "right"]
     * @apioption  plotOptions.series.step
     */
    /**
     * The threshold, also called zero level or base level. For line type
     * series this is only used in conjunction with
     * [negativeColor](#plotOptions.series.negativeColor).
     *
     * @see [softThreshold](#plotOptions.series.softThreshold).
     *
     * @type      {number}
     * @default   0
     * @since     3.0
     * @product   highcharts highstock
     * @apioption plotOptions.series.threshold
     */
    /**
     * Set the initial visibility of the series.
     *
     * @sample {highcharts} highcharts/plotoptions/series-visible/
     *         Two series, one hidden and one visible
     * @sample {highstock} stock/plotoptions/series-visibility/
     *         Hidden series
     *
     * @type      {boolean}
     * @default   true
     * @apioption plotOptions.series.visible
     */
    /**
     * Defines the Axis on which the zones are applied.
     *
     * @see [zones](#plotOptions.series.zones)
     *
     * @sample {highcharts} highcharts/series/color-zones-zoneaxis-x/
     *         Zones on the X-Axis
     * @sample {highstock} highcharts/series/color-zones-zoneaxis-x/
     *         Zones on the X-Axis
     *
     * @type      {string}
     * @default   y
     * @since     4.1.0
     * @product   highcharts highstock
     * @apioption plotOptions.series.zoneAxis
     */
    /**
     * General event handlers for the series items. These event hooks can
     * also be attached to the series at run time using the
     * `Highcharts.addEvent` function.
     *
     * @declare Highcharts.SeriesEventsOptionsObject
     *
     * @private
     */
    events: {},
    /**
     * Fires after the series has finished its initial animation, or in case
     * animation is disabled, immediately as the series is displayed.
     *
     * @sample {highcharts} highcharts/plotoptions/series-events-afteranimate/
     *         Show label after animate
     * @sample {highstock} highcharts/plotoptions/series-events-afteranimate/
     *         Show label after animate
     *
     * @type      {Highcharts.SeriesAfterAnimateCallbackFunction}
     * @since     4.0
     * @product   highcharts highstock gantt
     * @context   Highcharts.Series
     * @apioption plotOptions.series.events.afterAnimate
     */
    /**
     * Fires when the checkbox next to the series' name in the legend is
     * clicked. One parameter, `event`, is passed to the function. The state
     * of the checkbox is found by `event.checked`. The checked item is
     * found by `event.item`. Return `false` to prevent the default action
     * which is to toggle the select state of the series.
     *
     * @sample {highcharts} highcharts/plotoptions/series-events-checkboxclick/
     *         Alert checkbox status
     *
     * @type      {Highcharts.SeriesCheckboxClickCallbackFunction}
     * @since     1.2.0
     * @context   Highcharts.Series
     * @apioption plotOptions.series.events.checkboxClick
     */
    /**
     * Fires when the series is clicked. One parameter, `event`, is passed
     * to the function, containing common event information. Additionally,
     * `event.point` holds a pointer to the nearest point on the graph.
     *
     * @sample {highcharts} highcharts/plotoptions/series-events-click/
     *         Alert click info
     * @sample {highstock} stock/plotoptions/series-events-click/
     *         Alert click info
     * @sample {highmaps} maps/plotoptions/series-events-click/
     *         Display click info in subtitle
     *
     * @type      {Highcharts.SeriesClickCallbackFunction}
     * @context   Highcharts.Series
     * @apioption plotOptions.series.events.click
     */
    /**
     * Fires when the series is hidden after chart generation time, either
     * by clicking the legend item or by calling `.hide()`.
     *
     * @sample {highcharts} highcharts/plotoptions/series-events-hide/
     *         Alert when the series is hidden by clicking the legend item
     *
     * @type      {Highcharts.SeriesHideCallbackFunction}
     * @since     1.2.0
     * @context   Highcharts.Series
     * @apioption plotOptions.series.events.hide
     */
    /**
     * Fires when the legend item belonging to the series is clicked. One
     * parameter, `event`, is passed to the function. The default action
     * is to toggle the visibility of the series. This can be prevented
     * by returning `false` or calling `event.preventDefault()`.
     *
     * @sample {highcharts} highcharts/plotoptions/series-events-legenditemclick/
     *         Confirm hiding and showing
     *
     * @type      {Highcharts.SeriesLegendItemClickCallbackFunction}
     * @context   Highcharts.Series
     * @apioption plotOptions.series.events.legendItemClick
     */
    /**
     * Fires when the mouse leaves the graph. One parameter, `event`, is
     * passed to the function, containing common event information. If the
     * [stickyTracking](#plotOptions.series) option is true, `mouseOut`
     * doesn't happen before the mouse enters another graph or leaves the
     * plot area.
     *
     * @sample {highcharts} highcharts/plotoptions/series-events-mouseover-sticky/
     *         With sticky tracking by default
     * @sample {highcharts} highcharts/plotoptions/series-events-mouseover-no-sticky/
     *         Without sticky tracking
     *
     * @type      {Highcharts.SeriesMouseOutCallbackFunction}
     * @context   Highcharts.Series
     * @apioption plotOptions.series.events.mouseOut
     */
    /**
     * Fires when the mouse enters the graph. One parameter, `event`, is
     * passed to the function, containing common event information.
     *
     * @sample {highcharts} highcharts/plotoptions/series-events-mouseover-sticky/
     *         With sticky tracking by default
     * @sample {highcharts} highcharts/plotoptions/series-events-mouseover-no-sticky/
     *         Without sticky tracking
     *
     * @type      {Highcharts.SeriesMouseOverCallbackFunction}
     * @context   Highcharts.Series
     * @apioption plotOptions.series.events.mouseOver
     */
    /**
     * Fires when the series is shown after chart generation time, either
     * by clicking the legend item or by calling `.show()`.
     *
     * @sample {highcharts} highcharts/plotoptions/series-events-show/
     *         Alert when the series is shown by clicking the legend item.
     *
     * @type      {Highcharts.SeriesShowCallbackFunction}
     * @since     1.2.0
     * @context   Highcharts.Series
     * @apioption plotOptions.series.events.show
     */
    /**
     * Options for the point markers of line-like series. Properties like
     * `fillColor`, `lineColor` and `lineWidth` define the visual appearance
     * of the markers. Other series types, like column series, don't have
     * markers, but have visual options on the series level instead.
     *
     * In styled mode, the markers can be styled with the
     * `.highcharts-point`, `.highcharts-point-hover` and
     * `.highcharts-point-select` class names.
     *
     * @declare Highcharts.PointMarkerOptionsObject
     *
     * @private
     */
    marker: {
        /**
         * Enable or disable the point marker. If `undefined`, the markers
         * are hidden when the data is dense, and shown for more widespread
         * data points.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-enabled/
         *         Disabled markers
         * @sample {highcharts} highcharts/plotoptions/series-marker-enabled-false/
         *         Disabled in normal state but enabled on hover
         * @sample {highstock} stock/plotoptions/series-marker/
         *         Enabled markers
         *
         * @type      {boolean}
         * @default   {highcharts} undefined
         * @default   {highstock} false
         * @apioption plotOptions.series.marker.enabled
         */
        /**
         * The threshold for how dense the point markers should be before
         * they are hidden, given that `enabled` is not defined. The number
         * indicates the horizontal distance between the two closest points
         * in the series, as multiples of the `marker.radius`. In other
         * words, the default value of 2 means points are hidden if
         * overlapping horizontally.
         *
         * @sample highcharts/plotoptions/series-marker-enabledthreshold
         *         A higher threshold
         *
         * @since 6.0.5
         */
        enabledThreshold: 2,
        /**
         * The fill color of the point marker. When `undefined`, the series'
         * or point's color is used.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-fillcolor/
         *         White fill
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @apioption plotOptions.series.marker.fillColor
         */
        /**
         * Image markers only. Set the image width explicitly. When using
         * this option, a `width` must also be set.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-width-height/
         *         Fixed width and height
         * @sample {highstock} highcharts/plotoptions/series-marker-width-height/
         *         Fixed width and height
         *
         * @type      {number}
         * @since     4.0.4
         * @apioption plotOptions.series.marker.height
         */
        /**
         * The color of the point marker's outline. When `undefined`, the
         * series' or point's color is used.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-fillcolor/
         *         Inherit from series color (undefined)
         *
         * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        lineColor: '#ffffff',
        /**
         * The width of the point marker's outline.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-fillcolor/
         *         2px blue marker
         */
        lineWidth: 0,
        /**
         * The radius of the point marker.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-radius/
         *         Bigger markers
         *
         * @default {highstock} 2
         */
        radius: 4,
        /**
         * A predefined shape or symbol for the marker. When undefined, the
         * symbol is pulled from options.symbols. Other possible values are
         * `'circle'`, `'square'`,`'diamond'`, `'triangle'` and
         * `'triangle-down'`.
         *
         * Additionally, the URL to a graphic can be given on this form:
         * `'url(graphic.png)'`. Note that for the image to be applied to
         * exported charts, its URL needs to be accessible by the export
         * server.
         *
         * Custom callbacks for symbol path generation can also be added to
         * `Highcharts.SVGRenderer.prototype.symbols`. The callback is then
         * used by its method name, as shown in the demo.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-symbol/
         *         Predefined, graphic and custom markers
         * @sample {highstock} highcharts/plotoptions/series-marker-symbol/
         *         Predefined, graphic and custom markers
         *
         * @type      {string}
         * @apioption plotOptions.series.marker.symbol
         */
        /**
         * Image markers only. Set the image width explicitly. When using
         * this option, a `height` must also be set.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-width-height/
         *         Fixed width and height
         * @sample {highstock} highcharts/plotoptions/series-marker-width-height/
         *         Fixed width and height
         *
         * @type      {number}
         * @since     4.0.4
         * @apioption plotOptions.series.marker.width
         */
        /**
         * States for a single point marker.
         *
         * @declare Highcharts.PointStatesOptionsObject
         */
        states: {
            /**
             * The normal state of a single point marker. Currently only
             * used for setting animation when returning to normal state
             * from hover.
             *
             * @declare Highcharts.PointStatesNormalOptionsObject
             */
            normal: {
                /**
                 * Animation when returning to normal state after hovering.
                 *
                 * @type {boolean|Partial<Highcharts.AnimationOptionsObject>}
                 */
                animation: true
            },
            /**
             * The hover state for a single point marker.
             *
             * @declare Highcharts.PointStatesHoverOptionsObject
             */
            hover: {
                /**
                 * Animation when hovering over the marker.
                 *
                 * @type {boolean|Partial<Highcharts.AnimationOptionsObject>}
                 */
                animation: {
                    /** @internal */
                    duration: 50
                },
                /**
                 * Enable or disable the point marker.
                 *
                 * @sample {highcharts} highcharts/plotoptions/series-marker-states-hover-enabled/
                 *         Disabled hover state
                 */
                enabled: true,
                /**
                 * The fill color of the marker in hover state. When
                 * `undefined`, the series' or point's fillColor for normal
                 * state is used.
                 *
                 * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
                 * @apioption plotOptions.series.marker.states.hover.fillColor
                 */
                /**
                 * The color of the point marker's outline. When
                 * `undefined`, the series' or point's lineColor for normal
                 * state is used.
                 *
                 * @sample {highcharts} highcharts/plotoptions/series-marker-states-hover-linecolor/
                 *         White fill color, black line color
                 *
                 * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
                 * @apioption plotOptions.series.marker.states.hover.lineColor
                 */
                /**
                 * The width of the point marker's outline. When
                 * `undefined`, the series' or point's lineWidth for normal
                 * state is used.
                 *
                 * @sample {highcharts} highcharts/plotoptions/series-marker-states-hover-linewidth/
                 *         3px line width
                 *
                 * @type      {number}
                 * @apioption plotOptions.series.marker.states.hover.lineWidth
                 */
                /**
                 * The radius of the point marker. In hover state, it
                 * defaults to the normal state's radius + 2 as per the
                 * [radiusPlus](#plotOptions.series.marker.states.hover.radiusPlus)
                 * option.
                 *
                 * @sample {highcharts} highcharts/plotoptions/series-marker-states-hover-radius/
                 *         10px radius
                 *
                 * @type      {number}
                 * @apioption plotOptions.series.marker.states.hover.radius
                 */
                /**
                 * The number of pixels to increase the radius of the
                 * hovered point.
                 *
                 * @sample {highcharts} highcharts/plotoptions/series-states-hover-linewidthplus/
                 *         5 pixels greater radius on hover
                 * @sample {highstock} highcharts/plotoptions/series-states-hover-linewidthplus/
                 *         5 pixels greater radius on hover
                 *
                 * @since 4.0.3
                 */
                radiusPlus: 2,
                /**
                 * The additional line width for a hovered point.
                 *
                 * @sample {highcharts} highcharts/plotoptions/series-states-hover-linewidthplus/
                 *         2 pixels wider on hover
                 * @sample {highstock} highcharts/plotoptions/series-states-hover-linewidthplus/
                 *         2 pixels wider on hover
                 *
                 * @since 4.0.3
                 */
                lineWidthPlus: 1
            },
            /**
             * The appearance of the point marker when selected. In order to
             * allow a point to be selected, set the
             * `series.allowPointSelect` option to true.
             *
             * @declare Highcharts.PointStatesSelectOptionsObject
             */
            select: {
                /**
                 * Enable or disable visible feedback for selection.
                 *
                 * @sample {highcharts} highcharts/plotoptions/series-marker-states-select-enabled/
                 *         Disabled select state
                 *
                 * @type      {boolean}
                 * @default   true
                 * @apioption plotOptions.series.marker.states.select.enabled
                 */
                /**
                 * The radius of the point marker. In hover state, it
                 * defaults to the normal state's radius + 2.
                 *
                 * @sample {highcharts} highcharts/plotoptions/series-marker-states-select-radius/
                 *         10px radius for selected points
                 *
                 * @type      {number}
                 * @apioption plotOptions.series.marker.states.select.radius
                 */
                /**
                 * The fill color of the point marker.
                 *
                 * @sample {highcharts} highcharts/plotoptions/series-marker-states-select-fillcolor/
                 *         Solid red discs for selected points
                 *
                 * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
                 */
                fillColor: '#cccccc',
                /**
                 * The color of the point marker's outline. When
                 * `undefined`, the series' or point's color is used.
                 *
                 * @sample {highcharts} highcharts/plotoptions/series-marker-states-select-linecolor/
                 *         Red line color for selected points
                 *
                 * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
                 */
                lineColor: '#000000',
                /**
                 * The width of the point marker's outline.
                 *
                 * @sample {highcharts} highcharts/plotoptions/series-marker-states-select-linewidth/
                 *         3px line width for selected points
                 */
                lineWidth: 2
            }
        }
    },
    /**
     * Properties for each single point.
     *
     * @declare Highcharts.PlotSeriesPointOptions
     *
     * @private
     */
    point: {
        /**
         * Fires when a point is clicked. One parameter, `event`, is passed
         * to the function, containing common event information.
         *
         * If the `series.allowPointSelect` option is true, the default
         * action for the point's click event is to toggle the point's
         * select state. Returning `false` cancels this action.
         *
         * @sample {highcharts} highcharts/plotoptions/series-point-events-click/
         *         Click marker to alert values
         * @sample {highcharts} highcharts/plotoptions/series-point-events-click-column/
         *         Click column
         * @sample {highcharts} highcharts/plotoptions/series-point-events-click-url/
         *         Go to URL
         * @sample {highmaps} maps/plotoptions/series-point-events-click/
         *         Click marker to display values
         * @sample {highmaps} maps/plotoptions/series-point-events-click-url/
         *         Go to URL
         *
         * @type      {Highcharts.PointClickCallbackFunction}
         * @context   Highcharts.Point
         * @apioption plotOptions.series.point.events.click
         */
        /**
         * Fires when the mouse leaves the area close to the point. One
         * parameter, `event`, is passed to the function, containing common
         * event information.
         *
         * @sample {highcharts} highcharts/plotoptions/series-point-events-mouseover/
         *         Show values in the chart's corner on mouse over
         *
         * @type      {Highcharts.PointMouseOutCallbackFunction}
         * @context   Highcharts.Point
         * @apioption plotOptions.series.point.events.mouseOut
         */
        /**
         * Fires when the mouse enters the area close to the point. One
         * parameter, `event`, is passed to the function, containing common
         * event information.
         *
         * @sample {highcharts} highcharts/plotoptions/series-point-events-mouseover/
         *         Show values in the chart's corner on mouse over
         *
         * @type      {Highcharts.PointMouseOverCallbackFunction}
         * @context   Highcharts.Point
         * @apioption plotOptions.series.point.events.mouseOver
         */
        /**
         * Fires when the point is removed using the `.remove()` method. One
         * parameter, `event`, is passed to the function. Returning `false`
         * cancels the operation.
         *
         * @sample {highcharts} highcharts/plotoptions/series-point-events-remove/
         *         Remove point and confirm
         *
         * @type      {Highcharts.PointRemoveCallbackFunction}
         * @since     1.2.0
         * @context   Highcharts.Point
         * @apioption plotOptions.series.point.events.remove
         */
        /**
         * Fires when the point is selected either programmatically or
         * following a click on the point. One parameter, `event`, is passed
         * to the function. Returning `false` cancels the operation.
         *
         * @sample {highcharts} highcharts/plotoptions/series-point-events-select/
         *         Report the last selected point
         * @sample {highmaps} maps/plotoptions/series-allowpointselect/
         *         Report select and unselect
         *
         * @type      {Highcharts.PointSelectCallbackFunction}
         * @since     1.2.0
         * @context   Highcharts.Point
         * @apioption plotOptions.series.point.events.select
         */
        /**
         * Fires when the point is unselected either programmatically or
         * following a click on the point. One parameter, `event`, is passed
         * to the function.
         *  Returning `false` cancels the operation.
         *
         * @sample {highcharts} highcharts/plotoptions/series-point-events-unselect/
         *         Report the last unselected point
         * @sample {highmaps} maps/plotoptions/series-allowpointselect/
         *         Report select and unselect
         *
         * @type      {Highcharts.PointUnselectCallbackFunction}
         * @since     1.2.0
         * @context   Highcharts.Point
         * @apioption plotOptions.series.point.events.unselect
         */
        /**
         * Fires when the point is updated programmatically through the
         * `.update()` method. One parameter, `event`, is passed to the
         * function. The new point options can be accessed through
         * `event.options`. Returning `false` cancels the operation.
         *
         * @sample {highcharts} highcharts/plotoptions/series-point-events-update/
         *         Confirm point updating
         *
         * @type      {Highcharts.PointUpdateCal