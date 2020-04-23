
# @reactive-js/collections - v0.0.37

## Index

### Interfaces

* [KeyedQueueLike](interfaces/keyedqueuelike.md)
* [QueueLike](interfaces/queuelike.md)
* [SetMultimapLike](interfaces/setmultimaplike.md)

### Functions

* [createKeyedQueue](README.md#const-createkeyedqueue)
* [createPriorityQueue](README.md#const-createpriorityqueue)
* [createSetMultimap](README.md#const-createsetmultimap)
* [createUniqueQueue](README.md#const-createuniquequeue)

## Functions

### `Const` createKeyedQueue

▸ **createKeyedQueue**<**K**, **V**>(): *[KeyedQueueLike](interfaces/keyedqueuelike.md)‹K, V›*

**Type parameters:**

▪ **K**

▪ **V**

**Returns:** *[KeyedQueueLike](interfaces/keyedqueuelike.md)‹K, V›*

___

### `Const` createPriorityQueue

▸ **createPriorityQueue**<**T**>(`comparator`: function): *[QueueLike](interfaces/queuelike.md)‹T›*

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

**Returns:** *[QueueLike](interfaces/queuelike.md)‹T›*

___

### `Const` createSetMultimap

▸ **createSetMultimap**<**K**, **V**>(): *[SetMultimapLike](interfaces/setmultimaplike.md)‹K, V›*

**Type parameters:**

▪ **K**

▪ **V**

**Returns:** *[SetMultimapLike](interfaces/setmultimaplike.md)‹K, V›*

___

### `Const` createUniqueQueue

▸ **createUniqueQueue**<**T**>(): *[QueueLike](interfaces/queuelike.md)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[QueueLike](interfaces/queuelike.md)‹T›*
