[@reactive-js/node - v0.0.37](../README.md) › ["streams"](_streams_.md)

# Module: "streams"

## Index

### Interfaces

* [BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)
* [BufferStreamSinkLike](../interfaces/_streams_.bufferstreamsinklike.md)

### Variables

* [unsupportedEncoding](_streams_.md#const-unsupportedencoding)

### Functions

* [createBufferStreamFromReadable](_streams_.md#const-createbufferstreamfromreadable)
* [createBufferStreamSinkFromWritable](_streams_.md#const-createbufferstreamsinkfromwritable)
* [createDisposableStream](_streams_.md#const-createdisposablestream)
* [decode](_streams_.md#const-decode)
* [encode](_streams_.md#const-encode)
* [transform](_streams_.md#const-transform)

## Variables

### `Const` unsupportedEncoding

• **unsupportedEncoding**: *unique symbol* = Symbol("unsupportedEncoding")

## Functions

### `Const` createBufferStreamFromReadable

▸ **createBufferStreamFromReadable**(`factory`: function): *[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)*

**Parameters:**

▪ **factory**: *function*

▸ (): *DisposableValueLike‹Readable›*

**Returns:** *[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)*

___

### `Const` createBufferStreamSinkFromWritable

▸ **createBufferStreamSinkFromWritable**(`factory`: function, `autoDispose`: boolean): *AsyncEnumerableLike‹StreamEvent‹Buffer›, StreamMode›*

**Parameters:**

▪ **factory**: *function*

▸ (): *DisposableValueLike‹Writable›*

▪`Default value`  **autoDispose**: *boolean*= true

**Returns:** *AsyncEnumerableLike‹StreamEvent‹Buffer›, StreamMode›*

___

### `Const` createDisposableStream

▸ **createDisposableStream**<**T**>(`stream`: T): *DisposableValueLike‹T›*

**Type parameters:**

▪ **T**: *Readable | Writable | Transform*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | T |

**Returns:** *DisposableValueLike‹T›*

___

### `Const` decode

▸ **decode**(`charset`: string): *Operator‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md), StreamLike‹string››*

**Parameters:**

Name | Type |
------ | ------ |
`charset` | string |

**Returns:** *Operator‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md), StreamLike‹string››*

___

### `Const` encode

▸ **encode**(`charset`: string): *Operator‹StreamLike‹string›, [BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`charset` | string |

**Returns:** *Operator‹StreamLike‹string›, [BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)›*

___

### `Const` transform

▸ **transform**(`factory`: function): *StreamOperator‹Buffer, Buffer›*

**Parameters:**

▪ **factory**: *function*

▸ (): *DisposableValueLike‹Transform›*

**Returns:** *StreamOperator‹Buffer, Buffer›*
