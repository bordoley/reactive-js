[Reactive-JS](../README.md) / utils

# Module: utils

## Table of contents

### Classes

- [BackPressureError](../classes/utils.BackPressureError.md)

### Interfaces

- [DisposableContainerLike](../interfaces/utils.DisposableContainerLike.md)
- [DisposableLike](../interfaces/utils.DisposableLike.md)
- [IndexedQueueLike](../interfaces/utils.IndexedQueueLike.md)
- [QueueLike](../interfaces/utils.QueueLike.md)
- [QueueableLike](../interfaces/utils.QueueableLike.md)
- [SerialDisposableLike](../interfaces/utils.SerialDisposableLike.md)
- [StackLike](../interfaces/utils.StackLike.md)

### Type Aliases

- [BackpressureStrategy](utils.md#backpressurestrategy)

### Variables

- [DisposableContainerLike\_add](utils.md#disposablecontainerlike_add)
- [DisposableLike\_dispose](utils.md#disposablelike_dispose)
- [DisposableLike\_error](utils.md#disposablelike_error)
- [DisposableLike\_isDisposed](utils.md#disposablelike_isdisposed)
- [DropLatestBackpressureStrategy](utils.md#droplatestbackpressurestrategy)
- [DropOldestBackpressureStrategy](utils.md#dropoldestbackpressurestrategy)
- [IndexedQueueLike\_get](utils.md#indexedqueuelike_get)
- [IndexedQueueLike\_set](utils.md#indexedqueuelike_set)
- [OverflowBackpressureStrategy](utils.md#overflowbackpressurestrategy)
- [QueueLike\_count](utils.md#queuelike_count)
- [QueueLike\_dequeue](utils.md#queuelike_dequeue)
- [QueueLike\_head](utils.md#queuelike_head)
- [QueueableLike\_backpressureStrategy](utils.md#queueablelike_backpressurestrategy)
- [QueueableLike\_capacity](utils.md#queueablelike_capacity)
- [QueueableLike\_enqueue](utils.md#queueablelike_enqueue)
- [SerialDisposableLike\_current](utils.md#serialdisposablelike_current)
- [StackLike\_head](utils.md#stacklike_head)
- [StackLike\_pop](utils.md#stacklike_pop)
- [ThrowBackpressureStrategy](utils.md#throwbackpressurestrategy)

## Type Aliases

### BackpressureStrategy

Ƭ **BackpressureStrategy**: typeof [`DropLatestBackpressureStrategy`](utils.md#droplatestbackpressurestrategy) \| typeof [`DropOldestBackpressureStrategy`](utils.md#dropoldestbackpressurestrategy) \| typeof [`OverflowBackpressureStrategy`](utils.md#overflowbackpressurestrategy) \| typeof [`ThrowBackpressureStrategy`](utils.md#throwbackpressurestrategy)

## Variables

### DisposableContainerLike\_add

• `Const` **DisposableContainerLike\_add**: unique `symbol`

___

### DisposableLike\_dispose

• `Const` **DisposableLike\_dispose**: typeof `Symbol.dispose`

___

### DisposableLike\_error

• `Const` **DisposableLike\_error**: unique `symbol`

___

### DisposableLike\_isDisposed

• `Const` **DisposableLike\_isDisposed**: unique `symbol`

___

### DropLatestBackpressureStrategy

• `Const` **DropLatestBackpressureStrategy**: ``"drop-latest"``

___

### DropOldestBackpressureStrategy

• `Const` **DropOldestBackpressureStrategy**: ``"drop-oldest"``

___

### IndexedQueueLike\_get

• `Const` **IndexedQueueLike\_get**: unique `symbol`

___

### IndexedQueueLike\_set

• `Const` **IndexedQueueLike\_set**: unique `symbol`

___

### OverflowBackpressureStrategy

• `Const` **OverflowBackpressureStrategy**: ``"overflow"``

___

### QueueLike\_count

• `Const` **QueueLike\_count**: unique `symbol`

___

### QueueLike\_dequeue

• `Const` **QueueLike\_dequeue**: unique `symbol`

___

### QueueLike\_head

• `Const` **QueueLike\_head**: unique `symbol`

___

### QueueableLike\_backpressureStrategy

• `Const` **QueueableLike\_backpressureStrategy**: unique `symbol`

___

### QueueableLike\_capacity

• `Const` **QueueableLike\_capacity**: unique `symbol`

___

### QueueableLike\_enqueue

• `Const` **QueueableLike\_enqueue**: unique `symbol`

___

### SerialDisposableLike\_current

• `Const` **SerialDisposableLike\_current**: unique `symbol`

___

### StackLike\_head

• `Const` **StackLike\_head**: unique `symbol`

___

### StackLike\_pop

• `Const` **StackLike\_pop**: unique `symbol`

___

### ThrowBackpressureStrategy

• `Const` **ThrowBackpressureStrategy**: ``"throw"``
