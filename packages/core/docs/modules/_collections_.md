[@reactive-js/core - v0.0.37](../README.md) › ["collections"](_collections_.md)

# Module: "collections"

## Index

### Interfaces

* [KeyedQueueLike](../interfaces/_collections_.keyedqueuelike.md)
* [QueueLike](../interfaces/_collections_.queuelike.md)
* [SetMultimapLike](../interfaces/_collections_.setmultimaplike.md)

### Functions

* [createKeyedQueue](_collections_.md#const-createkeyedqueue)
* [createPriorityQueue](_collections_.md#const-createpriorityqueue)
* [createSetMultimap](_collections_.md#const-createsetmultimap)
* [createUniqueQueue](_collections_.md#const-createuniquequeue)

## Functions

### `Const` createKeyedQueue

▸ **createKeyedQueue**<**K**, **V**>(): *[KeyedQueueLike](../interfaces/_collections_.keyedqueuelike.md)‹K, V›*

**Type parameters:**

▪ **K**

▪ **V**

**Returns:** *[KeyedQueueLike](../interfaces/_collections_.keyedqueuelike.md)‹K, V›*

___

### `Const` createPriorityQueue

▸ **createPriorityQueue**<**T**>(`comparator`: function): *[QueueLike](../interfaces/_collections_.queuelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **comparator**: *function*

▸ (`a`: T, `b`: T): *number*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *[QueueLike](../interfaces/_collections_.queuelike.md)‹T›*

___

### `Const` createSetMultimap

▸ **createSetMultimap**<**K**, **V**>(): *[SetMultimapLike](../interfaces/_collections_.setmultimaplike.md)‹K, V›*

**Type parameters:**

▪ **K**

▪ **V**

**Returns:** *[SetMultimapLike](../interfaces/_collections_.setmultimaplike.md)‹K, V›*

___

### `Const` createUniqueQueue

▸ **createUniqueQueue**<**T**>(): *[QueueLike](../interfaces/_collections_.queuelike.md)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[QueueLike](../interfaces/_collections_.queuelike.md)‹T›*
