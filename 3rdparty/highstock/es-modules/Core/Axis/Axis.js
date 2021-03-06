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
import Color from '../Color.js';
import H from '../Globals.js';
import Tick from './Tick.js';
import U from '../Utilities.js';
var addEvent = U.addEvent, animObject = U.animObject, arrayMax = U.arrayMax, arrayMin = U.arrayMin, clamp = U.clamp, correctFloat = U.correctFloat, defined = U.defined, destroyObjectProperties = U.destroyObjectProperties, error = U.error, extend = U.extend, fireEvent = U.fireEvent, format = U.format, getMagnitude = U.getMagnitude, isArray = U.isArray, isFunction = U.isFunction, isNumber = U.isNumber, isString = U.isString, merge = U.merge, normalizeTickInterval = U.normalizeTickInterval, objectEach = U.objectEach, pick = U.pick, relativeLength = U.relativeLength, removeEvent = U.removeEvent, splat = U.splat, syncTimeout = U.syncTimeout;
/**
 * Options for the path on the Axis to be calculated.
 * @interface Highcharts.AxisPlotLinePathOptionsObject
 */ /**
* Axis value.
* @name Highcharts.AxisPlotLinePathOptionsObject#value
* @type {number|undefined}
*/ /**
* Line width used for calculation crisp line coordinates. Defaults to 1.
* @name Highcharts.AxisPlotLinePathOptionsObject#lineWidth
* @type {number|undefined}
*/ /**
* If `false`, the function will return null when it falls outside the axis
* bounds. If `true`, the function will return a path aligned to the plot area
* sides if it falls outside. If `pass`, it will return a path outside.
* @name Highcharts.AxisPlotLinePathOptionsObject#force
* @type {string|boolean|undefined}
*/ /**
* Used in Highstock. When `true`, plot paths (crosshair, plotLines, gridLines)
* will be rendered on all axes when defined on the first axis.
* @name Highcharts.AxisPlotLinePathOptionsObject#acrossPanes
* @type {boolean|undefined}
*/ /**
* Use old coordinates (for resizing and rescaling).
* If not set, defaults to `false`.
* @name Highcharts.AxisPlotLinePathOptionsObject#old
* @type {boolean|undefined}
*/ /**
* If given, return the plot line path of a pixel position on the axis.
* @name Highcharts.AxisPlotLinePathOptionsObject#translatedValue
* @type {number|undefined}
*/ /**
* Used in Polar axes. Reverse the positions for concatenation of polygonal
* plot bands
* @name Highcharts.AxisPlotLinePathOptionsObject#reverse
* @type {boolean|undefined}
*/
/**
 * Options for crosshairs on axes.
 *
 * @product highstock
 *
 * @typedef {Highcharts.XAxisCrosshairOptions|Highcharts.YAxisCrosshairOptions} Highcharts.AxisCrosshairOptions
 */
/**
 * @typedef {"navigator"|"pan"|"rangeSelectorButton"|"rangeSelectorInput"|"scrollbar"|"traverseUpButton"|"zoom"} Highcharts.AxisExtremesTriggerValue
 */
/**
 * @callback Highcharts.AxisEventCallbackFunction
 *
 * @param {Highcharts.Axis} this
 */
/**
 * @callback Highcharts.AxisLabelsFormatterCallbackFunction
 *
 * @param {Highcharts.AxisLabelsFormatterContextObject<number>} this
 *
 * @param {Highcharts.AxisLabelsFormatterContextObject<string>} that
 *
 * @return {string}
 */
/**
 * @interface Highcharts.AxisLabelsFormatterContextObject<T>
 */ /**
* @name Highcharts.AxisLabelsFormatterContextObject<T>#axis
* @type {Highcharts.Axis}
*/ /**
* @name Highcharts.AxisLabelsFormatterContextObject<T>#chart
* @type {Highcharts.Chart}
*/ /**
* @name Highcharts.AxisLabelsFormatterContextObject<T>#isFirst
* @type {boolean}
*/ /**
* @name Highcharts.AxisLabelsFormatterContextObject<T>#isLast
* @type {boolean}
*/ /**
* @name Highcharts.AxisLabelsFormatterContextObject<T>#pos
* @type {number}
*/ /**
* This can be either a numeric value or a category string.
* @name Highcharts.AxisLabelsFormatterContextObject<T>#value
* @type {T}
*/
/**
 * Options for axes.
 *
 * @typedef {Highcharts.XAxisOptions|Highcharts.YAxisOptions|Highcharts.ZAxisOptions} Highcharts.AxisOptions
 */
/**
 * @callback Highcharts.AxisPointBreakEventCallbackFunction
 *
 * @param {Highcharts.Axis} this
 *
 * @param {Highcharts.AxisPointBreakEventObject} evt
 */
/**
 * @interface Highcharts.AxisPointBreakEventObject
 */ /**
* @name Highcharts.AxisPointBreakEventObject#brk
* @type {Highcharts.Dictionary<number>}
*/ /**
* @name Highcharts.AxisPointBreakEventObject#point
* @type {Highcharts.Point}
*/ /**
* @name Highcharts.AxisPointBreakEventObject#preventDefault
* @type {Function}
*/ /**
* @name Highcharts.AxisPointBreakEventObject#target
* @type {Highcharts.SVGElement}
*/ /**
* @name Highcharts.AxisPointBreakEventObject#type
* @type {"pointBreak"|"pointInBreak"}
*/
/**
 * @callback Highcharts.AxisSetExtremesEventCallbackFunction
 *
 * @param {Highcharts.Axis} this
 *
 * @param {Highcharts.AxisSetExtremesEventObject} evt
 */
/**
 * @interface Highcharts.AxisSetExtremesEventObject
 * @extends Highcharts.ExtremesObject
 */ /**
* @name Highcharts.AxisSetExtremesEventObject#preventDefault
* @type {Function}
*/ /**
* @name Highcharts.AxisSetExtremesEventObject#target
* @type {Highcharts.SVGElement}
*/ /**
* @name Highcharts.AxisSetExtremesEventObject#trigger
* @type {Highcharts.AxisExtremesTriggerValue|string}
*/ /**
* @name Highcharts.AxisSetExtremesEventObject#type
* @type {"setExtremes"}
*/
/**
 * @callback Highcharts.AxisTickPositionerCallbackFunction
 *
 * @param {Highcharts.Axis} this
 *
 * @return {Highcharts.AxisTickPositionsArray}
 */
/**
 * @interface Highcharts.AxisTickPositionsArray
 * @augments Array<number>
 */
/**
 * @typedef {"high"|"low"|"middle"} Highcharts.AxisTitleAlignValue
 */
/**
 * @typedef {Highcharts.XAxisTitleOptions|Highcharts.YAxisTitleOptions|Highcharts.ZAxisTitleOptions} Highcharts.AxisTitleOptions
 */
/**
 * @typedef {"linear"|"logarithmic"|"datetime"|"category"|"treegrid"} Highcharts.AxisTypeValue
 */
/**
 * The returned object literal from the {@link Highcharts.Axis#getExtremes}
 * function.
 *
 * @interface Highcharts.ExtremesObject
 */ /**
* The maximum value of the axis' associated series.
* @name Highcharts.ExtremesObject#dataMax
* @type {number}
*/ /**
* The minimum value of the axis' associated series.
* @name Highcharts.ExtremesObject#dataMin
* @type {number}
*/ /**
* The maximum axis value, either automatic or set manually. If the `max` option
* is not set, `maxPadding` is 0 and `endOnTick` is false, this value will be
* the same as `dataMax`.
* @name Highcharts.ExtremesObject#max
* @type {number}
*/ /**
* The minimum axis value, either automatic or set manually. If the `min` option
* is not set, `minPadding` is 0 and `startOnTick` is false, this value will be
* the same as `dataMin`.
* @name Highcharts.ExtremesObject#min
* @type {number}
*/ /**
* The user defined maximum, either from the `max` option or from a zoom or
* `setExtremes` action.
* @name Highcharts.ExtremesObject#userMax
* @type {number}
*/ /**
* The user defined minimum, either from the `min` option or from a zoom or
* `setExtremes` action.
* @name Highcharts.ExtremesObject#userMin
* @type {number}
*/
/**
 * Formatter function for the text of a crosshair label.
 *
 * @callback Highcharts.XAxisCrosshairLabelFormatterCallbackFunction
 *
 * @param {Highcharts.Axis} this
 *        Axis context
 *
 * @param {number} value
 *        Y value of the data point
 *
 * @return {string}
 */
import O from '../Options.js';
var defaultOptions = O.defaultOptions;
var deg2rad = H.deg2rad;
/**
 * Create a new axis object. Called internally when instanciating a new chart or
 * adding axes by {@link Highcharts.Chart#addAxis}.
 *
 * A chart can have from 0 axes (pie chart) to multiples. In a normal, single
 * series cartesian chart, there is one X axis and one Y axis.
 *
 * The X axis or axes are referenced by {@link Highcharts.Chart.xAxis}, which is
 * an array of Axis objects. If there is only one axis, it can be referenced
 * through `chart.xAxis[0]`, and multiple axes have increasing indices. The same
 * pattern goes for Y axes.
 *
 * If you need to get the axes from a series object, use the `series.xAxis` and
 * `series.yAxis` properties. These are not arrays, as one series can only be
 * associated to one X and one Y axis.
 *
 * A third way to reference the axis programmatically is by `id`. Add an `id` in
 * the axis configuration options, and get the axis by
 * {@link Highcharts.Chart#get}.
 *
 * Configuration options for the axes are given in options.xAxis and
 * options.yAxis.
 *
 * @class
 * @name Highcharts.Axis
 *
 * @param {Highcharts.Chart} chart
 * The Chart instance to apply the axis on.
 *
 * @param {Highcharts.AxisOptions} userOptions
 * Axis options.
 */
var Axis = /** @class */ (function () {
    /* *
     *
     *  Constructors
     *
     * */
    function Axis(chart, userOptions) {
        this.alternateBands = void 0;
        this.bottom = void 0;
        this.categories = void 0;
        this.chart = void 0;
        this.closestPointRange = void 0;
        this.coll = void 0;
        this.hasNames = void 0;
        this.hasVisibleSeries = void 0;
        this.height = void 0;
        this.isLinked = void 0;
        this.labelEdge = void 0; // @todo
        this.labelFormatter = void 0;
        this.left = void 0;
        this.len = void 0;
        this.max = void 0;
        this.maxLabelLength = void 0;
        this.min = void 0;
        this.minorTickInterval = void 0;
        this.minorTicks = void 0;
        this.minPixelPadding = void 0;
        this.names = void 0;
        this.offset = void 0;
        this.oldMax = void 0;
        this.oldMin = void 0;
        this.options = void 0;
        this.overlap = void 0;
        this.paddedTicks = void 0;
        this.plotLinesAndBands = void 0;
        this.plotLinesAndBandsGroups = void 0;
        this.pointRange = void 0;
        this.pointRangePadding = void 0;
        this.pos = void 0;
        this.positiveValuesOnly = void 0;
        this.right = void 0;
        this.series = void 0;
        this.side = void 0;
        this.tickAmount = void 0;
        this.tickInterval = void 0;
        this.tickmarkOffset = void 0;
        this.tickPositions = void 0;
        this.tickRotCorr = void 0;
        this.ticks = void 0;
        this.top = void 0;
        this.transA = void 0;
        this.transB = void 0;
        this.translationSlope = void 0;
        this.userOptions = void 0;
        this.visible = void 0;
        this.width = void 0;
        this.zoomEnabled = void 0;
        this.init(chart, userOptions);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Overrideable function to initialize the axis.
     *
     * @see {@link Axis}
     *
     * @function Highcharts.Axis#init
     *
     * @param {Highcharts.Chart} chart
     * The Chart instance to apply the axis on.
     *
     * @param {Highcharts.AxisOptions} userOptions
     * Axis options.
     *
     * @fires Highcharts.Axis#event:afterInit
     * @fires Highcharts.Axis#event:init
     */
    Axis.prototype.init = function (chart, userOptions) {
        var isXAxis = userOptions.isX, axis = this;
        /**
         * The Chart that the axis belongs to.
         *
         * @name Highcharts.Axis#chart
         * @type {Highcharts.Chart}
         */
        axis.chart = chart;
        /**
         * Whether the axis is horizontal.
         *
         * @name Highcharts.Axis#horiz
         * @type {boolean|undefined}
         */
        axis.horiz = chart.inverted && !axis.isZAxis ? !isXAxis : isXAxis;
        /**
         * Whether the axis is the x-axis.
         *
         * @name Highcharts.Axis#isXAxis
         * @type {boolean|undefined}
         */
        axis.isXAxis = isXAxis;
        /**
         * The collection where the axis belongs, for example `xAxis`, `yAxis`
         * or `colorAxis`. Corresponds to properties on Chart, for example
         * {@link Chart.xAxis}.
         *
         * @name Highcharts.Axis#coll
         * @type {string}
         */
        axis.coll = axis.coll || (isXAxis ? 'xAxis' : 'yAxis');
        fireEvent(this, 'init', { userOptions: userOptions });
        axis.opposite = userOptions.opposite; // needed in setOptions
        /**
         * The side on which the axis is rendered. 0 is top, 1 is right, 2
         * is bottom and 3 is left.
         *
         * @name Highcharts.Axis#side
         * @type {number}
         */
        axis.side = userOptions.side || (axis.horiz ?
            (axis.opposite ? 0 : 2) : // top : bottom
            (axis.opposite ? 1 : 3)); // right : left
        /**
         * Current options for the axis after merge of defaults and user's
         * options.
         *
         * @name Highcharts.Axis#options
         * @type {Highcharts.AxisOptions}
         */
        axis.setOptions(userOptions);
        var options = this.options, type = options.type;
        axis.labelFormatter = (options.labels.formatter ||
            // can be overwritten by dynamic format
            axis.defaultLabelFormatter);
        /**
         * User's options for this axis without defaults.
         *
         * @name Highcharts.Axis#userOptions
         * @type {Highcharts.AxisOptions}
         */
        axis.userOptions = userOptions;
        axis.minPixelPadding = 0;
        /**
         * Whether the axis is reversed. Based on the `axis.reversed`,
         * option, but inverted charts have reversed xAxis by default.
         *
         * @name Highcharts.Axis#reversed
         * @type {boolean}
         */
        axis.reversed = options.reversed;
        axis.visible = options.visible !== false;
        axis.zoomEnabled = options.zoomEnabled !== false;
        // Initial categories
        axis.hasNames =
            type === 'category' || options.categories === true;
        /**
         * If categories are present for the axis, names are used instead of
         * numbers for that axis.
         *
         * Since Highcharts 3.0, categories can also be extracted by giving each
         * point a name and setting axis type to `category`. However, if you
         * have multiple series, best practice remains defining the `categories`
         * array.
         *
         * @see [xAxis.categories](/highcharts/xAxis.categories)
         *
         * @name Highcharts.Axis#categories
         * @type {Array<string>}
         * @readonly
         */
        axis.categories = options.categories || axis.hasNames;
        if (!axis.names) { // Preserve on update (#3830)
            axis.names = [];
            axis.names.keys = {};
        }
        // Placeholder for plotlines and plotbands groups
        axis.plotLinesAndBandsGroups = {};
        // Shorthand types
        axis.positiveValuesOnly = !!axis.logarithmic;
        // Flag, if axis is linked to another axis
        axis.isLinked = defined(options.linkedTo);
        /**
         * List of major ticks mapped by postition on axis.
         *
         * @see {@link Highcharts.Tick}
         *
         * @name Highcharts.Axis#ticks
         * @type {Highcharts.Dictionary<Highcharts.Tick>}
         */
        axis.ticks = {};
        axis.labelEdge = [];
        /**
         * List of minor ticks mapped by position on the axis.
         *
         * @see {@link Highcharts.Tick}
         *
         * @name Highcharts.Axis#minorTicks
         * @type {Highcharts.Dictionary<Highcharts.Tick>}
         */
        axis.minorTicks = {};
        // List of plotLines/Bands
        axis.plotLinesAndBands = [];
        // Alternate bands
        axis.alternateBands = {};
        // Axis metrics
        axis.len = 0;
        axis.minRange = axis.userMinRange = options.minRange || options.maxZoom;
        axis.range = options.range;
        axis.offset = options.offset || 0;
        /**
         * The maximum value of the axis. In a logarithmic axis, this is the
         * logarithm of the real value, and the real value can be obtained from
         * {@link Axis#getExtremes}.
         *
         * @name Highcharts.Axis#max
         * @type {number|null}
         */
        axis.max = null;
        /**
         * The minimum value of the axis. In a logarithmic axis, this is the
         * logarithm of the real value, and the real value can be obtained from
         * {@link Axis#getExtremes}.
         *
         * @name Highcharts.Axis#min
         * @type {number|null}
         */
        axis.min = null;
        /**
         * The processed crosshair options.
         *
         * @name Highcharts.Axis#crosshair
         * @type {boolean|Highcharts.AxisCrosshairOptions}
         */
        axis.crosshair = pick(options.crosshair, splat(chart.options.tooltip.crosshairs)[isXAxis ? 0 : 1], false);
        var events = axis.options.events;
        // Register. Don't add it again on Axis.update().
        if (chart.axes.indexOf(axis) === -1) { //
            if (isXAxis) { // #2713
                chart.axes.splice(chart.xAxis.length, 0, axis);
            }
            else {
                chart.axes.push(axis);
            }
            chart[axis.coll].push(axis);
        }
        /**
         * All series associated to the axis.
         *
         * @name Highcharts.Axis#series
         * @type {Array<Highcharts.Series>}
         */
        axis.series = axis.series || []; // populated by Series
        // Reversed axis
        if (chart.inverted &&
            !axis.isZAxis &&
            isXAxis &&
            typeof axis.reversed === 'undefined') {
            axis.reversed = true;
        }
        axis.labelRotation = axis.options.labels.rotation;
        // register event listeners
        objectEach(events, function (event, eventType) {
            if (isFunction(event)) {
                addEvent(axis, eventType, event);
            }
        });
        fireEvent(this, 'afterInit');
    };
    /**
     * Merge and set options.
     *
     * @private
     * @function Highcharts.Axis#setOptions
     *
     * @param {Highcharts.AxisOptions} userOptions
     * Axis options.
     *
     * @fires Highcharts.Axis#event:afterSetOptions
     */
    Axis.prototype.setOptions = function (userOptions) {
        this.options = merge(Axis.defaultOptions, (this.coll === 'yAxis') && Axis.defaultYAxisOptions, [
            Axis.defaultTopAxisOptions,
            Axis.defaultRightAxisOptions,
            Axis.defaultBottomAxisOptions,
            Axis.defaultLeftAxisOptions
        ][this.side], merge(
        // if set in setOptions (#1053):
        defaultOptions[this.coll], userOptions));
        fireEvent(this, 'afterSetOptions', { userOptions: userOptions });
    };
    /**
     * The default label formatter. The context is a special config object for
     * the label. In apps, use the
     * [labels.formatter](https://api.highcharts.com/highcharts/xAxis.labels.formatter)
     * instead, except when a modification is needed.
     *
     * @function Highcharts.Axis#defaultLabelFormatter
     *
     * @param {Highcharts.AxisLabelsFormatterContextObject<number>|Highcharts.AxisLabelsFormatterContextObject<string>} this
     * Formatter context of axis label.
     *
     * @return {string}
     * The formatted label content.
     */
    Axis.prototype.defaultLabelFormatter = function () {
        var axis = this.axis, value = isNumber(this.value) ? this.value : NaN, time = axis.chart.time, categories = axis.categories, dateTimeLabelFormat = this.dateTimeLabelFormat, lang = defaultOptions.lang, numericSymbols = lang.numericSymbols, numSymMagnitude = lang.numericSymbolMagnitude || 1000, i = numericSymbols && numericSymbols.length, multi, ret, formatOption = axis.options.labels.format, 
        // make sure the same symbol is added for all labels on a linear
        // axis
        numericSymbolDetector = axis.logarithmic ?
            Math.abs(value) :
            axis.tickInterval;
        var chart = this.chart;
        var numberFormatter = chart.numberFormatter;
        if (formatOption) {
            ret = format(formatOption, this, chart);
        }
        else if (categories) {
            ret = "" + this.value;
        }
        else if (dateTimeLabelFormat) { // datetime axis
            ret = time.dateFormat(dateTimeLabelFormat, value);
        }
        else if (i && numericSymbolDetector >= 1000) {
            // Decide whether we should add a numeric symbol like k (thousands)
            // or M (millions). If we are to enable this in tooltip or other
            // places as well, we can move this logic to the numberFormatter and
            // enable it by a parameter.
            while (i-- && typeof ret === 'undefined') {
                multi = Math.pow(numSymMagnitude, i + 1);
                if (
                // Only accept a numeric symbol when the distance is more
                // than a full unit. So for example if the symbol is k, we
                // don't accept numbers like 0.5k.
                numericSymbolDetector >= multi &&
                    // Accept one decimal before the symbol. Accepts 0.5k but
                    // not 0.25k. How does this work with the previous?
                    (value * 10) % multi === 0 &&
                    numericSymbols[i] !== null &&
                    value !== 0) { // #5480
                    ret = numberFormatter(value / multi, -1) + numericSymbols[i];
                }
            }
        }
        if (typeof ret === 'undefined') {
            if (Math.abs(value) >= 10000) { // add thousands separators
                ret = numberFormatter(value, -1);
            }
            else { // small numbers
                ret = numberFormatter(value, -1, void 0, ''); // #2466
            }
        }
        return ret;
    };
    /**
     * Get the minimum and maximum for the series of each axis. The function
     * analyzes the axis series and updates `this.dataMin` and `this.dataMax`.
     *
     * @private
     * @function Highcharts.Axis#getSeriesExtremes
     *
     * @fires Highcharts.Axis#event:afterGetSeriesExtremes
     * @fires Highcharts.Axis#event:getSeriesExtremes
     */
    Axis.prototype.getSeriesExtremes = function () {
        var axis = this, chart = axis.chart, xExtremes;
        fireEvent(this, 'getSeriesExtremes', null, function () {
            axis.hasVisibleSeries = false;
            // Reset properties in case we're redrawing (#3353)
            axis.dataMin = axis.dataMax = axis.threshold = null;
            axis.softThreshold = !axis.isXAxis;
            if (axis.stacking) {
                axis.stacking.buildStacks();
            }
            // loop through this axis' series
            axis.series.forEach(function (series) {
                if (series.visible ||
                    !chart.options.chart.ignoreHiddenSeries) {
                    var seriesOptions = series.options, xData, threshold = seriesOptions.threshold, seriesDataMin, seriesDataMax;
                    axis.hasVisibleSeries = true;
                    // Validate threshold in logarithmic axes
                    if (axis.positiveValuesOnly && threshold <= 0) {
                        threshold = null;
                    }
                    // Get dataMin and dataMax for X axes
                    if (axis.isXAxis) {
                        xData = series.xData;
                        if (xData.length) {
                            var isPositive = function (number) { return number > 0; };
                            xData = axis.logarithmic ?
                                xData.filter(axis.validatePositiveValue) :
                                xData;
                            xExtremes = series.getXExtremes(xData);
                            // If xData contains values which is not numbers,
                            // then filter them out. To prevent performance hit,
                            // we only do this after we have already found
                            // seriesDataMin because in most cases all data is
                            // valid. #5234.
                            seriesDataMin = xExtremes.min;
                            seriesDataMax = xExtremes.max;
                            if (!isNumber(seriesDataMin) &&
                                // #5010:
                                !(seriesDataMin instanceof Date)) {
                                xData = xData.filter(isNumber);
                                xExtremes = series.getXExtremes(xData);
                                // Do it again with valid data
                                seriesDataMin = xExtremes.min;
                                seriesDataMax = xExtremes.max;
                            }
                            if (xData.length) {
                                axis.dataMin = Math.min(pick(axis.dataMin, seriesDataMin), seriesDataMin);
                                axis.dataMax = Math.max(pick(axis.dataMax, seriesDataMax), seriesDataMax);
                            }
                        }
                        // Get dataMin and dataMax for Y axes, as well as handle
                        // stacking and processed data
                    }
                    else {
                        // Get this particular series extremes
                        var dataExtremes = series.applyExtremes();
                        // Get the dataMin and dataMax so far. If percentage is
                        // used, the min and max are always 0 and 100. If
                        // seriesDataMin and seriesDataMax is null, then series
                        // doesn't have active y data, we continue with nulls
                        if (isNumber(dataExtremes.dataMin)) {
                            seriesDataMin = dataExtremes.dataMin;
                            axis.dataMin = Math.min(pick(axis.dataMin, seriesDataMin), seriesDataMin);
                        }
                        if (isNumber(dataExtremes.dataMax)) {
                            seriesDataMax = dataExtremes.dataMax;
                            axis.dataMax = Math.max(pick(axis.dataMax, seriesDataMax), seriesDataMax);
                        }
                        // Adjust to threshold
                        if (defined(threshold)) {
                            axis.threshold = threshold;
                        }
                        // If any series has a hard threshold, it takes
                        // precedence
                        if (!seriesOptions.softThreshold ||
                            axis.positiveValuesOnly) {
                            axis.softThreshold = false;
                        }
                    }
                }
            });
        });
        fireEvent(this, 'afterGetSeriesExtremes');
    };
    /**
     * Translate from axis value to pixel position on the chart, or back. Use
     * the `toPixels` and `toValue` functions in applications.
     *
     * @private
     * @function Highcharts.Axis#translate
     *
     * @param {number} val
     * TO-DO: parameter description
     *
     * @param {boolean|null} [backwards]
     * TO-DO: parameter description
     *
     * @param {boolean|null} [cvsCoord]
     * TO-DO: parameter description
     *
     * @param {boolean|null} [old]
     * TO-DO: parameter description
     *
     * @param {boolean} [handleLog]
     * TO-DO: parameter description
     *
     * @param {number} [pointPlacement]
     * TO-DO: parameter description
     *
     * @return {number|undefined}
     */
    Axis.prototype.translate = function (val, backwards, cvsCoord, old, handleLog, pointPlacement) {
        var axis = this.linkedParent || this, // #1417
        sign = 1, cvsOffset = 0, localA = old ? axis.oldTransA : axis.transA, localMin = old ? axis.oldMin : axis.min, returnValue = 0, minPixelPadding = axis.minPixelPadding, doPostTranslate = (axis.isOrdinal ||
            axis.brokenAxis && axis.brokenAxis.hasBreaks ||
            (axis.logarithmic && handleLog)) && axis.lin2val;
        if (!localA) {
            localA = axis.transA;
        }
        // In vertical axes, the canvas coordinates start from 0 at the top like
        // in SVG.
        if (cvsCoord) {
            sign *= -1; // canvas coordinates inverts the value
            cvsOffset = axis.len;
        }
        // Handle reversed axis
        if (axis.reversed) {
            sign *= -1;
            cvsOffset -= sign * (axis.sector || axis.len);
        }
        // From pixels to value
        if (backwards) { // reverse translation
            val = val * sign + cvsOffset;
            val -= minPixelPadding;
            // from chart pixel to value:
            returnValue = val / localA + localMin;
            if (doPostTranslate) { // log and ordinal axes
                returnValue = axis.lin2val(returnValue);
            }
            // From value to pixels
        }
        else {
            if (doPostTranslate) { // log and ordinal axes
                val = axis.val2lin(val);
            }
            returnValue = isNumber(localMin) ?
                (sign * (val - localMin) * localA +
                    cvsOffset +
                    (sign * minPixelPadding) +
                    (isNumber(pointPlacement) ?
                        localA * pointPlacement :
                        0)) :
                void 0;
        }
        return returnValue;
    };
    /**
     * Translate a value in terms of axis units into pixels within the chart.
     *
     * @function Highcharts.Axis#toPixels
     *
     * @param {number} value
     * A value in terms of axis units.
     *
     * @param {boolean} paneCoordinates
     * Whether to return the pixel coordinate relative to the chart or just the
     * axis/pane itself.
     *
     * @return {number}
     * Pixel position of the value on the chart or axis.
     */
    Axis.prototype.toPixels = function (value, paneCoordinates) {
        return this.translate(value, false, !this.horiz, null, true) +
            (paneCoordinates ? 0 : this.pos);
    };
    /**
     * Translate a pixel position along the axis to a value in terms of axis
     * units.
     *
     * @function Highcharts.Axis#toValue
     *
     * @param {number} pixel
     * The pixel value coordinate.
     *
     * @param {boolean} [paneCoordinates=false]
     * Whether the input pixel is relative to the chart or just the axis/pane
     * itself.
     *
     * @return {number}
     * The axis value.
     */
    Axis.prototype.toValue = function (pixel, paneCoordinates) {
        return this.translate(pixel - (paneCoordinates ? 0 : this.pos), true, !this.horiz, null, true);
    };
    /**
     * Create the path for a plot line that goes from the given value on
     * this axis, across the plot to the opposite side. Also used internally for
     * grid lines and crosshairs.
     *
     * @function Highcharts.Axis#getPlotLinePath
     *
     * @param {Highcharts.AxisPlotLinePathOptionsObject} options
     * Options for the path.
     *
     * @return {Highcharts.SVGPathArray|null}
     * The SVG path definition for the plot line.
     */
    Axis.prototype.getPlotLinePath = function (options) {
        var axis = this, chart = axis.chart, axisLeft = axis.left, axisTop = axis.top, old = options.old, value = options.value, translatedValue = options.translatedValue, lineWidth = options.lineWidth, force = options.force, x1, y1, x2, y2, cHeight = (old && chart.oldChartHeight) || chart.chartHeight, cWidth = (old && chart.oldChartWidth) || chart.chartWidth, skip, transB = axis.transB, evt;
        // eslint-disable-next-line valid-jsdoc
        /**
         * Check if x is between a and b. If not, either move to a/b
         * or skip, depending on the force parameter.
         * @private
         */
        function between(x, a, b) {
            if (force !== 'pass' && x < a || x > b) {
                if (force) {
                    x = clamp(x, a, b);
                }
                else {
                    skip = true;
                }
            }
            return x;
        }
        evt = {
            value: value,
            lineWidth: lineWidth,
            old: old,
            force: force,
            acrossPanes: options.acrossPanes,
            translatedValue: translatedValue
        };
        fireEvent(this, 'getPlotLinePath', evt, function (e) {
            translatedValue = pick(translatedValue, axis.translate(value, null, null, old));
            // Keep the translated value within sane bounds, and avoid Infinity
            // to fail the isNumber test (#7709).
            translatedValue = clamp(translatedValue, -1e5, 1e5);
            x1 = x2 = Math.round(translatedValue + transB);
            y1 = y2 = Math.round(cHeight - translatedValue - transB);
            if (!isNumber(translatedValue)) { // no min or max
                skip = true;
                force = false; // #7175, don't force it when path is invalid
            }
            else if (axis.horiz) {
                y1 = axisTop;
                y2 = cHeight - axis.bottom;
                x1 = x2 = between(x1, axisLeft, axisLeft + axis.width);
            }
            else {
                x1 = axisLeft;
                x2 = cWidth - axis.right;
                y1 = y2 = between(y1, axisTop, axisTop + axis.height);
            }
            e.path = skip && !force ?
                null :
                chart.renderer.crispLine([['M', x1, y1], ['L', x2, y2]], lineWidth || 1);
        });
        return evt.path;
    };
    /**
     * Internal function to et the tick positions of a linear axis to round
     * values like whole tens or every five.
     *
     * @function Highcharts.Axis#getLinearTickPositions
     *
     * @param {number} tickInterval
     * The normalized tick interval.
     *
     * @param {number} min
     * Axis minimum.
     *
     * @param {number} max
     * Axis maximum.
     *
     * @return {Array<number>}
     * An array of axis values where ticks should be placed.
     */
    Axis.prototype.getLinearTickPositions = function (tickInterval, min, max) {
        var pos, lastPos, roundedMin = correctFloat(Math.floor(min / tickInterval) * tickInterval), roundedMax = correctFloat(Math.ceil(max / tickInterval) * tickInterval), tickPositions = [], precision;
        // When the precision is higher than what we filter out in
        // correctFloat, skip it (#6183).
        if (correctFloat(roundedMin + tickInterval) === roundedMin) {
            precision = 20;
        }
        // For single points, add a tick regardless of the relative position
        // (#2662, #6274)
        if (this.single) {
            return [min];
        }
        // Populate the intermediate values
        pos = roundedMin;
        while (pos <= roundedMax) {
            // Place the tick on the rounded value
            tickPositions.push(pos);
            // Always add the raw tickInterval, not the corrected one.
            pos = correctFloat(pos + tickInterval, precision);
            // If the interval is not big enough in the current min - max range
            // to actually increase the loop variable, we need to break out to
            // prevent endless loop. Issue #619
            if (pos === lastPos) {
                break;
            }
            // Record the last value
            lastPos = pos;
        }
        return tickPositions;
    };
    /**
     * Resolve the new minorTicks/minorTickInterval options into the legacy
     * loosely typed minorTickInterval option.
     *
     * @function Highcharts.Axis#getMinorTickInterval
     *
     * @return {number|"auto"|null}
     */
    Axis.prototype.getMinorTickInterval = function () {
        var options = this.options;
        if (options.minorTicks === true) {
            return pick(options.minorTickInterval, 'auto');
        }
        if (options.minorTicks === false) {
            return null;
        }
        return options.minorTickInterval;
    };
    /**
     * Internal function to return the minor tick positions. For logarithmic
     * axes, the same logic as for major ticks is reused.
     *
     * @function Highcharts.Axis#getMinorTickPositions
     *
     * @return {Array<number>}
     * An array of axis values where ticks should be placed.
     */
    Axis.prototype.getMinorTickPositions = function () {
        var axis = this, options = axis.options, tickPositions = axis.tickPositions, minorTickInterval = axis.minorTickInterval, minorTickPositions = [], pos, pointRangePadding = axis.pointRangePadding || 0, min = axis.min - pointRangePadding, // #1498
        max = axis.max + pointRangePadding, // #1498
        range = max - min;
        // If minor ticks get too dense, they are hard to read, and may cause
        // long running script. So we don't draw them.
        if (range && range / minorTickInterval < axis.len / 3) { // #3875
            var logarithmic_1 = axis.logarithmic;
            if (logarithmic_1) {
                // For each interval in the major ticks, compute the minor ticks
                // separately.
                this.paddedTicks.forEach(function (_pos, i, paddedTicks) {
                    if (i) {
                        minorTickPositions.push.apply(minorTickPositions, logarithmic_1.getLogTickPositions(minorTickInterval, paddedTicks[i - 1], paddedTicks[i], true));
                    }
                });
            }
            else if (axis.dateTime &&
                this.getMinorTickInterval() === 'auto') { // #1314
                minorTickPositions = minorTickPositions.concat(axis.getTimeTicks(axis.dateTime.normalizeTimeTickInterval(minorTickInterval), min, max, options.startOfWeek));
            }
            else {
                for (pos = min + (tickPositions[0] - min) % minorTickInterval; pos <= max; pos += minorTickInterval) {
                    // Very, very, tight grid lines (#5771)
                    if (pos === minorTickPositions[0]) {
                        break;
                    }
                    minorTickPositions.push(pos);
                }
            }
        }
        if (minorTickPositions.length !== 0) {
            axis.trimTicks(minorTickPositions); // #3652 #3743 #1498 #6330
        }
        return minorTickPositions;
    };
    /**
     * Adjust the min and max for the minimum range. Keep in mind that the
     * series data is not yet processed, so we don't have information on data
     * cropping and grouping, or updated `axis.pointRange` or
     * `series.pointRange`. The data can't be processed until we have finally
     * established min and max.
     *
     * @private
     * @function Highcharts.Axis#adjustForMinRange
     */
    Axis.prototype.adjustForMinRange = function () {
        var axis = this, options = axis.options, min = axis.min, max = axis.max, log = axis.logarithmic, zoomOffset, spaceAvailable, closestDataRange, i, distance, xData, loopLength, minArgs, maxArgs, minRange;
        // Set the automatic minimum range based on the closest point distance
        if (axis.isXAxis &&
            typeof axis.minRange === 'undefined' &&
            !log) {
            if (defined(options.min) || defined(options.max)) {
                axis.minRange = null; // don't do this again
            }
            else {
                // Find the closest distance between raw data points, as opposed
                // to closestPointRange that applies to processed points
                // (cropped and grouped)
                axis.series.forEach(function (series) {
                    xData = series.xData;
                    loopLength = series.xIncrement ? 1 : xData.length - 1;
                    for (i = loopLength; i > 0; i--) {
                        distance = xData[i] - xData[i - 1];
                        if (typeof closestDataRange === 'undefined' ||
                            distance < closestDataRange) {
                            closestDataRange = distance;
                        }
                    }
                });
                axis.minRange = Math.min(closestDataRange * 5, axis.dataMax - axis.dataMin);
            }
        }
        // if minRange is exceeded, adjust
        if (max - min < axis.minRange) {
            spaceAvailable =
                axis.dataMax - axis.dataMin >=
                    axis.minRange;
            minRange = axis.minRange;
            zoomOffset = (minRange - max + min) / 2;
            // if min and max options have been set, don't go beyond it
            minArgs = [
                min - zoomOffset,
                pick(options.min, min - zoomOffset)
            ];
            // If space is available, stay within the data range
            if (spaceAvailable) {
                minArgs[2] = axis.logarithmic ?
                    axis.logarithmic.log2lin(axis.dataMin) :
                    axis.dataMin;
            }
            min = arrayMax(minArgs);
            maxArgs = [
                min + minRange,
                pick(options.max, min + minRange)
            ];
            // If space is availabe, stay within the data range
            if (spaceAvailable) {
                maxArgs[2] = log ?
                    log.log2lin(axis.dataMax) :
                    axis.dataMax;
            }
            max = arrayMin(maxArgs);
            // now if the max is adjusted, adjust the min back
            if (max - min < minRange) {
                minArgs[0] = max - minRange;
                minArgs[1] = pick(options.min, max - minRange);
                min = arrayMax(minArgs);
            }
        }
        // Record modified extremes
        axis.min = min;
        axis.max = max;
    };
    // eslint-disable-next-line valid-jsdoc
    /**
     * Find the closestPointRange across all series.
     *
     * @private
     * @function Highcharts.Axis#getClosest
     */
    Axis.prototype.getClosest = function () {
        var ret;
        if (this.categories) {
            ret = 1;
        }
        else {
            this.series.forEach(function (series) {
                var seriesClosest = series.closestPointRange, visible = series.visible ||
                    !series.chart.options.chart.ignoreHiddenSeries;
                if (!series.noSharedTooltip &&
                    defined(seriesClosest) &&
                    visible) {
                    ret = defined(ret) ?
                        Math.min(ret, seriesClosest) :
                        seriesClosest;
                }
            });
        }
        return ret;
    };
    /**
     * When a point name is given and no x, search for the name in the existing
     * categories, or if categories aren't provided, search names or create a
     * new category (#2522).
     * @private
     * @function Highcharts.Axis#nameToX
     *
     * @param {Highcharts.Point} point
     * The point to inspect.
     *
     * @return {number}
     * The X value that the point is given.
     */
    Axis.prototype.nameToX = function (point) {
        var explicitCategories = isArray(this.categories), names = explicitCategories ? this.categories : this.names, nameX = point.options.x, x;
        point.series.requireSorting = false;
        if (!defined(nameX)) {
            nameX = this.options.uniqueNames === false ?
                point.series.autoIncrement() :
                (explicitCategories ?
                    names.indexOf(point.name) :
                    pick(names.keys[point.name], -1));
        }
        if (nameX === -1) { // Not found in currenct categories
            if (!explicitCategories) {
                x = names.length;
            }
        }
        else {
            x = nameX;
        }
        // Write the last point's name to the names array
        if (typeof x !== 'undefined') {
            this.names[x] = point.name;
            // Backwards mapping is much faster than array searching (#7725)
            this.names.keys[point.name] = x;
        }
        return x;
    };
    /**
     * When changes have been done to series data, update the axis.names.
     *
     * @private
     * @function Highcharts.Axis#updateNames
     */
    Axis.prototype.updateNames = function () {
        var axis = this, names = this.names, i = names.length;
        if (i > 0) {
            Object.keys(names.keys).forEach(function (key) {
                delete (names.keys)[key];
            });
            names.length = 0;
            this.minRange = this.userMinRange; // Reset
            (this.series || []).forEach(function (series) {
                // Reset incrementer (#5928)
                series.xIncrement = null;
                // When adding a series, points are not yet generated
                if (!series.points || series.isDirtyData) {
                    // When we're updating the series with data that is longer
                    // than it was, and cropThreshold is passed, we need to make
                    // sure that the axis.max is increased _before_ running the
                    // premature processData. Otherwise this early iteration of
                    // processData will crop the points to axis.max, and the
                    // names array will be too short (#5857).
                    axis.max = Math.max(axis.max, series.xData.length - 1);
                    series.processData();
                    series.generatePoints();
                }
                series.data.forEach(function (point, i) {
                    var x;
                    if (point &&
                        point.options &&
                        typeof point.name !== 'undefined' // #9562
                    ) {
                        x = axis.nameToX(point);
                        if (typeof x !== 'undefined' && x !== point.x) {
                            point.x = x;
                            series.xData[i] = x;
                        }
                    }
                });
            });
        }
    };
    /**
     * Update translation information.
     *
     * @private
     * @function Highcharts.Axis#setAxisTranslation
     *
     * @param {boolean} [saveOld]
     * TO-DO: parameter description
     *
     * @fires Highcharts.Axis#event:afterSetAxisTranslation
     */
    Axis.prototype.setAxisTranslation = function (saveOld) {
        var axis = this, range = axis.max - axis.min, pointRange = axis.axisPointRange || 0, closestPointRange, minPointOffset = 0, pointRangePadding = 0, linkedParent = axis.linkedParent, ordinalCorrection, hasCategories = !!axis.categories, transA = axis.transA, isXAxis = axis.isXAxis;
        // Adjust translation for padding. Y axis with categories need to go
        // through the same (#1784).
        if (isXAxis || hasCategories || pointRange) {
            // Get the closest points
            closestPointRange = axis.getClosest();
            if (linkedParent) {
                minPointOffset = linkedParent.minPointOffset;
                pointRangePadding = linkedParent.pointRangePadding;
            }
            else {
                axis.series.forEach(function (series) {
                    var seriesPointRange = hasCategories ?
                        1 :
                        (isXAxis ?
                            pick(series.options.pointRange, closestPointRange, 0) :
                            (axis.axisPointRange || 0)), // #2806
                    pointPlacement = series.options.pointPlacement;
                    pointRange = Math.max(pointRange, seriesPointRange);
                    if (!axis.single || hasCategories) {
                        // TODO: series should internally set x- and y-
                        // pointPlacement to simplify this logic.
                        var isPointPlacementAxis = series.is('xrange') ? !isXAxis : isXAxis;
                        // minPointOffset is the value padding to the left of
                        // the axis in order to make room for points with a
                        // pointRange, typically columns. When the
                        // pointPlacement option is 'between' or 'on', this
                        // padding does not apply.
                        minPointOffset = Math.max(minPointOffset, isPointPlacementAxis && isString(pointPlacement) ?
                            0 :
                            seriesPointRange / 2);
                        // Determine the total padding needed to the length of
                        // the axis to make room for the pointRange. If the
                        // series' pointPlacement is 'on', no padding is added.
                        pointRangePadding = Math.max(pointRangePadding, isPointPlacementAxis && pointPlacement === 'on' ?
                            0 :
                            seriesPointRange);
                    }
                });
            }
            // Record minPointOffset and pointRangePadding
            ordinalCorrection = axis.ordinal && axis.ordinal.slope && closestPointRange ?
                axis.ordinal.slope / closestPointRange :
                1; // #988, #1853
            axis.minPointOffset = minPointOffset =
                minPointOffset * ordinalCorrection;
            axis.pointRangePadding =
                pointRangePadding = pointRangePadding * ordinalCorrection;
            // pointRange means the width reserved for each point, like in a
            // column chart
            axis.pointRange = Math.min(pointRange, axis.single && hasCategories ? 1 : range);
            // closestPointRange means the closest distance between points. In
            // columns it is mostly equal to pointRange, but in lines pointRange
            // is 0 while closestPointRange is some other value
            if (isXAxis) {
                axis.closestPointRange = closestPointRange;
            }
        }
        // Secondary values
        if (saveOld) {
            axis.oldTransA = transA;
        }
        axis.translationSlope = axis.transA = transA =
            axis.staticScale ||
                axis.len / ((range + pointRangePadding) || 1);
        // Translation addend
        axis.transB = axis.horiz ? axis.left : axis.bottom;
        axis.minPixelPadding = transA * minPointOffset;
        fireEvent(this, 'afterSetAxisTranslation');
    };
    /**
     * @private
     * @function Highcharts.Axis#minFromRange
     *
     * @return {number}
     */
    Axis.prototype.minFromRange = function () {
        var axis = this;
        return axis.max - axis.range;
    };
    /**
     * Set the tick positions to round values and optionally extend the extremes
     * to the nearest tick.
     *
     * @private
     * @function Highcharts.Axis#setTickInterval
     *
     * @param {boolean} secondPass
     * TO-DO: parameter description
     *
     * @fires Highcharts.Axis#event:foundExtremes
     */
    Axis.prototype.setTickInterval = function (secondPass) {
        var axis = this, chart = axis.chart, log = axis.logarithmic, options = axis.options, isXAxis = axis.isXAxis, isLinked = axis.isLinked, maxPadding = options.maxPadding, minPadding = options.minPadding, length, linkedParentExtremes, tickIntervalOption = options.tickInterval, minTickInterval, tickPixelIntervalOption = options.tickPixelInterval, categories = axis.categories, threshold = isNumber(axis.threshold) ? axis.threshold : null, softThreshold = axis.softThreshold, thresholdMin, thresholdMax, hardMin, hardMax;
        if (!axis.dateTime && !categories && !isLinked) {
            this.getTickAmount();
        }
        // Min or max set either by zooming/setExtremes or initial options
        hardMin = pick(axis.userMin, options.min);
        hardMax = pick(axis.userMax, options.max);
        // Linked axis gets the extremes from the parent axis
        if (isLinked) {
            axis.linkedParent = chart[axis.coll][options.linkedTo];
            linkedParentExtremes = axis.linkedParent.getExtremes();
            axis.min = pick(linkedParentExtremes.min, linkedParentExtremes.dataMin);
            axis.max = pick(linkedParentExtremes.max, linkedParentExtremes.dataMax);
            if (options.type !== axis.linkedParent.options.type) {
                // Can't link axes of different type
                error(11, 1, chart);
            }
            // Initial min and max from the extreme data values
        }
        else {
            // Adjust to hard threshold
            if (softThreshold && defined(threshold)) {
                if (axis.dataMin >= threshold) {
                    thresholdMin = threshold;
                    minPadding = 0;
                }
                else if (axis.dataMax <= threshold) {
                    thresholdMax = threshold;
                    maxPadding = 0;
                }
            }
            axis.min = pick(hardMin, thresholdMin, axis.dataMin);
            axis.max = pick(hardMax, thresholdMax, axis.dataMax);
        }
        if (log) {
            if (axis.positiveValuesOnly &&
                !secondPass &&
                Math.min(axis.min, pick(axis.dataMin, axis.min)) <= 0) { // #978
                // Can't plot negative values on log axis
                error(10, 1, chart);
            }
            // The correctFloat cures #934, float errors on full tens. But it
            // was too aggressive for #4360 because of conversion back to lin,
            // therefore use precision 15.
            axis.min = correctFloat(log.log2lin(axis.min), 16);
            axis.max = correctFloat(log.log2lin(axis.max), 16);
        }
        // handle zoomed range
        if (axis.range && defined(axis.max)) {
            // #618, #6773:
            axis.userMin = axis.min = hardMin =
                Math.max(axis.dataMin, axis.minFromRange());
            axis.userMax = hardMax = axis.max;
            axis.range = null; // don't use it when running setExtremes
        }
        // Hook for Highstock Scroller. Consider combining with beforePadding.
        fireEvent(axis, 'foundExtremes');
        // Hook for adjusting this.min and this.max. Used by bubble series.
        if (axis.beforePadding) {
            axis.beforePadding();
        }
        // adjust min and max for the minimum range
        axis.adjustForMinRange();
        // Pad the values to get clear of the chart's edges. To avoid
        // tickInterval taking the padding into account, we do this after
        // computing tick interval (#1337).
        if (!categories &&
            !axis.axisPointRange &&
            !(axis.stacking && axis.stacking.usePercentage) &&
            !isLinked &&
            defined(axis.min) &&
            defined(axis.max)) {
            length = axis.max - axis.min;
            if (length) {
                if (!defined(hardMin) && minPadding) {
                    axis.min -= length * minPadding;
                }
                if (!defined(hardMax) && maxPadding) {
                    axis.max += length * maxPadding;
                }
            }
        }
        // Handle options for floor, ceiling, softMin and softMax (#6359)
        if (!isNumber(axis.userMin)) {
            if (isNumber(options.softMin) && options.softMin < axis.min) {
                axis.min = hardMin = options.softMin; // #6894
            }
            if (isNumber(options.floor)) {
                axis.min = Math.max(axis.min, options.floor);
            }
        }
        if (!isNumber(axis.userMax)) {
            if (isNumber(options.softMax) && options.softMax > axis.max) {
                axis.max = hardMax = options.softMax; // #6894
            }
            if (isNumber(options.ceiling)) {
                axis.max = Math.min(axis.max, options.ceiling);
            }
        }
        // When the threshold is soft, adjust the extreme value only if the data
        // extreme and the padded extreme land on either side of the threshold.
        // For example, a series of [0, 1, 2, 3] would make the yAxis add a tick
        // for -1 because of the default minPadding and startOnTick options.
        // This is prevented by the softThreshold option.
        if (softThreshold && defined(axis.dataMin)) {
            threshold = threshold || 0;
            if (!defined(hardMin) &&
                axis.min < threshold &&
                axis.dataMin >= threshold) {
                axis.min = axis.options.minRange ?
                    Math.min(threshold, axis.max -
                        axis.minRange) :
                    threshold;
            }
            else if (!defined(hardMax) &&
                axis.max > threshold &&
                axis.dataMax <= threshold) {
                axis.max = axis.options.minRange ?
                    Math.max(threshold, axis.min +
                        axis.minRange) :
                    threshold;
            }
        }
        // get tickInterval
        if (axis.min === axis.max ||
            typeof axis.min === 'undefined' ||
            typeof axis.max === 'undefined') {
            axis.tickInterval = 1;
        }
        else if (isLinked &&
            !tickIntervalOption &&
            tickPixelIntervalOption ===
                axis.linkedParent.options.tickPixelInterval) {
            axis.tickInterval = tickIntervalOption =
                axis.linkedParent.tickInterval;
        }
        else {
            axis.tickInterval = pick(tickIntervalOption, this.tickAmount ?
                ((axis.max - axis.min) /
                    Math.max(this.tickAmount - 1, 1)) :
                void 0, 
            // For categoried axis, 1 is default, for linear axis use
            // tickPix
            categories ?
                1 :
                // don't let it be more than the data range
                (axis.max - axis.min) *
                    tickPixelIntervalOption /
                    Math.max(axis.len, tickPixelIntervalOption));
        }
        // Now we're finished detecting min and max, crop and group series data.
        // This is in turn needed in order to find tick positions in ordinal
        // axes.
        if (isXAxis && !secondPass) {
            axis.series.forEach(function (series) {
                series.processData(axis.min !== axis.oldMin || axis.max !== axis.oldMax);
            });
        }
        // set the translation factor used in translate function
        axis.setAxisTranslation(true);
        // hook for ordinal axes and radial axes
        fireEvent(this, 'initialAxisTranslation');
        // In column-like charts, don't cramp in more ticks than there are
        // points (#1943, #4184)
        if (axis.pointRange && !tickIntervalOption) {
            axis.tickInterval = Math.max(axis.pointRange, axis.tickInterval);
        }
        // Before normalizing the tick interval, handle minimum tick interval.
        // This applies only if tickInterval is not defined.
        minTickInterval = pick(options.minTickInterval, 
        // In datetime axes, don't go below the data interval, except when
        // there are scatter-like series involved (#13369).
        axis.dateTime &&
            !axis.series.some(function (s) { return s.noSharedTooltip; }) ?
            axis.closestPointRange : 0);
        if (!tickIntervalOption && axis.tickInterval < minTickInterval) {
            axis.tickInterval = minTickInterval;
        }
        // for linear axes, get magnitude and normalize the interval
        if (!axis.dateTime && !axis.logarithmic && !tickIntervalOption) {
            axis.tickInterval = normalizeTickInterval(axis.tickInterval, void 0, getMagnitude(axis.tickInterval), pick(options.allowDecimals, 
            // If the tick interval is greather than 0.5, avoid
            // decimals, as linear axes are often used to render
            // discrete values. #3363. If a tick amount is set, allow
            // decimals by default, as it increases the chances for a
            // good fit.
            axis.tickInterval < 0.5 || this.tickAmount !== void 0), !!this.tickAmount);
        }
        // Prevent ticks from getting so close that we can't draw the labels
        if (!this.tickAmount) {
            axis.tickInterval = axis.unsquish();
        }
        this.setTickPositions();
    };
    /**
     * Now we have computed the normalized tickInterval, get the tick positions.
     *
     * @private
     * @function Highcharts.Axis#setTickPositions
     *
     * @fires Highcharts.Axis#event:afterSetTickPositions
     */
    Axis.prototype.setTickPositions = function () {
        var axis = this, options = this.options, tickPositions, tickPositionsOption = options.tickPositions, minorTickIntervalOption = this.getMinorTickInterval(), tickPositioner = options.tickPositioner, hasVerticalPanning = this.hasVerticalPanning(), isColorAxis = this.coll === 'colorAxis', startOnTick = (isColorAxis || !hasVerticalPanning) && options.startOnTick, endOnTick = (isColorAxis || !hasVerticalPanning) && options.endOnTick;
        // Set the tickmarkOffset
        this.tickmarkOffset = (this.categories &&
            options.tickmarkPlacement === 'between' &&
            this.tickInterval === 1) ? 0.5 : 0; // #3202
        // get minorTickInterval
        this.minorTickInterval =
            minorTickIntervalOption === 'auto' &&
                this.tickInterval ?
                this.tickInterval / 5 :
                minorTickIntervalOption;
        // When there is only one point, or all points have the same value on
        // this axis, then min and max are equal and tickPositions.length is 0
        // or 1. In this case, add some padding in order to center the point,
        // but leave it with one tick. #1337.
        this.single =
            this.min === this.max &&
                defined(this.min) &&
                !this.tickAmount &&
                (
                // Data is on integer (#6563)
                parseInt(this.min, 10) === this.min ||
                    // Between integers and decimals are not allowed (#6274)
                    options.allowDecimals !== false);
        /**
         * Contains the current positions that are laid out on the axis. The
         * positions are numbers in terms of axis values. In a category axis
         * they are integers, in a datetime axis they are also integers, but
         * designating milliseconds.
         *
         * This property is read only - for modifying the tick positions, use
         * the `tickPositioner` callback or [axis.tickPositions(
         * https://api.highcharts.com/highcharts/xAxis.tickPositions) option
         * instead.
         *
         * @name Highcharts.Axis#tickPositions
         * @type {Highcharts.AxisTickPositionsArray|undefined}
         */
        this.tickPositions =
            // Find the tick positions. Work on a copy (#1565)
            tickPositions =
                (tickPositionsOption && tickPositionsOption.slice());
        if (!tickPositions) {
            // Too many ticks (#6405). Create a friendly warning and provide two
            // ticks so at least we can show the data series.
            if ((!axis.ordinal || !axis.ordinal.positions) &&
                ((this.max - this.min) /
                    this.tickInterval >
                    Math.max(2 * this.len, 200))) {
                tickPositions = [this.min, this.max];
                error(19, false, this.chart);
            }
            else if (axis.dateTime) {
                tickPositions = axis.getTimeTicks(axis.dateTime.normalizeTimeTickInterval(this.tickInterval, options.units), this.min, this.max, options.startOfWeek, axis.ordinal && axis.ordinal.positions, this.closestPointRange, true);
            }
            else if (axis.logarithmic) {
                tickPositions = axis.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
            }
            else {
                tickPositions = this.getLinearTickPositions(this.tickInterval, this.min, this.max);
            }
            // Too dense ticks, keep only the first and last (#4477)
            if (tickPositions.length > this.len) {
                tickPositions = [tickPositions[0], tickPositions.pop()];
                // Reduce doubled value (#7339)
                if (tickPositions[0] === tickPositions[1]) {
                    tickPositions.length = 1;
                }
            }
            this.tickPositions = tickPositions;
            // Run the tick positioner callback, that allows modifying auto tick
            // positions.
            if (tickPositioner) {
                tickPositioner = tickPositioner.apply(axis, [this.min, this.max]);
                if (tickPositioner) {
                    this.tickPositions = tickPositions = tickPositioner;
                }
            }
        }
        // Reset min/max or remove extremes based on start/end on tick
        this.paddedTicks = tickPositions.slice(0); // Used for logarithmic minor
        this.trimTicks(tickPositions, startOnTick, endOnTick);
        if (!this.isLinked) {
            // Substract half a unit (#2619, #2846, #2515, #3390),
            // but not in case of multiple ticks (#6897)
            if (this.single &&
                tickPositions.length < 2 &&
                !this.categories &&
                !this.series.some(function (s) {
                    return (s.is('heatmap') && s.options.pointPlacement === 'between');
                })) {
                this.min -= 0.5;
                this.max += 0.5;
            }
            if (!tickPositionsOption && !tickPositioner) {
                this.adjustTickAmount();
            }
        }
        fireEvent(this, 'afterSetTickPositions');
    };
    /**
     * Handle startOnTick and endOnTick by either adapting to padding min/max or
     * rounded min/ma