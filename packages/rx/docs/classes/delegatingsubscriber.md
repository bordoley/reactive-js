[@reactive-js/rx](../README.md) › [DelegatingSubscriber](delegatingsubscriber.md)

# Class: DelegatingSubscriber <**TA, TB**>

Abstract base class for implementing SubscriberOperatorLikes.

## Type parameters

▪ **TA**

▪ **TB**

## Hierarchy

* AbstractSubscriberImpl‹TA›

  ↳ **DelegatingSubscriber**

## Implements

* [SubscriberLike](../interfaces/subscriberlike.md)‹TA›

## Index

### Constructors

* [constructor](delegatingsubscriber.md#constructor)

### Properties

* [delegate](delegatingsubscriber.md#delegate)

### Methods

* [onComplete](delegatingsubscriber.md#protected-abstract-oncomplete)
* [onNext](delegatingsubscriber.md#protected-abstract-onnext)

## Constructors

###  constructor

\+ **new DelegatingSubscriber**(`delegate`: [SubscriberLike](../interfaces/subscriberlike.md)‹TB›): *[DelegatingSubscriber](delegatingsubscriber.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | [SubscriberLike](../interfaces/subscriberlike.md)‹TB› |

**Returns:** *[DelegatingSubscriber](delegatingsubscriber.md)*

## Properties

###  delegate

• **delegate**: *[ObserverLike](../interfaces/observerlike.md)‹TB›*

## Methods

### `Protected` `Abstract` onComplete

▸ **onComplete**(`error?`: [ErrorLike](../interfaces/errorlike.md)): *void*

Override to handle complete notification. Implementations
may throw errors which will be caught and propogated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error?` | [ErrorLike](../interfaces/errorlike.md) |   |

**Returns:** *void*

___

### `Protected` `Abstract` onNext

▸ **onNext**(`data`: TA): *void*

Overried to handle incoming next notifications. Implementations
may throw errors which will be caught and propogated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | TA |   |

**Returns:** *void*
