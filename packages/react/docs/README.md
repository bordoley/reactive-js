[@reactive-js/react](README.md)

# @reactive-js/react

## Index

### Functions

* [useAsyncIterable](README.md#const-useasynciterable)
* [useAsyncIterator](README.md#const-useasynciterator)
* [useObservable](README.md#const-useobservable)

## Functions

### `Const` useAsyncIterable

▸ **useAsyncIterable**<**TReq**, **T**>(`iterable`: AsyncIterableLike‹TReq, T›, `config`: object): *AsyncIteratorResourceLike‹TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | AsyncIterableLike‹TReq, T› | - |
`config` | object |  {} |

**Returns:** *AsyncIteratorResourceLike‹TReq, T›*

___

### `Const` useAsyncIterator

▸ **useAsyncIterator**<**TReq**, **T**>(`iterator`: AsyncIteratorLike‹TReq, T›, `scheduler?`: SchedulerLike): *[T | undefined, function]*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterator` | AsyncIteratorLike‹TReq, T› |
`scheduler?` | SchedulerLike |

**Returns:** *[T | undefined, function]*

___

### `Const` useObservable

▸ **useObservable**<**T**>(`observable`: ObservableLike‹T›, `scheduler`: SchedulerLike): *T | undefined*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`observable` | ObservableLike‹T› | - |
`scheduler` | SchedulerLike |  normalPriority |

**Returns:** *T | undefined*
