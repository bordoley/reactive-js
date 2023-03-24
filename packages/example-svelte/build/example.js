var ExampleSvelte = (function () {
    'use strict';

    function noop() { }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function subscribe$2(store, ...callbacks) {
        if (store == null) {
            return noop;
        }
        const unsub = store.subscribe(...callbacks);
        return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
    }
    function component_subscribe(component, store, callback) {
        component.$$.on_destroy.push(subscribe$2(store, callback));
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_data(text, data) {
        data = '' + data;
        if (text.wholeText !== data)
            text.data = data;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    let render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = /* @__PURE__ */ Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        // Do not reenter flush while dirty components are updated, as this can
        // result in an infinite loop. Instead, let the inner flush handle it.
        // Reentrancy is ok afterwards for bindings etc.
        if (flushidx !== 0) {
            return;
        }
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            try {
                while (flushidx < dirty_components.length) {
                    const component = dirty_components[flushidx];
                    flushidx++;
                    set_current_component(component);
                    update(component.$$);
                }
            }
            catch (e) {
                // reset dirty state to not end up in a deadlocked state and then rethrow
                dirty_components.length = 0;
                flushidx = 0;
                throw e;
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    /**
     * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
     */
    function flush_render_callbacks(fns) {
        const filtered = [];
        const targets = [];
        render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
        targets.forEach((c) => c());
        render_callbacks = filtered;
    }
    const outroing = new Set();
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
                // if the component was destroyed immediately
                // it will update the `$$.on_destroy` reference to `null`.
                // the destructured on_destroy may still reference to the old array
                if (component.$$.on_destroy) {
                    component.$$.on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            flush_render_callbacks($$.after_update);
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init$1(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: [],
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            if (!is_function(callback)) {
                return noop;
            }
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    const ReadonlyArray_getLength = (arr) => arr.length;

    const { MAX_SAFE_INTEGER, MAX_VALUE } = Number;
    const process$1 = typeof global === "object"
        ? global.process
        : {
            env: {
                NODE_ENV: "development",
            },
        };
    const __DEV__ = process$1.env.NODE_ENV !== "production";

    // eslint-disable-next-line @typescript-eslint/ban-types
    const bind = (f, thiz) => f.bind(thiz);
    const call = (f, self, ...args) => f.call(self, ...args);
    const composeUnsafe = (...operators) => source => pipeUnsafe(source, ...operators);
    /**
     * Composes a series of unary functions.
     */
    const compose = composeUnsafe;
    /**
     * An updater function that returns the result of incrementing `x`.
     */
    const increment = (x) => x + 1;
    // eslint-disable-next-line @typescript-eslint/ban-types
    const isFunction = (f) => typeof f === "function" || f instanceof Function;
    const isString = (s) => typeof s === "string" || s instanceof String;
    /**
     * Returns true if `option` is `none`.
     */
    const isNone = (option) => option === none;
    /**
     * Returns true if `option` is not `none`.
     */
    const isSome = (option) => option !== none;
    const newInstance = (Constructor, ...args) => new Constructor(...args);
    /**
     * An alias for undefined.
     */
    const none = undefined;
    const partial = (...args) => (f) => (arg0) => f(arg0, ...args);
    /**
     * Pipes `source` through a series of unary functions.
     */
    const pipeUnsafe = (source, ...operators) => {
        let acc = source;
        const length = ReadonlyArray_getLength(operators);
        for (let i = 0; i < length; i++) {
            acc = operators[i](acc);
        }
        return acc;
    };
    /**
     * Pipes `source` through a series of unary functions.
     */
    const pipe = pipeUnsafe;
    const error = (message) => {
        const messageIsString = isString(message);
        const messageIsError = message instanceof Error;
        const errorMessage = messageIsString ? message : "";
        const errorCause = !messageIsString && !messageIsError && isSome(message)
            ? {
                cause: message,
            }
            : none;
        return messageIsError
            ? message
            : newInstance(Error, errorMessage, errorCause);
    };
    const raiseError = (e) => {
        throw e;
    };
    /**
     * Throws a javascript error using the provided message.
     */
    const raiseWithDebugMessage = (message) => raiseError(error(__DEV__ ? message : none));
    /**
     * Returns a function that takes an arbitrary number of arguments and always returns `v`.
     */
    const returns = (v) => (..._args) => v;
    /**
     * The javascript strict equality function.
     */
    const strictEquality = (a, b) => a === b;

    const { create, getOwnPropertyDescriptors, prototype } = Object;

    const symbol = label => Symbol(__DEV__ ? label : none);

    /** @type {unique symbol} */
    const MutableEnumeratorLike_reset = /*@__PURE__*/ symbol("MutableEnumeratorLike_reset");
    /** @type {unique symbol} */
    const Enumerator_private_current = /*@__PURE__*/ symbol("Enumerator_private_current");
    /** @type {unique symbol} */
    const ThrottleObserver_value = /*@__PURE__*/ symbol("ThrottleObserver_value");
    /** @type {unique symbol} */
    const ThrottleObserver_hasValue = /*@__PURE__*/ symbol("ThrottleObserver_hasValue");
    /** @type {unique symbol} */
    const ThrottleObserver_durationSubscription = /*@__PURE__*/ symbol("ThrottleObserver_durationSubscription");
    /** @type {unique symbol} */
    const ThrottleObserver_durationFunction = /*@__PURE__*/ symbol("ThrottleObserver_durationFunction");
    /** @type {unique symbol} */
    const ThrottleObserver_mode = /*@__PURE__*/ symbol("ThrottleObserver_mode");
    /** @type {unique symbol} */
    const ThrottleObserver_onNotify = /*@__PURE__*/ symbol("ThrottleObserver_onNotify");
    /** @type {unique symbol} */
    const CreateObservable_effect = /*@__PURE__*/ symbol("CreateObservable_effect");
    /** @type {unique symbol} */
    const DistinctUntilChangedObserverMixin_equality = /*@__PURE__*/ symbol("DistinctUntilChangedObserverMixin_equality");
    /** @type {unique symbol} */
    const DistinctUntilChangedObserverMixin_prev = /*@__PURE__*/ symbol("DistinctUntilChangedObserverMixin_prev");
    /** @type {unique symbol} */
    const DistinctUntilChangedObserverMixin_hasValue = /*@__PURE__*/ symbol("DistinctUntilChangedObserverMixin_hasValue");
    /** @type {unique symbol} */
    const ForEachObserverMixin_effect = /*@__PURE__*/ symbol("ForEachObserverMixin_effect");
    /** @type {unique symbol} */
    const LiftedObservable_source = /*@__PURE__*/ symbol("LiftedObservable_source");
    /** @type {unique symbol} */
    const LiftedObservable_operators = /*@__PURE__*/ symbol("LiftedObservable_operators");
    /** @type {unique symbol} */
    const ScanObserverMixin_reducer = /*@__PURE__*/ symbol("ScanObserverMixin_reducer");
    /** @type {unique symbol} */
    const ScanObserverMixin_acc = /*@__PURE__*/ symbol("ScanObserverMixin_acc");
    /** @type {unique symbol} */
    const TakeFirstObserverMixin_takeCount = /*@__PURE__*/ symbol("TakeFirstObserverMixin_takeCount");
    /** @type {unique symbol} */
    const TakeFirstObserverMixin_count = /*@__PURE__*/ symbol("TakeFirstObserverMixin_count");
    /** @type {unique symbol} */
    const ObserverMixin_continuation = /*@__PURE__*/ symbol("ObserverMixin_continuation");
    /** @type {unique symbol} */
    const ObserverMixin_isCompleted = /*@__PURE__*/ symbol("ObserverMixin_isCompleted");
    /** @type {unique symbol} */
    const ObserverMixin_dispatchSubscription = /*@__PURE__*/ symbol("ObserverMixin_dispatchSubscription");
    /** @type {unique symbol} */
    const Subject_observers = /*@__PURE__*/ symbol("Subject_observers");
    /** @type {unique symbol} */
    const ContinuationSchedulerLike_schedule = /*@__PURE__*/ symbol("ContinuationSchedulerLike_schedule");
    /** @type {unique symbol} */
    const ContinuationSchedulerLike_shouldYield = /*@__PURE__*/ symbol("ContinuationSchedulerLike_shouldYield");
    /** @type {unique symbol} */
    const ContinuationLike_run = /*@__PURE__*/ symbol("ContinuationLike_run");
    /** @type {unique symbol} */
    const ContinuationLike_priority = /*@__PURE__*/ symbol("ContinuationLike_priority");
    /** @type {unique symbol} */
    const ContinuationLike_continuationScheduler = /*@__PURE__*/ symbol("ContinuationLike_continuationScheduler");
    /** @type {unique symbol} */
    const PrioritySchedulerImplementationLike_runContinuation = 
    /*@__PURE__*/ symbol("PrioritySchedulerImplementationLike_runContinuation");
    /** @type {unique symbol} */
    const PrioritySchedulerImplementationLike_shouldYield = 
    /*@__PURE__*/ symbol("PrioritySchedulerImplementationLike_shouldYield");
    /** @type {unique symbol} */
    const Continuation_childContinuation = /*@__PURE__*/ symbol("Continuation_childContinuation ");
    /** @type {unique symbol} */
    const Continuation_effect = /*@__PURE__*/ symbol("Continuation_effect");
    /** @type {unique symbol} */
    const SchedulerMixin_yieldRequested = /*@__PURE__*/ symbol("SchedulerMixin_yieldRequested");
    /** @type {unique symbol} */
    const SchedulerMixin_currentContinuation = /*@__PURE__*/ symbol("SchedulerMixin_currentContinuation");
    /** @type {unique symbol} */
    const SchedulerMixin_startTime = /*@__PURE__*/ symbol("SchedulerMixin_startTime");
    /** @type {unique symbol} */
    const QueueTask_continuation = /*@__PURE__*/ symbol("QueueTask_continuation");
    /** @type {unique symbol} */
    const QueueTask_dueTime = /*@__PURE__*/ symbol("QueueTask_dueTime");
    /** @type {unique symbol} */
    const QueueTask_priority = /*@__PURE__*/ symbol("QueueTask_priority");
    /** @type {unique symbol} */
    const QueueTask_taskID = /*@__PURE__*/ symbol("QueueTask_taskID");
    /** @type {unique symbol} */
    const QueueScheduler_delayed = /*@__PURE__*/ symbol("QueueScheduler_delayed ");
    /** @type {unique symbol} */
    const QueueScheduler_dueTime = /*@__PURE__*/ symbol("QueueScheduler_dueTime ");
    /** @type {unique symbol} */
    const QueueScheduler_hostContinuation = /*@__PURE__*/ symbol("QueueScheduler_hostContinuation ");
    /** @type {unique symbol} */
    const QueueScheduler_hostScheduler = /*@__PURE__*/ symbol("QueueScheduler_hostScheduler");
    /** @type {unique symbol} */
    const QueueScheduler_queue = /*@__PURE__*/ symbol("QueueScheduler_queue ");
    /** @type {unique symbol} */
    const QueueScheduler_taskIDCounter = /*@__PURE__*/ symbol("QueueScheduler_taskIDCounter ");
    /** @type {unique symbol} */
    const DispatchedObservable_observer = /*@__PURE__*/ symbol("DispatchedObservable_observer");
    /** @type {unique symbol} */
    const StreamMixin_dispatcher = /*@__PURE__*/ symbol("StreamMixin_dispatcher");
    /** @type {unique symbol} */
    const DisposableMixin_disposables = /*@__PURE__*/ symbol("DisposableMixin_disposables");
    /** @type {unique symbol} */
    const SerialDisposableMixin_current = /*@__PURE__*/ symbol("SerialDisposableMixin_current");
    /** @type {unique symbol} */
    const FifoQueue_head = /*@__PURE__*/ symbol("FifoQueue_head");
    /** @type {unique symbol} */
    const FifoQueue_tail = /*@__PURE__*/ symbol("FifoQueue_tail");
    /** @type {unique symbol} */
    const FifoQueue_capacityMask = /*@__PURE__*/ symbol("FifoQueue_capacityMask");
    /** @type {unique symbol} */
    const FifoQueue_values = /*@__PURE__*/ symbol("FifoQueue_values");
    /** @type {unique symbol} */
    const PriorityQueueImpl_comparator = /*@__PURE__*/ symbol("PriorityQueueImpl_comparator ");
    /** @type {unique symbol} */
    const EnumeratorLike_move = /*@__PURE__*/ symbol("EnumeratorLike_move");
    /** @type {unique symbol} */
    const EnumeratorLike_current = /*@__PURE__*/ symbol("EnumeratorLike_current");
    /** @type {unique symbol} */
    const EnumeratorLike_hasCurrent = /*@__PURE__*/ symbol("EnumeratorLike_hasCurrent");
    /** @type {unique symbol} */
    const Object_init = /*@__PURE__*/ symbol("Object_init");
    /** @type {unique symbol} */
    const Object_properties = /*@__PURE__*/ symbol("Object_properties");
    /** @type {unique symbol} */
    const Object_prototype = /*@__PURE__*/ symbol("Object_prototype");
    /** @type {unique symbol} */
    const DelegatingLike_delegate = /*@__PURE__*/ symbol("DelegatingLike_delegate");
    /** @type {unique symbol} */
    const DispatcherLike_complete = /*@__PURE__*/ symbol("DispatcherLike_complete");
    /** @type {unique symbol} */
    const DispatcherLike_scheduler = /*@__PURE__*/ symbol("DispatcherLike_scheduler");
    /** @type {unique symbol} */
    const MulticastObservableLike_observerCount = /*@__PURE__*/ symbol("MulticastObservableLike_observerCount");
    /** @type {unique symbol} */
    const ObserverLike_notify = /*@__PURE__*/ symbol("ObserverLike_notify");
    /** @type {unique symbol} */
    const ObservableLike_observe = /*@__PURE__*/ symbol("ObservableLike_observe");
    /** @type {unique symbol} */
    const ObservableLike_isEnumerable = /*@__PURE__*/ symbol("ObservableLike_isEnumerable");
    /** @type {unique symbol} */
    const ObservableLike_isRunnable = /*@__PURE__*/ symbol("ObservableLike_isRunnable");
    /** @type {unique symbol} */
    const SubjectLike_publish = /*@__PURE__*/ symbol("SubjectLike_publish");
    /** @type {unique symbol} */
    const SchedulerLike_inContinuation = /*@__PURE__*/ symbol("SchedulerLike_inContinuation");
    /** @type {unique symbol} */
    const SchedulerLike_now = /*@__PURE__*/ symbol("SchedulerLike_now");
    /** @type {unique symbol} */
    const SchedulerLike_requestYield = /*@__PURE__*/ symbol("SchedulerLike_requestYield");
    /** @type {unique symbol} */
    const SchedulerLike_shouldYield = /*@__PURE__*/ symbol("SchedulerLike_shouldYield");
    /** @type {unique symbol} */
    const SchedulerLike_schedule = /*@__PURE__*/ symbol("SchedulerLike_schedule");
    /** @type {unique symbol} */
    const SchedulerLike_maxYieldInterval = /*@__PURE__*/ symbol("SchedulerLike_maxYieldInterval");
    /** @type {unique symbol} */
    const ContinuationContextLike_yield = /*@__PURE__*/ symbol("ContinuationContextLike_yield");
    /** @type {unique symbol} */
    const PauseableSchedulerLike_isPaused = /*@__PURE__*/ symbol("PauseableSchedulerLike_isPaused");
    /** @type {unique symbol} */
    const PauseableSchedulerLike_pause = /*@__PURE__*/ symbol("PauseableSchedulerLike_pause");
    /** @type {unique symbol} */
    const PauseableSchedulerLike_resume = /*@__PURE__*/ symbol("PauseableSchedulerLike_resume");
    /** @type {unique symbol} */
    const StreamableLike_stream = /*@__PURE__*/ symbol("StreamableLike_stream");
    /** @type {unique symbol} */
    const StreamableLike_isEnumerable = /*@__PURE__*/ symbol("StreamableLike_isEnumerable");
    /** @type {unique symbol} */
    const StreamableLike_isInteractive = /*@__PURE__*/ symbol("StreamableLike_isInteractive");
    /** @type {unique symbol} */
    const StreamableLike_isRunnable = /*@__PURE__*/ symbol("StreamableLike_isRunnable");
    /** @type {unique symbol} */
    const FlowableStreamLike_isPaused = /*@__PURE__*/ symbol("FlowableStreamLike_isPaused");
    /** @type {unique symbol} */
    const FlowableStreamLike_pause = /*@__PURE__*/ symbol("FlowableStreamLike_pause");
    /** @type {unique symbol} */
    const FlowableStreamLike_resume = /*@__PURE__*/ symbol("FlowableStreamLike_resume");
    /** @type {unique symbol} */
    const DisposableLike_add = /*@__PURE__*/ symbol("DisposableLike_add");
    /** @type {unique symbol} */
    const DisposableLike_dispose = /*@__PURE__*/ symbol("DisposableLike_dispose");
    /** @type {unique symbol} */
    const DisposableLike_error = /*@__PURE__*/ symbol("DisposableLike_error");
    /** @type {unique symbol} */
    const DisposableLike_isDisposed = /*@__PURE__*/ symbol("DisposableLike_isDisposed");
    /** @type {unique symbol} */
    const QueueableLike_push = /*@__PURE__*/ symbol("QueueableLike_push");
    /** @type {unique symbol} */
    const QueueableLike_maxBufferSize = /*@__PURE__*/ symbol("QueueableLike_maxBufferSize");
    /** @type {unique symbol} */
    const SerialDisposableLike_current = /*@__PURE__*/ symbol("SerialDisposableLike_current");
    /** @type {unique symbol} */
    const QueueLike_head = /*@__PURE__*/ symbol("QueueLike_head");
    /** @type {unique symbol} */
    const QueueLike_pull = /*@__PURE__*/ symbol("QueueLike_pull");
    /** @type {unique symbol} */
    const QueueLike_count = /*@__PURE__*/ symbol("QueueLike_count");
    /** @type {unique symbol} */
    const IndexedQueueLike_get = /*@__PURE__*/ symbol("IndexedQueueLike_get");
    /** @type {unique symbol} */
    const IndexedQueueLike_set = /*@__PURE__*/ symbol("IndexedQueueLike_set");
    /** @type {unique symbol} */
    const IndexedQueueLike_pop = /*@__PURE__*/ symbol("IndexedQueueLike_pop");

    function initUnsafe(mixin, instance, ...args) {
        const f = mixin[Object_init];
        f(instance, ...args);
    }
    const init = initUnsafe;
    const include = (...mixins) => {
        const length = ReadonlyArray_getLength(mixins);
        if (length == 1) {
            return mixins[0];
        }
        else {
            let propertyDescriptions = {};
            let prototypeDescriptions = {};
            for (let i = 0; i < length; i++) {
                const mixin = mixins[i];
                propertyDescriptions = {
                    ...propertyDescriptions,
                    ...getOwnPropertyDescriptors(mixin[Object_properties]),
                };
                prototypeDescriptions = {
                    ...prototypeDescriptions,
                    ...getOwnPropertyDescriptors(mixin[Object_prototype]),
                };
            }
            return {
                [Object_properties]: create(prototype, propertyDescriptions),
                [Object_prototype]: create(prototype, prototypeDescriptions),
            };
        }
    };
    const mix = ((initOrParent, propertiesOrInit, prototypeOrParent, nothingOrPrototype) => {
        if (isFunction(initOrParent)) {
            return {
                [Object_init]: initOrParent,
                [Object_properties]: propertiesOrInit !== null && propertiesOrInit !== void 0 ? propertiesOrInit : {},
                [Object_prototype]: prototypeOrParent !== null && prototypeOrParent !== void 0 ? prototypeOrParent : {},
            };
        }
        else {
            const base = include(initOrParent, {
                [Object_properties]: prototypeOrParent !== null && prototypeOrParent !== void 0 ? prototypeOrParent : {},
                [Object_prototype]: nothingOrPrototype !== null && nothingOrPrototype !== void 0 ? nothingOrPrototype : {},
            });
            return {
                ...base,
                [Object_init]: propertiesOrInit,
            };
        }
    });
    const createInstanceFactory = (mixin) => {
        const propertyDescription = getOwnPropertyDescriptors(mixin[Object_properties]);
        const prototypeDescription = __DEV__
            ? {
                ...getOwnPropertyDescriptors(mixin[Object_prototype]),
                constructor: {
                    configurable: true,
                    enumerable: false,
                    value: mixin[Object_init],
                    writable: true,
                },
            }
            : getOwnPropertyDescriptors(mixin[Object_prototype]);
        const prototype$1 = create(prototype, prototypeDescription);
        return (...args) => {
            const instance = create(prototype$1, propertyDescription);
            initUnsafe(mixin, instance, ...args);
            return instance;
        };
    };
    const props = (o) => {
        return o;
    };
    const delegatingMixin = /*@__PURE__*/ (() => {
        return pipe(mix(function DelegatingDisposableMixin(instance, delegate) {
            instance[DelegatingLike_delegate] = delegate;
            return instance;
        }, props({
            [DelegatingLike_delegate]: none,
        }), {}), returns);
    })();
    const getPrototype = (mixin) => mixin[Object_prototype];

    const Disposable_addDisposableOrTeardown = (parent, child, ignoreChildErrors = false) => {
        parent[DisposableLike_add](child, ignoreChildErrors);
    };

    const Disposable_addIgnoringChildErrors = (child) => (parent) => {
        Disposable_addDisposableOrTeardown(parent, child, true);
        return parent;
    };

    const { abs, floor, log, max, min, random } = Math;

    const doDispose = (instance, disposable) => {
        const error = instance[DisposableLike_error];
        if (isFunction(disposable)) {
            try {
                call(disposable, instance, error);
            }
            catch (_) {
                /* Proactively catch Errors thrown in teardown logic. Teardown functions
                 * shouldn't throw, so this is to prevent unexpected Errors.
                 */
            }
        }
        else {
            disposable[DisposableLike_dispose](error);
        }
    };
    const Disposable_mixin = /*@__PURE__*/ mix(function DisposableMixin(instance) {
        instance[DisposableMixin_disposables] =
            newInstance(Set);
        return instance;
    }, props({
        [DisposableLike_error]: none,
        [DisposableLike_isDisposed]: false,
        [DisposableMixin_disposables]: none,
    }), {
        [DisposableLike_dispose](error) {
            if (!this[DisposableLike_isDisposed]) {
                this[DisposableLike_error] = error;
                this[DisposableLike_isDisposed] = true;
                const disposables = this[DisposableMixin_disposables];
                for (const disposable of disposables) {
                    disposables.delete(disposable);
                    doDispose(this, disposable);
                }
            }
        },
        [DisposableLike_add](disposable, ignoreChildErrors) {
            const disposables = this[DisposableMixin_disposables];
            if (this === disposable) {
                return;
            }
            else if (this[DisposableLike_isDisposed]) {
                doDispose(this, disposable);
            }
            else if (!disposables.has(disposable)) {
                disposables.add(disposable);
                if (!isFunction(disposable)) {
                    disposable[DisposableLike_add](e => {
                        disposables.delete(disposable);
                        if (isSome(e) && !ignoreChildErrors) {
                            this[DisposableLike_dispose](e);
                        }
                    }, true);
                }
            }
        },
    });

    const Disposable_onDisposed = (teardown) => disposable => {
        Disposable_addDisposableOrTeardown(disposable, teardown);
        return disposable;
    };

    const IndexedQueue_fifoQueueMixin = /*@__PURE__*/ (() => {
        const copyArray = (src, head, tail, size) => {
            const capacity = src.length;
            const dest = newInstance(Array, size);
            let k = 0;
            let bound = head >= tail ? capacity : tail;
            for (let i = head; i < bound; i++) {
                dest[k++] = src[i];
            }
            bound = head >= tail ? tail : 0;
            for (let i = 0; i < bound; i++) {
                dest[k++] = src[i];
            }
            return dest;
        };
        const grow = (instance) => {
            var _a;
            const head = instance[FifoQueue_head];
            const tail = instance[FifoQueue_tail];
            if (tail !== head && tail !== 0) {
                return;
            }
            const values = (_a = instance[FifoQueue_values]) !== null && _a !== void 0 ? _a : [];
            const capacity = values.length;
            const capacityMask = instance[FifoQueue_capacityMask];
            const count = instance[QueueLike_count];
            if (head === 0 || (tail === 0 && head < capacity >> 2)) {
                values.length <<= 1;
                instance[FifoQueue_tail] = count + head;
            }
            else {
                const newCapacity = capacity << 1;
                const newList = copyArray(values, head, tail, newCapacity);
                instance[FifoQueue_values] = newList;
                instance[FifoQueue_head] = 0;
                instance[FifoQueue_tail] = count;
            }
            instance[FifoQueue_capacityMask] = (capacityMask << 1) | 1;
        };
        const shrink = (instance) => {
            var _a;
            const values = (_a = instance[FifoQueue_values]) !== null && _a !== void 0 ? _a : [];
            const capacity = values.length;
            const count = instance[QueueLike_count];
            if (count >= capacity >> 2 || capacity <= 32) {
                return;
            }
            const head = instance[FifoQueue_head];
            const tail = instance[FifoQueue_tail];
            const newCapacity = capacity >> 1;
            if (tail >= head && tail < newCapacity) {
                values.length >>= 1;
            }
            else {
                const newList = copyArray(values, head, tail, newCapacity);
                instance[FifoQueue_values] = newList;
                instance[FifoQueue_head] = 0;
                instance[FifoQueue_tail] = count;
            }
            instance[FifoQueue_capacityMask] = newCapacity - 1;
        };
        return pipe(mix(function FifoQueue(instance, maxBufferSize) {
            instance[QueueableLike_maxBufferSize] = maxBufferSize;
            return instance;
        }, props({
            [QueueLike_count]: 0,
            [QueueableLike_maxBufferSize]: MAX_SAFE_INTEGER,
            [FifoQueue_head]: 0,
            [FifoQueue_tail]: 0,
            [FifoQueue_capacityMask]: 0,
            [FifoQueue_values]: none,
        }), {
            get [QueueLike_head]() {
                var _a;
                const head = this[FifoQueue_head];
                const values = (_a = this[FifoQueue_values]) !== null && _a !== void 0 ? _a : [];
                return head === this[FifoQueue_tail] ? none : values[head];
            },
            [QueueLike_pull]() {
                var _a;
                const tail = this[FifoQueue_tail];
                const values = (_a = this[FifoQueue_values]) !== null && _a !== void 0 ? _a : [];
                let head = this[FifoQueue_head];
                const item = head === tail ? none : values[head];
                if (head !== tail) {
                    values[head] = none;
                    head = (head + 1) & this[FifoQueue_capacityMask];
                    this[FifoQueue_head] = head;
                    this[QueueLike_count]--;
                }
                shrink(this);
                return item;
            },
            [IndexedQueueLike_pop]() {
                var _a;
                const head = this[FifoQueue_head];
                const values = (_a = this[FifoQueue_values]) !== null && _a !== void 0 ? _a : [];
                const capacity = values.length;
                let tail = this[FifoQueue_tail];
                const item = head === tail
                    ? none
                    : ((tail = (tail - 1 + capacity) & this[FifoQueue_capacityMask]),
                        (this[FifoQueue_tail] = tail),
                        this[QueueLike_count]--,
                        values[tail]);
                values[tail] = none;
                shrink(this);
                return item;
            },
            [IndexedQueueLike_get](index) {
                var _a, _b, _c;
                const count = this[QueueLike_count];
                const capacity = (_b = (_a = this[FifoQueue_values]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
                const head = this[FifoQueue_head];
                const values = (_c = this[FifoQueue_values]) !== null && _c !== void 0 ? _c : [];
                const headOffsetIndex = index + head;
                const tailOffsetIndex = headOffsetIndex - capacity;
                const computedIndex = index < 0 || index >= count
                    ? raiseWithDebugMessage("index out of range")
                    : headOffsetIndex < capacity
                        ? headOffsetIndex
                        : tailOffsetIndex;
                return values[computedIndex];
            },
            [IndexedQueueLike_set](index, value) {
                var _a, _b, _c;
                const count = this[QueueLike_count];
                const capacity = (_b = (_a = this[FifoQueue_values]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
                const head = this[FifoQueue_head];
                const values = (_c = this[FifoQueue_values]) !== null && _c !== void 0 ? _c : [];
                const headOffsetIndex = index + head;
                const tailOffsetIndex = headOffsetIndex - capacity;
                const computedIndex = index < 0 || index >= count
                    ? raiseWithDebugMessage("index out of range")
                    : headOffsetIndex < capacity
                        ? headOffsetIndex
                        : tailOffsetIndex;
                const oldValue = values[computedIndex];
                values[computedIndex] = value;
                return oldValue;
            },
            [QueueableLike_push](item) {
                var _a;
                const values = (_a = this[FifoQueue_values]) !== null && _a !== void 0 ? _a : ((this[FifoQueue_capacityMask] = 31),
                    (this[FifoQueue_values] = newInstance(Array, 32)),
                    this[FifoQueue_values]);
                const capacityMask = this[FifoQueue_capacityMask];
                let count = this[QueueLike_count];
                let tail = this[FifoQueue_tail];
                values[tail] = item;
                count++;
                this[QueueLike_count] = count;
                tail = (tail + 1) & capacityMask;
                this[FifoQueue_tail] = tail;
                grow(this);
                return this[QueueLike_count] <= this[QueueableLike_maxBufferSize];
            },
        }), returns);
    })();

    class YieldError {
        constructor(delay) {
            this.delay = delay;
        }
    }
    const PriorityScheduler_mixin = 
    /*@__PURE__*/ (() => {
        const createContinuation = createInstanceFactory(mix(include(Disposable_mixin, IndexedQueue_fifoQueueMixin()), function Continuation(instance, scheduler, effect, priority) {
            init(Disposable_mixin, instance);
            init(IndexedQueue_fifoQueueMixin(), instance, MAX_SAFE_INTEGER);
            instance[ContinuationLike_continuationScheduler] = scheduler;
            instance[Continuation_effect] = effect;
            instance[ContinuationLike_priority] = priority;
            pipe(instance, Disposable_onDisposed(_ => {
                let head = none;
                while (((head = instance[QueueLike_pull]()), isSome(head))) {
                    if (!head[DisposableLike_isDisposed]) {
                        scheduler[ContinuationSchedulerLike_schedule](head, 0);
                    }
                }
            }));
            return instance;
        }, props({
            [ContinuationLike_continuationScheduler]: none,
            [ContinuationLike_priority]: 0,
            [Continuation_childContinuation]: none,
            [Continuation_effect]: none,
        }), {
            get [ContinuationSchedulerLike_shouldYield]() {
                return this[ContinuationLike_continuationScheduler][ContinuationSchedulerLike_shouldYield];
            },
            [ContinuationContextLike_yield](delay = 0) {
                const shouldYield = delay > 0 ||
                    this[QueueLike_count] > 0 ||
                    this[ContinuationSchedulerLike_shouldYield];
                if (shouldYield) {
                    throw newInstance(YieldError, delay);
                }
            },
            [ContinuationLike_run]() {
                if (this[DisposableLike_isDisposed]) {
                    return;
                }
                const scheduler = this[ContinuationLike_continuationScheduler];
                // Run any inner continuations first.
                let head = none;
                while (((head = this[QueueLike_pull]()), isSome(head))) {
                    this[Continuation_childContinuation] = head;
                    head[ContinuationLike_run]();
                    this[Continuation_childContinuation] = none;
                    const shouldYield = scheduler[ContinuationSchedulerLike_shouldYield];
                    if (this[DisposableLike_isDisposed]) {
                        return;
                    }
                    else if (shouldYield) {
                        scheduler[ContinuationSchedulerLike_schedule](this, 0);
                        return;
                    }
                }
                let err = none;
                let yieldError = none;
                try {
                    this[Continuation_effect](this);
                }
                catch (e) {
                    if (e instanceof YieldError) {
                        yieldError = e;
                    }
                    else {
                        err = error(e);
                    }
                }
                if (isSome(yieldError) && !this[DisposableLike_isDisposed]) {
                    scheduler[ContinuationSchedulerLike_schedule](this, yieldError.delay);
                    if (yieldError.delay > 0) {
                        let head = none;
                        // If the current continuation is being rescheduled with delay,
                        // reschedule all its children on the parent.
                        while (((head = this[QueueLike_pull]()), isSome(head))) {
                            if (!head[DisposableLike_isDisposed]) {
                                scheduler[ContinuationSchedulerLike_schedule](head, 0);
                            }
                        }
                    }
                }
                else {
                    this[DisposableLike_dispose](err);
                }
            },
            [ContinuationSchedulerLike_schedule](continuation, delay) {
                const childContinuation = this[Continuation_childContinuation];
                continuation[ContinuationLike_continuationScheduler] = this;
                if (continuation[DisposableLike_isDisposed]) {
                    return;
                }
                if (delay > 0 || this[DisposableLike_isDisposed]) {
                    this[ContinuationLike_continuationScheduler][ContinuationSchedulerLike_schedule](continuation, delay);
                }
                else if (isSome(childContinuation) &&
                    childContinuation !== continuation &&
                    !childContinuation[DisposableLike_isDisposed]) {
                    childContinuation[ContinuationSchedulerLike_schedule](continuation, 0);
                }
                else {
                    this[QueueableLike_push](continuation);
                }
            },
        }));
        return mix(include(Disposable_mixin), function SchedulerMixin(instance, maxYieldInterval) {
            init(Disposable_mixin, instance);
            instance[SchedulerLike_maxYieldInterval] = maxYieldInterval;
            return instance;
        }, props({
            [SchedulerMixin_currentContinuation]: none,
            [SchedulerMixin_yieldRequested]: false,
            [SchedulerLike_maxYieldInterval]: MAX_SAFE_INTEGER,
            [SchedulerMixin_startTime]: 0,
        }), {
            get [SchedulerLike_inContinuation]() {
                const currentContinuation = this[SchedulerMixin_currentContinuation];
                return isSome(currentContinuation);
            },
            get [SchedulerLike_shouldYield]() {
                const inContinuation = this[SchedulerLike_inContinuation];
                const isDisposed = this[DisposableLike_isDisposed];
                const yieldRequested = this[SchedulerMixin_yieldRequested];
                const exceededMaxYieldInterval = this[SchedulerLike_now] >
                    this[SchedulerMixin_startTime] +
                        this[SchedulerLike_maxYieldInterval];
                return (inContinuation &&
                    (isDisposed ||
                        yieldRequested ||
                        exceededMaxYieldInterval ||
                        this[PrioritySchedulerImplementationLike_shouldYield]));
            },
            get [ContinuationSchedulerLike_shouldYield]() {
                return this[SchedulerLike_shouldYield];
            },
            [SchedulerLike_requestYield]() {
                this[SchedulerMixin_yieldRequested] = true;
            },
            [SchedulerLike_schedule](effect, options) {
                var _a;
                const delay = floor(max((_a = options === null || options === void 0 ? void 0 : options.delay) !== null && _a !== void 0 ? _a : 0, 0));
                const { priority = 0 } = options !== null && options !== void 0 ? options : {};
                const continuation = createContinuation(this, effect, priority);
                const currentContinuation = this[SchedulerMixin_currentContinuation];
                if (delay > 0 ||
                    isNone(currentContinuation) ||
                    currentContinuation[ContinuationLike_priority] !== priority) {
                    this[ContinuationSchedulerLike_schedule](continuation, delay);
                }
                else {
                    currentContinuation[ContinuationSchedulerLike_schedule](continuation, 0);
                }
                return continuation;
            },
            [PrioritySchedulerImplementationLike_runContinuation](continuation) {
                this[SchedulerMixin_startTime] = this[SchedulerLike_now];
                this[SchedulerMixin_currentContinuation] = continuation;
                this[SchedulerMixin_yieldRequested] = false;
                continuation[ContinuationLike_run]();
                this[SchedulerMixin_yieldRequested] = false;
                this[SchedulerMixin_currentContinuation] = none;
            },
        });
    })();

    const Disposable_addTo = (parent) => (child) => {
        Disposable_addDisposableOrTeardown(parent, child);
        return child;
    };

    const Disposable_create = 
    /*@__PURE__*/ createInstanceFactory(Disposable_mixin);

    const supportsPerformanceNow = /*@__PURE__*/ (() => typeof performance === "object" && isFunction(performance.now))();
    const supportsSetImmediate = typeof setImmediate === "function";
    const supportsProcessHRTime = /*@__PURE__*/ (() => typeof process === "object" && isFunction(process.hrtime))();
    const supportsIsInputPending = /*@__PURE__*/ (() => typeof navigator === "object" &&
        navigator.scheduling !== none &&
        navigator.scheduling.isInputPending !== none)();
    const isInputPending = () => { var _a, _b; return supportsIsInputPending && ((_b = (_a = navigator.scheduling) === null || _a === void 0 ? void 0 : _a.isInputPending()) !== null && _b !== void 0 ? _b : false); };
    const scheduleImmediateWithSetImmediate = (scheduler, continuation) => {
        const disposable = pipe(Disposable_create(), Disposable_addTo(continuation), Disposable_onDisposed(() => clearImmediate(immmediate)));
        const immmediate = setImmediate(runContinuation, scheduler, continuation, disposable);
    };
    const scheduleDelayed = (scheduler, continuation, delay) => {
        const disposable = pipe(Disposable_create(), Disposable_addTo(continuation), Disposable_onDisposed(_ => clearTimeout(timeout)));
        const timeout = setTimeout(runContinuation, delay, scheduler, continuation, disposable);
    };
    const scheduleImmediate = (scheduler, continuation) => {
        if (supportsSetImmediate) {
            scheduleImmediateWithSetImmediate(scheduler, continuation);
        }
        else {
            scheduleDelayed(scheduler, continuation, 0);
        }
    };
    const runContinuation = (scheduler, continuation, immmediateOrTimerDisposable) => {
        // clear the immediateOrTimer disposable
        immmediateOrTimerDisposable[DisposableLike_dispose]();
        scheduler[PrioritySchedulerImplementationLike_runContinuation](continuation);
    };
    const createHostSchedulerInstance = /*@__PURE__*/ (() => createInstanceFactory(mix(include(PriorityScheduler_mixin), function HostScheduler(instance, maxYieldInterval) {
        init(PriorityScheduler_mixin, instance, maxYieldInterval);
        return instance;
    }, props({}), {
        get [SchedulerLike_now]() {
            if (supportsPerformanceNow) {
                return performance.now();
            }
            else if (supportsProcessHRTime) {
                const hr = process.hrtime();
                return hr[0] * 1000 + hr[1] / 1e6;
            }
            else {
                return Date.now();
            }
        },
        get [PrioritySchedulerImplementationLike_shouldYield]() {
            return isInputPending();
        },
        [ContinuationSchedulerLike_schedule](continuation, delay) {
            pipe(this, Disposable_addIgnoringChildErrors(continuation));
            if (continuation[DisposableLike_isDisposed]) {
                return;
            }
            continuation[ContinuationLike_continuationScheduler] = this;
            if (delay > 0) {
                scheduleDelayed(this, continuation, delay);
            }
            else {
                scheduleImmediate(this, continuation);
            }
        },
    })))();
    const Scheduler_createHostScheduler = (options = {}) => {
        const { maxYieldInterval = 300 } = options;
        return createHostSchedulerInstance(maxYieldInterval);
    };

    const MutableEnumerator_mixin = 
    /*@__PURE__*/ (() => {
        return pipe(mix(function EnumeratorMixin(instance) {
            return instance;
        }, props({
            [Enumerator_private_current]: none,
            [EnumeratorLike_hasCurrent]: false,
        }), {
            get [EnumeratorLike_current]() {
                return this[EnumeratorLike_hasCurrent]
                    ? this[Enumerator_private_current]
                    : raiseWithDebugMessage("Enumerator does not have current value");
            },
            set [EnumeratorLike_current](v) {
                this[Enumerator_private_current] = v;
                this[EnumeratorLike_hasCurrent] = true;
            },
            [MutableEnumeratorLike_reset]() {
                this[Enumerator_private_current] = none;
                this[EnumeratorLike_hasCurrent] = false;
            },
        }), returns);
    })();

    const Queue_priorityQueueMixin = /*@__PURE__*/ (() => {
        const IndexedQueuePrototype = getPrototype(IndexedQueue_fifoQueueMixin());
        const siftDown = (queue, item) => {
            const compare = queue[PriorityQueueImpl_comparator];
            const count = queue[QueueLike_count];
            for (let index = 0; index < count;) {
                const leftIndex = (index + 1) * 2 - 1;
                const rightIndex = leftIndex + 1;
                const hasLeft = leftIndex >= 0 && leftIndex < count;
                const hasRight = rightIndex >= 0 && rightIndex < count;
                const left = hasLeft ? queue[IndexedQueueLike_get](leftIndex) : none;
                const right = hasRight ? queue[IndexedQueueLike_get](rightIndex) : none;
                if (hasLeft && compare(left, item) < 0) {
                    if (hasRight && compare(right, left) < 0) {
                        queue[IndexedQueueLike_set](index, right);
                        queue[IndexedQueueLike_set](rightIndex, item);
                        index = rightIndex;
                    }
                    else {
                        queue[IndexedQueueLike_set](index, left);
                        queue[IndexedQueueLike_set](leftIndex, item);
                        index = leftIndex;
                    }
                }
                else if (hasRight && compare(right, item) < 0) {
                    queue[IndexedQueueLike_set](index, right);
                    queue[IndexedQueueLike_set](rightIndex, item);
                    index = rightIndex;
                }
                else {
                    break;
                }
            }
        };
        const siftUp = (queue, item) => {
            const compare = queue[PriorityQueueImpl_comparator];
            const count = queue[QueueLike_count];
            for (let index = count - 1, parentIndex = floor((index - 1) / 2); parentIndex >= 0 &&
                parentIndex <= count &&
                compare(queue[IndexedQueueLike_get](parentIndex), item) > 0; index = parentIndex, parentIndex = floor((index - 1) / 2)) {
                const parent = queue[IndexedQueueLike_get](parentIndex);
                queue[IndexedQueueLike_set](parentIndex, item);
                queue[IndexedQueueLike_set](index, parent);
            }
        };
        return pipe(mix(include(IndexedQueue_fifoQueueMixin()), function PriorityQueue(instance, comparator, maxBufferSize) {
            init(IndexedQueue_fifoQueueMixin(), instance, maxBufferSize);
            instance[PriorityQueueImpl_comparator] = comparator;
            return instance;
        }, props({
            [PriorityQueueImpl_comparator]: none,
        }), {
            [QueueLike_pull]() {
                const count = this[QueueLike_count];
                if (count === 0) {
                    return none;
                }
                else if (count === 1) {
                    return call(IndexedQueuePrototype[QueueLike_pull], this);
                }
                else {
                    const first = this[IndexedQueueLike_get](0);
                    const last = this[IndexedQueueLike_pop]();
                    this[IndexedQueueLike_set](0, last);
                    siftDown(this, last);
                    return first;
                }
            },
            [QueueableLike_push](item) {
                const result = call(IndexedQueuePrototype[QueueableLike_push], this, item);
                siftUp(this, item);
                return result;
            },
        }), returns);
    })();

    const IndexedQueue_createFifoQueue = /*@__PURE__*/ (() => {
        const factory = createInstanceFactory(IndexedQueue_fifoQueueMixin());
        return options => {
            var _a;
            const maxBuffersize = max((_a = options === null || options === void 0 ? void 0 : options.maxBufferSize) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER, 1);
            return factory(maxBuffersize);
        };
    })();

    const Disposable_disposed = /*@__PURE__*/ (() => {
        const instance = Disposable_create();
        instance[DisposableLike_dispose]();
        return instance;
    })();

    const Disposable_add = (child) => (parent) => {
        Disposable_addDisposableOrTeardown(parent, child);
        return parent;
    };

    const SerialDisposable_mixin = /*@__PURE__*/ (() => {
        return pipe(mix(function SerialDisposable(instance, defaultValue) {
            instance[SerialDisposableMixin_current] = defaultValue;
            pipe(instance, Disposable_add(defaultValue));
            return instance;
        }, props({
            [SerialDisposableMixin_current]: none,
        }), {
            get [SerialDisposableLike_current]() {
                return this[SerialDisposableMixin_current];
            },
            set [SerialDisposableLike_current](v) {
                const oldValue = this[SerialDisposableMixin_current];
                oldValue[DisposableLike_dispose]();
                this[SerialDisposableMixin_current] = v;
                pipe(this, Disposable_add(v));
            },
        }), returns);
    })();

    const Queue_createPriorityQueue = /*@__PURE__*/ (() => {
        const factory = createInstanceFactory(Queue_priorityQueueMixin());
        return (comparator, options) => {
            var _a;
            const maxBuffersize = max((_a = options === null || options === void 0 ? void 0 : options.maxBufferSize) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER, 1);
            return factory(comparator, maxBuffersize);
        };
    })();

    const Scheduler_createQueueScheduler = /*@__PURE__*/ (() => {
        const delayedComparator = (a, b) => {
            let diff = 0;
            diff = diff !== 0 ? diff : a[QueueTask_dueTime] - b[QueueTask_dueTime];
            diff = diff !== 0 ? diff : b[QueueTask_taskID] - a[QueueTask_taskID];
            return diff;
        };
        const peek = (instance) => {
            const { [QueueScheduler_delayed]: delayed, [QueueScheduler_queue]: queue } = instance;
            const now = instance[QueueScheduler_hostScheduler][SchedulerLike_now];
            while (true) {
                const task = delayed[QueueLike_head];
                if (isNone(task)) {
                    break;
                }
                const taskIsDispose = task[QueueTask_continuation][DisposableLike_isDisposed];
                if (task[QueueTask_dueTime] > now && !taskIsDispose) {
                    break;
                }
                delayed[QueueLike_pull]();
                if (!taskIsDispose) {
                    queue[QueueableLike_push](task);
                }
            }
            let task = none;
            while (true) {
                task = queue[QueueLike_head];
                if (isNone(task)) {
                    break;
                }
                if (!task[QueueTask_continuation][DisposableLike_isDisposed]) {
                    break;
                }
                queue[QueueLike_pull]();
            }
            return task !== null && task !== void 0 ? task : delayed[QueueLike_head];
        };
        const priorityShouldYield = (instance, next) => {
            const { [EnumeratorLike_current]: current } = instance;
            return (current !== next &&
                next[QueueTask_dueTime] <=
                    instance[QueueScheduler_hostScheduler][SchedulerLike_now] &&
                next[QueueTask_priority] > current[QueueTask_priority]);
        };
        const scheduleOnHost = (instance) => {
            var _a;
            const task = peek(instance);
            const continuationActive = !instance[SerialDisposableLike_current][DisposableLike_isDisposed] &&
                isSome(task) &&
                instance[QueueScheduler_dueTime] <= task[QueueTask_dueTime];
            if (isNone(task) ||
                continuationActive ||
                instance[PauseableSchedulerLike_isPaused]) {
                return;
            }
            const dueTime = task[QueueTask_dueTime];
            const delay = max(dueTime - instance[QueueScheduler_hostScheduler][SchedulerLike_now], 0);
            instance[QueueScheduler_dueTime] = dueTime;
            const continuation = (_a = instance[QueueScheduler_hostContinuation]) !== null && _a !== void 0 ? _a : ((ctx) => {
                for (let task = peek(instance); isSome(task) && !instance[DisposableLike_isDisposed]; task = peek(instance)) {
                    const { [QueueTask_continuation]: continuation, [QueueTask_dueTime]: dueTime, } = task;
                    const delay = max(dueTime - instance[QueueScheduler_hostScheduler][SchedulerLike_now], 0);
                    if (delay > 0) {
                        instance[QueueScheduler_dueTime] =
                            instance[QueueScheduler_hostScheduler][SchedulerLike_now] + delay;
                    }
                    else {
                        instance[EnumeratorLike_move]();
                        instance[PrioritySchedulerImplementationLike_runContinuation](continuation);
                    }
                    ctx[ContinuationContextLike_yield](delay);
                }
            });
            instance[QueueScheduler_hostContinuation] = continuation;
            instance[SerialDisposableLike_current] = instance[QueueScheduler_hostScheduler][SchedulerLike_schedule](continuation, { delay });
        };
        const typedSerialDisposableMixin = SerialDisposable_mixin();
        const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
        return createInstanceFactory(mix(include(PriorityScheduler_mixin, typedMutableEnumeratorMixin, typedSerialDisposableMixin), function QueueScheduler(instance, host, createImmediateQueue) {
            init(PriorityScheduler_mixin, instance, host[SchedulerLike_maxYieldInterval]);
            init(typedMutableEnumeratorMixin, instance);
            init(typedSerialDisposableMixin, instance, Disposable_disposed);
            instance[QueueScheduler_delayed] =
                Queue_createPriorityQueue(delayedComparator);
            (instance[QueueScheduler_queue] = createImmediateQueue()),
                (instance[QueueScheduler_hostScheduler] = host);
            return instance;
        }, props({
            [QueueScheduler_delayed]: none,
            [QueueScheduler_dueTime]: 0,
            [QueueScheduler_hostScheduler]: none,
            [QueueScheduler_hostContinuation]: none,
            [PauseableSchedulerLike_isPaused]: false,
            [QueueScheduler_queue]: none,
            [QueueScheduler_taskIDCounter]: 0,
        }), {
            get [SchedulerLike_now]() {
                return this[QueueScheduler_hostScheduler][SchedulerLike_now];
            },
            get [PrioritySchedulerImplementationLike_shouldYield]() {
                const next = peek(this);
                return (!this[EnumeratorLike_hasCurrent] ||
                    this[PauseableSchedulerLike_isPaused] ||
                    (isSome(next) ? priorityShouldYield(this, next) : false) ||
                    this[QueueScheduler_hostScheduler][SchedulerLike_shouldYield]);
            },
            [PauseableSchedulerLike_pause]() {
                this[PauseableSchedulerLike_isPaused] = true;
                this[SerialDisposableLike_current] = Disposable_disposed;
            },
            [PauseableSchedulerLike_resume]() {
                this[PauseableSchedulerLike_isPaused] = false;
                scheduleOnHost(this);
            },
            [EnumeratorLike_move]() {
                // First fast forward through disposed tasks.
                peek(this);
                const task = this[QueueScheduler_queue][QueueLike_pull]();
                if (isSome(task)) {
                    this[EnumeratorLike_current] = task;
                }
                return this[EnumeratorLike_hasCurrent];
            },
            [ContinuationSchedulerLike_schedule](continuation, delay) {
                const priority = continuation[ContinuationLike_priority];
                pipe(this, Disposable_addIgnoringChildErrors(continuation));
                if (continuation[DisposableLike_isDisposed]) {
                    return;
                }
                continuation[ContinuationLike_continuationScheduler] = this;
                const now = this[SchedulerLike_now];
                const dueTime = max(now + delay, now);
                const task = this[SchedulerLike_inContinuation] &&
                    this[EnumeratorLike_hasCurrent] &&
                    this[EnumeratorLike_current][QueueTask_continuation] ===
                        continuation &&
                    delay <= 0
                    ? this[EnumeratorLike_current]
                    : {
                        [QueueTask_taskID]: this[QueueScheduler_taskIDCounter]++,
                        [QueueTask_continuation]: continuation,
                        [QueueTask_dueTime]: dueTime,
                        [QueueTask_priority]: isSome(priority)
                            ? max(priority, 0)
                            : MAX_SAFE_INTEGER,
                    };
                const { [QueueScheduler_delayed]: delayed, [QueueScheduler_queue]: queue, } = this;
                const targetQueue = dueTime > now ? delayed : queue;
                targetQueue[QueueableLike_push](task);
                scheduleOnHost(this);
            },
        }));
    })();

    const Scheduler_toPauseableScheduler = (hostScheduler) => {
        const scheduler = Scheduler_createQueueScheduler(hostScheduler, IndexedQueue_createFifoQueue);
        scheduler[PauseableSchedulerLike_pause]();
        return scheduler;
    };

    const createHostScheduler = Scheduler_createHostScheduler;

    const Observable_create = /*@__PURE__*/ (() => {
        return createInstanceFactory(mix(function CreateObservable(instance, effect, isEnumerable = false, isRunnable = false) {
            instance[CreateObservable_effect] = effect;
            instance[ObservableLike_isEnumerable] = isEnumerable;
            instance[ObservableLike_isRunnable] = isEnumerable || isRunnable;
            return instance;
        }, props({
            [CreateObservable_effect]: none,
            [ObservableLike_isRunnable]: false,
            [ObservableLike_isEnumerable]: false,
        }), {
            [ObservableLike_observe](observer) {
                try {
                    this[CreateObservable_effect](observer);
                }
                catch (e) {
                    observer[DisposableLike_dispose](error(e));
                }
            },
        }));
    })();

    const Enumerable_create = (f) => Observable_create(f, true, true);

    const Observer_schedule = (f, options) => observer => pipe(observer[DispatcherLike_scheduler][SchedulerLike_schedule](f, options), Disposable_addTo(observer));

    const Runnable_create = (f) => Observable_create(f, false, true);

    const ReadonlyArray_toContainer = (factory) => (options) => values => {
        const valuesLength = ReadonlyArray_getLength(values);
        const { start: startOption, count: countOption, ...tail } = options !== null && options !== void 0 ? options : {};
        const { start, count } = (() => {
            if (isSome(countOption) && countOption >= 0) {
                const startOrDefault = startOption !== null && startOption !== void 0 ? startOption : 0;
                const maxStart = max(startOrDefault, 0);
                const start = min(maxStart, valuesLength - 1);
                const maxCount = min(valuesLength, countOption);
                const count = min(valuesLength - start, maxCount);
                return { start, count };
            }
            else if (isSome(countOption) && countOption < 0) {
                const startOrDefault = startOption !== null && startOption !== void 0 ? startOption : valuesLength - 1;
                const maxStart = max(startOrDefault, 0);
                const start = min(maxStart, valuesLength - 1);
                const maxCount = max(-valuesLength, countOption);
                const count = max(-start - 1, maxCount);
                return { start, count };
            }
            else {
                // count is none
                const startOrDefault = startOption !== null && startOption !== void 0 ? startOption : 0;
                const maxStart = max(startOrDefault, 0);
                const start = min(maxStart, valuesLength);
                const count = valuesLength - start;
                return { start, count };
            }
        })();
        return factory(values, start, count, tail);
    };

    const ReadonlyArray_toObservable = 
    /*@__PURE__*/
    ReadonlyArray_toContainer((values, startIndex, count, options) => {
        const { delay = 0, delayStart = false } = options !== null && options !== void 0 ? options : {};
        const onSubscribe = (observer) => {
            let index = startIndex, cnt = count;
            const continuation = (ctx) => {
                while (!observer[DisposableLike_isDisposed] && cnt !== 0) {
                    const value = values[index];
                    if (cnt > 0) {
                        index++;
                        cnt--;
                    }
                    else {
                        index--;
                        cnt++;
                    }
                    observer[ObserverLike_notify](value);
                    ctx[ContinuationContextLike_yield](delay);
                }
                observer[DisposableLike_dispose]();
            };
            pipe(observer, Observer_schedule(continuation, delayStart ? options : none));
        };
        return delay > 0
            ? Runnable_create(onSubscribe)
            : Enumerable_create(onSubscribe);
    });

    const Optional_toReadonlyArray = () => (optional) => isSome(optional) ? [optional] : [];

    const Optional_toObservable = ((options) => {
        const { delay = 0 } = options !== null && options !== void 0 ? options : {};
        const toObservableOptions = delay > 0 ? { delay, delayStart: true } : none;
        return compose(Optional_toReadonlyArray(), ReadonlyArray_toObservable(toObservableOptions));
    });

    const Disposable_onComplete = (teardown) => disposable => {
        Disposable_addDisposableOrTeardown(disposable, e => {
            if (isNone(e)) {
                call(teardown, disposable);
            }
        });
        return disposable;
    };

    const SerialDisposable_create = /*@__PURE__*/ (() => {
        const typedSerialDisposableMixin = SerialDisposable_mixin();
        return createInstanceFactory(mix(include(Disposable_mixin, typedSerialDisposableMixin), function SerialDisposable(instance, initialValue) {
            init(Disposable_mixin, instance);
            init(typedSerialDisposableMixin, instance, initialValue);
            return instance;
        }));
    })();

    const Observable_observeWith = (observer) => source => {
        source[ObservableLike_observe](observer);
        return source;
    };

    const Observer_assertState = (observer) => {
        if (__DEV__ &&
            (!observer[DispatcherLike_scheduler][SchedulerLike_inContinuation] ||
                observer[DisposableLike_isDisposed])) {
            raiseWithDebugMessage("Notifying an observer in an invalid state");
        }
    };

    const Observer_mixin = /*@__PURE__*/ (() => {
        const scheduleDrainQueue = (observer) => {
            var _a;
            if (observer[ObserverMixin_dispatchSubscription][DisposableLike_isDisposed]) {
                const continuation = (_a = observer[ObserverMixin_continuation]) !== null && _a !== void 0 ? _a : ((ctx) => {
                    while (observer[QueueLike_count] > 0) {
                        const next = observer[QueueLike_pull]();
                        observer[ObserverLike_notify](next);
                        if (observer[QueueLike_count] > 0) {
                            ctx[ContinuationContextLike_yield]();
                        }
                    }
                    if (observer[ObserverMixin_isCompleted]) {
                        observer[DisposableLike_dispose]();
                    }
                });
                observer[ObserverMixin_continuation] = continuation;
                observer[ObserverMixin_dispatchSubscription] = pipe(observer, Observer_schedule(continuation));
            }
        };
        const fifoQueueProtoype = getPrototype(IndexedQueue_fifoQueueMixin());
        return pipe(mix(include(IndexedQueue_fifoQueueMixin()), function ObserverMixin(instance, scheduler, maxBufferSize) {
            init(IndexedQueue_fifoQueueMixin(), instance, maxBufferSize);
            instance[DispatcherLike_scheduler] = scheduler;
            return instance;
        }, props({
            [DispatcherLike_scheduler]: none,
            [ObserverMixin_continuation]: none,
            [ObserverMixin_isCompleted]: false,
            [ObserverMixin_dispatchSubscription]: Disposable_disposed,
        }), {
            [QueueableLike_push](next) {
                if (!this[ObserverMixin_isCompleted] &&
                    !this[DisposableLike_isDisposed]) {
                    const result = call(fifoQueueProtoype[QueueableLike_push], this, next);
                    scheduleDrainQueue(this);
                    return result;
                }
                return true;
            },
            [DispatcherLike_complete]() {
                const isCompleted = this[ObserverMixin_isCompleted];
                this[ObserverMixin_isCompleted] = true;
                if (this[ObserverMixin_dispatchSubscription][DisposableLike_isDisposed] &&
                    !isCompleted) {
                    this[DisposableLike_dispose]();
                }
            },
        }), returns);
    })();

    const Disposable_delegatingMixin = 
    /*@__PURE__*/ (() => {
        return pipe(mix(include(delegatingMixin()), function DelegatingDisposableMixin(instance, delegate) {
            init(delegatingMixin(), instance, delegate);
            pipe(delegate, Disposable_onDisposed(_ => {
                instance[DisposableLike_isDisposed] = true;
            }));
            return instance;
        }, props({
            [DisposableLike_isDisposed]: false,
        }), {
            get [DisposableLike_error]() {
                const delegate = this[DelegatingLike_delegate];
                return delegate[DisposableLike_error];
            },
            [DisposableLike_add](disposable, ignoreChildErrors) {
                const delegate = this[DelegatingLike_delegate];
                delegate[DisposableLike_add](disposable, ignoreChildErrors);
            },
            [DisposableLike_dispose](error) {
                this[DelegatingLike_delegate][DisposableLike_dispose](error);
            },
        }), returns);
    })();

    const Observer_sourceFrom = (source) => observer => {
        source[ObservableLike_observe](observer);
        return observer;
    };

    class LiftedObservable {
        constructor(source, operators, isEnumerable, isRunnable) {
            this[LiftedObservable_source] = source;
            this[LiftedObservable_operators] = operators;
            this[ObservableLike_isEnumerable] = isEnumerable;
            this[ObservableLike_isRunnable] = isRunnable;
        }
        [ObservableLike_observe](observer) {
            pipeUnsafe(observer, ...this[LiftedObservable_operators], Observer_sourceFrom(this[LiftedObservable_source]));
        }
    }
    const Observable_lift = (isEnumerable = false, isRunnable = false) => (operator) => source => {
        const sourceSource = source instanceof LiftedObservable
            ? source[LiftedObservable_source]
            : source;
        const allFunctions = source instanceof LiftedObservable
            ? [operator, ...source[LiftedObservable_operators]]
            : [operator];
        const isLiftedEnumerable = isEnumerable && sourceSource[ObservableLike_isEnumerable];
        const isLiftedRunnable = (isEnumerable || isRunnable) && sourceSource[ObservableLike_isRunnable];
        return newInstance(LiftedObservable, sourceSource, allFunctions, isLiftedEnumerable, isLiftedRunnable);
    };

    const Observable_liftEnumerableOperator = 
    /*@__PURE__*/ Observable_lift(true, true);

    const Observable_forEach = /*@__PURE__*/ (() => {
        const createForEachObserver = (() => {
            return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function ForEachObserverMixin(instance, delegate, effect) {
                init(Disposable_delegatingMixin(), instance, delegate);
                init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_maxBufferSize]);
                instance[ForEachObserverMixin_effect] = effect;
                return instance;
            }, props({
                [ForEachObserverMixin_effect]: none,
            }), {
                [ObserverLike_notify](next) {
                    Observer_assertState(this);
                    this[ForEachObserverMixin_effect](next);
                    this[DelegatingLike_delegate][ObserverLike_notify](next);
                },
            }));
        })();
        return ((effect) => pipe(createForEachObserver, partial(effect), Observable_liftEnumerableOperator));
    })();

    const Disposable_addToIgnoringChildErrors = (parent) => (child) => {
        Disposable_addDisposableOrTeardown(parent, child, true);
        return child;
    };

    const Observer_create = /*@__PURE__*/ (() => {
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin), function Observer(instance, scheduler, maxBufferSize) {
            init(Disposable_mixin, instance);
            init(typedObserverMixin, instance, scheduler, maxBufferSize);
            return instance;
        }, {}, {
            [ObserverLike_notify](_) {
                Observer_assertState(this);
            },
        }));
    })();

    const Observable_subscribeWithMaxBufferSize = (scheduler, maxBufferSize) => {
        maxBufferSize = max(maxBufferSize !== null && maxBufferSize !== void 0 ? maxBufferSize : MAX_SAFE_INTEGER, 1);
        return observable => pipe(Observer_create(scheduler, maxBufferSize), Disposable_addToIgnoringChildErrors(scheduler), Observer_sourceFrom(observable));
    };

    const Observer_createWithDelegate = 
    /*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable_mixin, Observer_mixin(), delegatingMixin()), function DelegatingObserver(instance, observer) {
        init(Disposable_mixin, instance);
        init(Observer_mixin(), instance, observer[DispatcherLike_scheduler], observer[QueueableLike_maxBufferSize]);
        init(delegatingMixin(), instance, observer);
        return instance;
    }, props({}), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            this[DelegatingLike_delegate][ObserverLike_notify](next);
        },
    })))();

    const Observable_generate = ((generator, initialValue, options) => {
        const { delay = 0, delayStart = false } = options !== null && options !== void 0 ? options : {};
        const onSubscribe = (observer) => {
            let acc = initialValue();
            const continuation = (ctx) => {
                while (!observer[DisposableLike_isDisposed]) {
                    acc = generator(acc);
                    observer[ObserverLike_notify](acc);
                    ctx[ContinuationContextLike_yield](delay);
                }
            };
            pipe(observer, Observer_schedule(continuation, delayStart ? options : none));
        };
        return delay > 0
            ? Runnable_create(onSubscribe)
            : Enumerable_create(onSubscribe);
    });

    const Observable_distinctUntilChanged = 
    /*@__PURE__*/ (() => {
        const createDistinctUntilChangedObserver = (() => {
            return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function DistinctUntilChangedObserverMixin(instance, delegate, equality) {
                init(Disposable_delegatingMixin(), instance, delegate);
                init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_maxBufferSize]);
                instance[DistinctUntilChangedObserverMixin_equality] = equality;
                return instance;
            }, props({
                [DistinctUntilChangedObserverMixin_equality]: none,
                [DistinctUntilChangedObserverMixin_prev]: none,
                [DistinctUntilChangedObserverMixin_hasValue]: false,
            }), {
                [ObserverLike_notify](next) {
                    Observer_assertState(this);
                    const shouldEmit = !this[DistinctUntilChangedObserverMixin_hasValue] ||
                        !this[DistinctUntilChangedObserverMixin_equality](this[DistinctUntilChangedObserverMixin_prev], next);
                    if (shouldEmit) {
                        this[DistinctUntilChangedObserverMixin_prev] = next;
                        this[DistinctUntilChangedObserverMixin_hasValue] = true;
                        this[DelegatingLike_delegate][ObserverLike_notify](next);
                    }
                },
            }));
        })();
        return ((options) => {
            const { equality = strictEquality } = options !== null && options !== void 0 ? options : {};
            return pipe(createDistinctUntilChangedObserver, partial(equality), Observable_liftEnumerableOperator);
        });
    })();

    const Observable_scan = /*@__PURE__*/ (() => {
        const createScanObserver = (() => {
            return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function ScanObserverMixin(instance, delegate, reducer, initialValue) {
                init(Disposable_delegatingMixin(), instance, delegate);
                init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_maxBufferSize]);
                instance[ScanObserverMixin_reducer] = reducer;
                try {
                    const acc = initialValue();
                    instance[ScanObserverMixin_acc] = acc;
                }
                catch (e) {
                    instance[DisposableLike_dispose](error(e));
                }
                return instance;
            }, props({
                [ScanObserverMixin_reducer]: none,
                [ScanObserverMixin_acc]: none,
            }), {
                [ObserverLike_notify](next) {
                    Observer_assertState(this);
                    const nextAcc = this[ScanObserverMixin_reducer](this[ScanObserverMixin_acc], next);
                    this[ScanObserverMixin_acc] = nextAcc;
                    this[DelegatingLike_delegate][ObserverLike_notify](nextAcc);
                },
            }));
        })();
        return ((reducer, initialValue) => pipe(createScanObserver, partial(reducer, initialValue), Observable_liftEnumerableOperator));
    })();

    const Observable_takeFirst = /*@__PURE__*/ (() => {
        const createTakeFirstObserver = (() => {
            return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function TakeFirstObserverMixin(instance, delegate, takeCount) {
                init(Disposable_delegatingMixin(), instance, delegate);
                init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_maxBufferSize]);
                instance[TakeFirstObserverMixin_takeCount] = takeCount;
                if (takeCount === 0) {
                    instance[DisposableLike_dispose]();
                }
                return instance;
            }, props({
                [TakeFirstObserverMixin_count]: 0,
                [TakeFirstObserverMixin_takeCount]: 0,
            }), {
                [ObserverLike_notify](next) {
                    Observer_assertState(this);
                    this[TakeFirstObserverMixin_count]++;
                    this[DelegatingLike_delegate][ObserverLike_notify](next);
                    if (this[TakeFirstObserverMixin_count] >=
                        this[TakeFirstObserverMixin_takeCount]) {
                        this[DisposableLike_dispose]();
                    }
                },
            }));
        })();
        return ((options = {}) => {
            const { count = 1 } = options;
            return pipe(createTakeFirstObserver, partial(max(count, 0)), Observable_liftEnumerableOperator);
        });
    })();

    const Disposable_bindTo = (child) => (parent) => {
        Disposable_addDisposableOrTeardown(parent, child);
        Disposable_addDisposableOrTeardown(child, parent);
        return parent;
    };

    const Observable_takeUntil = (notifier) => {
        const operator = (delegate) => pipe(Observer_createWithDelegate(delegate), Disposable_bindTo(delegate), Disposable_bindTo(pipe(notifier, Observable_takeFirst(), Observable_subscribeWithMaxBufferSize(delegate[DispatcherLike_scheduler], delegate[QueueableLike_maxBufferSize]))));
        return pipe(operator, Observable_lift(notifier[ObservableLike_isEnumerable], notifier[ObservableLike_isRunnable]));
    };

    const Disposable_onError = (teardown) => disposable => {
        Disposable_addDisposableOrTeardown(disposable, e => {
            if (isSome(e)) {
                call(teardown, disposable, e);
            }
        });
        return disposable;
    };

    const Observable_subscribe = (scheduler, options) => {
        var _a;
        return Observable_subscribeWithMaxBufferSize(scheduler, (_a = options === null || options === void 0 ? void 0 : options.maxBufferSize) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER);
    };

    const Disposable_toErrorHandler = (disposable) => e => disposable[DisposableLike_dispose](error(e));

    const Subject_create = 
    /*@__PURE__*/ (() => {
        const createSubjectInstance = createInstanceFactory(mix(include(Disposable_mixin, IndexedQueue_fifoQueueMixin()), function Subject(instance, replay) {
            init(Disposable_mixin, instance);
            init(IndexedQueue_fifoQueueMixin(), instance, replay);
            instance[Subject_observers] = newInstance(Set);
            return instance;
        }, props({
            [Subject_observers]: none,
        }), {
            [ObservableLike_isEnumerable]: false,
            [ObservableLike_isRunnable]: false,
            get [MulticastObservableLike_observerCount]() {
                return this[Subject_observers].size;
            },
            [SubjectLike_publish](next) {
                if (this[DisposableLike_isDisposed]) {
                    return;
                }
                const replay = this[QueueableLike_maxBufferSize];
                if (replay > 0 && !this[QueueableLike_push](next)) {
                    this[QueueLike_pull]();
                }
                for (const observer of this[Subject_observers]) {
                    observer[QueueableLike_push](next);
                }
            },
            [ObservableLike_observe](observer) {
                if (!this[DisposableLike_isDisposed]) {
                    const { [Subject_observers]: observers } = this;
                    observers.add(observer);
                    pipe(observer, Disposable_onDisposed(_ => {
                        observers.delete(observer);
                    }));
                }
                // The idea here is that an onSubscribe function may
                // call next from unscheduled sources such as event handlers.
                // So we marshall those events back to the scheduler.
                const count = this[QueueLike_count];
                for (let i = 0; i < count; i++) {
                    const next = this[IndexedQueueLike_get](i);
                    observer[QueueableLike_push](next);
                }
                pipe(this, Disposable_onError(Disposable_toErrorHandler(observer)), Disposable_onComplete(() => {
                    observer[DispatcherLike_complete]();
                }));
            },
        }));
        return (options) => {
            const { replay: replayOption = 0 } = options !== null && options !== void 0 ? options : {};
            const replay = max(replayOption, 0);
            return createSubjectInstance(replay);
        };
    })();

    const Subject_publishTo = (subject) => v => {
        subject[SubjectLike_publish](v);
        return v;
    };

    (() => {
        const typedObserverMixin = Observer_mixin();
        const setupDurationSubscription = (observer, next) => {
            observer[ThrottleObserver_durationSubscription][SerialDisposableLike_current] = pipe(observer[ThrottleObserver_durationFunction](next), Observable_forEach(observer[ThrottleObserver_onNotify]), Observable_subscribeWithMaxBufferSize(observer[DispatcherLike_scheduler], observer[QueueableLike_maxBufferSize]));
        };
        return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin), function ThrottleObserver(instance, delegate, durationFunction, mode) {
            init(Disposable_mixin, instance);
            init(typedObserverMixin, instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_maxBufferSize]);
            instance[ThrottleObserver_durationFunction] = durationFunction;
            instance[ThrottleObserver_mode] = mode;
            instance[ThrottleObserver_durationSubscription] = pipe(SerialDisposable_create(Disposable_disposed), Disposable_addTo(delegate));
            instance[ThrottleObserver_onNotify] = (_) => {
                if (instance[ThrottleObserver_hasValue]) {
                    const value = instance[ThrottleObserver_value];
                    instance[ThrottleObserver_value] = none;
                    instance[ThrottleObserver_hasValue] = false;
                    delegate[ObserverLike_notify](value);
                    setupDurationSubscription(instance, value);
                }
            };
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
                if (instance[ThrottleObserver_mode] !== "first" &&
                    instance[ThrottleObserver_hasValue] &&
                    !delegate[DisposableLike_isDisposed]) {
                    pipe(instance[ThrottleObserver_value], Optional_toObservable(), Observable_observeWith(delegate));
                }
            }));
            return instance;
        }, props({
            [ThrottleObserver_value]: none,
            [ThrottleObserver_hasValue]: false,
            [ThrottleObserver_durationSubscription]: none,
            [ThrottleObserver_durationFunction]: none,
            [ThrottleObserver_mode]: "interval",
            [ThrottleObserver_onNotify]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[ThrottleObserver_value] = next;
                this[ThrottleObserver_hasValue] = true;
                const durationSubscriptionDisposableIsDisposed = this[ThrottleObserver_durationSubscription][SerialDisposableLike_current][DisposableLike_isDisposed];
                if (durationSubscriptionDisposableIsDisposed &&
                    this[ThrottleObserver_mode] !== "last") {
                    this[ThrottleObserver_onNotify]();
                }
                else if (durationSubscriptionDisposableIsDisposed) {
                    setupDurationSubscription(this, next);
                }
            },
        }));
    })();

    const Observable_multicast = (schedulerOrFactory, options = {}) => observable => {
        const { maxBufferSize = MAX_SAFE_INTEGER, replay = 0 } = options;
        const subject = Subject_create({ replay });
        const scheduler = isFunction(schedulerOrFactory)
            ? pipe(schedulerOrFactory(), Disposable_addTo(subject))
            : schedulerOrFactory;
        pipe(observable, Observable_forEach(Subject_publishTo(subject)), Observable_subscribeWithMaxBufferSize(scheduler, maxBufferSize), Disposable_bindTo(subject));
        return subject;
    };

    const DispatchedObservable_create = 
    /*@__PURE__*/ (() => {
        return createInstanceFactory(mix(function DispatchedObservable(instance) {
            return instance;
        }, props({
            [DispatchedObservable_observer]: none,
        }), {
            [ObservableLike_isEnumerable]: false,
            [ObservableLike_isRunnable]: false,
            get [QueueableLike_maxBufferSize]() {
                // Practically the observer can never be none.
                const observer = this[DispatchedObservable_observer];
                return observer[QueueableLike_maxBufferSize];
            },
            get [DispatcherLike_scheduler]() {
                // Practically the observer can never be none.
                const observer = this[DispatchedObservable_observer];
                return observer[DispatcherLike_scheduler];
            },
            [QueueableLike_push](next) {
                const observer = this[DispatchedObservable_observer];
                // Practically the observer can never be none,
                // unless the stream operator uses fromFactory subscriptions
                // eg. concat.
                if (__DEV__ && isNone(observer)) {
                    raiseWithDebugMessage("DispatchedObservable has not been subscribed to yet");
                }
                const scheduler = observer[DispatcherLike_scheduler];
                const inContinuation = scheduler[SchedulerLike_inContinuation];
                // Observer only implement Queueable publicly so cast to the implementation interface
                // to enable bypassing the queue
                const observerQueueIsEmpty = observer[QueueLike_count] === 0;
                const isDisposed = observer[DisposableLike_isDisposed];
                if (inContinuation && observerQueueIsEmpty && !isDisposed) {
                    observer[ObserverLike_notify](next);
                    return true;
                }
                else if (!isDisposed) {
                    return observer[QueueableLike_push](next);
                }
                else {
                    return true;
                }
            },
            [DispatcherLike_complete]() {
                const observer = this[DispatchedObservable_observer];
                // Practically the observer can never be none,
                // unless the stream operator uses fromFactory subscriptions
                // eg. concat.
                if (__DEV__ && isNone(observer)) {
                    raiseWithDebugMessage("DispatchedObservable has not been subscribed to yet");
                }
                observer[DispatcherLike_complete]();
            },
            [ObservableLike_observe](observer) {
                if (isSome(this[DispatchedObservable_observer])) {
                    raiseWithDebugMessage("DispatchedObservable already subscribed to");
                }
                this[DispatchedObservable_observer] = observer;
            },
        }));
    })();
    const Stream_mixin = /*@__PURE__*/ (() => {
        return returns(mix(include(Disposable_delegatingMixin()), function StreamMixin(instance, op, scheduler, replay, maxBufferSize) {
            instance[DispatcherLike_scheduler] = scheduler;
            const dispatchedObservable = DispatchedObservable_create();
            instance[StreamMixin_dispatcher] = dispatchedObservable;
            const delegate = pipe(dispatchedObservable, op, Observable_multicast(scheduler, { replay, maxBufferSize }));
            init(Disposable_delegatingMixin(), instance, delegate);
            return instance;
        }, props({
            [StreamMixin_dispatcher]: none,
            [DispatcherLike_scheduler]: none,
        }), {
            get [MulticastObservableLike_observerCount]() {
                return this[DelegatingLike_delegate][MulticastObservableLike_observerCount];
            },
            get [QueueableLike_maxBufferSize]() {
                return this[StreamMixin_dispatcher][QueueableLike_maxBufferSize];
            },
            [ObservableLike_isEnumerable]: false,
            [ObservableLike_isRunnable]: false,
            [QueueableLike_push](req) {
                return this[StreamMixin_dispatcher][QueueableLike_push](req);
            },
            [DispatcherLike_complete]() {
                this[StreamMixin_dispatcher][DispatcherLike_complete]();
            },
            [ObservableLike_observe](observer) {
                this[DelegatingLike_delegate][ObservableLike_observe](observer);
            },
        }));
    })();

    const FlowableStream_create = /*@__PURE__*/ (() => {
        const createStreamInternal = createInstanceFactory(mix(include(Stream_mixin()), function FlowableStream(instance, op, scheduler, replay, maxBufferSize) {
            const subject = Subject_create({ replay: 1 });
            const liftedOp = compose(Observable_scan((acc, next) => (isFunction(next) ? next(acc) : next), returns(true)), Observable_distinctUntilChanged(), Observable_forEach(Subject_publishTo(subject)), op);
            init(Stream_mixin(), instance, liftedOp, scheduler, replay, maxBufferSize);
            pipe(instance, Disposable_add(subject));
            instance[FlowableStreamLike_isPaused] = subject;
            return instance;
        }, props({
            [FlowableStreamLike_isPaused]: none,
        }), {
            [FlowableStreamLike_pause]() {
                this[QueueableLike_push](true);
            },
            [FlowableStreamLike_resume]() {
                this[QueueableLike_push](false);
            },
        }));
        return (op, scheduler, options) => {
            const { maxBufferSize = MAX_SAFE_INTEGER, replay = 0 } = options !== null && options !== void 0 ? options : {};
            return createStreamInternal(op, scheduler, replay, maxBufferSize);
        };
    })();

    const Flowable_createLifted = (op, isRunnable) => ({
        [StreamableLike_isEnumerable]: false,
        [StreamableLike_isInteractive]: false,
        [StreamableLike_isRunnable]: isRunnable,
        [StreamableLike_stream]: (scheduler, options) => FlowableStream_create(op, scheduler, options),
    });

    const Disposable_toObservable = () => compose(Disposable_addTo, Observable_create);

    const Observable_subscribeOn = (schedulerOrFactory, options) => (observable) => 
    // FIXME: type test for VTS
    Observable_create(observer => {
        var _a;
        const scheduler = isFunction(schedulerOrFactory)
            ? pipe(schedulerOrFactory(), Disposable_addTo(observer))
            : schedulerOrFactory;
        pipe(observable, Observable_forEach(v => {
            if (!observer[QueueableLike_push](v)) {
                scheduler[SchedulerLike_requestYield]();
            }
        }), Observable_subscribeWithMaxBufferSize(scheduler, (_a = options === null || options === void 0 ? void 0 : options.maxBufferSize) !== null && _a !== void 0 ? _a : observer[QueueableLike_maxBufferSize]), Disposable_onComplete(() => observer[DispatcherLike_complete]()), Disposable_addTo(observer));
    });

    const Runnable_toFlowable = () => observable => Flowable_createLifted((modeObs) => Observable_create(observer => {
        const pauseableScheduler = Scheduler_toPauseableScheduler(observer[DispatcherLike_scheduler]);
        pipe(observer, Observer_sourceFrom(pipe(observable, Observable_subscribeOn(pauseableScheduler), Observable_takeUntil(pipe(pauseableScheduler, Disposable_toObservable())))), Disposable_add(pipe(modeObs, Observable_forEach(isPaused => {
            if (isPaused) {
                pauseableScheduler[PauseableSchedulerLike_pause]();
            }
            else {
                pauseableScheduler[PauseableSchedulerLike_resume]();
            }
        }), Observable_subscribeWithMaxBufferSize(observer[DispatcherLike_scheduler], observer[QueueableLike_maxBufferSize]), Disposable_bindTo(pauseableScheduler))), Disposable_add(pauseableScheduler));
    }), true);

    const generate = Observable_generate;
    const toFlowable = Runnable_toFlowable;

    error();

    const forEach = Observable_forEach;
    const subscribe$1 = Observable_subscribe;

    class ObservableSvelteStore {
        constructor(observable, scheduler) {
            this.observable = observable;
            this.scheduler = scheduler;
        }
        subscribe(callback) {
            const { observable, scheduler } = this;
            const subscription = pipe(observable, forEach(callback), subscribe$1(scheduler));
            callback(none);
            return bind(subscription[DisposableLike_dispose], subscription);
        }
    }
    const subscribe = (scheduler) => obs => newInstance(ObservableSvelteStore, obs, scheduler);

    /* src/example.svelte generated by Svelte v3.57.0 */

    function create_fragment(ctx) {
    	let main;
    	let h1;
    	let t0_value = (/*$counterValue*/ ctx[0] ?? 0) + "";
    	let t0;
    	let t1;
    	let button;
    	let t2_value = (/*$isPaused*/ ctx[1] ?? true ? "Resume" : "Pause") + "";
    	let t2;
    	let mounted;
    	let dispose;

    	return {
    		c() {
    			main = element("main");
    			h1 = element("h1");
    			t0 = text(t0_value);
    			t1 = space();
    			button = element("button");
    			t2 = text(t2_value);
    		},
    		m(target, anchor) {
    			insert(target, main, anchor);
    			append(main, h1);
    			append(h1, t0);
    			append(main, t1);
    			append(main, button);
    			append(button, t2);

    			if (!mounted) {
    				dispose = listen(button, "click", function () {
    					if (is_function(/*$isPaused*/ ctx[1] ?? true
    					? /*resume*/ ctx[3]
    					: /*pause*/ ctx[2])) (/*$isPaused*/ ctx[1] ?? true
    					? /*resume*/ ctx[3]
    					: /*pause*/ ctx[2]).apply(this, arguments);
    				});

    				mounted = true;
    			}
    		},
    		p(new_ctx, [dirty]) {
    			ctx = new_ctx;
    			if (dirty & /*$counterValue*/ 1 && t0_value !== (t0_value = (/*$counterValue*/ ctx[0] ?? 0) + "")) set_data(t0, t0_value);
    			if (dirty & /*$isPaused*/ 2 && t2_value !== (t2_value = (/*$isPaused*/ ctx[1] ?? true ? "Resume" : "Pause") + "")) set_data(t2, t2_value);
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(main);
    			mounted = false;
    			dispose();
    		}
    	};
    }

    function instance($$self, $$props, $$invalidate) {
    	let $counterValue;
    	let $isPaused;
    	const flowableCounter = pipe(generate(increment, returns(-1), { delay: 500 }), toFlowable());
    	const scheduler = createHostScheduler();
    	const counter = flowableCounter[StreamableLike_stream](scheduler);
    	const pause = bind(counter[FlowableStreamLike_pause], counter);
    	const resume = bind(counter[FlowableStreamLike_resume], counter);
    	const isPaused = pipe(counter[FlowableStreamLike_isPaused], subscribe(scheduler));
    	component_subscribe($$self, isPaused, value => $$invalidate(1, $isPaused = value));
    	const counterValue = pipe(counter, subscribe(scheduler));
    	component_subscribe($$self, counterValue, value => $$invalidate(0, $counterValue = value));
    	return [$counterValue, $isPaused, pause, resume, isPaused, counterValue];
    }

    class Example extends SvelteComponent {
    	constructor(options) {
    		super();
    		init$1(this, options, instance, create_fragment, safe_not_equal, {});
    	}
    }

    const app = new Example({
      target: document.body,
      props: {},
    });

    return app;

})();
