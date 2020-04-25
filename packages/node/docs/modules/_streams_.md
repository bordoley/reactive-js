[@reactive-js/node - v0.0.37](../README.md) › ["streams"](_streams_.md)

# Module: "streams"

## Index

### Interfaces

* [BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)
* [BufferFlowableSinkLike](../interfaces/_streams_.bufferflowablesinklike.md)

### Variables

* [unsupportedEncoding](_streams_.md#const-unsupportedencoding)

### Functions

* [createBufferFlowableFromReadable](_streams_.md#const-createbufferflowablefromreadable)
* [createBufferFlowableSinkFromWritable](_streams_.md#const-createbufferflowablesinkfromwritable)
* [createDisposableNodeStream](_streams_.md#const-createdisposablenodestream)
* [decode](_streams_.md#const-decode)
* [encode](_streams_.md#const-encode)
* [transform](_streams_.md#const-transform)

## Variables

### `Const` unsupportedEncoding

• **unsupportedEncoding**: *unique symbol* = Symbol("unsupportedEncoding")

## Functions

### `Const` createBufferFlowableFromReadable

▸ **createBufferFlowableFromReadable**(`factory`: function): *[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)*

**Parameters:**

▪ **factory**: *function*

▸ (): *DisposableValueLike‹Readable›*

**Returns:** *[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)*

___

### `Const` createBufferFlowableSinkFromWritable

▸ **createBufferFlowableSinkFromWritable**(`factory`: function, `autoDispose`: boolean): *[BufferFlowableSinkLike](../interfaces/_streams_.bufferflowablesinklike.md)*

**Parameters:**

▪ **factory**: *function*

▸ (): *DisposableValueLike‹Writable›*

▪`Default value`  **autoDispose**: *boolean*= true

**Returns:** *[BufferFlowableSinkLike](../interfaces/_streams_.bufferflowablesinklike.md)*

___

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

### `Const` decode

▸ **decode**(`charset`: string): *Operator‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md), FlowableLike‹string››*

**Parameters:**

Name | Type |
------ | ------ |
`charset` | string |

**Returns:** *Operator‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md), FlowableLike‹string››*

___

### `Const` encode

▸ **encode**(`charset`: string): *Operator‹FlowableLike‹string›, [BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`charset` | string |

**Returns:** *Operator‹FlowableLike‹string›, [BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)›*

___

### `Const` transform

▸ **transform**(`factory`: function): *FlowableOperator‹Buffer, Buffer›*

**Parameters:**

▪ **factory**: *function*

▸ (): *DisposableValueLike‹Transform›*

**Returns:** *FlowableOperator‹Buffer, Buffer›*
