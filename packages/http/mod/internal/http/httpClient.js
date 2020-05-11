import { dispose } from "../../../../core/lib/disposable.js";
import { pipe, identity } from "../../../../core/lib/functions.js";
import { fromValue, map, switchMap, concatMap, } from "../../../../core/lib/observable.js";
import { isSome } from "../../../../core/lib/option.js";
import { createRedirectHttpRequest } from "./httpRequest.js";
const redirectCodes = [
    301,
    302,
    303,
    307,
    308,
];
export const withDefaultBehaviors = (encodeHttpRequest = identity) => (httpClient) => {
    const sendRequest = (request) => pipe(request, fromValue(), map(encodeHttpRequest), switchMap(httpClient), concatMap(status => {
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
