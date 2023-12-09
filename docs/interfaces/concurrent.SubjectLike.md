[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / SubjectLike

# Interface: SubjectLike<T\>

[concurrent](../modules/concurrent.md).SubjectLike

A stateful ObservableLike resource.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ReplayObservableLike`](concurrent.ReplayObservableLike.md)<`T`\>

- [`ErrorSafeEventListenerLike`](events.ErrorSafeEventListenerLike.md)<`T`\>

  ↳ **`SubjectLike`**

## Table of contents

### Properties

- [[EventListenerLike\_isErrorSafe]](concurrent.SubjectLike.md#[eventlistenerlike_iserrorsafe])
- [[ReplayObservableLike\_buffer]](concurrent.SubjectLike.md#[replayobservablelike_buffer])
- [[SubjectLike\_observerCount]](concurrent.SubjectLike.md#[subjectlike_observercount])

## Properties

### [EventListenerLike\_isErrorSafe]

• `Readonly` **[EventListenerLike\_isErrorSafe]**: ``true``

#### Inherited from

[ErrorSafeEventListenerLike](events.ErrorSafeEventListenerLike.md).[[EventListenerLike_isErrorSafe]](events.ErrorSafeEventListenerLike.md#[eventlistenerlike_iserrorsafe])

___

### [ReplayObservableLike\_buffer]

• `Readonly` **[ReplayObservableLike\_buffer]**: [`IndexedLike`](collections.IndexedLike.md)<`T`\>

#### Inherited from

[ReplayObservableLike](concurrent.ReplayObservableLike.md).[[ReplayObservableLike_buffer]](concurrent.ReplayObservableLike.md#[replayobservablelike_buffer])

___

### [SubjectLike\_observerCount]

• `Readonly` **[SubjectLike\_observerCount]**: `number`
