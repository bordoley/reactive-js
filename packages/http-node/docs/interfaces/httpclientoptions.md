[@reactive-js/http-node](../README.md) › [HttpClientOptions](httpclientoptions.md)

# Interface: HttpClientOptions

## Hierarchy

* BrotliOptions

* ZlibOptions

  ↳ **HttpClientOptions**

## Index

### Properties

* [agent](httpclientoptions.md#optional-agent)
* [chunkSize](httpclientoptions.md#optional-chunksize)
* [dictionary](httpclientoptions.md#optional-dictionary)
* [finishFlush](httpclientoptions.md#optional-finishflush)
* [flush](httpclientoptions.md#optional-flush)
* [insecureHTTPParser](httpclientoptions.md#optional-insecurehttpparser)
* [level](httpclientoptions.md#optional-level)
* [maxHeaderSize](httpclientoptions.md#optional-maxheadersize)
* [memLevel](httpclientoptions.md#optional-memlevel)
* [params](httpclientoptions.md#optional-params)
* [shouldEncode](httpclientoptions.md#optional-shouldencode)
* [strategy](httpclientoptions.md#optional-strategy)
* [windowBits](httpclientoptions.md#optional-windowbits)

## Properties

### `Optional` agent

• **agent**? : *Agent | boolean*

___

### `Optional` chunkSize

• **chunkSize**? : *undefined | number*

*Inherited from void*

*Overrides void*

**`default`** 16*1024

___

### `Optional` dictionary

• **dictionary**? : *NodeJS.ArrayBufferView | ArrayBuffer*

*Inherited from void*

___

### `Optional` finishFlush

• **finishFlush**? : *undefined | number*

*Inherited from void*

*Overrides void*

**`default`** constants.BROTLI_OPERATION_FINISH

___

### `Optional` flush

• **flush**? : *undefined | number*

*Inherited from void*

*Overrides void*

**`default`** constants.BROTLI_OPERATION_PROCESS

___

### `Optional` insecureHTTPParser

• **insecureHTTPParser**? : *undefined | false | true*

___

### `Optional` level

• **level**? : *undefined | number*

*Inherited from void*

___

### `Optional` maxHeaderSize

• **maxHeaderSize**? : *undefined | number*

___

### `Optional` memLevel

• **memLevel**? : *undefined | number*

*Inherited from void*

___

### `Optional` params

• **params**? : *undefined | object*

*Inherited from void*

___

### `Optional` shouldEncode

• **shouldEncode**? : *undefined | function*

___

### `Optional` strategy

• **strategy**? : *undefined | number*

*Inherited from void*

___

### `Optional` windowBits

• **windowBits**? : *undefined | number*

*Inherited from void*
