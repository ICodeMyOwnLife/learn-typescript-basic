/**
 * Enum
 */
enum ErrorCode {
  SYSTEM = 1,
  APP = 2,
  NETWORK = 4,
  UNKNOWN = 8
}

console.log(ErrorCode.APP);
console.log(ErrorCode[ErrorCode.NETWORK]);

/**
 * String-valued enum
 */
enum ErrorMessage {
  SYSTEM = "System Error",
  APP = "App Error",
  NETWORK = "Network Error",
  UNKNOWN = "Unknown Error"
}

console.log(ErrorMessage.NETWORK);

/**
 * Inline enum members
 */
const enum StatusCode {
  SUCCESS = 0,
  FAILED = 1,
  PENDING = 2
}

console.log(StatusCode.FAILED);
