[Reactive-JS](../README.md) / relativeURI

# Module: relativeURI

## Index

### Type aliases

* [RelativeURI](relativeuri.md#relativeuri)

### Variables

* [empty](relativeuri.md#empty)

### Functions

* [decodeAndGetHash](relativeuri.md#decodeandgethash)
* [encodeAndSetHash](relativeuri.md#encodeandsethash)
* [fromHref](relativeuri.md#fromhref)
* [toHref](relativeuri.md#tohref)
* [toURL](relativeuri.md#tourl)

## Type aliases

### RelativeURI

Ƭ **RelativeURI**: { `hash`: *string* ; `pathname`: *string* ; `search`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`hash` | *string* |
`pathname` | *string* |
`search` | *string* |

## Variables

### empty

• `Const` **empty**: object

#### Type declaration:

Name | Type | Value |
------ | ------ | ------ |
`hash` | *string* | *string* |
`pathname` | *string* | *string* |
`search` | *string* | *string* |

## Functions

### decodeAndGetHash

▸ `Const`**decodeAndGetHash**(`__namedParameters`: [*RelativeURI*](relativeuri.md#relativeuri)): *string*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | [*RelativeURI*](relativeuri.md#relativeuri) |

**Returns:** *string*

___

### encodeAndSetHash

▸ `Const`**encodeAndSetHash**(`relativeURI`: [*RelativeURI*](relativeuri.md#relativeuri), `hash`: *string*): [*RelativeURI*](relativeuri.md#relativeuri)

#### Parameters:

Name | Type |
------ | ------ |
`relativeURI` | [*RelativeURI*](relativeuri.md#relativeuri) |
`hash` | *string* |

**Returns:** [*RelativeURI*](relativeuri.md#relativeuri)

___

### fromHref

▸ `Const`**fromHref**(`href`: *string*): [*RelativeURI*](relativeuri.md#relativeuri)

#### Parameters:

Name | Type |
------ | ------ |
`href` | *string* |

**Returns:** [*RelativeURI*](relativeuri.md#relativeuri)

___

### toHref

▸ `Const`**toHref**(`relativeURI`: [*RelativeURI*](relativeuri.md#relativeuri), `base`: *string* \| URL): *string*

#### Parameters:

Name | Type |
------ | ------ |
`relativeURI` | [*RelativeURI*](relativeuri.md#relativeuri) |
`base` | *string* \| URL |

**Returns:** *string*

___

### toURL

▸ `Const`**toURL**(`relativeURI`: [*RelativeURI*](relativeuri.md#relativeuri), `base`: *string* \| URL): URL

#### Parameters:

Name | Type |
------ | ------ |
`relativeURI` | [*RelativeURI*](relativeuri.md#relativeuri) |
`base` | *string* \| URL |

**Returns:** URL
