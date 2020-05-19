[@reactive-js/core - v0.0.39](../README.md) › ["io"](_io_.md)

# Module: "io"

## Index

### Enumerations

* [IOEventType](../enums/_io_.ioeventtype.md)

### Interfaces

* [IOSinkLike](../interfaces/_io_.iosinklike.md)
* [IOSourceLike](../interfaces/_io_.iosourcelike.md)

### Type aliases

* [IOEvent](_io_.md#ioevent)
* [IOSourceOperator](_io_.md#iosourceoperator)

### Variables

* [encodeUtf8](_io_.md#const-encodeutf8)

### Functions

* [complete](_io_.md#const-complete)
* [decodeWithCharset](_io_.md#const-decodewithcharset)
* [empty](_io_.md#const-empty)
* [fromArray](_io_.md#const-fromarray)
* [fromObservable](_io_.md#const-fromobservable)
* [fromValue](_io_.md#const-fromvalue)
* [map](_io_.md#const-map)
* [next](_io_.md#const-next)

## Type aliases

###  IOEvent

Ƭ **IOEvent**: *object | object*

___

###  IOSourceOperator

Ƭ **IOSourceOperator**: *[Function1](_functions_.md#function1)‹[IOSourceLike](../interfaces/_io_.iosourcelike.md)‹TA›, [IOSourceLike](../interfaces/_io_.iosourcelike.md)‹TB››*

## Variables

### `Const` encodeUtf8

• **encodeUtf8**: *[IOSourceOperator](_io_.md#iosourceoperator)‹string, Uint8Array›* = _encodeUtf8

## Functions

### `Const` complete

▸ **complete**<**T**>(): *[IOEvent](_io_.md#ioevent)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[IOEvent](_io_.md#ioevent)‹T›*

___

### `Const` decodeWithCharset

▸ **decodeWithCharset**(`charset`: string, `options?`: TextDecoderOptions): *[IOSourceOperator](_io_.md#iosourceoperator)‹ArrayBuffer, string›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`charset` | string | "utf-8" |
`options?` | TextDecoderOptions | - |

**Returns:** *[IOSourceOperator](_io_.md#iosourceoperator)‹ArrayBuffer, string›*

___

### `Const` empty

▸ **empty**<**T**>(): *[IOSourceLike](../interfaces/_io_.iosourcelike.md)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[IOSourceLike](../interfaces/_io_.iosourcelike.md)‹T›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(): *[Function1](_functions_.md#function1)‹keyof T[], [IOSourceLike](../interfaces/_io_.iosourcelike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹keyof T[], [IOSourceLike](../interfaces/_io_.iosourcelike.md)‹T››*

___

### `Const` fromObservable

▸ **fromObservable**<**T**>(): *[Function1](_functions_.md#function1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, [IOSourceLike](../interfaces/_io_.iosourcelike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, [IOSourceLike](../interfaces/_io_.iosourcelike.md)‹T››*

___

### `Const` fromValue

▸ **fromValue**<**T**>(): *[Function1](_functions_.md#function1)‹T, [IOSourceLike](../interfaces/_io_.iosourcelike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹T, [IOSourceLike](../interfaces/_io_.iosourcelike.md)‹T››*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: [Function1](_functions_.md#function1)‹TA, TB›): *[Function1](_functions_.md#function1)‹[IOSourceLike](../interfaces/_io_.iosourcelike.md)‹TA›, [IOSourceLike](../interfaces/_io_.iosourcelike.md)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Function1](_functions_.md#function1)‹TA, TB› |

**Returns:** *[Function1](_functions_.md#function1)‹[IOSourceLike](../interfaces/_io_.iosourcelike.md)‹TA›, [IOSourceLike](../interfaces/_io_.iosourcelike.md)‹TB››*

___

### `Const` next

▸ **next**<**T**>(`data`: T): *[IOEvent](_io_.md#ioevent)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *[IOEvent](_io_.md#ioevent)‹T›*
