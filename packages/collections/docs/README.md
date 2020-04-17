
# @reactive-js/collections

## Index

### Interfaces

* [KeyedQueueLike](interfaces/keyedqueuelike.md)
* [PriorityQueueLike](interfaces/priorityqueuelike.md)
* [SetMultimapLike](interfaces/setmultimaplike.md)

### Functions

* [createKeyedQueue](README.md#const-createkeyedqueue)
* [createPriorityQueue](README.md#const-createpriorityqueue)
* [createSetMultimap](README.md#const-createsetmultimap)

## Functions

### `Const` createKeyedQueue

▸ **createKeyedQueue**<**K**, **V**>(): *[KeyedQueueLike](interfaces/keyedqueuelike.md)‹K, V›*

**Type parameters:**

▪ **K**

▪ **V**

**Returns:** *[KeyedQueueLike](interfaces/keyedqueuelike.md)‹K, V›*

___

### `Const` createPriorityQueue

▸ **createPriorityQueue**<**T**>(`comparator`: function): *[PriorityQueueLike](interfaces/priorityqueuelike.md)‹T›*

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

**Returns:** *[PriorityQueueLike](interfaces/priorityqueuelike.md)‹T›*

___

### `Const` createSetMultimap

▸ **createSetMultimap**<**K**, **V**>(): *[SetMultimapLike](interfaces/setmultimaplike.md)‹K, V›*

**Type parameters:**

▪ **K**

▪ **V**

**Returns:** *[SetMultimapLike](interfaces/setmultimaplike.md)‹K, V›*
