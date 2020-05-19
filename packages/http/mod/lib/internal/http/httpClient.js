import { dispose } from "../../../../../core/mod/lib/disposable.js";
import { pipe } from "../../../../../core/mod/lib/functions.js";
import { fromValue, map, switchMap, concatMap, } from "../../../../../core/mod/lib/observable.js";
import { isSome, isNone, none } from "../../../../../core/mod/lib/option.js";
import { createRedirectHttpRequest } from "./httpRequest.js";
import { contentIsCompressible } from "./httpContentInfo.js";
const redirectCodes = [
    301,
    302,
    303,
    307,
    308,
];
const encodeHttpClientRequestContent = (encoderProvider, db = {}) => {
    const supportedEncodings = Object.keys(encoderProvider);
    const httpRequestIsCompressible = ({ contentInfo, }) => isSome(contentInfo) && contentIsCompressible(contentInfo, db);
    return request => {
        var _a;
        const { body, contentInfo } = request;
        if (isNone(contentInfo)) {
            return request;
        }
        const contentEncoding = ((_a = request === null || request === void 0 ? void 0 : request.acceptedEncodings) !== null && _a !== void 0 ? _a : []).find(encoding => supportedEncodings.includes(encoding));
        if (isNone(contentEncoding)) {
            return request;
        }
        const encode = isSome(contentEncoding) && httpRequestIsCompressible(request)
            ? encoderProvider[contentEncoding]
            : none;
        if (isNone(encode)) {
            return request;
        }
        return {
            ...request,
            body: encode(body),
            contentInfo: {
                contentType: contentInfo.contentType,
                contentEncodings: [contentEncoding],
                contentLength: -1,
            },
        };
    };
};
export const withDefaultBehaviors = (encoderProvider, db = {}) => httpClient => {
    const sendRequest = (request) => pipe(request, fromValue(), map(encodeHttpClientRequestContent(encoderProvider, db)), switchMap(httpClient), concatMap(status => {
        var _a, _b;
        if (status.type === 4) {
            const { response } = status;
            const { location, preferences, statusCode } = response;
            const acceptedEncodings = (_a = preferences === null || preferences === void 0 ? void 0 : preferences.acceptedEncodings) !== null && _a !== void 0 ? _a : [];
            const shouldRedirect = redirectCodes.includes(statusCode) &&
                isSome(location) &&
                ((_b = request === null || request === void 0 ? void 0 : request.maxRedirects) !== null && _b !== void 0 ? _b : 10) > 0;
            const newRequest = shouldRedirect
                ? createRedirectHttpRequest(request, response)
                : statusCode === 417
                    ? { ...request, expectContinue: false }
                    : statusCode === 415 &&
                        acceptedEncodings.length > 0
                        ? { ...request, acceptedEncodings }
                        : request;
            if (request !== newRequest) {
                dispose(response.body);
                return sendRequest(newRequest);
            }
        }
        return fromValue()(status);
    }));
    return sendRequest;
};
