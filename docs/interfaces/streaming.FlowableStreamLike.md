[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / FlowableStreamLike

# Interface: FlowableStreamLike<T\>

[streaming](../modules/streaming.md).FlowableStreamLike

An `ObservableLike` that supports imperative flow control
via the pause and resume methods.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`StreamLike`](streaming.StreamLike.md)<`boolean` \| [`Updater`](../modules/functions.md#updater)<`boolean`\>, `T`\>

  ↳ **`FlowableStreamLike`**

## Table of contents

### Properties

- [[\_\_\_FlowableStreamLike\_isPaused]](streaming.FlowableStreamLike.md#[___flowablestreamlike_ispaused])

### Methods

- [[\_\_\_FlowableStreamLike\_pause]](streaming.FlowableStreamLike.md#[___flowablestreamlike_pause])
- [[\_\_\_FlowableStreamLike\_resume]](streaming.FlowableStreamLike.md#[___flowablestreamlike_resume])

## Properties

### [\_\_\_FlowableStreamLike\_isPaused]

• `Readonly` **[\_\_\_FlowableStreamLike\_isPaused]**: [`ObservableLike`](rx.ObservableLike.md)<`boolean`\>

Reactive property indicating if the stream is paused or not.

## Methods

### [\_\_\_FlowableStreamLike\_pause]

▸ **[___FlowableStreamLike_pause]**(): `void`

Imperatively pause the stream.

#### Returns

`void`

___

### [\_\_\_FlowableStreamLike\_resume]

▸ **[___FlowableStreamLike_resume]**(): `void`

Imperatively resume the stream.

#### Returns

`void`
