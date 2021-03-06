Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewportSizeType = exports.ColumnSizeType = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// eslint-disable-next-line
var ColumnSizeType = exports.ColumnSizeType = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]);
// eslint-disable-next-line
var ViewportSizeType = exports.ViewportSizeType = _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg']);