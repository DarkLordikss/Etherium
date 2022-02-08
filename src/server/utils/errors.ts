export enum Errors {
  // Invalid payload errors (400)
  InvalidPayload = 400000,
  RepeatUser,
  RepeatProfile ,
  // Authorization errors (401)
  TokenExpired = 401001,
  TokenInvalid = 401002,
  SessionNotFound = 401004,
  // Not found (404)
  NotFound = 404000,
  // Forbidden (403)
  AccessDenied = 403000,
}
