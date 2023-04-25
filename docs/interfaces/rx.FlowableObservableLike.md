[Reactive-JS](../README.md) / [rx](../modules/rx.md) / FlowableObservableLike

# Interface: FlowableObservableLike<T\>

[rx](../modules/rx.md).FlowableObservableLike

A `MulticastObservableLike` that supports imperative flow control
via the pause and resume methods.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`T`\>

  ↳ **`FlowableObservableLike`**

## Table of contents

### Properties

- [[\_\_\_FlowableObservableLike\_isPaused]](rx.FlowableObservableLike.md#[___flowableobservablelike_ispaused])

### Methods

- [[\_\_\_FlowableObservableLike\_pause]](rx.FlowableObservableLike.md#[___flowableobservablelike_pause])
- [[\_\_\_FlowableObservableLike\_resume]](rx.FlowableObservableLike.md#[___flowableobservablelike_resume])

## Properties

### [\_\_\_FlowableObservableLike\_isPaused]

• `Readonly` **[\_\_\_FlowableObservableLike\_isPaused]**: [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`boolean`\>

Reactive property indicating if the observable is paused or not.

## Methods

### [\_\_\_FlowableObservableLike\_pause]

▸ **[___FlowableObservableLike_pause]**(): `void`

Imperatively pause the observable.

#### Returns

`void`

___

### [\_\_\_FlowableObservableLike\_resume]

▸ **[___FlowableObservableLike_resume]**(): `void`

Imperatively resume the observable.

#### Returns

`void`
