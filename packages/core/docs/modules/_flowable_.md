[@reactive-js/core - v0.0.37](../README.md) › ["flowable"](_flowable_.md)

# Module: "flowable"

## Index

### Enumerations

* [FlowEventType](../enums/_flowable_.floweventtype.md)
* [FlowMode](../enums/_flowable_.flowmode.md)

### Interfaces

* [FlowableLike](../interfaces/_flowable_.flowablelike.md)
* [FlowableSinkLike](../interfaces/_flowable_.flowablesinklike.md)

### Type aliases

* [FlowEvent](_flowable_.md#flowevent)
* [FlowableFunction](_flowable_.md#flowablefunction)

### Variables

* [encodeUtf8](_flowable_.md#const-encodeutf8)

### Functions

* [complete](_flowable_.md#const-complete)
* [decodeWithCharset](_flowable_.md#const-decodewithcharset)
* [empty](_flowable_.md#const-empty)
* [fromObservable](_flowable_.md#const-fromobservable)
* [fromValue](_flowable_.md#const-fromvalue)
* [map](_flowable_.md#const-map)
* [next](_flowable_.md#const-next)

## Type aliases

###  FlowEvent

Ƭ **FlowEvent**: *object | object*

___

###  FlowableFunction

Ƭ **FlowableFunction**: *[Function1](_functions_.md#function1)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TA›, [FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TB››*

## Variables

### `Const` encodeUtf8

• **encodeUtf8**: *[FlowableFunction](_flowable_.md#flowablefunction)‹string, Uint8Array›* = lift(
  withLatestFrom(
    compute<TextEncoder>()(() => new TextEncoder()),
    (ev, textEncoder) => {
      switch (ev.type) {
        case FlowEventType.Next: {
          const data = textEncoder.encode(ev.data);
          return next(data);
        }
        case FlowEventType.Complete: {
          return ev;
        }
      }
    },
  ),
)

## Functions

### `Const` complete

▸ **complete**<**T**>(): *[FlowEvent](_flowable_.md#flowevent)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[FlowEvent](_flowable_.md#flowevent)‹T›*

___

### `Const` decodeWithCharset

▸ **decodeWithCharset**(`charset`: string, `options?`: TextDecoderOptions): *[FlowableFunction](_flowable_.md#flowablefunction)‹ArrayBuffer, string›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`charset` | string | "utf-8" |
`options?` | TextDecoderOptions | - |

**Returns:** *[FlowableFunction](_flowable_.md#flowablefunction)‹ArrayBuffer, string›*

___

### `Const` empty

▸ **empty**<**T**>(): *[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T›*

___

### `Const` fromObservable

▸ **fromObservable**<**T**>(`observable`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›): *[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› |

**Returns:** *[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T›*

___

### `Const` fromValue

▸ **fromValue**<**T**>(): *[Function1](_functions_.md#function1)‹T, [FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹T, [FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T››*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: [Function1](_functions_.md#function1)‹TA, TB›): *[Function1](_functions_.md#function1)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TA›, [FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Function1](_functions_.md#function1)‹TA, TB› |

**Returns:** *[Function1](_functions_.md#function1)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TA›, [FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TB››*

___

### `Const` next

▸ **next**<**T**>(`data`: T): *[FlowEvent](_flowable_.md#flowevent)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *[FlowEvent](_flowable_.md#flowevent)‹T›*
