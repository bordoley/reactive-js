[@reactive-js/node - v0.0.37](../README.md) › ["streams"](_streams_.md)

# Module: "streams"

## Index

### Variables

* [unsupportedEncoding](_streams_.md#const-unsupportedencoding)

### Functions

* [createDisposableNodeStream](_streams_.md#const-createdisposablenodestream)
* [createFlowableFromReadable](_streams_.md#const-createflowablefromreadable)
* [createFlowableSinkFromWritable](_streams_.md#const-createflowablesinkfromwritable)
* [decode](_streams_.md#const-decode)
* [encode](_streams_.md#const-encode)
* [transform](_streams_.md#const-transform)

## Variables

### `Const` unsupportedEncoding

• **unsupportedEncoding**: *unique symbol* = Symbol("unsupportedEncoding")

## Functions

### `Const` createDisposableNodeStream

▸ **createDisposableNodeStream**<**T**>(`stream`: T): *DisposableValueLike‹T›*

**Type parameters:**

▪ **T**: *Readable | Writable | Transform*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | T |

**Returns:** *DisposableValueLike‹T›*

___

### `Const` createFlowableFromReadable

▸ **createFlowableFromReadable**(`factory`: function): *FlowableLike‹Uint8Array›*

**Parameters:**

▪ **factory**: *function*

▸ (): *DisposableValueLike‹Readable›*

**Returns:** *FlowableLike‹Uint8Array›*

___

### `Const` createFlowableSinkFromWritable

▸ **createFlowableSinkFromWritable**(`factory`: function, `autoDispose`: boolean): *FlowableSinkLike‹Uint8Array›*

**Parameters:**

▪ **factory**: *function*

▸ (): *DisposableValueLike‹Writable›*

▪`Default value`  **autoDispose**: *boolean*= true

**Returns:** *FlowableSinkLike‹Uint8Array›*

___

### `Const` decode

▸ **decode**(`charset`: string): *Operator‹FlowableLike‹Uint8Array›, FlowableLike‹string››*

**Parameters:**

Name | Type |
------ | ------ |
`charset` | string |

**Returns:** *Operator‹FlowableLike‹Uint8Array›, FlowableLike‹string››*

___

### `Const` encode

▸ **encode**(`charset`: string): *Operator‹FlowableLike‹string›, FlowableLike‹Uint8Array››*

**Parameters:**

Name | Type |
------ | ------ |
`charset` | string |

**Returns:** *Operator‹FlowableLike‹string›, FlowableLike‹Uint8Array››*

___

### `Const` transform

▸ **transform**(`factory`: function): *FlowableOperator‹Uint8Array, Uint8Array›*

**Parameters:**

▪ **factory**: *function*

▸ (): *DisposableValueLike‹Transform›*

**Returns:** *FlowableOperator‹Uint8Array, Uint8Array›*
