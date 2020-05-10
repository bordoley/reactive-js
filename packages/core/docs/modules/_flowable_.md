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
* [FlowableOperator](_flowable_.md#flowableoperator)

### Variables

* [encodeUtf8](_flowable_.md#const-encodeutf8)

### Functions

* [decodeWithCharset](_flowable_.md#const-decodewithcharset)
* [empty](_flowable_.md#const-empty)
* [fromObservable](_flowable_.md#const-fromobservable)
* [fromValue](_flowable_.md#const-fromvalue)
* [generate](_flowable_.md#const-generate)
* [map](_flowable_.md#const-map)

## Type aliases

###  FlowEvent

Ƭ **FlowEvent**: *object | object*

___

###  FlowableOperator

Ƭ **FlowableOperator**: *[Operator](_functions_.md#operator)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TA›, [FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TB››*

## Variables

### `Const` encodeUtf8

• **encodeUtf8**: *[FlowableOperator](_flowable_.md#flowableoperator)‹string, Uint8Array›* = lift(
  withLatestFrom(
    compute<TextEncoder>()(() => new TextEncoder()),
    (ev, textEncoder) => {
      switch (ev.type) {
        case FlowEventType.Next: {
          const data = textEncoder.encode(ev.data);
          return { type: FlowEventType.Next, data };
        }
        case FlowEventType.Complete: {
          return ev;
        }
      }
    },
  ),
)

## Functions

### `Const` decodeWithCharset

▸ **decodeWithCharset**(`charset`: string, `options?`: TextDecoderOptions): *[FlowableOperator](_flowable_.md#flowableoperator)‹ArrayBuffer, string›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`charset` | string | "utf-8" |
`options?` | TextDecoderOptions | - |

**Returns:** *[FlowableOperator](_flowable_.md#flowableoperator)‹ArrayBuffer, string›*

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

▸ **fromValue**<**T**>(`data`: T): *[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T›*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: function, `initialValue`: function, `options`: object): *[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **generator**: *function*

▸ (`acc`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | T |

▪ **initialValue**: *function*

▸ (): *T*

▪`Default value`  **options**: *object*= { delay: 0 }

Name | Type | Default |
------ | ------ | ------ |
`delay` | number | 0 |

**Returns:** *[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *[Operator](_functions_.md#operator)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TA›, [FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`v`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`v` | TA |

**Returns:** *[Operator](_functions_.md#operator)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TA›, [FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TB››*
