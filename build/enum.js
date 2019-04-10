/**
 * Enum
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["SYSTEM"] = 1] = "SYSTEM";
    ErrorCode[ErrorCode["APP"] = 2] = "APP";
    ErrorCode[ErrorCode["NETWORK"] = 4] = "NETWORK";
    ErrorCode[ErrorCode["UNKNOWN"] = 8] = "UNKNOWN";
})(ErrorCode || (ErrorCode = {}));
console.log(ErrorCode.APP);
console.log(ErrorCode[ErrorCode.NETWORK]);
/**
 * String-valued enum
 */
var ErrorMessage;
(function (ErrorMessage) {
    ErrorMessage["SYSTEM"] = "System Error";
    ErrorMessage["APP"] = "App Error";
    ErrorMessage["NETWORK"] = "Network Error";
    ErrorMessage["UNKNOWN"] = "Unknown Error";
})(ErrorMessage || (ErrorMessage = {}));
console.log(ErrorMessage.NETWORK);
console.log(1 /* FAILED */);
//# sourceMappingURL=enum.js.map