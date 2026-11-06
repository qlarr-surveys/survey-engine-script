export const allowedIdentifiers = ["undefined", "NaN", "Infinity", "-Infinity"];
export const unaryOperators = ["+", "-", "!", "~", "typeof"];
export const binaryOperators = [
  "==",
  "!=",
  "===",
  "!==",
  "<",
  "<=",
  ">",
  ">=",
  "+",
  "-",
  "*",
  "/",
  "%",
  "**",
  "&",
  "|",
  "^",
  "<<",
  ">>",
  ">>>",
  "&&",
  "||",
  "??",
];

// static methods
export const identifiersWithNew = ["Date", "RegExp"];
export const identifiersWithStaticMethods = [
  "Date",
  "Number",
  "Math",
  "Object",
  "QlarrScripts",
];
export const identifiersWithStaticProperties = ["Number", "Math"];
export const reservedParams = [
  ...allowedIdentifiers,
  ...identifiersWithNew,
  ...identifiersWithStaticMethods,
];
export const dateStaticMethods = ["now", "parse", "UTC", "RegExp"];
export const mathStaticMethods = [
  "abs",
  "acos",
  "acosh",
  "asin",
  "asinh",
  "atan",
  "atan2",
  "atanh",
  "cbrt",
  "ceil",
  "clz32",
  "cos",
  "cosh",
  "exp",
  "expm1",
  "f16round",
  "floor",
  "fround",
  "hypot",
  "imul",
  "log",
  "log10",
  "log1p",
  "log2",
  "max",
  "min",
  "pow",
  "random",
  "round",
  "sign",
  "sin",
  "sinh",
  "sqrt",
  "tan",
  "tanh",
  "trunc",
];
export const qlarrStaticMethods = [
  "separator",
  "safeAccess",
  "and",
  "isValidSqlDateTime",
  "listStrings",
  "isValidTime",
  "isValidDay",
  "sqlDateTimeToDate",
  "formatSqlDate",
  "formatTime",
  "dateStringToDate",
  "toSqlDateTimeIgnoreTime",
  "toSqlDateTime",
  "toSqlDateTimeIgnoreDate",
  "isVoid",
  "isNotVoid",
  "wordCount",
  "hasDuplicates",
  "stripTags"
];
export const numberStaticMethods = [
  "isFinite",
  "isInteger",
  "isNaN",
  "isSafeInteger",
  "parseFloat",
  "parseInt",
];
export const objectStaticMethods = ["entries", "keys"];
export const mathStaticProperties = [
  "E",
  "LN10",
  "LN2",
  "LOG10E",
  "LOG2E",
  "PI",
  "SQRT1_2",
  "SQRT2",
];
export const numberStaticProperties = [
  "EPSILON",
  "MAX_SAFE_INTEGER",
  "MAX_VALUE",
  "MIN_SAFE_INTEGER",
  "MIN_VALUE",
  "NaN",
  "NEGATIVE_INFINITY",
  "POSITIVE_INFINITY",
];

export const allowedProperties = [
  // Array properties
  "length", // Array
];

// every allowed instance method, mapped to the position of the function
// argument it invokes without retaining, or null if it takes no function
export const allowedMethods = new Map([
  ["toString", null], // Object, RegExp, Array, Date
  ["toLocaleString", null], // Object, Number, Date
  ["toExponential", null], // Number
  ["toFixed", null], // Number
  ["toPrecision", null], // Number
  ["exec", null], // RegExp
  ["test", null], // RegExp
  ["at", null], // Array
  ["contains", null], // Array
  ["filter", 0], // Array
  ["find", 0], // Array
  ["findIndex", 0], // Array
  ["findLast", 0], // Array
  ["findLastIndex", 0], // Array
  ["includes", null], // Array, String
  ["indexOf", null], // Array, String
  ["keys", null], // Array
  ["lastIndexOf", null], // Array, String
  ["length", null], // Array
  ["map", 0], // Array
  ["pop", null], // Array
  ["push", null], // Array
  ["reduce", 0], // Array
  ["reduceRight", 0], // Array
  ["reverse", null], // Array
  ["shift", null], // Array
  ["slice", null], // Array, String
  ["some", 0], // Array
  ["sort", 0], // Array
  ["splice", null], // Array
  ["toReversed", null], // Array
  ["toSorted", 0], // Array
  ["toSpliced", null], // Array
  ["charAt", null], // String
  ["concat", null], // String
  ["endsWith", null], // String
  ["match", null], // String
  ["matchAll", null], // String
  ["replace", 1], // String
  ["replaceAll", 1], // String
  ["search", null], // String
  ["split", null], // String
  ["startsWith", null], // String
  ["substring", null], // String
  ["toLowerCase", null], // String
  ["toUpperCase", null], // String
  ["trim", null], // String
  ["trimEnd", null], // String
  ["trimStart", null], // String
  ["getDate", null], // Date
  ["getDay", null], // Date
  ["getFullYear", null], // Date
  ["getHours", null], // Date
  ["getMilliseconds", null], // Date
  ["getMinutes", null], // Date
  ["getMonth", null], // Date
  ["getSeconds", null], // Date
  ["getTime", null], // Date
  ["getTimezoneOffset", null], // Date
  ["getUTCDate", null], // Date
  ["getUTCDay", null], // Date
  ["getUTCFullYear", null], // Date
  ["getUTCHours", null], // Date
  ["getUTCMilliseconds", null], // Date
  ["getUTCMinutes", null], // Date
  ["getUTCMonth", null], // Date
  ["getUTCSeconds", null], // Date
  ["setDate", null], // Date
  ["setFullYear", null], // Date
  ["setHours", null], // Date
  ["setMilliseconds", null], // Date
  ["setMinutes", null], // Date
  ["setMonth", null], // Date
  ["setSeconds", null], // Date
  ["setTime", null], // Date
  ["setUTCDate", null], // Date
  ["setUTCFullYear", null], // Date
  ["setUTCHours", null], // Date
  ["setUTCMilliseconds", null], // Date
  ["setUTCMinutes", null], // Date
  ["setUTCMonth", null], // Date
  ["setUTCSeconds", null], // Date
  ["toDateString", null], // Date
  ["toISOString", null], // Date
  ["toJSON", null], // Date
  ["toLocaleDateString", null], // Date
  ["toLocaleTimeString", null], // Date
  ["toTimeString", null], // Date
  ["toUTCString", null], // Date
]);

