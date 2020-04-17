export { parseETag, parseETagOrThrow } from "./internal/entityTag";

export {
  HttpContentEncoding,
  HttpContent,
  HttpContentRequest,
  HttpContentResponse,
  HttpDateTime,
  HttpHeaders,
  HttpMethod,
  HttpPreferences,
  HttpRequest,
  HttpResponse,
  HttpServerRequest,
  HttpStatusCode,
  EntityTag,
  MediaType,
  URILike,
} from "./internal/interfaces";

export {
  createHttpRequest,
  createRedirectHttpRequest,
  disallowProtocolAndHostForwarding,
  parseHttpRequestFromHeaders,
  httpRequestToUntypedHeaders,
  writeHttpRequestHeaders,
} from "./internal/httpRequest";

export {
  checkIfNotModified,
  createHttpResponse,
  parseHttpResponseFromHeaders,
  writeHttpResponseHeaders,
} from "./internal/httpResponse";

export { HttpStandardHeader } from "./internal/httpHeaders";

/** FIXME: Not sure we should export these. Instead we can export createContent function */
export {
  mediaTypeToString,
  parseMediaType,
  parseMediaTypeOrThrow,
} from "./internal/mediaType";

export { parseHeaders } from "./internal/httpGrammar";
