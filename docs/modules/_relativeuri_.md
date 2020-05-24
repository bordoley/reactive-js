[reactive-js](../README.md) › ["relativeURI"](_relativeuri_.md)

# Module: "relativeURI"

## Index

### Type aliases

* [RelativeURI](_relativeuri_.md#relativeuri)

### Functions

* [decodeAndGetHash](_relativeuri_.md#const-decodeandgethash)
* [encodeAndSetHash](_relativeuri_.md#const-encodeandsethash)
* [fromHref](_relativeuri_.md#const-fromhref)
* [toHref](_relativeuri_.md#const-tohref)
* [toURL](_relativeuri_.md#const-tourl)

### Object literals

* [empty](_relativeuri_.md#const-empty)

## Type aliases

###  RelativeURI

Ƭ **RelativeURI**: *object*

#### Type declaration:

* **hash**: *string*

* **pathname**: *string*

* **search**: *string*

## Functions

### `Const` decodeAndGetHash

▸ **decodeAndGetHash**(`__namedParameters`: object): *string*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`hash` | string |

**Returns:** *string*

___

### `Const` encodeAndSetHash

▸ **encodeAndSetHash**(`relativeURI`: [RelativeURI](_relativeuri_.md#relativeuri), `hash`: string): *[RelativeURI](_relativeuri_.md#relativeuri)*

**Parameters:**

Name | Type |
------ | ------ |
`relativeURI` | [RelativeURI](_relativeuri_.md#relativeuri) |
`hash` | string |

**Returns:** *[RelativeURI](_relativeuri_.md#relativeuri)*

___

### `Const` fromHref

▸ **fromHref**(`href`: string): *[RelativeURI](_relativeuri_.md#relativeuri)*

**Parameters:**

Name | Type |
------ | ------ |
`href` | string |

**Returns:** *[RelativeURI](_relativeuri_.md#relativeuri)*

___

### `Const` toHref

▸ **toHref**(`relativeURI`: [RelativeURI](_relativeuri_.md#relativeuri), `base`: string | URL): *string*

**Parameters:**

Name | Type |
------ | ------ |
`relativeURI` | [RelativeURI](_relativeuri_.md#relativeuri) |
`base` | string &#124; URL |

**Returns:** *string*

___

### `Const` toURL

▸ **toURL**(`relativeURI`: [RelativeURI](_relativeuri_.md#relativeuri), `base`: string | URL): *URL*

**Parameters:**

Name | Type |
------ | ------ |
`relativeURI` | [RelativeURI](_relativeuri_.md#relativeuri) |
`base` | string &#124; URL |

**Returns:** *URL*

## Object literals

### `Const` empty

### ▪ **empty**: *object*

###  hash

• **hash**: *string* = ""

###  pathname

• **pathname**: *string* = ""

###  search

• **search**: *string* = ""
