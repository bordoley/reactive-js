[@reactive-js/rx](../README.md) › [ObserverLike](observerlike.md)

# Interface: ObserverLike <**T**>

An observer of push-based notifications.

## Type parameters

▪ **T**

## Hierarchy

* **ObserverLike**

  ↳ [SubjectLike](subjectlike.md)

## Index

### Methods

* [onDispose](observerlike.md#ondispose)
* [onNext](observerlike.md#onnext)

## Methods

###  onDispose

▸ **onDispose**(`error?`: ErrorLike): *void*

Called by a provider to indicate that it is done sending push-based notifications.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error?` | ErrorLike | If present, indicates that the provider experienced an error condition.  |

**Returns:** *void*

___

###  onNext

▸ **onNext**(`data`: T): *void*

Provides the next item to observe.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | T |   |

**Returns:** *void*
