/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/app/index.ts":
/*!*************************************!*\
  !*** ./src/components/app/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const markup_1 = __webpack_require__(/*! ./markup */ "./src/components/app/markup.ts");
const style_1 = __importDefault(__webpack_require__(/*! ./style */ "./src/components/app/style.ts"));
const button_1 = __importDefault(__webpack_require__(/*! ../button */ "./src/components/button/index.ts"));
const select_1 = __importDefault(__webpack_require__(/*! ../select */ "./src/components/select/index.ts"));
const chart_1 = __importDefault(__webpack_require__(/*! ../chart */ "./src/components/chart/index.ts"));
const select_2 = __webpack_require__(/*! ../../types/select */ "./src/types/select.ts");
const chart_2 = __webpack_require__(/*! ../../types/chart */ "./src/types/chart.ts");
const AppBlock = (initAppPromise) => {
    const html = document.createElement('div');
    html.id = 'app-block';
    html.innerHTML = markup_1.markup;
    // init components
    const temperatureBtn = button_1.default({
        name: chart_2.EChartTypes.TEMPERATURE,
        text: 'Температура',
    });
    const precipitationBtn = button_1.default({
        name: chart_2.EChartTypes.PRECIPITATION,
        text: 'Осадки',
    });
    const fromDateSelect = select_1.default({ name: select_2.ESelectTypes.FROM_DATE });
    const toDateSelect = select_1.default({ name: select_2.ESelectTypes.TO_DATE });
    const lineChart = chart_1.default(initAppPromise);
    // appending btns
    const leftFirstBtnPlace = html.querySelector('.left-btn__first');
    leftFirstBtnPlace && leftFirstBtnPlace.appendChild(temperatureBtn.html);
    const leftSecondBtnPlace = html.querySelector('.left-btn__second');
    leftSecondBtnPlace && leftSecondBtnPlace.appendChild(precipitationBtn.html);
    // appending select
    const rightFirstSelectPlace = html.querySelector('.right-select__first');
    rightFirstSelectPlace &&
        rightFirstSelectPlace.appendChild(fromDateSelect.html);
    const rightSecondSelectPlace = html.querySelector('.right-select__second');
    rightSecondSelectPlace &&
        rightSecondSelectPlace.appendChild(toDateSelect.html);
    // appending chart
    const rightChartPlace = html.querySelector('.content__right');
    rightChartPlace && rightChartPlace.appendChild(lineChart.html);
    return {
        html,
        style: [
            style_1.default,
            temperatureBtn.style[0],
            fromDateSelect.style[0],
            lineChart.style[0],
        ],
    };
};
exports.default = AppBlock;


/***/ }),

/***/ "./src/components/app/markup.ts":
/*!**************************************!*\
  !*** ./src/components/app/markup.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.markup = void 0;
exports.markup = `
  <div class="app">
    <div class="app__container">
        <h1>Архив метеослужбы</h1>
        <div class="content">
            <div class="content__left">
                <div class="left-btn left-btn__first"></div>
                <div class="left-btn left-btn__second"></div>
            </div>
            <div class="content__right">
                    <div class="right-select">
                        <div class="right-select right-select__first"></div>
                        <div class="right-select right-select__second"></div>  
                  </div>
            </div>
        </div>
    </div>
  </div>
`;


/***/ }),

/***/ "./src/components/app/style.ts":
/*!*************************************!*\
  !*** ./src/components/app/style.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const style_1 = __webpack_require__(/*! ../chart/utils/style */ "./src/components/chart/utils/style.ts");
const css = `
  .app {
      box-sizing: border-box;
      min-width: 600px;
      min-height: 100%;
   }
   .app__container{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
   }
   
   .content{
    display: flex;
    margin: 0 -15px;
   }
   .content__left{
   padding: 0 15px;
   width: 100%;
   max-width: 200px;
   }
     .content__right{
        padding: 0 15px;
      flex-grow: 2;
   }
   .left-btn{
    margin-top: 12px;
   }
   .left-btn__first{
   margin-top: 0;
   }
   .right-select{
         display: flex;
         width: 100%;
   }
`;
exports.default = style_1.createStyle(css);


/***/ }),

/***/ "./src/components/button/connect.ts":
/*!******************************************!*\
  !*** ./src/components/button/connect.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonConnectHoc = void 0;
const localstorage_1 = __importDefault(__webpack_require__(/*! ../../models/localstorage */ "./src/models/localstorage.ts"));
exports.buttonConnectHoc = (Button) => ({ name, text }) => {
    const chartType = localstorage_1.default.getData('chartType');
    const onClick = (name) => localstorage_1.default.setData('chartType', name);
    const btn = Button({ name, isActive: chartType === name, text, onClick });
    localstorage_1.default.subscribe('chartType', type => {
        if (typeof btn !== 'undefined') {
            // @ts-ignore
            btn.update({ isActive: type === name });
        }
    });
    return btn;
};


/***/ }),

/***/ "./src/components/button/index.ts":
/*!****************************************!*\
  !*** ./src/components/button/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const markup_1 = __webpack_require__(/*! ./markup */ "./src/components/button/markup.ts");
const style_1 = __importDefault(__webpack_require__(/*! ./style */ "./src/components/button/style.ts"));
const connect_1 = __webpack_require__(/*! ./connect */ "./src/components/button/connect.ts");
const Button = ({ name, isActive, text, onClick, }) => {
    const html = document.createElement('div');
    html.id = `button-block#${name}`;
    html.classList.add('btn-block');
    html.innerHTML = markup_1.markup(name, text);
    // getting button elements
    const button = html.querySelector('button');
    // subscribe to click on this button
    if (button) {
        isActive && button.classList.add('is-active');
        button.addEventListener('click', () => onClick(name));
    }
    // updating props cb
    const update = ({ isActive }) => {
        if (button) {
            isActive
                ? button.classList.add('is-active')
                : button.classList.remove('is-active');
        }
    };
    return {
        html,
        style: [style_1.default],
        update,
    };
};
exports.default = connect_1.buttonConnectHoc(Button);


/***/ }),

/***/ "./src/components/button/markup.ts":
/*!*****************************************!*\
  !*** ./src/components/button/markup.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.markup = void 0;
exports.markup = (name, text) => `
  <button class="btn" id="${name}">${text}</button>
`;


/***/ }),

/***/ "./src/components/button/style.ts":
/*!****************************************!*\
  !*** ./src/components/button/style.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const style_1 = __webpack_require__(/*! ../chart/utils/style */ "./src/components/chart/utils/style.ts");
const css = `
  .btn {
    width: 100%;
    color: #1950bb;
    border: 1px solid #1950bb;
    background-color: #fff;
    padding: 0.75em 1em;
    display: inline-block;
    text-decoration: none;
    border-radius: 4px;
    font: 16px "Helvetica Neue", Helvetica, sans-serif;
    cursor: pointer;
    transition: background-color .2s, color .2s, border-color .2s;
  }
  
  button.is-active {
    background-color: #1950bb;
    color: #fff;
    }
    
    .btn-block{
    display: block;
    }
`;
exports.default = style_1.createStyle(css);


/***/ }),

/***/ "./src/components/chart/connect.ts":
/*!*****************************************!*\
  !*** ./src/components/chart/connect.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chartConnectHoc = void 0;
const localstorage_1 = __importDefault(__webpack_require__(/*! ../../models/localstorage */ "./src/models/localstorage.ts"));
const dates_1 = __webpack_require__(/*! ./utils/dates */ "./src/components/chart/utils/dates.ts");
const database_1 = __importDefault(__webpack_require__(/*! ../../models/database */ "./src/models/database.ts"));
const getPreparedChartData = async (initAppPromise, chartType, from, to) => {
    await initAppPromise;
    return database_1.default.getValues(chartType, from, to);
};
exports.chartConnectHoc = (Chart) => (initAppPromise) => {
    const chartType = localstorage_1.default.getData('chartType');
    let from = dates_1.prepareFromDate(localstorage_1.default.getData('fromValue'));
    let to = dates_1.prepareToDate(localstorage_1.default.getData('toValue'));
    // getting prepared data from IndexedDb
    const data = getPreparedChartData(initAppPromise, chartType, from, to);
    const chart = Chart({
        data,
        from,
        to,
    });
    // TODO: improve subscribe to array key ['fromValue', 'toValue']
    localstorage_1.default.subscribe('fromValue', (nextFrom) => {
        if (typeof chart !== 'undefined') {
            from = dates_1.prepareFromDate(nextFrom);
            const nextData = getPreparedChartData(initAppPromise, chartType, from, to);
            // @ts-ignore
            chart.update({ to, data: nextData, from });
        }
    });
    localstorage_1.default.subscribe('toValue', (nextTo) => {
        if (typeof chart !== 'undefined') {
            to = dates_1.prepareToDate(nextTo);
            const nextData = getPreparedChartData(initAppPromise, chartType, from, to);
            // @ts-ignore
            chart.update({ from, data: nextData, to });
        }
    });
    // TODO: add abort system (only last getValues)
    localstorage_1.default.subscribe('chartType', (chartType) => {
        if (typeof chart !== 'undefined') {
            const nextData = getPreparedChartData(initAppPromise, chartType, from, to);
            // @ts-ignore
            chart.update({ from, data: nextData, to });
        }
    });
    return chart;
};


/***/ }),

/***/ "./src/components/chart/index.ts":
/*!***************************************!*\
  !*** ./src/components/chart/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = __webpack_require__(/*! ../../constants/canvas */ "./src/constants/canvas.ts");
const common_1 = __webpack_require__(/*! ./utils/common */ "./src/components/chart/utils/common.ts");
const connect_1 = __webpack_require__(/*! ./connect */ "./src/components/chart/connect.ts");
const style_1 = __importDefault(__webpack_require__(/*! ./style */ "./src/components/chart/style.ts"));
const grid_1 = __webpack_require__(/*! ./render/grid */ "./src/components/chart/render/grid.ts");
const initChart = (canvas, container, from, to, data) => {
    const dpr = common_1.getPixelRatio();
    const width = container.offsetWidth;
    const height = width / canvas_1.CHART_WIDTH_HEIGHT_ASPECT_RATIO;
    container.style.cssText = `max-width: ${width}px; max-height: ${height}px;`;
    canvas.width = width * dpr;
    canvas.height = Math.round(height) * dpr;
    const ctx = canvas.getContext('2d');
    if (ctx) {
        // scale to device pixel ratio
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.translate(0, canvas.height);
        ctx.rotate(-Math.PI / 2);
        // adding simple loading
        ctx.save();
        ctx.rotate(Math.PI / 2);
        ctx.font = '16px serif';
        ctx.fillText('Loading... (fetch and save data to IndexedDb)', 350, -canvas.height + 50);
        ctx.restore();
        data.then(prepared => {
            // should change height and width after rotate to Math.PI / 2
            ctx.clearRect(0, 0, canvas.height, canvas.width);
            grid_1.createChartGrid(canvas, ctx, prepared, from, to);
        });
    }
};
const LineChart = ({ from, to, data, }) => {
    const html = document.createElement('div');
    html.id = 'line-chart__block';
    const canvas = document.createElement('canvas');
    canvas.id = 'line-chart';
    html.appendChild(canvas);
    // TODO: maybe add resize event?
    window.addEventListener('load', () => {
        initChart(canvas, html, from, to, data);
    });
    const update = ({ from, to, data }) => {
        initChart(canvas, html, from, to, data);
    };
    return {
        html,
        style: [style_1.default],
        update,
    };
};
exports.default = connect_1.chartConnectHoc(LineChart);


/***/ }),

/***/ "./src/components/chart/render/grid.ts":
/*!*********************************************!*\
  !*** ./src/components/chart/render/grid.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createChartGrid = void 0;
const polyline_1 = __webpack_require__(/*! ./polyline */ "./src/components/chart/render/polyline.ts");
const yAxis_1 = __webpack_require__(/*! ./yAxis */ "./src/components/chart/render/yAxis.ts");
const xAxis_1 = __webpack_require__(/*! ./xAxis */ "./src/components/chart/render/xAxis.ts");
exports.createChartGrid = (canvas, context, data, from, to) => {
    xAxis_1.createXAxis(canvas, context, data);
    yAxis_1.createYAxis(canvas, context, data, from, to);
    polyline_1.createPolyline(canvas, context, data, from, to);
};


/***/ }),

/***/ "./src/components/chart/render/polyline.ts":
/*!*************************************************!*\
  !*** ./src/components/chart/render/polyline.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createPolyline = void 0;
const canvas_1 = __webpack_require__(/*! ../../../constants/canvas */ "./src/constants/canvas.ts");
const common_1 = __webpack_require__(/*! ../utils/common */ "./src/components/chart/utils/common.ts");
const dates_1 = __webpack_require__(/*! ../utils/dates */ "./src/components/chart/utils/dates.ts");
exports.createPolyline = (canvas, context, data, from, to) => {
    const { data: dotes, max, min } = data;
    const valInterval = Math.abs(max - min);
    // pixel step for 1 value
    const valPixelStep = (common_1.getWorkHeightWithPixelRatio(canvas) - 2 * canvas_1.GRID_OFFSET) / valInterval;
    // axis width = canvas work width - offset from top and bottom
    const workAxisWidth = common_1.getWorkWidthWithPixelRatio(canvas) - 2 * canvas_1.GRID_OFFSET;
    context.restore();
    context.strokeStyle = canvas_1.POLYLINE_LINE_COLOR;
    context.lineWidth = 1;
    context.beginPath();
    for (let i = 0; i < dotes.length; i++) {
        const { t: date, v: value } = dotes[i];
        const valueOffset = value - min;
        // offset in pixel for current date of from date
        const datePixelOffset = dates_1.getPixelOffsetToDate(from, to, date, workAxisWidth);
        const x = common_1.getXWithPixelRatio(valPixelStep * valueOffset, canvas) + canvas_1.GRID_OFFSET;
        const y = datePixelOffset + canvas_1.GRID_OFFSET;
        // first point should use moveTo
        if (i === 0) {
            context.moveTo(x, y);
        }
        else {
            context.lineTo(x, y);
        }
    }
    context.stroke();
};


/***/ }),

/***/ "./src/components/chart/render/xAxis.ts":
/*!**********************************************!*\
  !*** ./src/components/chart/render/xAxis.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createXAxis = void 0;
const canvas_1 = __webpack_require__(/*! ../../../constants/canvas */ "./src/constants/canvas.ts");
const common_1 = __webpack_require__(/*! ../utils/common */ "./src/components/chart/utils/common.ts");
exports.createXAxis = (canvas, context, data) => {
    context.fillStyle = canvas_1.GRID_LINE_COLOR;
    context.lineWidth = 1;
    // append offset for axis line (in top and bottom)
    const gutterOffset = canvas_1.GRID_OFFSET / 3;
    const fontOffset = canvas_1.AXIS_FONT_SIZE / 3;
    const valInterval = Math.abs(data.max - data.min);
    const valueStep = valInterval / canvas_1.MAX_X_RENDER_VALUES_COUNT;
    // axis height = canvas work height - offset from top and bottom
    const pixelStep = (common_1.getWorkHeightWithPixelRatio(canvas) - 2 * canvas_1.GRID_OFFSET) /
        canvas_1.MAX_X_RENDER_VALUES_COUNT;
    // creating Axis line
    context.beginPath();
    context.moveTo(common_1.getXWithPixelRatio(canvas_1.GRID_OFFSET - gutterOffset, canvas), canvas_1.GRID_OFFSET);
    context.lineTo(canvas.height - canvas_1.GRID_OFFSET + gutterOffset, canvas_1.GRID_OFFSET);
    context.stroke();
    // creating text values and tiny line
    for (let i = 0; i <= canvas_1.MAX_X_RENDER_VALUES_COUNT; i++) {
        context.save();
        context.translate(common_1.getXWithPixelRatio(canvas_1.GRID_OFFSET + pixelStep * i - fontOffset, canvas), 0);
        context.rotate(Math.PI / 2);
        const text = `${Math.ceil(data.min + valueStep * i)}`;
        context.font = `${canvas_1.AXIS_FONT_SIZE}px ${canvas_1.AXIS_FONT}`;
        context.fillText(text, 0, 0);
        context.restore();
        context.beginPath();
        context.moveTo(common_1.getXWithPixelRatio(canvas_1.GRID_OFFSET + pixelStep * i, canvas), canvas_1.GRID_OFFSET);
        context.lineTo(common_1.getXWithPixelRatio(canvas_1.GRID_OFFSET + pixelStep * i, canvas), 25);
        context.stroke();
    }
};


/***/ }),

/***/ "./src/components/chart/render/yAxis.ts":
/*!**********************************************!*\
  !*** ./src/components/chart/render/yAxis.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createYAxis = void 0;
const canvas_1 = __webpack_require__(/*! ../../../constants/canvas */ "./src/constants/canvas.ts");
const dates_1 = __webpack_require__(/*! ../utils/dates */ "./src/components/chart/utils/dates.ts");
const common_1 = __webpack_require__(/*! ../utils/common */ "./src/components/chart/utils/common.ts");
exports.createYAxis = (canvas, context, data, from, to) => {
    context.fillStyle = canvas_1.GRID_LINE_COLOR;
    context.lineWidth = 1;
    // appending offset for axis line (in top and bottom)
    const gutterOffset = canvas_1.GRID_OFFSET / 3;
    const fontOffset = 2 * canvas_1.AXIS_FONT_SIZE;
    // getting dates labels
    const labels = dates_1.getAxisDateLabels(from, to);
    // axis width = canvas work width - offset from top and bottom
    const workAxisWidth = common_1.getWorkWidthWithPixelRatio(canvas) - 2 * canvas_1.GRID_OFFSET;
    // creating Axis line
    context.beginPath();
    context.moveTo(common_1.getXWithPixelRatio(canvas_1.GRID_OFFSET, canvas), canvas_1.GRID_OFFSET - gutterOffset);
    context.lineTo(common_1.getXWithPixelRatio(canvas_1.GRID_OFFSET, canvas), common_1.getWorkWidthWithPixelRatio(canvas) - canvas_1.GRID_OFFSET + gutterOffset);
    context.stroke();
    // creating text values and tiny line
    for (let i = 0; i < labels.length; i++) {
        const text = dates_1.getDateText(labels[i], from, to);
        const datePixelOffset = dates_1.getPixelOffsetToDate(from, to, labels[i], workAxisWidth);
        // offset to label center
        const leftInnerTextOffset = text.length * 3;
        context.save();
        context.translate(common_1.getXWithPixelRatio(canvas_1.GRID_OFFSET - fontOffset, canvas), canvas_1.GRID_OFFSET - leftInnerTextOffset + datePixelOffset);
        context.rotate(Math.PI / 2);
        context.font = `${canvas_1.AXIS_FONT_SIZE}px ${canvas_1.AXIS_FONT}`;
        context.fillText(text, 0, 0);
        context.restore();
        //create tiny line
        context.beginPath();
        context.moveTo(common_1.getXWithPixelRatio(canvas_1.GRID_OFFSET, canvas), canvas_1.GRID_OFFSET + datePixelOffset);
        context.lineTo(common_1.getXWithPixelRatio(25, canvas), canvas_1.GRID_OFFSET + datePixelOffset);
        context.stroke();
    }
};


/***/ }),

/***/ "./src/components/chart/style.ts":
/*!***************************************!*\
  !*** ./src/components/chart/style.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const style_1 = __webpack_require__(/*! ./utils/style */ "./src/components/chart/utils/style.ts");
const css = `
  canvas{
    width: 100%;
    height: 100%;
    display: inline-block;
    position: relative;
  }
`;
exports.default = style_1.createStyle(css);


/***/ }),

/***/ "./src/components/chart/utils/common.ts":
/*!**********************************************!*\
  !*** ./src/components/chart/utils/common.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkHeightWithPixelRatio = exports.getWorkWidthWithPixelRatio = exports.getXWithPixelRatio = exports.getPixelRatio = void 0;
exports.getPixelRatio = () => {
    if ('devicePixelRatio' in window) {
        if (window.devicePixelRatio > 1) {
            // set maximum 2 pixel ratio (for performance), but chart can work > 2
            return 2;
        }
    }
    return 1;
};
exports.getXWithPixelRatio = (x, canvas) => {
    const dpr = exports.getPixelRatio();
    if (dpr > 1) {
        return x + (1 - 1 / dpr) * canvas.height;
    }
    return x;
};
exports.getWorkWidthWithPixelRatio = (canvas) => {
    const dpr = exports.getPixelRatio();
    return canvas.width / dpr;
};
exports.getWorkHeightWithPixelRatio = (canvas) => {
    const dpr = exports.getPixelRatio();
    return canvas.height / dpr;
};


/***/ }),

/***/ "./src/components/chart/utils/dates.ts":
/*!*********************************************!*\
  !*** ./src/components/chart/utils/dates.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareToDate = exports.prepareFromDate = exports.getPixelOffsetToDate = exports.getMonthDiff = exports.getDateText = exports.getAxisDateLabels = void 0;
const dates_1 = __webpack_require__(/*! ../../../constants/dates */ "./src/constants/dates.ts");
const canvas_1 = __webpack_require__(/*! ../../../constants/canvas */ "./src/constants/canvas.ts");
const getDiffInMonth = (from, to) => {
    const fromYear = from.getFullYear();
    const toYear = to.getFullYear();
    const diffYearCount = toYear - fromYear + 1;
    return diffYearCount * 12;
};
const getDiffInDays = (from, to) => {
    // @ts-ignore
    const diffTime = Math.abs(to - from);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
const generateMonthWithYearLabels = (from, to) => {
    const diffMonthCount = getDiffInMonth(from, to);
    const labels = [];
    // month step
    const squashRatio = Math.ceil(diffMonthCount / canvas_1.MAX_RENDER_LABELS_COUNT);
    // prepare to event value
    const eventSquashRatio = squashRatio % 2 === 0 ? squashRatio : squashRatio + 1;
    for (let i = 0; i <= diffMonthCount; i = i + eventSquashRatio) {
        const offsetDate = new Date(from);
        offsetDate.setMonth(from.getMonth() + i);
        labels.push(offsetDate);
    }
    return labels;
};
exports.getAxisDateLabels = (from, to) => {
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const diffMonthCount = getDiffInMonth(fromDate, toDate);
    // rendering only month name
    if (diffMonthCount <= canvas_1.MAX_RENDER_LABELS_COUNT) {
        const year = fromDate.getFullYear();
        return dates_1.monthNames.map((month) => new Date(`${year}-${month}-01 00:00`));
    }
    // rendering month + year labels with squash
    return generateMonthWithYearLabels(fromDate, toDate);
};
exports.getDateText = (date, from, to) => {
    const jsDate = new Date(date);
    const year = String(jsDate.getFullYear());
    const month = dates_1.monthNames[jsDate.getMonth()];
    const fullMonth = dates_1.fullMonthNames[jsDate.getMonth()];
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const diffMonthCount = getDiffInMonth(fromDate, toDate);
    // 1 year -> showing only month
    if (diffMonthCount <= canvas_1.MAX_RENDER_LABELS_COUNT) {
        return fullMonth;
    }
    // 12 year -> show month + year
    if (diffMonthCount <= 12 * canvas_1.MAX_RENDER_LABELS_COUNT) {
        return `${month} ${year}`;
    }
    return year;
};
exports.getMonthDiff = (dateFrom, dateTo) => dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear());
exports.getPixelOffsetToDate = (from, to, date, workWidth) => {
    const fromDate = new Date(`${from} 00:00`);
    const toDate = new Date(to);
    const checkedDate = new Date(date);
    const diffInDays = getDiffInDays(fromDate, toDate);
    const dayPixelStep = workWidth / diffInDays;
    return Math.round(getDiffInDays(fromDate, checkedDate) * dayPixelStep);
};
exports.prepareFromDate = (fromYear) => `${fromYear}-01-01`;
exports.prepareToDate = (toYear) => `${toYear}-12-31`;


/***/ }),

/***/ "./src/components/chart/utils/style.ts":
/*!*********************************************!*\
  !*** ./src/components/chart/utils/style.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createStyle = void 0;
exports.createStyle = (css) => {
    const styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    styleEl.appendChild(document.createTextNode(css));
    return styleEl;
};


/***/ }),

/***/ "./src/components/select/connect.ts":
/*!******************************************!*\
  !*** ./src/components/select/connect.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectConnectHoc = void 0;
const localstorage_1 = __importDefault(__webpack_require__(/*! ../../models/localstorage */ "./src/models/localstorage.ts"));
const select_1 = __webpack_require__(/*! ../../types/select */ "./src/types/select.ts");
exports.selectConnectHoc = (Select) => ({ name }) => {
    const valueName = name === select_1.ESelectTypes.TO_DATE ? 'toValue' : 'fromValue';
    const from = localstorage_1.default.getData('from');
    const to = localstorage_1.default.getData('to');
    const value = localstorage_1.default.getData(valueName);
    const onChange = (name, value) => localstorage_1.default.setData(valueName, value);
    const select = Select({ name, from, to, value, onChange });
    // if select is toDate (end date) we should check fromDate and cut dates
    if (name === select_1.ESelectTypes.TO_DATE) {
        localstorage_1.default.subscribe('fromValue', value => {
            if (typeof select !== 'undefined') {
                // @ts-ignore
                select.update({ from: value + 1 });
            }
        });
    }
    return select;
};


/***/ }),

/***/ "./src/components/select/index.ts":
/*!****************************************!*\
  !*** ./src/components/select/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const markup_1 = __webpack_require__(/*! ./markup */ "./src/components/select/markup.ts");
const style_1 = __importDefault(__webpack_require__(/*! ./style */ "./src/components/select/style.ts"));
const utils_1 = __webpack_require__(/*! ./utils */ "./src/components/select/utils.ts");
const connect_1 = __webpack_require__(/*! ./connect */ "./src/components/select/connect.ts");
const Select = ({ name, value, from = 1881, to = 2006, onChange, }) => {
    const options = utils_1.getOptions(from, to, value);
    const html = document.createElement('div');
    html.id = `select#${name}`;
    html.classList.add('select');
    html.innerHTML = markup_1.markup(options);
    // getting select elements
    const select = html.querySelector('select');
    // subscribe to click on select option
    if (select) {
        select.addEventListener('change', event => {
            // @ts-ignore
            onChange(name, +event.target.value);
        });
    }
    // updating props cb
    const update = ({ from = 0 }) => {
        const select = html.querySelector('select');
        if (select) {
            // update select options
            const selected = from > +select.value ? from : +select.value;
            const options = utils_1.getOptions(from, to, selected);
            select.innerHTML = markup_1.prepareOptionsMarkup(options);
        }
    };
    return {
        html,
        style: [style_1.default],
        update,
    };
};
exports.default = connect_1.selectConnectHoc(Select);


/***/ }),

/***/ "./src/components/select/markup.ts":
/*!*****************************************!*\
  !*** ./src/components/select/markup.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.markup = exports.prepareOptionsMarkup = void 0;
exports.prepareOptionsMarkup = (options) => `${options.map(option => `<option value="${option.value}" ${option.selected ? 'selected' : ''}>${option.title}</option>`)}`;
exports.markup = (options) => `
  <select>
        ${exports.prepareOptionsMarkup(options)}
  </select>
`;


/***/ }),

/***/ "./src/components/select/style.ts":
/*!****************************************!*\
  !*** ./src/components/select/style.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const style_1 = __webpack_require__(/*! ../chart/utils/style */ "./src/components/chart/utils/style.ts");
const css = `
.select {
width: 100%;
    position: relative;
}
 .select select {
    display: block;
    width: 100%; 
    padding: .75rem 2.5rem .75rem 1rem;
    background: none; 
    border: 1px solid #ccc;
    border-radius: 3px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: inherit;
    font-size: 1rem;
    color: #444;
}
 .select:after {
    content: "";
    display: block;
    border-style: solid;
    border-width: 6px 5px 0 5px;
    border-color: #000 transparent transparent transparent;
    pointer-events: none;
    position: absolute;
    top: 50%;
    right: 1rem;
    z-index: 1;
    margin-top: -3px;
}
`;
exports.default = style_1.createStyle(css);


/***/ }),

/***/ "./src/components/select/utils.ts":
/*!****************************************!*\
  !*** ./src/components/select/utils.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = void 0;
exports.getOptions = (from, to, selected) => {
    const options = [];
    for (let year = from; year <= to; year++) {
        const option = { value: year, title: `${year}` };
        if (year === selected) {
            option.selected = true;
        }
        options.push(option);
    }
    return options;
};


/***/ }),

/***/ "./src/constants/canvas.ts":
/*!*********************************!*\
  !*** ./src/constants/canvas.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_RENDER_LABELS_COUNT = exports.AXIS_FONT = exports.AXIS_FONT_SIZE = exports.MAX_X_RENDER_VALUES_COUNT = exports.POLYLINE_LINE_COLOR = exports.GRID_LINE_COLOR = exports.GRID_OFFSET = exports.CHART_WIDTH_HEIGHT_ASPECT_RATIO = void 0;
exports.CHART_WIDTH_HEIGHT_ASPECT_RATIO = 1.777; // 16:9
exports.GRID_OFFSET = 30;
exports.GRID_LINE_COLOR = '#210202';
exports.POLYLINE_LINE_COLOR = '#1c91f1';
exports.MAX_X_RENDER_VALUES_COUNT = 15;
exports.AXIS_FONT_SIZE = 12;
exports.AXIS_FONT = 'Arial';
exports.MAX_RENDER_LABELS_COUNT = 12;


/***/ }),

/***/ "./src/constants/database.ts":
/*!***********************************!*\
  !*** ./src/constants/database.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.STATISTIC_DB_TABLES_SCHEMA = exports.INDEXED_DB_VERSION = exports.INDEXED_DB_NAME = void 0;
const chart_1 = __webpack_require__(/*! ../types/chart */ "./src/types/chart.ts");
exports.INDEXED_DB_NAME = 'statistics';
exports.INDEXED_DB_VERSION = 1;
exports.STATISTIC_DB_TABLES_SCHEMA = [
    {
        name: chart_1.EChartTypes.PRECIPITATION,
        key: 't',
    },
    { name: chart_1.EChartTypes.TEMPERATURE, key: 't' },
];


/***/ }),

/***/ "./src/constants/dates.ts":
/*!********************************!*\
  !*** ./src/constants/dates.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fullMonthNames = exports.monthNames = exports.DEFAULT_TO_DATE = exports.DEFAULT_FROM_DATE = void 0;
exports.DEFAULT_FROM_DATE = 1881;
exports.DEFAULT_TO_DATE = 2006;
exports.monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
exports.fullMonthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];


/***/ }),

/***/ "./src/constants/server.ts":
/*!*********************************!*\
  !*** ./src/constants/server.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMPERATURE_PATH = exports.PRECIPITATION_PATH = exports.HOST = exports.PORT = void 0;
exports.PORT = '3000';
exports.HOST = 'localhost';
exports.PRECIPITATION_PATH = '/precipitation';
exports.TEMPERATURE_PATH = '/temperature';


/***/ }),

/***/ "./src/constants/webworker.js":
/*!************************************!*\
  !*** ./src/constants/webworker.js ***!
  \************************************/
/*! exports provided: INIT_POST_TYPE, SUCCESS_INIT_MESSAGE_TYPE, ERROR_INIT_MESSAGE_TYPE, SET_VALUE_POST_TYPE, SUCCESS_SET_VALUE_MESSAGE_TYPE, ERROR_SET_VALUE_MESSAGE_TYPE, GET_RECORD_COUNT_POST_TYPE, SUCCESS_GET_RECORD_COUNT_MESSAGE_TYPE, ERROR_GET_RECORD_COUNT_MESSAGE_TYPE, GET_VALUES_POST_TYPE, SUCCESS_GET_VALUES_MESSAGE_TYPE, ERROR_GET_VALUES_MESSAGE_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_POST_TYPE", function() { return INIT_POST_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_INIT_MESSAGE_TYPE", function() { return SUCCESS_INIT_MESSAGE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_INIT_MESSAGE_TYPE", function() { return ERROR_INIT_MESSAGE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_VALUE_POST_TYPE", function() { return SET_VALUE_POST_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_SET_VALUE_MESSAGE_TYPE", function() { return SUCCESS_SET_VALUE_MESSAGE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_SET_VALUE_MESSAGE_TYPE", function() { return ERROR_SET_VALUE_MESSAGE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RECORD_COUNT_POST_TYPE", function() { return GET_RECORD_COUNT_POST_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_GET_RECORD_COUNT_MESSAGE_TYPE", function() { return SUCCESS_GET_RECORD_COUNT_MESSAGE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_GET_RECORD_COUNT_MESSAGE_TYPE", function() { return ERROR_GET_RECORD_COUNT_MESSAGE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_VALUES_POST_TYPE", function() { return GET_VALUES_POST_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_GET_VALUES_MESSAGE_TYPE", function() { return SUCCESS_GET_VALUES_MESSAGE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_GET_VALUES_MESSAGE_TYPE", function() { return ERROR_GET_VALUES_MESSAGE_TYPE; });
const INIT_POST_TYPE = 'init'
const SUCCESS_INIT_MESSAGE_TYPE = 'successInit'
const ERROR_INIT_MESSAGE_TYPE = 'errorInit'

const SET_VALUE_POST_TYPE = 'setValue'
const SUCCESS_SET_VALUE_MESSAGE_TYPE = 'successSetValues'
const ERROR_SET_VALUE_MESSAGE_TYPE = 'errorSetValues'

const GET_RECORD_COUNT_POST_TYPE = 'getTableRecordCount'
const SUCCESS_GET_RECORD_COUNT_MESSAGE_TYPE = 'successGetTableRecordCount'
const ERROR_GET_RECORD_COUNT_MESSAGE_TYPE = 'errorGetTableRecordCount'

const GET_VALUES_POST_TYPE = 'getValues'
const SUCCESS_GET_VALUES_MESSAGE_TYPE = 'successGetValues'
const ERROR_GET_VALUES_MESSAGE_TYPE = 'errorGetValues'


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(__webpack_require__(/*! ./components/app */ "./src/components/app/index.ts"));
const initApp_1 = __webpack_require__(/*! ./models/initApp */ "./src/models/initApp.ts");
const Main = () => {
    const initAppPromise = initApp_1.initApp();
    const main = document.createElement('div');
    main.id = 'main_app';
    const app = app_1.default(initAppPromise);
    main.appendChild(app.html);
    return {
        html: main,
        style: app.style
    };
};
const mainObj = Main();
document.body.appendChild(mainObj.html);
mainObj.style.forEach(style => document.head.appendChild(style));


/***/ }),

/***/ "./src/models/database.ts":
/*!********************************!*\
  !*** ./src/models/database.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __webpack_require__(/*! ../constants/database */ "./src/constants/database.ts");
const webworker_js_1 = __webpack_require__(/*! ../constants/webworker.js */ "./src/constants/webworker.js");
const worker = new Worker('../webworkers/databaseWorker.js', { type: 'module' });
const initDb = (tables, dbName, version) => {
    // TODO: maybe add promise wrapper to worker
    return new Promise((resolve, reject) => {
        worker.postMessage({ type: webworker_js_1.INIT_POST_TYPE, data: { tables, dbName, version } });
        const listener = (event) => {
            if (event.data.type === webworker_js_1.SUCCESS_INIT_MESSAGE_TYPE) {
                worker.removeEventListener('message', listener);
                resolve();
            }
            if (event.data.type === webworker_js_1.ERROR_INIT_MESSAGE_TYPE) {
                worker.removeEventListener('message', listener);
                reject();
            }
        };
        worker.addEventListener('message', listener);
    });
};
const indexedDbStorage = (tables, dbName, version) => {
    // init database (create db and tables)
    const initDbPromise = initDb(tables, dbName, version);
    // append values to table
    const setValues = async (table, values) => {
        await initDbPromise;
        return new Promise((resolve, reject) => {
            worker.postMessage({ type: webworker_js_1.SET_VALUE_POST_TYPE, data: { table, values } });
            const listener = (event) => {
                if (event.data.type === webworker_js_1.SUCCESS_SET_VALUE_MESSAGE_TYPE) {
                    worker.removeEventListener('message', listener);
                    return resolve();
                }
                if (event.data.type === webworker_js_1.ERROR_SET_VALUE_MESSAGE_TYPE) {
                    worker.removeEventListener('message', listener);
                    return reject();
                }
            };
            worker.addEventListener('message', listener);
        });
    };
    const getRecordCount = async (table) => {
        await initDbPromise;
        worker.postMessage({ type: webworker_js_1.GET_RECORD_COUNT_POST_TYPE, data: { table } });
        return new Promise((resolve, reject) => {
            const listener = (event) => {
                if (event.data.type === webworker_js_1.SUCCESS_GET_RECORD_COUNT_MESSAGE_TYPE) {
                    worker.removeEventListener('message', listener);
                    resolve(event.data.data);
                }
                if (event.data.type === webworker_js_1.ERROR_GET_RECORD_COUNT_MESSAGE_TYPE) {
                    worker.removeEventListener('message', listener);
                    reject(0);
                }
            };
            worker.addEventListener('message', listener);
        });
    };
    const getValues = async (table, from, to) => {
        await initDbPromise;
        worker.postMessage({ type: webworker_js_1.GET_VALUES_POST_TYPE, data: { table, from, to } });
        return new Promise((resolve, reject) => {
            const listener = (event) => {
                const { type, data } = event.data;
                if (type === webworker_js_1.SUCCESS_GET_VALUES_MESSAGE_TYPE && data.tableType === table) {
                    worker.removeEventListener('message', listener);
                    resolve(data);
                }
                if (type === webworker_js_1.ERROR_GET_VALUES_MESSAGE_TYPE && data.tableType === table) {
                    worker.removeEventListener('message', listener);
                    reject({});
                }
            };
            worker.addEventListener('message', listener);
        });
    };
    return {
        setValues,
        getRecordCount,
        getValues
    };
};
exports.default = indexedDbStorage(database_1.STATISTIC_DB_TABLES_SCHEMA, database_1.INDEXED_DB_NAME, database_1.INDEXED_DB_VERSION);


/***/ }),

/***/ "./src/models/fetch/index.ts":
/*!***********************************!*\
  !*** ./src/models/fetch/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchChartData = void 0;
const server_1 = __webpack_require__(/*! ../../constants/server */ "./src/constants/server.ts");
exports.fetchChartData = async (url) => {
    const fullUrl = `http://${server_1.HOST}:${server_1.PORT}${url}`;
    try {
        const response = await fetch(fullUrl);
        return response.json();
    }
    catch (e) {
        alert(`Can't execute fetch ${fullUrl}, please check API server `);
        return Promise.reject();
    }
};


/***/ }),

/***/ "./src/models/initApp.ts":
/*!*******************************!*\
  !*** ./src/models/initApp.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApp = void 0;
const database_1 = __importDefault(__webpack_require__(/*! ./database */ "./src/models/database.ts"));
const chart_1 = __webpack_require__(/*! ../types/chart */ "./src/types/chart.ts");
const fetch_1 = __webpack_require__(/*! ./fetch */ "./src/models/fetch/index.ts");
const server_1 = __webpack_require__(/*! ../constants/server */ "./src/constants/server.ts");
exports.initApp = async () => {
    const { getRecordCount, setValues } = database_1.default;
    const countTemperature = await getRecordCount(chart_1.EChartTypes.TEMPERATURE);
    const countPrecipitation = await getRecordCount(chart_1.EChartTypes.PRECIPITATION);
    const promises = [];
    if (!countTemperature) {
        promises.push(fetch_1.fetchChartData(server_1.TEMPERATURE_PATH).then(temperature => {
            return setValues(chart_1.EChartTypes.TEMPERATURE, temperature);
        }));
    }
    if (!countPrecipitation) {
        promises.push(fetch_1.fetchChartData(server_1.PRECIPITATION_PATH).then(precipitation => {
            return setValues(chart_1.EChartTypes.PRECIPITATION, precipitation);
        }));
    }
    return Promise.all(promises);
};


/***/ }),

/***/ "./src/models/localstorage.ts":
/*!************************************!*\
  !*** ./src/models/localstorage.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dates_1 = __webpack_require__(/*! ../constants/dates */ "./src/constants/dates.ts");
const chart_1 = __webpack_require__(/*! ../types/chart */ "./src/types/chart.ts");
const STORAGE_CHANGE_EVENT_NAME = 'customStorageChange';
const clear = () => {
    localStorage.clear();
};
const getData = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    }
    catch (err) {
        return null;
    }
};
const setData = (key, data) => {
    try {
        const serial = JSON.stringify(data);
        localStorage.setItem(key, serial);
        // sending custom change store event
        const evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(STORAGE_CHANGE_EVENT_NAME, true, false, {
            name: key,
            data,
        });
        document.dispatchEvent(evt);
    }
    catch (err) {
        if (err === 'QUOTA_EXCEEDED_ERR') {
            clear();
            const serial = JSON.stringify(data);
            localStorage.setItem(key, serial);
        }
    }
};
// subscribe to changing store by key
const subscribe = (key, cb) => {
    window.addEventListener(STORAGE_CHANGE_EVENT_NAME, (event) => {
        if (event.detail.name === key) {
            cb(event.detail.data);
        }
    });
};
const initLocalStorage = (initState) => {
    for (const key in initState) {
        // eslint-disable-next-line no-prototype-builtins
        if (initState.hasOwnProperty(key)) {
            setData(key, initState[key]);
        }
    }
};
const appStateStorage = (initState) => {
    initLocalStorage(initState);
    return {
        getData,
        setData,
        clear,
        subscribe,
    };
};
exports.default = appStateStorage({
    chartType: chart_1.EChartTypes.TEMPERATURE,
    fromValue: dates_1.DEFAULT_FROM_DATE,
    toValue: dates_1.DEFAULT_TO_DATE,
    from: dates_1.DEFAULT_FROM_DATE,
    to: dates_1.DEFAULT_TO_DATE,
});


/***/ }),

/***/ "./src/types/chart.ts":
/*!****************************!*\
  !*** ./src/types/chart.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EChartTypes = void 0;
var EChartTypes;
(function (EChartTypes) {
    EChartTypes["TEMPERATURE"] = "temperature";
    EChartTypes["PRECIPITATION"] = "precipitation";
})(EChartTypes = exports.EChartTypes || (exports.EChartTypes = {}));


/***/ }),

/***/ "./src/types/select.ts":
/*!*****************************!*\
  !*** ./src/types/select.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ESelectTypes = void 0;
var ESelectTypes;
(function (ESelectTypes) {
    ESelectTypes["FROM_DATE"] = "from";
    ESelectTypes["TO_DATE"] = "to";
})(ESelectTypes = exports.ESelectTypes || (exports.ESelectTypes = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9tYXJrdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL3N0eWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9jb25uZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24vbWFya3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9zdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGFydC9jb25uZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NoYXJ0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NoYXJ0L3JlbmRlci9ncmlkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NoYXJ0L3JlbmRlci9wb2x5bGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGFydC9yZW5kZXIveEF4aXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hhcnQvcmVuZGVyL3lBeGlzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NoYXJ0L3N0eWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NoYXJ0L3V0aWxzL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGFydC91dGlscy9kYXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGFydC91dGlscy9zdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWxlY3QvY29ubmVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWxlY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0L21hcmt1cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWxlY3Qvc3R5bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0L3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvY2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvZGF0YWJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9kYXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL3dlYndvcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9kYXRhYmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2ZldGNoL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvaW5pdEFwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2xvY2Fsc3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvY2hhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL3NlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtR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QWUsZUFBZSxDQUFDO0lBQzdCLFNBQVMsRUFBRSxtQkFBVyxDQUFDLFdBQVc7SUFDbEMsU0FBUyxFQUFFLHlCQUFpQjtJQUM1QixPQUFPLEVBQUUsdUJBQWU7SUFDeEIsSUFBSSxFQUFFLHlCQUFpQjtJQUN2QixFQUFFLEVBQUUsdUJBQWU7Q0FDcEIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkZILElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNyQiwwQ0FBMkI7SUFDM0IsOENBQStCO0FBQ2pDLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ0lELElBQVksWUFHWDtBQUhELFdBQVksWUFBWTtJQUN0QixrQ0FBa0I7SUFDbEIsOEJBQWM7QUFDaEIsQ0FBQyxFQUhXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBR3ZCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IG1hcmt1cCB9IGZyb20gJy4vbWFya3VwJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi9zZWxlY3QnO1xuaW1wb3J0IExpbmVDaGFydCBmcm9tICcuLi9jaGFydCc7XG5cbmltcG9ydCB7IEVTZWxlY3RUeXBlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3NlbGVjdCc7XG5pbXBvcnQgeyBFQ2hhcnRUeXBlcyB9IGZyb20gJy4uLy4uL3R5cGVzL2NoYXJ0JztcbmltcG9ydCB7IElCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tcG9uZW50JztcblxuY29uc3QgQXBwQmxvY2sgPSAoaW5pdEFwcFByb21pc2U6IFByb21pc2U8dm9pZFtdPik6IElCYXNlQ29tcG9uZW50ID0+IHtcbiAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodG1sLmlkID0gJ2FwcC1ibG9jayc7XG4gIGh0bWwuaW5uZXJIVE1MID0gbWFya3VwO1xuXG4gIC8vIGluaXQgY29tcG9uZW50c1xuICBjb25zdCB0ZW1wZXJhdHVyZUJ0biA9IEJ1dHRvbih7XG4gICAgbmFtZTogRUNoYXJ0VHlwZXMuVEVNUEVSQVRVUkUsXG4gICAgdGV4dDogJ9Ci0LXQvNC/0LXRgNCw0YLRg9GA0LAnLFxuICB9KTtcblxuICBjb25zdCBwcmVjaXBpdGF0aW9uQnRuID0gQnV0dG9uKHtcbiAgICBuYW1lOiBFQ2hhcnRUeXBlcy5QUkVDSVBJVEFUSU9OLFxuICAgIHRleHQ6ICfQntGB0LDQtNC60LgnLFxuICB9KTtcblxuICBjb25zdCBmcm9tRGF0ZVNlbGVjdCA9IFNlbGVjdCh7IG5hbWU6IEVTZWxlY3RUeXBlcy5GUk9NX0RBVEUgfSk7XG4gIGNvbnN0IHRvRGF0ZVNlbGVjdCA9IFNlbGVjdCh7IG5hbWU6IEVTZWxlY3RUeXBlcy5UT19EQVRFIH0pO1xuXG4gIGNvbnN0IGxpbmVDaGFydCA9IExpbmVDaGFydChpbml0QXBwUHJvbWlzZSk7XG5cbiAgLy8gYXBwZW5kaW5nIGJ0bnNcbiAgY29uc3QgbGVmdEZpcnN0QnRuUGxhY2UgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWJ0bl9fZmlyc3QnKTtcbiAgbGVmdEZpcnN0QnRuUGxhY2UgJiYgbGVmdEZpcnN0QnRuUGxhY2UuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVCdG4uaHRtbCk7XG4gIGNvbnN0IGxlZnRTZWNvbmRCdG5QbGFjZSA9IGh0bWwucXVlcnlTZWxlY3RvcignLmxlZnQtYnRuX19zZWNvbmQnKTtcbiAgbGVmdFNlY29uZEJ0blBsYWNlICYmIGxlZnRTZWNvbmRCdG5QbGFjZS5hcHBlbmRDaGlsZChwcmVjaXBpdGF0aW9uQnRuLmh0bWwpO1xuXG4gIC8vIGFwcGVuZGluZyBzZWxlY3RcbiAgY29uc3QgcmlnaHRGaXJzdFNlbGVjdFBsYWNlID0gaHRtbC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtc2VsZWN0X19maXJzdCcpO1xuICByaWdodEZpcnN0U2VsZWN0UGxhY2UgJiZcbiAgICByaWdodEZpcnN0U2VsZWN0UGxhY2UuYXBwZW5kQ2hpbGQoZnJvbURhdGVTZWxlY3QuaHRtbCk7XG4gIGNvbnN0IHJpZ2h0U2Vjb25kU2VsZWN0UGxhY2UgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1zZWxlY3RfX3NlY29uZCcpO1xuICByaWdodFNlY29uZFNlbGVjdFBsYWNlICYmXG4gICAgcmlnaHRTZWNvbmRTZWxlY3RQbGFjZS5hcHBlbmRDaGlsZCh0b0RhdGVTZWxlY3QuaHRtbCk7XG5cbiAgLy8gYXBwZW5kaW5nIGNoYXJ0XG4gIGNvbnN0IHJpZ2h0Q2hhcnRQbGFjZSA9IGh0bWwucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX3JpZ2h0Jyk7XG4gIHJpZ2h0Q2hhcnRQbGFjZSAmJiByaWdodENoYXJ0UGxhY2UuYXBwZW5kQ2hpbGQobGluZUNoYXJ0Lmh0bWwpO1xuXG4gIHJldHVybiB7XG4gICAgaHRtbCxcbiAgICBzdHlsZTogW1xuICAgICAgc3R5bGUsXG4gICAgICB0ZW1wZXJhdHVyZUJ0bi5zdHlsZVswXSxcbiAgICAgIGZyb21EYXRlU2VsZWN0LnN0eWxlWzBdLFxuICAgICAgbGluZUNoYXJ0LnN0eWxlWzBdLFxuICAgIF0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBCbG9jaztcbiIsImV4cG9ydCBjb25zdCBtYXJrdXAgPSBgXG4gIDxkaXYgY2xhc3M9XCJhcHBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYXBwX19jb250YWluZXJcIj5cbiAgICAgICAgPGgxPtCQ0YDRhdC40LIg0LzQtdGC0LXQvtGB0LvRg9C20LHRizwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9fbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJ0biBsZWZ0LWJ0bl9fZmlyc3RcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1idG4gbGVmdC1idG5fX3NlY29uZFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9fcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LXNlbGVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LXNlbGVjdCByaWdodC1zZWxlY3RfX2ZpcnN0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtc2VsZWN0IHJpZ2h0LXNlbGVjdF9fc2Vjb25kXCI+PC9kaXY+ICBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG4iLCJpbXBvcnQgeyBjcmVhdGVTdHlsZSB9IGZyb20gXCIuLi9jaGFydC91dGlscy9zdHlsZVwiO1xuXG5jb25zdCBjc3MgPSBgXG4gIC5hcHAge1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIG1pbi13aWR0aDogNjAwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgfVxuICAgLmFwcF9fY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgfVxuICAgXG4gICAuY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCAtMTVweDtcbiAgIH1cbiAgIC5jb250ZW50X19sZWZ0e1xuICAgcGFkZGluZzogMCAxNXB4O1xuICAgd2lkdGg6IDEwMCU7XG4gICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgfVxuICAgICAuY29udGVudF9fcmlnaHR7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgIGZsZXgtZ3JvdzogMjtcbiAgIH1cbiAgIC5sZWZ0LWJ0bntcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgfVxuICAgLmxlZnQtYnRuX19maXJzdHtcbiAgIG1hcmdpbi10b3A6IDA7XG4gICB9XG4gICAucmlnaHQtc2VsZWN0e1xuICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3R5bGUoY3NzKTtcbiIsImltcG9ydCBhcHBTdGF0ZVN0b3JhZ2UgZnJvbSAnLi4vLi4vbW9kZWxzL2xvY2Fsc3RvcmFnZSc7XG5pbXBvcnQgeyBCdXR0b25PdXRlclByb3BzVHlwZSwgQnV0dG9uUHJvcHNUeXBlIH0gZnJvbSAnLi9pbmRleCc7XG5cbmltcG9ydCB7IElCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tcG9uZW50JztcbmltcG9ydCB7IEVDaGFydFR5cGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2hhcnQnO1xuXG5leHBvcnQgY29uc3QgYnV0dG9uQ29ubmVjdEhvYyA9IChcbiAgQnV0dG9uOiAocHJvcHM6IEJ1dHRvblByb3BzVHlwZSkgPT4gSUJhc2VDb21wb25lbnQ8QnV0dG9uUHJvcHNUeXBlPixcbikgPT4gKHsgbmFtZSwgdGV4dCB9OiBCdXR0b25PdXRlclByb3BzVHlwZSkgPT4ge1xuICBjb25zdCBjaGFydFR5cGUgPSBhcHBTdGF0ZVN0b3JhZ2UuZ2V0RGF0YSgnY2hhcnRUeXBlJyk7XG4gIGNvbnN0IG9uQ2xpY2sgPSAobmFtZTogRUNoYXJ0VHlwZXMpID0+XG4gICAgYXBwU3RhdGVTdG9yYWdlLnNldERhdGEoJ2NoYXJ0VHlwZScsIG5hbWUpO1xuXG4gIGNvbnN0IGJ0biA9IEJ1dHRvbih7IG5hbWUsIGlzQWN0aXZlOiBjaGFydFR5cGUgPT09IG5hbWUsIHRleHQsIG9uQ2xpY2sgfSk7XG4gIGFwcFN0YXRlU3RvcmFnZS5zdWJzY3JpYmUoJ2NoYXJ0VHlwZScsIHR5cGUgPT4ge1xuICAgIGlmICh0eXBlb2YgYnRuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgYnRuLnVwZGF0ZSh7IGlzQWN0aXZlOiB0eXBlID09PSBuYW1lIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBidG47XG59O1xuIiwiaW1wb3J0IHsgbWFya3VwIH0gZnJvbSAnLi9tYXJrdXAnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUnO1xuXG5pbXBvcnQgeyBidXR0b25Db25uZWN0SG9jIH0gZnJvbSAnLi9jb25uZWN0JztcblxuaW1wb3J0IHsgRUNoYXJ0VHlwZXMgfSBmcm9tICcuLi8uLi90eXBlcy9jaGFydCc7XG5pbXBvcnQgeyBJQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIEJ1dHRvbk91dGVyUHJvcHNUeXBlID0ge1xuICBuYW1lOiBFQ2hhcnRUeXBlcztcbiAgdGV4dDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgQnV0dG9uQ29ubmVjdFByb3BzVHlwZSA9IHtcbiAgaXNBY3RpdmU6IGJvb2xlYW47XG4gIG9uQ2xpY2s6IChuYW1lOiBFQ2hhcnRUeXBlcykgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCB0eXBlIEJ1dHRvblByb3BzVHlwZSA9IEJ1dHRvbk91dGVyUHJvcHNUeXBlICYgQnV0dG9uQ29ubmVjdFByb3BzVHlwZTtcblxuY29uc3QgQnV0dG9uID0gKHtcbiAgbmFtZSxcbiAgaXNBY3RpdmUsXG4gIHRleHQsXG4gIG9uQ2xpY2ssXG59OiBCdXR0b25Qcm9wc1R5cGUpOiBJQmFzZUNvbXBvbmVudDxCdXR0b25Qcm9wc1R5cGU+ID0+IHtcbiAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodG1sLmlkID0gYGJ1dHRvbi1ibG9jayMke25hbWV9YDtcbiAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tYmxvY2snKTtcbiAgaHRtbC5pbm5lckhUTUwgPSBtYXJrdXAobmFtZSwgdGV4dCk7XG5cbiAgLy8gZ2V0dGluZyBidXR0b24gZWxlbWVudHNcbiAgY29uc3QgYnV0dG9uID0gaHRtbC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcblxuICAvLyBzdWJzY3JpYmUgdG8gY2xpY2sgb24gdGhpcyBidXR0b25cbiAgaWYgKGJ1dHRvbikge1xuICAgIGlzQWN0aXZlICYmIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvbkNsaWNrKG5hbWUpKTtcbiAgfVxuXG4gIC8vIHVwZGF0aW5nIHByb3BzIGNiXG4gIGNvbnN0IHVwZGF0ZSA9ICh7IGlzQWN0aXZlIH06IEJ1dHRvblByb3BzVHlwZSkgPT4ge1xuICAgIGlmIChidXR0b24pIHtcbiAgICAgIGlzQWN0aXZlXG4gICAgICAgID8gYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpXG4gICAgICAgIDogYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGh0bWwsXG4gICAgc3R5bGU6IFtzdHlsZV0sXG4gICAgdXBkYXRlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uQ29ubmVjdEhvYyhCdXR0b24pO1xuIiwiZXhwb3J0IGNvbnN0IG1hcmt1cCA9IChuYW1lOiBzdHJpbmcsIHRleHQ6IHN0cmluZykgPT4gYFxuICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgaWQ9XCIke25hbWV9XCI+JHt0ZXh0fTwvYnV0dG9uPlxuYDtcbiIsImltcG9ydCB7IGNyZWF0ZVN0eWxlIH0gZnJvbSBcIi4uL2NoYXJ0L3V0aWxzL3N0eWxlXCI7XG5cbmNvbnN0IGNzcyA9IGBcbiAgLmJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICMxOTUwYmI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE5NTBiYjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuNzVlbSAxZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udDogMTZweCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMsIGNvbG9yIC4ycywgYm9yZGVyLWNvbG9yIC4ycztcbiAgfVxuICBcbiAgYnV0dG9uLmlzLWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NTBiYjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgXG4gICAgLmJ0bi1ibG9ja3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdHlsZShjc3MpO1xuIiwiaW1wb3J0IGFwcFN0YXRlU3RvcmFnZSBmcm9tICcuLi8uLi9tb2RlbHMvbG9jYWxzdG9yYWdlJztcbmltcG9ydCB7cHJlcGFyZUZyb21EYXRlLCBwcmVwYXJlVG9EYXRlfSBmcm9tICcuL3V0aWxzL2RhdGVzJztcbmltcG9ydCBpbmRleGVkRGJTdG9yYWdlIGZyb20gJy4uLy4uL21vZGVscy9kYXRhYmFzZSc7XG5cbmltcG9ydCB7Q2hhcnRQcm9wc1R5cGV9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHtJQmFzZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tcG9uZW50JztcbmltcG9ydCB7RUNoYXJ0VHlwZXN9IGZyb20gJy4uLy4uL3R5cGVzL2NoYXJ0JztcblxuY29uc3QgZ2V0UHJlcGFyZWRDaGFydERhdGEgPSBhc3luYyAoXG4gIGluaXRBcHBQcm9taXNlOiBQcm9taXNlPHZvaWRbXT4sXG4gIGNoYXJ0VHlwZTogRUNoYXJ0VHlwZXMsXG4gIGZyb206IHN0cmluZyxcbiAgdG86IHN0cmluZyxcbikgPT4ge1xuICBhd2FpdCBpbml0QXBwUHJvbWlzZTtcbiAgcmV0dXJuIGluZGV4ZWREYlN0b3JhZ2UuZ2V0VmFsdWVzKGNoYXJ0VHlwZSwgZnJvbSwgdG8pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoYXJ0Q29ubmVjdEhvYyA9IChcbiAgQ2hhcnQ6IChwcm9wczogQ2hhcnRQcm9wc1R5cGUpID0+IElCYXNlQ29tcG9uZW50PENoYXJ0UHJvcHNUeXBlPixcbikgPT4gKGluaXRBcHBQcm9taXNlOiBQcm9taXNlPHZvaWRbXT4pID0+IHtcbiAgY29uc3QgY2hhcnRUeXBlID0gYXBwU3RhdGVTdG9yYWdlLmdldERhdGEoJ2NoYXJ0VHlwZScpO1xuICBsZXQgZnJvbSA9IHByZXBhcmVGcm9tRGF0ZShhcHBTdGF0ZVN0b3JhZ2UuZ2V0RGF0YSgnZnJvbVZhbHVlJykpO1xuICBsZXQgdG8gPSBwcmVwYXJlVG9EYXRlKGFwcFN0YXRlU3RvcmFnZS5nZXREYXRhKCd0b1ZhbHVlJykpO1xuXG4gIC8vIGdldHRpbmcgcHJlcGFyZWQgZGF0YSBmcm9tIEluZGV4ZWREYlxuICBjb25zdCBkYXRhID0gZ2V0UHJlcGFyZWRDaGFydERhdGEoaW5pdEFwcFByb21pc2UsIGNoYXJ0VHlwZSwgZnJvbSwgdG8pO1xuICBjb25zdCBjaGFydCA9IENoYXJ0KHtcbiAgICBkYXRhLFxuICAgIGZyb20sXG4gICAgdG8sXG4gIH0pO1xuXG4gIC8vIFRPRE86IGltcHJvdmUgc3Vic2NyaWJlIHRvIGFycmF5IGtleSBbJ2Zyb21WYWx1ZScsICd0b1ZhbHVlJ11cbiAgYXBwU3RhdGVTdG9yYWdlLnN1YnNjcmliZSgnZnJvbVZhbHVlJywgKG5leHRGcm9tOiBudW1iZXIpID0+IHtcbiAgICBpZiAodHlwZW9mIGNoYXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZnJvbSA9IHByZXBhcmVGcm9tRGF0ZShuZXh0RnJvbSk7XG5cbiAgICAgIGNvbnN0IG5leHREYXRhID0gZ2V0UHJlcGFyZWRDaGFydERhdGEoaW5pdEFwcFByb21pc2UsIGNoYXJ0VHlwZSwgZnJvbSwgdG8pO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY2hhcnQudXBkYXRlKHsgdG8sIGRhdGE6IG5leHREYXRhLCBmcm9tIH0pO1xuICAgIH1cbiAgfSk7XG4gIGFwcFN0YXRlU3RvcmFnZS5zdWJzY3JpYmUoJ3RvVmFsdWUnLCAobmV4dFRvOiBudW1iZXIpID0+IHtcbiAgICBpZiAodHlwZW9mIGNoYXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdG8gPSBwcmVwYXJlVG9EYXRlKG5leHRUbyk7XG4gICAgICBjb25zdCBuZXh0RGF0YSA9IGdldFByZXBhcmVkQ2hhcnREYXRhKGluaXRBcHBQcm9taXNlLCBjaGFydFR5cGUsIGZyb20sIHRvKTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNoYXJ0LnVwZGF0ZSh7IGZyb20sIGRhdGE6IG5leHREYXRhLCB0byB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFRPRE86IGFkZCBhYm9ydCBzeXN0ZW0gKG9ubHkgbGFzdCBnZXRWYWx1ZXMpXG4gIGFwcFN0YXRlU3RvcmFnZS5zdWJzY3JpYmUoJ2NoYXJ0VHlwZScsIChjaGFydFR5cGU6IEVDaGFydFR5cGVzKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjaGFydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IG5leHREYXRhID0gZ2V0UHJlcGFyZWRDaGFydERhdGEoaW5pdEFwcFByb21pc2UsIGNoYXJ0VHlwZSwgZnJvbSwgdG8pO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY2hhcnQudXBkYXRlKHsgZnJvbSwgZGF0YTogbmV4dERhdGEsIHRvIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNoYXJ0O1xufTtcbiIsImltcG9ydCB7IENIQVJUX1dJRFRIX0hFSUdIVF9BU1BFQ1RfUkFUSU8gfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY2FudmFzJztcbmltcG9ydCB7IGdldFBpeGVsUmF0aW8gfSBmcm9tICcuL3V0aWxzL2NvbW1vbic7XG5pbXBvcnQgeyBjaGFydENvbm5lY3RIb2MgfSBmcm9tICcuL2Nvbm5lY3QnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IHsgY3JlYXRlQ2hhcnRHcmlkIH0gZnJvbSAnLi9yZW5kZXIvZ3JpZCc7XG5cbmltcG9ydCB7IElCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tcG9uZW50JztcbmltcG9ydCB7IFByZXBhcmVkQ2hhcmREYXRhVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL2NoYXJ0JztcblxuZXhwb3J0IHR5cGUgQ2hhcnRQcm9wc1R5cGUgPSB7XG4gIGRhdGE6IFByb21pc2U8UHJlcGFyZWRDaGFyZERhdGFUeXBlPjtcbiAgZnJvbTogc3RyaW5nO1xuICB0bzogc3RyaW5nO1xufTtcblxuY29uc3QgaW5pdENoYXJ0ID0gKFxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBmcm9tOiBzdHJpbmcsXG4gIHRvOiBzdHJpbmcsXG4gIGRhdGE6IFByb21pc2U8UHJlcGFyZWRDaGFyZERhdGFUeXBlPixcbikgPT4ge1xuICBjb25zdCBkcHIgPSBnZXRQaXhlbFJhdGlvKCk7XG4gIGNvbnN0IHdpZHRoID0gY29udGFpbmVyLm9mZnNldFdpZHRoO1xuICBjb25zdCBoZWlnaHQgPSB3aWR0aCAvIENIQVJUX1dJRFRIX0hFSUdIVF9BU1BFQ1RfUkFUSU87XG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gYG1heC13aWR0aDogJHt3aWR0aH1weDsgbWF4LWhlaWdodDogJHtoZWlnaHR9cHg7YDtcblxuICBjYW52YXMud2lkdGggPSB3aWR0aCAqIGRwcjtcbiAgY2FudmFzLmhlaWdodCA9IE1hdGgucm91bmQoaGVpZ2h0KSAqIGRwcjtcblxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgaWYgKGN0eCkge1xuICAgIC8vIHNjYWxlIHRvIGRldmljZSBwaXhlbCByYXRpb1xuICAgIGN0eC5zY2FsZShkcHIsIGRwcik7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC50cmFuc2xhdGUoMCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LnJvdGF0ZSgtTWF0aC5QSSAvIDIpO1xuXG4gICAgLy8gYWRkaW5nIHNpbXBsZSBsb2FkaW5nXG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgucm90YXRlKE1hdGguUEkgLyAyKTtcbiAgICBjdHguZm9udCA9ICcxNnB4IHNlcmlmJztcbiAgICBjdHguZmlsbFRleHQoXG4gICAgICAnTG9hZGluZy4uLiAoZmV0Y2ggYW5kIHNhdmUgZGF0YSB0byBJbmRleGVkRGIpJyxcbiAgICAgIDM1MCxcbiAgICAgIC1jYW52YXMuaGVpZ2h0ICsgNTAsXG4gICAgKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICAgIGRhdGEudGhlbihwcmVwYXJlZCA9PiB7XG4gICAgICAvLyBzaG91bGQgY2hhbmdlIGhlaWdodCBhbmQgd2lkdGggYWZ0ZXIgcm90YXRlIHRvIE1hdGguUEkgLyAyXG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy5oZWlnaHQsIGNhbnZhcy53aWR0aCk7XG4gICAgICBjcmVhdGVDaGFydEdyaWQoY2FudmFzLCBjdHgsIHByZXBhcmVkLCBmcm9tLCB0byk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IExpbmVDaGFydCA9ICh7XG4gIGZyb20sXG4gIHRvLFxuICBkYXRhLFxufTogQ2hhcnRQcm9wc1R5cGUpOiBJQmFzZUNvbXBvbmVudDxDaGFydFByb3BzVHlwZT4gPT4ge1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGh0bWwuaWQgPSAnbGluZS1jaGFydF9fYmxvY2snO1xuXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMuaWQgPSAnbGluZS1jaGFydCc7XG5cbiAgaHRtbC5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gIC8vIFRPRE86IG1heWJlIGFkZCByZXNpemUgZXZlbnQ/XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgaW5pdENoYXJ0KGNhbnZhcywgaHRtbCwgZnJvbSwgdG8sIGRhdGEpO1xuICB9KTtcblxuICBjb25zdCB1cGRhdGUgPSAoeyBmcm9tLCB0bywgZGF0YSB9OiBDaGFydFByb3BzVHlwZSkgPT4ge1xuICAgIGluaXRDaGFydChjYW52YXMsIGh0bWwsIGZyb20sIHRvLCBkYXRhKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGh0bWwsXG4gICAgc3R5bGU6IFtzdHlsZV0sXG4gICAgdXBkYXRlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhcnRDb25uZWN0SG9jKExpbmVDaGFydCk7XG4iLCJpbXBvcnQgeyBQcmVwYXJlZENoYXJkRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9jaGFydCc7XG5pbXBvcnQgeyBjcmVhdGVQb2x5bGluZSB9IGZyb20gJy4vcG9seWxpbmUnO1xuaW1wb3J0IHsgY3JlYXRlWUF4aXMgfSBmcm9tICcuL3lBeGlzJztcbmltcG9ydCB7IGNyZWF0ZVhBeGlzIH0gZnJvbSAnLi94QXhpcyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDaGFydEdyaWQgPSAoXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgZGF0YTogUHJlcGFyZWRDaGFyZERhdGFUeXBlLFxuICBmcm9tOiBzdHJpbmcsXG4gIHRvOiBzdHJpbmcsXG4pID0+IHtcbiAgY3JlYXRlWEF4aXMoY2FudmFzLCBjb250ZXh0LCBkYXRhKTtcbiAgY3JlYXRlWUF4aXMoY2FudmFzLCBjb250ZXh0LCBkYXRhLCBmcm9tLCB0byk7XG4gIGNyZWF0ZVBvbHlsaW5lKGNhbnZhcywgY29udGV4dCwgZGF0YSwgZnJvbSwgdG8pO1xufTtcbiIsImltcG9ydCB7IFByZXBhcmVkQ2hhcmREYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2NoYXJ0JztcbmltcG9ydCB7XG4gIFBPTFlMSU5FX0xJTkVfQ09MT1IsXG4gIEdSSURfT0ZGU0VUXG59IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9jYW52YXMnO1xuaW1wb3J0IHtcbiAgZ2V0V29ya0hlaWdodFdpdGhQaXhlbFJhdGlvLFxuICBnZXRXb3JrV2lkdGhXaXRoUGl4ZWxSYXRpbyxcbiAgZ2V0WFdpdGhQaXhlbFJhdGlvLFxufSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuaW1wb3J0IHsgZ2V0UGl4ZWxPZmZzZXRUb0RhdGUgfSBmcm9tICcuLi91dGlscy9kYXRlcyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb2x5bGluZSA9IChcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICBkYXRhOiBQcmVwYXJlZENoYXJkRGF0YVR5cGUsXG4gIGZyb206IHN0cmluZyxcbiAgdG86IHN0cmluZyxcbikgPT4ge1xuICBjb25zdCB7IGRhdGE6IGRvdGVzLCBtYXgsIG1pbiB9ID0gZGF0YTtcblxuICBjb25zdCB2YWxJbnRlcnZhbCA9IE1hdGguYWJzKG1heCAtIG1pbik7XG5cbiAgLy8gcGl4ZWwgc3RlcCBmb3IgMSB2YWx1ZVxuICBjb25zdCB2YWxQaXhlbFN0ZXAgPVxuICAgIChnZXRXb3JrSGVpZ2h0V2l0aFBpeGVsUmF0aW8oY2FudmFzKSAtIDIgKiBHUklEX09GRlNFVCkgLyB2YWxJbnRlcnZhbDtcblxuICAvLyBheGlzIHdpZHRoID0gY2FudmFzIHdvcmsgd2lkdGggLSBvZmZzZXQgZnJvbSB0b3AgYW5kIGJvdHRvbVxuICBjb25zdCB3b3JrQXhpc1dpZHRoID0gZ2V0V29ya1dpZHRoV2l0aFBpeGVsUmF0aW8oY2FudmFzKSAtIDIgKiBHUklEX09GRlNFVDtcblxuICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgY29udGV4dC5zdHJva2VTdHlsZSA9IFBPTFlMSU5FX0xJTkVfQ09MT1I7XG4gIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgY29udGV4dC5iZWdpblBhdGgoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRvdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeyB0OiBkYXRlLCB2OiB2YWx1ZSB9ID0gZG90ZXNbaV07XG4gICAgY29uc3QgdmFsdWVPZmZzZXQgPSB2YWx1ZSAtIG1pbjtcblxuICAgIC8vIG9mZnNldCBpbiBwaXhlbCBmb3IgY3VycmVudCBkYXRlIG9mIGZyb20gZGF0ZVxuICAgIGNvbnN0IGRhdGVQaXhlbE9mZnNldCA9IGdldFBpeGVsT2Zmc2V0VG9EYXRlKGZyb20sIHRvLCBkYXRlLCB3b3JrQXhpc1dpZHRoKTtcblxuICAgIGNvbnN0IHggPVxuICAgICAgZ2V0WFdpdGhQaXhlbFJhdGlvKHZhbFBpeGVsU3RlcCAqIHZhbHVlT2Zmc2V0LCBjYW52YXMpICsgR1JJRF9PRkZTRVQ7XG4gICAgY29uc3QgeSA9IGRhdGVQaXhlbE9mZnNldCArIEdSSURfT0ZGU0VUO1xuICAgIC8vIGZpcnN0IHBvaW50IHNob3VsZCB1c2UgbW92ZVRvXG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIGNvbnRleHQubW92ZVRvKHgsIHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmxpbmVUbyh4LCB5KTtcbiAgICB9XG4gIH1cbiAgY29udGV4dC5zdHJva2UoKTtcbn07XG4iLCJpbXBvcnQgeyBQcmVwYXJlZENoYXJkRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9jaGFydCc7XG5pbXBvcnQge1xuICBBWElTX0ZPTlQsXG4gIEFYSVNfRk9OVF9TSVpFLFxuICBHUklEX0xJTkVfQ09MT1IsXG4gIEdSSURfT0ZGU0VULFxuICBNQVhfWF9SRU5ERVJfVkFMVUVTX0NPVU5ULFxufSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvY2FudmFzJztcbmltcG9ydCB7XG4gIGdldFdvcmtIZWlnaHRXaXRoUGl4ZWxSYXRpbyxcbiAgZ2V0WFdpdGhQaXhlbFJhdGlvLFxufSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlWEF4aXMgPSAoXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgZGF0YTogUHJlcGFyZWRDaGFyZERhdGFUeXBlLFxuKSA9PiB7XG4gIGNvbnRleHQuZmlsbFN0eWxlID0gR1JJRF9MSU5FX0NPTE9SO1xuICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gIC8vIGFwcGVuZCBvZmZzZXQgZm9yIGF4aXMgbGluZSAoaW4gdG9wIGFuZCBib3R0b20pXG4gIGNvbnN0IGd1dHRlck9mZnNldCA9IEdSSURfT0ZGU0VUIC8gMztcbiAgY29uc3QgZm9udE9mZnNldCA9IEFYSVNfRk9OVF9TSVpFIC8gMztcblxuICBjb25zdCB2YWxJbnRlcnZhbCA9IE1hdGguYWJzKGRhdGEubWF4IC0gZGF0YS5taW4pO1xuICBjb25zdCB2YWx1ZVN0ZXAgPSB2YWxJbnRlcnZhbCAvIE1BWF9YX1JFTkRFUl9WQUxVRVNfQ09VTlQ7XG5cbiAgLy8gYXhpcyBoZWlnaHQgPSBjYW52YXMgd29yayBoZWlnaHQgLSBvZmZzZXQgZnJvbSB0b3AgYW5kIGJvdHRvbVxuICBjb25zdCBwaXhlbFN0ZXAgPVxuICAgIChnZXRXb3JrSGVpZ2h0V2l0aFBpeGVsUmF0aW8oY2FudmFzKSAtIDIgKiBHUklEX09GRlNFVCkgL1xuICAgIE1BWF9YX1JFTkRFUl9WQUxVRVNfQ09VTlQ7XG5cbiAgLy8gY3JlYXRpbmcgQXhpcyBsaW5lXG4gIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIGNvbnRleHQubW92ZVRvKFxuICAgIGdldFhXaXRoUGl4ZWxSYXRpbyhHUklEX09GRlNFVCAtIGd1dHRlck9mZnNldCwgY2FudmFzKSxcbiAgICBHUklEX09GRlNFVCxcbiAgKTtcbiAgY29udGV4dC5saW5lVG8oY2FudmFzLmhlaWdodCAtIEdSSURfT0ZGU0VUICsgZ3V0dGVyT2Zmc2V0LCBHUklEX09GRlNFVCk7XG4gIGNvbnRleHQuc3Ryb2tlKCk7XG5cbiAgLy8gY3JlYXRpbmcgdGV4dCB2YWx1ZXMgYW5kIHRpbnkgbGluZVxuICBmb3IgKGxldCBpID0gMDsgaSA8PSBNQVhfWF9SRU5ERVJfVkFMVUVTX0NPVU5UOyBpKyspIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgIGdldFhXaXRoUGl4ZWxSYXRpbyhHUklEX09GRlNFVCArIHBpeGVsU3RlcCAqIGkgLSBmb250T2Zmc2V0LCBjYW52YXMpLFxuICAgICAgMCxcbiAgICApO1xuICAgIGNvbnRleHQucm90YXRlKE1hdGguUEkgLyAyKTtcbiAgICBjb25zdCB0ZXh0ID0gYCR7TWF0aC5jZWlsKGRhdGEubWluICsgdmFsdWVTdGVwICogaSl9YDtcbiAgICBjb250ZXh0LmZvbnQgPSBgJHtBWElTX0ZPTlRfU0laRX1weCAke0FYSVNfRk9OVH1gO1xuICAgIGNvbnRleHQuZmlsbFRleHQodGV4dCwgMCwgMCk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0Lm1vdmVUbyhcbiAgICAgIGdldFhXaXRoUGl4ZWxSYXRpbyhHUklEX09GRlNFVCArIHBpeGVsU3RlcCAqIGksIGNhbnZhcyksXG4gICAgICBHUklEX09GRlNFVCxcbiAgICApO1xuICAgIGNvbnRleHQubGluZVRvKGdldFhXaXRoUGl4ZWxSYXRpbyhHUklEX09GRlNFVCArIHBpeGVsU3RlcCAqIGksIGNhbnZhcyksIDI1KTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgUHJlcGFyZWRDaGFyZERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvY2hhcnQnO1xuaW1wb3J0IHtcbiAgQVhJU19GT05ULFxuICBBWElTX0ZPTlRfU0laRSxcbiAgR1JJRF9MSU5FX0NPTE9SLFxuICBHUklEX09GRlNFVCxcbn0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2NhbnZhcyc7XG5pbXBvcnQge1xuICBnZXRBeGlzRGF0ZUxhYmVscyxcbiAgZ2V0RGF0ZVRleHQsXG4gIGdldFBpeGVsT2Zmc2V0VG9EYXRlLFxufSBmcm9tICcuLi91dGlscy9kYXRlcyc7XG5pbXBvcnQge1xuICBnZXRXb3JrV2lkdGhXaXRoUGl4ZWxSYXRpbyxcbiAgZ2V0WFdpdGhQaXhlbFJhdGlvLFxufSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlWUF4aXMgPSAoXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgZGF0YTogUHJlcGFyZWRDaGFyZERhdGFUeXBlLFxuICBmcm9tOiBzdHJpbmcsXG4gIHRvOiBzdHJpbmcsXG4pID0+IHtcbiAgY29udGV4dC5maWxsU3R5bGUgPSBHUklEX0xJTkVfQ09MT1I7XG4gIGNvbnRleHQubGluZVdpZHRoID0gMTtcblxuICAvLyBhcHBlbmRpbmcgb2Zmc2V0IGZvciBheGlzIGxpbmUgKGluIHRvcCBhbmQgYm90dG9tKVxuICBjb25zdCBndXR0ZXJPZmZzZXQgPSBHUklEX09GRlNFVCAvIDM7XG4gIGNvbnN0IGZvbnRPZmZzZXQgPSAyICogQVhJU19GT05UX1NJWkU7XG5cbiAgLy8gZ2V0dGluZyBkYXRlcyBsYWJlbHNcbiAgY29uc3QgbGFiZWxzID0gZ2V0QXhpc0RhdGVMYWJlbHMoZnJvbSwgdG8pO1xuXG4gIC8vIGF4aXMgd2lkdGggPSBjYW52YXMgd29yayB3aWR0aCAtIG9mZnNldCBmcm9tIHRvcCBhbmQgYm90dG9tXG4gIGNvbnN0IHdvcmtBeGlzV2lkdGggPSBnZXRXb3JrV2lkdGhXaXRoUGl4ZWxSYXRpbyhjYW52YXMpIC0gMiAqIEdSSURfT0ZGU0VUO1xuXG4gIC8vIGNyZWF0aW5nIEF4aXMgbGluZVxuICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICBjb250ZXh0Lm1vdmVUbyhcbiAgICBnZXRYV2l0aFBpeGVsUmF0aW8oR1JJRF9PRkZTRVQsIGNhbnZhcyksXG4gICAgR1JJRF9PRkZTRVQgLSBndXR0ZXJPZmZzZXQsXG4gICk7XG4gIGNvbnRleHQubGluZVRvKFxuICAgIGdldFhXaXRoUGl4ZWxSYXRpbyhHUklEX09GRlNFVCwgY2FudmFzKSxcbiAgICBnZXRXb3JrV2lkdGhXaXRoUGl4ZWxSYXRpbyhjYW52YXMpIC0gR1JJRF9PRkZTRVQgKyBndXR0ZXJPZmZzZXQsXG4gICk7XG4gIGNvbnRleHQuc3Ryb2tlKCk7XG5cbiAgLy8gY3JlYXRpbmcgdGV4dCB2YWx1ZXMgYW5kIHRpbnkgbGluZVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVscy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRleHQgPSBnZXREYXRlVGV4dChsYWJlbHNbaV0sIGZyb20sIHRvKTtcbiAgICBjb25zdCBkYXRlUGl4ZWxPZmZzZXQgPSBnZXRQaXhlbE9mZnNldFRvRGF0ZShcbiAgICAgIGZyb20sXG4gICAgICB0byxcbiAgICAgIGxhYmVsc1tpXSxcbiAgICAgIHdvcmtBeGlzV2lkdGgsXG4gICAgKTtcblxuICAgIC8vIG9mZnNldCB0byBsYWJlbCBjZW50ZXJcbiAgICBjb25zdCBsZWZ0SW5uZXJUZXh0T2Zmc2V0ID0gdGV4dC5sZW5ndGggKiAzO1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgZ2V0WFdpdGhQaXhlbFJhdGlvKEdSSURfT0ZGU0VUIC0gZm9udE9mZnNldCwgY2FudmFzKSxcbiAgICAgIEdSSURfT0ZGU0VUIC0gbGVmdElubmVyVGV4dE9mZnNldCArIGRhdGVQaXhlbE9mZnNldCxcbiAgICApO1xuICAgIGNvbnRleHQucm90YXRlKE1hdGguUEkgLyAyKTtcbiAgICBjb250ZXh0LmZvbnQgPSBgJHtBWElTX0ZPTlRfU0laRX1weCAke0FYSVNfRk9OVH1gO1xuICAgIGNvbnRleHQuZmlsbFRleHQodGV4dCwgMCwgMCk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgLy9jcmVhdGUgdGlueSBsaW5lXG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0Lm1vdmVUbyhcbiAgICAgIGdldFhXaXRoUGl4ZWxSYXRpbyhHUklEX09GRlNFVCwgY2FudmFzKSxcbiAgICAgIEdSSURfT0ZGU0VUICsgZGF0ZVBpeGVsT2Zmc2V0LFxuICAgICk7XG4gICAgY29udGV4dC5saW5lVG8oXG4gICAgICBnZXRYV2l0aFBpeGVsUmF0aW8oMjUsIGNhbnZhcyksXG4gICAgICBHUklEX09GRlNFVCArIGRhdGVQaXhlbE9mZnNldCxcbiAgICApO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVTdHlsZSB9IGZyb20gXCIuL3V0aWxzL3N0eWxlXCI7XG5jb25zdCBjc3MgPSBgXG4gIGNhbnZhc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3R5bGUoY3NzKTtcbiIsImV4cG9ydCBjb25zdCBnZXRQaXhlbFJhdGlvID0gKCkgPT4ge1xuICBpZiAoJ2RldmljZVBpeGVsUmF0aW8nIGluIHdpbmRvdykge1xuICAgIGlmICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEpIHtcbiAgICAgIC8vIHNldCBtYXhpbXVtIDIgcGl4ZWwgcmF0aW8gKGZvciBwZXJmb3JtYW5jZSksIGJ1dCBjaGFydCBjYW4gd29yayA+IDJcbiAgICAgIHJldHVybiAyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gMTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRYV2l0aFBpeGVsUmF0aW8gPSAoXG4gIHg6IG51bWJlcixcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcbik6IG51bWJlciA9PiB7XG4gIGNvbnN0IGRwciA9IGdldFBpeGVsUmF0aW8oKTtcbiAgaWYgKGRwciA+IDEpIHtcbiAgICByZXR1cm4geCArICgxIC0gMSAvIGRwcikgKiBjYW52YXMuaGVpZ2h0O1xuICB9XG4gIHJldHVybiB4O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFdvcmtXaWR0aFdpdGhQaXhlbFJhdGlvID0gKFxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuKTogbnVtYmVyID0+IHtcbiAgY29uc3QgZHByID0gZ2V0UGl4ZWxSYXRpbygpO1xuICByZXR1cm4gY2FudmFzLndpZHRoIC8gZHByO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFdvcmtIZWlnaHRXaXRoUGl4ZWxSYXRpbyA9IChcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcbik6IG51bWJlciA9PiB7XG4gIGNvbnN0IGRwciA9IGdldFBpeGVsUmF0aW8oKTtcbiAgcmV0dXJuIGNhbnZhcy5oZWlnaHQgLyBkcHI7XG59O1xuIiwiaW1wb3J0IHsgbW9udGhOYW1lcywgZnVsbE1vbnRoTmFtZXMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvZGF0ZXMnO1xuaW1wb3J0IHsgTUFYX1JFTkRFUl9MQUJFTFNfQ09VTlQgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL2NhbnZhc1wiO1xuXG5jb25zdCBnZXREaWZmSW5Nb250aCA9IChmcm9tOiBEYXRlLCB0bzogRGF0ZSk6IG51bWJlciA9PiB7XG4gIGNvbnN0IGZyb21ZZWFyID0gZnJvbS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCB0b1llYXIgPSB0by5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBkaWZmWWVhckNvdW50ID0gdG9ZZWFyIC0gZnJvbVllYXIgKyAxO1xuICByZXR1cm4gZGlmZlllYXJDb3VudCAqIDEyO1xufTtcblxuY29uc3QgZ2V0RGlmZkluRGF5cyA9IChmcm9tOiBEYXRlLCB0bzogRGF0ZSk6IG51bWJlciA9PiB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgZGlmZlRpbWUgPSBNYXRoLmFicyh0byAtIGZyb20pO1xuICByZXR1cm4gTWF0aC5jZWlsKGRpZmZUaW1lIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlTW9udGhXaXRoWWVhckxhYmVscyA9IChmcm9tOiBEYXRlLCB0bzogRGF0ZSkgPT4ge1xuICBjb25zdCBkaWZmTW9udGhDb3VudCA9IGdldERpZmZJbk1vbnRoKGZyb20sIHRvKTtcbiAgY29uc3QgbGFiZWxzID0gW107XG4gIC8vIG1vbnRoIHN0ZXBcbiAgY29uc3Qgc3F1YXNoUmF0aW8gPSBNYXRoLmNlaWwoZGlmZk1vbnRoQ291bnQgLyBNQVhfUkVOREVSX0xBQkVMU19DT1VOVCk7XG4gIC8vIHByZXBhcmUgdG8gZXZlbnQgdmFsdWVcbiAgY29uc3QgZXZlbnRTcXVhc2hSYXRpbyA9IHNxdWFzaFJhdGlvICUgMiA9PT0gMCA/IHNxdWFzaFJhdGlvIDogc3F1YXNoUmF0aW8gKyAxO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBkaWZmTW9udGhDb3VudDsgaSA9IGkgKyBldmVudFNxdWFzaFJhdGlvKSB7XG4gICAgY29uc3Qgb2Zmc2V0RGF0ZSA9IG5ldyBEYXRlKGZyb20pO1xuICAgIG9mZnNldERhdGUuc2V0TW9udGgoZnJvbS5nZXRNb250aCgpICsgaSk7XG4gICAgbGFiZWxzLnB1c2gob2Zmc2V0RGF0ZSk7XG4gIH1cbiAgcmV0dXJuIGxhYmVscztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBeGlzRGF0ZUxhYmVscyA9IChmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcpOiBEYXRlW10gPT4ge1xuICBjb25zdCBmcm9tRGF0ZSA9IG5ldyBEYXRlKGZyb20pO1xuICBjb25zdCB0b0RhdGUgPSBuZXcgRGF0ZSh0byk7XG4gIGNvbnN0IGRpZmZNb250aENvdW50ID0gZ2V0RGlmZkluTW9udGgoZnJvbURhdGUsIHRvRGF0ZSk7XG4gIC8vIHJlbmRlcmluZyBvbmx5IG1vbnRoIG5hbWVcbiAgaWYgKGRpZmZNb250aENvdW50IDw9IE1BWF9SRU5ERVJfTEFCRUxTX0NPVU5UKSB7XG4gICAgY29uc3QgeWVhciA9IGZyb21EYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIG1vbnRoTmFtZXMubWFwKFxuICAgICAgKG1vbnRoOiBzdHJpbmcpID0+IG5ldyBEYXRlKGAke3llYXJ9LSR7bW9udGh9LTAxIDAwOjAwYCksXG4gICAgKTtcbiAgfVxuICAvLyByZW5kZXJpbmcgbW9udGggKyB5ZWFyIGxhYmVscyB3aXRoIHNxdWFzaFxuICByZXR1cm4gZ2VuZXJhdGVNb250aFdpdGhZZWFyTGFiZWxzKGZyb21EYXRlLCB0b0RhdGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGVUZXh0ID0gKGRhdGU6IHN0cmluZyB8IERhdGUsIGZyb206IHN0cmluZywgdG86IHN0cmluZykgPT4ge1xuICBjb25zdCBqc0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IFN0cmluZyhqc0RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIGNvbnN0IG1vbnRoID0gbW9udGhOYW1lc1tqc0RhdGUuZ2V0TW9udGgoKV07XG4gIGNvbnN0IGZ1bGxNb250aCA9IGZ1bGxNb250aE5hbWVzW2pzRGF0ZS5nZXRNb250aCgpXTtcblxuICBjb25zdCBmcm9tRGF0ZSA9IG5ldyBEYXRlKGZyb20pO1xuICBjb25zdCB0b0RhdGUgPSBuZXcgRGF0ZSh0byk7XG4gIGNvbnN0IGRpZmZNb250aENvdW50ID0gZ2V0RGlmZkluTW9udGgoZnJvbURhdGUsIHRvRGF0ZSk7XG5cbiAgLy8gMSB5ZWFyIC0+IHNob3dpbmcgb25seSBtb250aFxuICBpZiAoZGlmZk1vbnRoQ291bnQgPD0gTUFYX1JFTkRFUl9MQUJFTFNfQ09VTlQpIHtcbiAgICByZXR1cm4gZnVsbE1vbnRoO1xuICB9XG5cbiAgLy8gMTIgeWVhciAtPiBzaG93IG1vbnRoICsgeWVhclxuICBpZiAoZGlmZk1vbnRoQ291bnQgPD0gMTIgKiBNQVhfUkVOREVSX0xBQkVMU19DT1VOVCkge1xuICAgIHJldHVybiBgJHttb250aH0gJHt5ZWFyfWA7XG4gIH1cblxuICByZXR1cm4geWVhcjtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNb250aERpZmYgPSAoZGF0ZUZyb206IERhdGUsIGRhdGVUbzogRGF0ZSk6IG51bWJlciA9PlxuICBkYXRlVG8uZ2V0TW9udGgoKSAtXG4gIGRhdGVGcm9tLmdldE1vbnRoKCkgK1xuICAxMiAqIChkYXRlVG8uZ2V0RnVsbFllYXIoKSAtIGRhdGVGcm9tLmdldEZ1bGxZZWFyKCkpO1xuXG5leHBvcnQgY29uc3QgZ2V0UGl4ZWxPZmZzZXRUb0RhdGUgPSAoXG4gIGZyb206IHN0cmluZyB8IERhdGUsXG4gIHRvOiBzdHJpbmcgfCBEYXRlLFxuICBkYXRlOiBzdHJpbmcgfCBEYXRlLFxuICB3b3JrV2lkdGg6IG51bWJlcixcbikgPT4ge1xuICBjb25zdCBmcm9tRGF0ZSA9IG5ldyBEYXRlKGAke2Zyb219IDAwOjAwYCk7XG4gIGNvbnN0IHRvRGF0ZSA9IG5ldyBEYXRlKHRvKTtcbiAgY29uc3QgY2hlY2tlZERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZkluRGF5cyA9IGdldERpZmZJbkRheXMoZnJvbURhdGUsIHRvRGF0ZSk7XG4gIGNvbnN0IGRheVBpeGVsU3RlcCA9IHdvcmtXaWR0aCAvIGRpZmZJbkRheXM7XG4gIHJldHVybiBNYXRoLnJvdW5kKGdldERpZmZJbkRheXMoZnJvbURhdGUsIGNoZWNrZWREYXRlKSAqIGRheVBpeGVsU3RlcCk7XG59O1xuXG5leHBvcnQgY29uc3QgcHJlcGFyZUZyb21EYXRlID0gKGZyb21ZZWFyOiBzdHJpbmcgfCBudW1iZXIpID0+XG4gIGAke2Zyb21ZZWFyfS0wMS0wMWA7XG5cbmV4cG9ydCBjb25zdCBwcmVwYXJlVG9EYXRlID0gKHRvWWVhcjogc3RyaW5nIHwgbnVtYmVyKSA9PiBgJHt0b1llYXJ9LTEyLTMxYDtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVTdHlsZSA9IChjc3M6IHN0cmluZyk6IEhUTUxTdHlsZUVsZW1lbnQgPT4ge1xuICBjb25zdCBzdHlsZUVsOiBIVE1MU3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGVFbC50eXBlID0gJ3RleHQvY3NzJztcbiAgc3R5bGVFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgcmV0dXJuIHN0eWxlRWw7XG59O1xuIiwiaW1wb3J0IGFwcFN0YXRlU3RvcmFnZSBmcm9tICcuLi8uLi9tb2RlbHMvbG9jYWxzdG9yYWdlJztcbmltcG9ydCB7IFNlbGVjdE91dGVyUHJvcHNUeXBlLCBTZWxlY3RQcm9wc1R5cGUgfSBmcm9tICcuL2luZGV4JztcblxuaW1wb3J0IHsgSUJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi90eXBlcy9jb21wb25lbnQnO1xuaW1wb3J0IHsgRVNlbGVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2VsZWN0JztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdENvbm5lY3RIb2MgPSAoXG4gIFNlbGVjdDogKHByb3BzOiBTZWxlY3RQcm9wc1R5cGUpID0+IElCYXNlQ29tcG9uZW50PFNlbGVjdFByb3BzVHlwZT4sXG4pID0+ICh7IG5hbWUgfTogU2VsZWN0T3V0ZXJQcm9wc1R5cGUpID0+IHtcbiAgY29uc3QgdmFsdWVOYW1lID0gbmFtZSA9PT0gRVNlbGVjdFR5cGVzLlRPX0RBVEUgPyAndG9WYWx1ZScgOiAnZnJvbVZhbHVlJztcblxuICBjb25zdCBmcm9tID0gYXBwU3RhdGVTdG9yYWdlLmdldERhdGEoJ2Zyb20nKTtcbiAgY29uc3QgdG8gPSBhcHBTdGF0ZVN0b3JhZ2UuZ2V0RGF0YSgndG8nKTtcbiAgY29uc3QgdmFsdWUgPSBhcHBTdGF0ZVN0b3JhZ2UuZ2V0RGF0YSh2YWx1ZU5hbWUpO1xuICBjb25zdCBvbkNoYW5nZSA9IChuYW1lOiBFU2VsZWN0VHlwZXMsIHZhbHVlOiBudW1iZXIpID0+XG4gICAgYXBwU3RhdGVTdG9yYWdlLnNldERhdGEodmFsdWVOYW1lLCB2YWx1ZSk7XG5cbiAgY29uc3Qgc2VsZWN0ID0gU2VsZWN0KHsgbmFtZSwgZnJvbSwgdG8sIHZhbHVlLCBvbkNoYW5nZSB9KTtcbiAgLy8gaWYgc2VsZWN0IGlzIHRvRGF0ZSAoZW5kIGRhdGUpIHdlIHNob3VsZCBjaGVjayBmcm9tRGF0ZSBhbmQgY3V0IGRhdGVzXG4gIGlmIChuYW1lID09PSBFU2VsZWN0VHlwZXMuVE9fREFURSkge1xuICAgIGFwcFN0YXRlU3RvcmFnZS5zdWJzY3JpYmUoJ2Zyb21WYWx1ZScsIHZhbHVlID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNlbGVjdC51cGRhdGUoeyBmcm9tOiB2YWx1ZSArIDEgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHNlbGVjdDtcbn07XG4iLCJpbXBvcnQgeyBtYXJrdXAsIHByZXBhcmVPcHRpb25zTWFya3VwIH0gZnJvbSAnLi9tYXJrdXAnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IHsgZ2V0T3B0aW9ucyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgc2VsZWN0Q29ubmVjdEhvYyB9IGZyb20gJy4vY29ubmVjdCc7XG5cbmltcG9ydCB7IEVTZWxlY3RUeXBlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3NlbGVjdCc7XG5pbXBvcnQgeyBJQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIFNlbGVjdE91dGVyUHJvcHNUeXBlID0ge1xuICBuYW1lOiBFU2VsZWN0VHlwZXM7XG59O1xuXG5leHBvcnQgdHlwZSBTZWxlY3RDb25uZWN0UHJvcHNUeXBlID0ge1xuICB2YWx1ZTogbnVtYmVyO1xuICBmcm9tPzogbnVtYmVyO1xuICB0bz86IG51bWJlcjtcbiAgb25DaGFuZ2U6IChuYW1lOiBFU2VsZWN0VHlwZXMsIHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgdHlwZSBTZWxlY3RQcm9wc1R5cGUgPSBTZWxlY3RPdXRlclByb3BzVHlwZSAmIFNlbGVjdENvbm5lY3RQcm9wc1R5cGU7XG5cbmNvbnN0IFNlbGVjdCA9ICh7XG4gIG5hbWUsXG4gIHZhbHVlLFxuICBmcm9tID0gMTg4MSxcbiAgdG8gPSAyMDA2LFxuICBvbkNoYW5nZSxcbn06IFNlbGVjdFByb3BzVHlwZSk6IElCYXNlQ29tcG9uZW50PFNlbGVjdFByb3BzVHlwZT4gPT4ge1xuICBjb25zdCBvcHRpb25zID0gZ2V0T3B0aW9ucyhmcm9tLCB0bywgdmFsdWUpO1xuXG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaHRtbC5pZCA9IGBzZWxlY3QjJHtuYW1lfWA7XG4gIGh0bWwuY2xhc3NMaXN0LmFkZCgnc2VsZWN0Jyk7XG4gIGh0bWwuaW5uZXJIVE1MID0gbWFya3VwKG9wdGlvbnMpO1xuXG4gIC8vIGdldHRpbmcgc2VsZWN0IGVsZW1lbnRzXG4gIGNvbnN0IHNlbGVjdCA9IGh0bWwucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG5cbiAgLy8gc3Vic2NyaWJlIHRvIGNsaWNrIG9uIHNlbGVjdCBvcHRpb25cbiAgaWYgKHNlbGVjdCkge1xuICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBvbkNoYW5nZShuYW1lLCArZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHVwZGF0aW5nIHByb3BzIGNiXG4gIGNvbnN0IHVwZGF0ZSA9ICh7IGZyb20gPSAwIH06IFNlbGVjdFByb3BzVHlwZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdCA9IGh0bWwucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgaWYgKHNlbGVjdCkge1xuICAgICAgLy8gdXBkYXRlIHNlbGVjdCBvcHRpb25zXG4gICAgICBjb25zdCBzZWxlY3RlZCA9IGZyb20gPiArc2VsZWN0LnZhbHVlID8gZnJvbSA6ICtzZWxlY3QudmFsdWU7XG4gICAgICBjb25zdCBvcHRpb25zID0gZ2V0T3B0aW9ucyhmcm9tLCB0bywgc2VsZWN0ZWQpO1xuICAgICAgc2VsZWN0LmlubmVySFRNTCA9IHByZXBhcmVPcHRpb25zTWFya3VwKG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGh0bWwsXG4gICAgc3R5bGU6IFtzdHlsZV0sXG4gICAgdXBkYXRlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0Q29ubmVjdEhvYyhTZWxlY3QpO1xuIiwiaW1wb3J0IHsgT3B0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3NlbGVjdCc7XG5cbmV4cG9ydCBjb25zdCBwcmVwYXJlT3B0aW9uc01hcmt1cCA9IChvcHRpb25zOiBPcHRpb25UeXBlW10pID0+XG4gIGAke29wdGlvbnMubWFwKFxuICAgIG9wdGlvbiA9PlxuICAgICAgYDxvcHRpb24gdmFsdWU9XCIke29wdGlvbi52YWx1ZX1cIiAke29wdGlvbi5zZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnJ30+JHtcbiAgICAgICAgb3B0aW9uLnRpdGxlXG4gICAgICB9PC9vcHRpb24+YCxcbiAgKX1gO1xuXG5leHBvcnQgY29uc3QgbWFya3VwID0gKG9wdGlvbnM6IE9wdGlvblR5cGVbXSkgPT4gYFxuICA8c2VsZWN0PlxuICAgICAgICAke3ByZXBhcmVPcHRpb25zTWFya3VwKG9wdGlvbnMpfVxuICA8L3NlbGVjdD5cbmA7XG4iLCJpbXBvcnQgeyBjcmVhdGVTdHlsZSB9IGZyb20gXCIuLi9jaGFydC91dGlscy9zdHlsZVwiO1xuXG5jb25zdCBjc3MgPSBgXG4uc2VsZWN0IHtcbndpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiAuc2VsZWN0IHNlbGVjdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIHBhZGRpbmc6IC43NXJlbSAyLjVyZW0gLjc1cmVtIDFyZW07XG4gICAgYmFja2dyb3VuZDogbm9uZTsgXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzQ0NDtcbn1cbiAuc2VsZWN0OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA2cHggNXB4IDAgNXB4O1xuICAgIGJvcmRlci1jb2xvcjogIzAwMCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3R5bGUoY3NzKTtcbiIsImltcG9ydCB7IE9wdGlvblR5cGUgfSBmcm9tICcuLi8uLi90eXBlcy9zZWxlY3QnO1xuXG5leHBvcnQgY29uc3QgZ2V0T3B0aW9ucyA9IChcbiAgZnJvbTogbnVtYmVyLFxuICB0bzogbnVtYmVyLFxuICBzZWxlY3RlZDogbnVtYmVyLFxuKTogT3B0aW9uVHlwZVtdID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuICBmb3IgKGxldCB5ZWFyID0gZnJvbTsgeWVhciA8PSB0bzsgeWVhcisrKSB7XG4gICAgY29uc3Qgb3B0aW9uOiBPcHRpb25UeXBlID0geyB2YWx1ZTogeWVhciwgdGl0bGU6IGAke3llYXJ9YCB9O1xuICAgIGlmICh5ZWFyID09PSBzZWxlY3RlZCkge1xuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgfVxuICByZXR1cm4gb3B0aW9ucztcbn07XG4iLCJleHBvcnQgY29uc3QgQ0hBUlRfV0lEVEhfSEVJR0hUX0FTUEVDVF9SQVRJTyA9IDEuNzc3IC8vIDE2OjlcbmV4cG9ydCBjb25zdCBHUklEX09GRlNFVCA9IDMwO1xuZXhwb3J0IGNvbnN0IEdSSURfTElORV9DT0xPUiA9ICcjMjEwMjAyJztcbmV4cG9ydCBjb25zdCBQT0xZTElORV9MSU5FX0NPTE9SID0gJyMxYzkxZjEnO1xuZXhwb3J0IGNvbnN0IE1BWF9YX1JFTkRFUl9WQUxVRVNfQ09VTlQgPSAxNTtcbmV4cG9ydCBjb25zdCBBWElTX0ZPTlRfU0laRSA9IDEyXG5leHBvcnQgY29uc3QgQVhJU19GT05UID0gJ0FyaWFsJ1xuZXhwb3J0IGNvbnN0IE1BWF9SRU5ERVJfTEFCRUxTX0NPVU5UID0gMTJcbiIsImltcG9ydCB7IEVDaGFydFR5cGVzIH0gZnJvbSAnLi4vdHlwZXMvY2hhcnQnO1xuXG5leHBvcnQgY29uc3QgSU5ERVhFRF9EQl9OQU1FID0gJ3N0YXRpc3RpY3MnO1xuZXhwb3J0IGNvbnN0IElOREVYRURfREJfVkVSU0lPTiA9IDE7XG5cbmV4cG9ydCBjb25zdCBTVEFUSVNUSUNfREJfVEFCTEVTX1NDSEVNQSA9IFtcbiAge1xuICAgIG5hbWU6IEVDaGFydFR5cGVzLlBSRUNJUElUQVRJT04sXG4gICAga2V5OiAndCcsXG4gIH0sXG4gIHsgbmFtZTogRUNoYXJ0VHlwZXMuVEVNUEVSQVRVUkUsIGtleTogJ3QnIH0sXG5dO1xuIiwiZXhwb3J0IGNvbnN0IERFRkFVTFRfRlJPTV9EQVRFID0gMTg4MTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RPX0RBVEUgPSAyMDA2O1xuXG5leHBvcnQgY29uc3QgbW9udGhOYW1lcyA9IFtcbiAgJ0phbicsXG4gICdGZWInLFxuICAnTWFyJyxcbiAgJ0FwcicsXG4gICdNYXknLFxuICAnSnVuJyxcbiAgJ0p1bCcsXG4gICdBdWcnLFxuICAnU2VwJyxcbiAgJ09jdCcsXG4gICdOb3YnLFxuICAnRGVjJyxcbl07XG5cbmV4cG9ydCBjb25zdCBmdWxsTW9udGhOYW1lcyA9IFtcbiAgJ0phbnVhcnknLFxuICAnRmVicnVhcnknLFxuICAnTWFyY2gnLFxuICAnQXByaWwnLFxuICAnTWF5JyxcbiAgJ0p1bmUnLFxuICAnSnVseScsXG4gICdBdWd1c3QnLFxuICAnU2VwdGVtYmVyJyxcbiAgJ09jdG9iZXInLFxuICAnTm92ZW1iZXInLFxuICAnRGVjZW1iZXInLFxuXTtcbiIsImV4cG9ydCBjb25zdCBQT1JUID0gJzMwMDAnO1xuZXhwb3J0IGNvbnN0IEhPU1QgPSAnbG9jYWxob3N0J1xuXG5leHBvcnQgY29uc3QgUFJFQ0lQSVRBVElPTl9QQVRIID0gJy9wcmVjaXBpdGF0aW9uJ1xuZXhwb3J0IGNvbnN0IFRFTVBFUkFUVVJFX1BBVEggPSAnL3RlbXBlcmF0dXJlJ1xuIiwiZXhwb3J0IGNvbnN0IElOSVRfUE9TVF9UWVBFID0gJ2luaXQnXG5leHBvcnQgY29uc3QgU1VDQ0VTU19JTklUX01FU1NBR0VfVFlQRSA9ICdzdWNjZXNzSW5pdCdcbmV4cG9ydCBjb25zdCBFUlJPUl9JTklUX01FU1NBR0VfVFlQRSA9ICdlcnJvckluaXQnXG5cbmV4cG9ydCBjb25zdCBTRVRfVkFMVUVfUE9TVF9UWVBFID0gJ3NldFZhbHVlJ1xuZXhwb3J0IGNvbnN0IFNVQ0NFU1NfU0VUX1ZBTFVFX01FU1NBR0VfVFlQRSA9ICdzdWNjZXNzU2V0VmFsdWVzJ1xuZXhwb3J0IGNvbnN0IEVSUk9SX1NFVF9WQUxVRV9NRVNTQUdFX1RZUEUgPSAnZXJyb3JTZXRWYWx1ZXMnXG5cbmV4cG9ydCBjb25zdCBHRVRfUkVDT1JEX0NPVU5UX1BPU1RfVFlQRSA9ICdnZXRUYWJsZVJlY29yZENvdW50J1xuZXhwb3J0IGNvbnN0IFNVQ0NFU1NfR0VUX1JFQ09SRF9DT1VOVF9NRVNTQUdFX1RZUEUgPSAnc3VjY2Vzc0dldFRhYmxlUmVjb3JkQ291bnQnXG5leHBvcnQgY29uc3QgRVJST1JfR0VUX1JFQ09SRF9DT1VOVF9NRVNTQUdFX1RZUEUgPSAnZXJyb3JHZXRUYWJsZVJlY29yZENvdW50J1xuXG5leHBvcnQgY29uc3QgR0VUX1ZBTFVFU19QT1NUX1RZUEUgPSAnZ2V0VmFsdWVzJ1xuZXhwb3J0IGNvbnN0IFNVQ0NFU1NfR0VUX1ZBTFVFU19NRVNTQUdFX1RZUEUgPSAnc3VjY2Vzc0dldFZhbHVlcydcbmV4cG9ydCBjb25zdCBFUlJPUl9HRVRfVkFMVUVTX01FU1NBR0VfVFlQRSA9ICdlcnJvckdldFZhbHVlcydcbiIsImltcG9ydCB7SUJhc2VDb21wb25lbnR9IGZyb20gXCIuL3R5cGVzL2NvbXBvbmVudFwiO1xuXG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvYXBwXCI7XG5cbmltcG9ydCB7IGluaXRBcHAgfSBmcm9tIFwiLi9tb2RlbHMvaW5pdEFwcFwiO1xuXG5jb25zdCBNYWluID0gKCk6IElCYXNlQ29tcG9uZW50ID0+IHtcbiAgY29uc3QgaW5pdEFwcFByb21pc2UgPSBpbml0QXBwKCk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbi5pZCA9ICdtYWluX2FwcCc7XG4gIGNvbnN0IGFwcCA9IEFwcChpbml0QXBwUHJvbWlzZSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYXBwLmh0bWwpO1xuICByZXR1cm4ge1xuICAgIGh0bWw6IG1haW4sXG4gICAgc3R5bGU6IGFwcC5zdHlsZVxuICB9O1xufTtcblxuY29uc3QgbWFpbk9iaiA9IE1haW4oKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluT2JqLmh0bWwpO1xubWFpbk9iai5zdHlsZS5mb3JFYWNoKHN0eWxlID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpKTtcbiIsImltcG9ydCB7IFRhYmxlVHlwZSB9IGZyb20gJy4uL3R5cGVzL2RhdGFiYXNlJztcbmltcG9ydCB7IElOREVYRURfREJfTkFNRSwgU1RBVElTVElDX0RCX1RBQkxFU19TQ0hFTUEsIElOREVYRURfREJfVkVSU0lPTiB9IGZyb20gJy4uL2NvbnN0YW50cy9kYXRhYmFzZSc7XG5pbXBvcnQgeyBFQ2hhcnRUeXBlcywgQ2hhcnREYXRhVHlwZSwgUHJlcGFyZWRDaGFyZERhdGFUeXBlIH0gZnJvbSAnLi4vdHlwZXMvY2hhcnQnO1xuXG5pbXBvcnQge1xuICBFUlJPUl9HRVRfUkVDT1JEX0NPVU5UX01FU1NBR0VfVFlQRSwgRVJST1JfR0VUX1ZBTFVFU19NRVNTQUdFX1RZUEUsXG4gIEVSUk9SX0lOSVRfTUVTU0FHRV9UWVBFLFxuICBFUlJPUl9TRVRfVkFMVUVfTUVTU0FHRV9UWVBFLFxuICBHRVRfUkVDT1JEX0NPVU5UX1BPU1RfVFlQRSwgR0VUX1ZBTFVFU19QT1NUX1RZUEUsXG4gIElOSVRfUE9TVF9UWVBFLFxuICBTRVRfVkFMVUVfUE9TVF9UWVBFLFxuICBTVUNDRVNTX0dFVF9SRUNPUkRfQ09VTlRfTUVTU0FHRV9UWVBFLCBTVUNDRVNTX0dFVF9WQUxVRVNfTUVTU0FHRV9UWVBFLFxuICBTVUNDRVNTX0lOSVRfTUVTU0FHRV9UWVBFLFxuICBTVUNDRVNTX1NFVF9WQUxVRV9NRVNTQUdFX1RZUEVcbiAgLy8gQHRzLWlnbm9yZVxufSBmcm9tICcuLi9jb25zdGFudHMvd2Vid29ya2VyLmpzJztcblxuY29uc3Qgd29ya2VyID0gbmV3IFdvcmtlcignLi4vd2Vid29ya2Vycy9kYXRhYmFzZVdvcmtlci5qcycsIHsgdHlwZTogJ21vZHVsZScgfSk7XG5cbmNvbnN0IGluaXREYiA9IChcbiAgdGFibGVzOiBUYWJsZVR5cGVbXSxcbiAgZGJOYW1lOiBzdHJpbmcsXG4gIHZlcnNpb246IG51bWJlcixcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAvLyBUT0RPOiBtYXliZSBhZGQgcHJvbWlzZSB3cmFwcGVyIHRvIHdvcmtlclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IHR5cGU6IElOSVRfUE9TVF9UWVBFLCBkYXRhOiB7IHRhYmxlcywgZGJOYW1lLCB2ZXJzaW9uIH0gfSk7XG4gICAgY29uc3QgbGlzdGVuZXIgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gU1VDQ0VTU19JTklUX01FU1NBR0VfVFlQRSkge1xuICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gRVJST1JfSU5JVF9NRVNTQUdFX1RZUEUpIHtcbiAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lcik7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lcik7XG4gIH0pO1xufTtcblxuY29uc3QgaW5kZXhlZERiU3RvcmFnZSA9IChcbiAgdGFibGVzOiBUYWJsZVR5cGVbXSxcbiAgZGJOYW1lOiBzdHJpbmcsXG4gIHZlcnNpb246IG51bWJlcixcbikgPT4ge1xuICAvLyBpbml0IGRhdGFiYXNlIChjcmVhdGUgZGIgYW5kIHRhYmxlcylcbiAgY29uc3QgaW5pdERiUHJvbWlzZSA9IGluaXREYih0YWJsZXMsIGRiTmFtZSwgdmVyc2lvbik7XG5cbiAgLy8gYXBwZW5kIHZhbHVlcyB0byB0YWJsZVxuICBjb25zdCBzZXRWYWx1ZXMgPSBhc3luYyAoXG4gICAgdGFibGU6IEVDaGFydFR5cGVzLFxuICAgIHZhbHVlczogQ2hhcnREYXRhVHlwZVtdLFxuICApOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBhd2FpdCBpbml0RGJQcm9taXNlO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyB0eXBlOiBTRVRfVkFMVUVfUE9TVF9UWVBFLCBkYXRhOiB7IHRhYmxlLCB2YWx1ZXMgfSB9KTtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gU1VDQ0VTU19TRVRfVkFMVUVfTUVTU0FHRV9UWVBFKSB7XG4gICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSBFUlJPUl9TRVRfVkFMVUVfTUVTU0FHRV9UWVBFKSB7XG4gICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRSZWNvcmRDb3VudCA9IGFzeW5jICh0YWJsZTogRUNoYXJ0VHlwZXMpID0+IHtcbiAgICBhd2FpdCBpbml0RGJQcm9taXNlO1xuICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IHR5cGU6IEdFVF9SRUNPUkRfQ09VTlRfUE9TVF9UWVBFLCBkYXRhOiB7IHRhYmxlIH0gfSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPG51bWJlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSBTVUNDRVNTX0dFVF9SRUNPUkRfQ09VTlRfTUVTU0FHRV9UWVBFKSB7XG4gICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgcmVzb2x2ZShldmVudC5kYXRhLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09IEVSUk9SX0dFVF9SRUNPUkRfQ09VTlRfTUVTU0FHRV9UWVBFKSB7XG4gICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgcmVqZWN0KDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWVzID0gYXN5bmMgKHRhYmxlOiBFQ2hhcnRUeXBlcywgZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nKSA9PiB7XG4gICAgYXdhaXQgaW5pdERiUHJvbWlzZTtcbiAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyB0eXBlOiBHRVRfVkFMVUVTX1BPU1RfVFlQRSwgZGF0YTogeyB0YWJsZSwgZnJvbSwgdG8gfSB9KTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UHJlcGFyZWRDaGFyZERhdGFUeXBlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHt0eXBlLCBkYXRhfSAgPSBldmVudC5kYXRhXG4gICAgICAgIGlmICh0eXBlID09PSBTVUNDRVNTX0dFVF9WQUxVRVNfTUVTU0FHRV9UWVBFICYmIGRhdGEudGFibGVUeXBlID09PSB0YWJsZSkge1xuICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSBFUlJPUl9HRVRfVkFMVUVTX01FU1NBR0VfVFlQRSAmJiBkYXRhLnRhYmxlVHlwZSA9PT0gdGFibGUpIHtcbiAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyKTtcbiAgICAgICAgICByZWplY3Qoe30pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRWYWx1ZXMsXG4gICAgZ2V0UmVjb3JkQ291bnQsXG4gICAgZ2V0VmFsdWVzXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleGVkRGJTdG9yYWdlKFNUQVRJU1RJQ19EQl9UQUJMRVNfU0NIRU1BLCBJTkRFWEVEX0RCX05BTUUsIElOREVYRURfREJfVkVSU0lPTik7XG4iLCJpbXBvcnQgeyBDaGFydERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2hhcnQnO1xuaW1wb3J0IHsgSE9TVCwgUE9SVCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9zZXJ2ZXInO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDaGFydERhdGEgPSBhc3luYyAodXJsOiBzdHJpbmcpOiBQcm9taXNlPENoYXJ0RGF0YVR5cGVbXT4gPT4ge1xuICBjb25zdCBmdWxsVXJsID0gYGh0dHA6Ly8ke0hPU1R9OiR7UE9SVH0ke3VybH1gO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZnVsbFVybCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGFsZXJ0KGBDYW4ndCBleGVjdXRlIGZldGNoICR7ZnVsbFVybH0sIHBsZWFzZSBjaGVjayBBUEkgc2VydmVyIGApO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICB9XG59O1xuIiwiaW1wb3J0IGluZGV4ZWREYiBmcm9tICcuL2RhdGFiYXNlJztcbmltcG9ydCB7IEVDaGFydFR5cGVzIH0gZnJvbSAnLi4vdHlwZXMvY2hhcnQnO1xuaW1wb3J0IHsgZmV0Y2hDaGFydERhdGEgfSBmcm9tICcuL2ZldGNoJztcbmltcG9ydCB7IFRFTVBFUkFUVVJFX1BBVEgsIFBSRUNJUElUQVRJT05fUEFUSCB9IGZyb20gJy4uL2NvbnN0YW50cy9zZXJ2ZXInO1xuXG5leHBvcnQgY29uc3QgaW5pdEFwcCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBnZXRSZWNvcmRDb3VudCwgc2V0VmFsdWVzIH0gPSBpbmRleGVkRGI7XG4gIGNvbnN0IGNvdW50VGVtcGVyYXR1cmUgPSBhd2FpdCBnZXRSZWNvcmRDb3VudChFQ2hhcnRUeXBlcy5URU1QRVJBVFVSRSk7XG4gIGNvbnN0IGNvdW50UHJlY2lwaXRhdGlvbiA9IGF3YWl0IGdldFJlY29yZENvdW50KEVDaGFydFR5cGVzLlBSRUNJUElUQVRJT04pO1xuICBjb25zdCBwcm9taXNlcyA9IFtdXG4gIGlmICghY291bnRUZW1wZXJhdHVyZSkge1xuICAgIHByb21pc2VzLnB1c2goZmV0Y2hDaGFydERhdGEoVEVNUEVSQVRVUkVfUEFUSCkudGhlbih0ZW1wZXJhdHVyZSA9PiB7XG4gICAgICByZXR1cm4gc2V0VmFsdWVzKEVDaGFydFR5cGVzLlRFTVBFUkFUVVJFLCB0ZW1wZXJhdHVyZSlcbiAgICB9KSlcbiAgfVxuICBpZiAoIWNvdW50UHJlY2lwaXRhdGlvbikge1xuICAgIHByb21pc2VzLnB1c2goZmV0Y2hDaGFydERhdGEoUFJFQ0lQSVRBVElPTl9QQVRIKS50aGVuKHByZWNpcGl0YXRpb24gPT4ge1xuICAgICAgcmV0dXJuIHNldFZhbHVlcyhFQ2hhcnRUeXBlcy5QUkVDSVBJVEFUSU9OLCBwcmVjaXBpdGF0aW9uKVxuICAgIH0pKTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpXG59O1xuIiwiaW1wb3J0IHsgREVGQVVMVF9GUk9NX0RBVEUsIERFRkFVTFRfVE9fREFURSB9IGZyb20gJy4uL2NvbnN0YW50cy9kYXRlcyc7XG5cbmltcG9ydCB7IEVDaGFydFR5cGVzIH0gZnJvbSAnLi4vdHlwZXMvY2hhcnQnO1xuaW1wb3J0IHsgU3RvcmFnZURhdGFUeXBlIH0gZnJvbSAnLi4vdHlwZXMvbG9jYWxzdG9yYWdlJztcbmltcG9ydCB7IEN1c3RvbVN0b3JhZ2VDaGFuZ2VUeXBlIH0gZnJvbSAnLi4vdHlwZXMvZXZlbnQnO1xuXG5jb25zdCBTVE9SQUdFX0NIQU5HRV9FVkVOVF9OQU1FID0gJ2N1c3RvbVN0b3JhZ2VDaGFuZ2UnO1xuXG5jb25zdCBjbGVhciA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG59O1xuXG5jb25zdCBnZXREYXRhID0gKGtleToga2V5b2YgU3RvcmFnZURhdGFUeXBlKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoPHN0cmluZz5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmNvbnN0IHNldERhdGEgPSAoXG4gIGtleToga2V5b2YgU3RvcmFnZURhdGFUeXBlLFxuICBkYXRhOiBTdG9yYWdlRGF0YVR5cGVba2V5b2YgU3RvcmFnZURhdGFUeXBlXSxcbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHNlcmlhbCA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc2VyaWFsKTtcblxuICAgIC8vIHNlbmRpbmcgY3VzdG9tIGNoYW5nZSBzdG9yZSBldmVudFxuICAgIGNvbnN0IGV2dDogQ3VzdG9tU3RvcmFnZUNoYW5nZVR5cGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KFNUT1JBR0VfQ0hBTkdFX0VWRU5UX05BTUUsIHRydWUsIGZhbHNlLCB7XG4gICAgICBuYW1lOiBrZXksXG4gICAgICBkYXRhLFxuICAgIH0pO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyciA9PT0gJ1FVT1RBX0VYQ0VFREVEX0VSUicpIHtcbiAgICAgIGNsZWFyKCk7XG4gICAgICBjb25zdCBzZXJpYWwgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc2VyaWFsKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIHN1YnNjcmliZSB0byBjaGFuZ2luZyBzdG9yZSBieSBrZXlcbmNvbnN0IHN1YnNjcmliZSA9IChcbiAga2V5OiBrZXlvZiBTdG9yYWdlRGF0YVR5cGUsXG4gIGNiOiAoZGF0YTogU3RvcmFnZURhdGFUeXBlW2tleW9mIFN0b3JhZ2VEYXRhVHlwZV0pID0+IHZvaWQsXG4pID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgU1RPUkFHRV9DSEFOR0VfRVZFTlRfTkFNRSxcbiAgICAoZXZlbnQ6IEN1c3RvbVN0b3JhZ2VDaGFuZ2VUeXBlKSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGV0YWlsLm5hbWUgPT09IGtleSkge1xuICAgICAgICBjYihldmVudC5kZXRhaWwuZGF0YSk7XG4gICAgICB9XG4gICAgfSxcbiAgKTtcbn07XG5cbmNvbnN0IGluaXRMb2NhbFN0b3JhZ2UgPSAoaW5pdFN0YXRlOiBTdG9yYWdlRGF0YVR5cGUpID0+IHtcbiAgZm9yIChjb25zdCBrZXkgaW4gaW5pdFN0YXRlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIGlmIChpbml0U3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgc2V0RGF0YShcbiAgICAgICAga2V5IGFzIGtleW9mIFN0b3JhZ2VEYXRhVHlwZSxcbiAgICAgICAgaW5pdFN0YXRlW2tleSBhcyBrZXlvZiBTdG9yYWdlRGF0YVR5cGVdLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGFwcFN0YXRlU3RvcmFnZSA9IChpbml0U3RhdGU6IFN0b3JhZ2VEYXRhVHlwZSkgPT4ge1xuICBpbml0TG9jYWxTdG9yYWdlKGluaXRTdGF0ZSk7XG4gIHJldHVybiB7XG4gICAgZ2V0RGF0YSxcbiAgICBzZXREYXRhLFxuICAgIGNsZWFyLFxuICAgIHN1YnNjcmliZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwcFN0YXRlU3RvcmFnZSh7XG4gIGNoYXJ0VHlwZTogRUNoYXJ0VHlwZXMuVEVNUEVSQVRVUkUsXG4gIGZyb21WYWx1ZTogREVGQVVMVF9GUk9NX0RBVEUsXG4gIHRvVmFsdWU6IERFRkFVTFRfVE9fREFURSxcbiAgZnJvbTogREVGQVVMVF9GUk9NX0RBVEUsXG4gIHRvOiBERUZBVUxUX1RPX0RBVEUsXG59KTtcbiIsImV4cG9ydCBlbnVtIEVDaGFydFR5cGVzIHtcbiAgVEVNUEVSQVRVUkUgPSAndGVtcGVyYXR1cmUnLFxuICBQUkVDSVBJVEFUSU9OID0gJ3ByZWNpcGl0YXRpb24nLFxufVxuXG5leHBvcnQgdHlwZSBDaGFydERhdGFUeXBlID0ge1xuICB0OiBzdHJpbmc7XG4gIHY6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFByZXBhcmVkQ2hhcmREYXRhVHlwZSA9IHtcbiAgZGF0YTogQ2hhcnREYXRhVHlwZVtdO1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG4gIHRhYmxlVHlwZTogRUNoYXJ0VHlwZXM7XG59O1xuIiwiZXhwb3J0IHR5cGUgT3B0aW9uVHlwZSA9IHtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcixcbiAgdGl0bGU6IHN0cmluZyxcbiAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICBzZWxlY3RlZD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGVudW0gRVNlbGVjdFR5cGVzIHtcbiAgRlJPTV9EQVRFID0gJ2Zyb20nLFxuICBUT19EQVRFID0gJ3RvJyxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=