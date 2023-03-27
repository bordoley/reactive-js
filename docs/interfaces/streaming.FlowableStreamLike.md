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

- [[FlowableStreamLike\_isPaused]](streaming.FlowableStreamLike.md#[flowablestreamlike_ispaused])

### Methods

- [[FlowableStreamLike\_pause]](streaming.FlowableStreamLike.md#[flowablestreamlike_pause])
- [[FlowableStreamLike\_resume]](streaming.FlowableStreamLike.md#[flowablestreamlike_resume])

## Properties

### [FlowableStreamLike\_isPaused]

• `Readonly` **[FlowableStreamLike\_isPaused]**: [`ObservableLike`](rx.ObservableLike.md)<`boolean`\>

Reactive property indicating if the stream is paused or not.

## Methods

### [FlowableStreamLike\_pause]

▸ **[FlowableStreamLike_pause]**(): `void`

Imperatively pause the stream.

#### Returns

`void`

___

### [FlowableStreamLike\_resume]

▸ **[FlowableStreamLike_resume]**(): `void`

Imperatively resume the stream.

#### Returns

`void`
