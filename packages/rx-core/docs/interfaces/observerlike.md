[@reactive-js/rx-core](../README.md) › [ObserverLike](observerlike.md)

# Interface: ObserverLike <**T**>

An observer of push-based notifications.

## Type parameters

▪ **T**

## Hierarchy

* **ObserverLike**

  ↳ [SubscriberLike](subscriberlike.md)

  ↳ [SubjectLike](subjectlike.md)

## Index

### Methods

* [complete](observerlike.md#complete)
* [next](observerlike.md#next)

## Methods

###  complete

▸ **complete**(`error?`: Error): *void*

Called by a provider to indicate that it is done sending push-based notifications.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error?` | Error | If present, indicates that the provider experienced an error condition.  |

**Returns:** *void*

___

###  next

▸ **next**(`data`: T): *void*

Provides the next item to observe.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | T |   |

**Returns:** *void*
