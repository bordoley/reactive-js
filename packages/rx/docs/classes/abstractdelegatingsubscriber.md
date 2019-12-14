[@reactive-js/rx](../README.md) › [AbstractDelegatingSubscriber](abstractdelegatingsubscriber.md)

# Class: AbstractDelegatingSubscriber <**TA, TB**>

Abstract base class for implementing SubscriberOperatorLikes.

## Type parameters

▪ **TA**

▪ **TB**

## Hierarchy

* AbstractSubscriber‹TA›

  ↳ **AbstractDelegatingSubscriber**

## Implements

* [SubscriberLike](../interfaces/subscriberlike.md)‹TA›

## Index

### Constructors

* [constructor](abstractdelegatingsubscriber.md#constructor)

### Properties

* [delegate](abstractdelegatingsubscriber.md#delegate)

### Methods

* [onComplete](abstractdelegatingsubscriber.md#protected-abstract-oncomplete)
* [onNext](abstractdelegatingsubscriber.md#protected-abstract-onnext)

## Constructors

###  constructor

\+ **new AbstractDelegatingSubscriber**(`delegate`: [SubscriberLike](../interfaces/subscriberlike.md)‹TB›): *[AbstractDelegatingSubscriber](abstractdelegatingsubscriber.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | [SubscriberLike](../interfaces/subscriberlike.md)‹TB› |

**Returns:** *[AbstractDelegatingSubscriber](abstractdelegatingsubscriber.md)*

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
