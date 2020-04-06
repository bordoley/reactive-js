import { HttpRequestLike, HttpResponseLike } from "@reactive-js/http";
import { ObservableLike, createObservable } from "@reactive-js/observable";

export const sendHttpRequest = <T>(
  request: HttpRequestLike<T>,
): ObservableLike<HttpResponseLike<T>> =>
  createObservable(subscriber => {
    //https://github.com/github/fetch/blob/7232090c04e1ddefb806910bbd0a756bc8aac2f0/fetch.js#L163

    const xhr = new XMLHttpRequest();
    subscriber.add(() => xhr.abort());

    /*
    XMLHttpRequest.onprogress = function (event) {
      event.loaded;
      event.total;
    };
    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      subscriber.dispatch(new Response(body, options))
    }*/

    xhr.onerror = () => {
      const cause = new Error("Network request failed");
      subscriber.dispose({ cause });
    };

    xhr.ontimeout = () => {
      const cause = new Error("Network request failed");
      subscriber.dispose({ cause });
    };

    xhr.open(request.method, request.uri.toString(), true);

    /*    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })
    
    
    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    */
  });
