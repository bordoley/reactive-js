[Reactive-JS](../README.md) / http-node

# Module: http-node

## Index

### Type aliases

* [HttpRequestListenerOptions](http_node.md#httprequestlisteneroptions)

### Functions

* [createContentEncodingCompressTransforms](http_node.md#createcontentencodingcompresstransforms)
* [createContentEncodingDecompressTransforms](http_node.md#createcontentencodingdecompresstransforms)
* [createHttpRequestListener](http_node.md#createhttprequestlistener)

## Type aliases

### HttpRequestListenerOptions

Ƭ **HttpRequestListenerOptions**: { `onError?`: [*Function1*](functions.md#function1)<*unknown*, *void* \| [*ObservableLike*](../interfaces/observable.observablelike.md)<*unknown*\>\>  }

#### Type declaration:

Name | Type |
------ | ------ |
`onError?` | [*Function1*](functions.md#function1)<*unknown*, *void* \| [*ObservableLike*](../interfaces/observable.observablelike.md)<*unknown*\>\> |

## Functions

### createContentEncodingCompressTransforms

▸ `Const`**createContentEncodingCompressTransforms**(`options?`: BrotliOptions \| ZlibOptions): [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<[*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\>

#### Parameters:

Name | Type |
------ | ------ |
`options?` | BrotliOptions \| ZlibOptions |

**Returns:** [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<[*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\>

___

### createContentEncodingDecompressTransforms

▸ `Const`**createContentEncodingDecompressTransforms**(`options?`: BrotliOptions \| ZlibOptions): [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<[*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\>

#### Parameters:

Name | Type |
------ | ------ |
`options?` | BrotliOptions \| ZlibOptions |

**Returns:** [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<[*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\>

___

### createHttpRequestListener

▸ `Const`**createHttpRequestListener**(`handler`: [*Function1*](functions.md#function1)<[*HttpRequest*](http.md#httprequest)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<[*HttpResponse*](http.md#httpresponse)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\>\>, `scheduler`: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), `options?`: [*HttpRequestListenerOptions*](http_node.md#httprequestlisteneroptions)): [*SideEffect2*](functions.md#sideeffect2)<*IncomingMessage* \| *Http2ServerRequest*, *ServerResponse* \| *Http2ServerResponse*\>

#### Parameters:

Name | Type |
------ | ------ |
`handler` | [*Function1*](functions.md#function1)<[*HttpRequest*](http.md#httprequest)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<[*HttpResponse*](http.md#httpresponse)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\>\> |
`scheduler` | [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md) |
`options?` | [*HttpRequestListenerOptions*](http_node.md#httprequestlisteneroptions) |

**Returns:** [*SideEffect2*](functions.md#sideeffect2)<*IncomingMessage* \| *Http2ServerRequest*, *ServerResponse* \| *Http2ServerResponse*\>
