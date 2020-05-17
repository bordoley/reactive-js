[@reactive-js/core - v0.0.37](../README.md) › ["io"](_io_.md)

# Module: "io"

## Index

### Enumerations

* [IOEventType](../enums/_io_.ioeventtype.md)

### Interfaces

* [IOSinkLike](../interfaces/_io_.iosinklike.md)
* [IOStreamLike](../interfaces/_io_.iostreamlike.md)

### Type aliases

* [IOEvent](_io_.md#ioevent)
* [IOStreamFunction](_io_.md#iostreamfunction)

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

###  IOStreamFunction

Ƭ **IOStreamFunction**: *[Function1](_functions_.md#function1)‹[IOStreamLike](../interfaces/_io_.iostreamlike.md)‹TA›, [IOStreamLike](../interfaces/_io_.iostreamlike.md)‹TB››*

## Variables

### `Const` encodeUtf8

• **encodeUtf8**: *[IOStreamFunction](_io_.md#iostreamfunction)‹string, Uint8Array›* = lift(
  withLatestFrom(
    compute<TextEncoder>()(() => new TextEncoder()),
    (ev, textEncoder) => {
      switch (ev.type) {
        case IOEventType.Next: {
          const data = textEncoder.encode(ev.data);
          return next(data);
        }
        case IOEventType.Complete: {
          return ev;
        }
      }
    },
  ),
)

## Functions

### `Const` complete

▸ **complete**<**T**>(): *[IOEvent](_io_.md#ioevent)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[IOEvent](_io_.md#ioevent)‹T›*

___

### `Const` decodeWithCharset

▸ **decodeWithCharset**(`charset`: string, `options?`: TextDecoderOptions): *[IOStreamFunction](_io_.md#iostreamfunction)‹ArrayBuffer, string›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`charset` | string | "utf-8" |
`options?` | TextDecoderOptions | - |

**Returns:** *[IOStreamFunction](_io_.md#iostreamfunction)‹ArrayBuffer, string›*

___

### `Const` empty

▸ **empty**<**T**>(): *[IOStreamLike](../interfaces/_io_.iostreamlike.md)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[IOStreamLike](../interfaces/_io_.iostreamlike.md)‹T›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(): *[Function1](_functions_.md#function1)‹keyof T[], [IOStreamLike](../interfaces/_io_.iostreamlike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹keyof T[], [IOStreamLike](../interfaces/_io_.iostreamlike.md)‹T››*

___

### `Const` fromObservable

▸ **fromObservable**<**T**>(): *[Function1](_functions_.md#function1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, [IOStreamLike](../interfaces/_io_.iostreamlike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, [IOStreamLike](../interfaces/_io_.iostreamlike.md)‹T››*

___

### `Const` fromValue

▸ **fromValue**<**T**>(): *[Function1](_functions_.md#function1)‹T, [IOStreamLike](../interfaces/_io_.iostreamlike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹T, [IOStreamLike](../interfaces/_io_.iostreamlike.md)‹T››*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: [Function1](_functions_.md#function1)‹TA, TB›): *[Function1](_functions_.md#function1)‹[IOStreamLike](../interfaces/_io_.iostreamlike.md)‹TA›, [IOStreamLike](../interfaces/_io_.iostreamlike.md)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Function1](_functions_.md#function1)‹TA, TB› |

**Returns:** *[Function1](_functions_.md#function1)‹[IOStreamLike](../interfaces/_io_.iostreamlike.md)‹TA›, [IOStreamLike](../interfaces/_io_.iostreamlike.md)‹TB››*

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
