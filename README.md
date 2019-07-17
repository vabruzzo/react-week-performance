# React Week NYC '19: React Performance Optimization Patterns

A class on various React performance techniques

## The basics

- [React docs on optimizing performance](https://reactjs.org/docs/optimizing-performance.html)
- [Introducing the React Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)
- [Code splitting](https://reactjs.org/docs/code-splitting.html)
- [Code splitting + server side rendering with Loadable Components](https://www.smooth-code.com/open-source/loadable-components/)

## Avoiding Re-renders

The avoiding re-renders app demonstrates `shouldComponentUpdate`, `PureComponent`, `React.memo`, `useCallback`, and `immer`. The `v2` branch has complete code with some comments.

These techniques aren't always necessary, until they are. The following posts offer some thoughts on the costs of optimization:

- [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback/)
- [React, Inline Functions, and Performance](https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578)

## Immutability

While some techniques are not always necessary, being disciplined with immutability in React is always a good idea. The following posts and videos were referenced in class:

- [The Future of JavaScript MVC Frameworks - David Nolen's post on how using ClojureScript's immutable data structures in Om outperformed vanilla React.](https://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs)
- [Lee Byron's introduction to Immutable. This includes great technical descriptions of the underlying data structures.](https://www.youtube.com/watch?v=I7IdS-PbEgI)
- [Michel Westrate's introduction to immer. This includes a great description of how immer works under the hood.](https://medium.com/hackernoon/introducing-immer-immutability-the-easy-way-9d73d8f71cb3)
- [Understanding Clojure's Persistent Vectors, pt. 1: This series explains how Clojure's persistent, immutable data structures work. These data structures inspired a lot of the work done in the JS community in this regard and includes references if you want to dig even further into the academic work done.](https://hypirion.com/musings/understanding-persistent-vector-pt-1)

## Redux and Reselect: Computing Derived Data Efficiently

The redux-reselect app demonstrates computing derived data efficiently using reselect's `createSelector`. The `v2` branch has complete code with some comments.

While this app uses redux, the underlying ideas are not specific to it.

- [Redux docs: Computing Derived Data](https://redux.js.org/recipes/computing-derived-data)
- [Understanding JavaScript Selectors With and Without Reselect](https://medium.com/@pearlmcphee/selectors-react-redux-reselect-9ab984688dd4)

## Lazy Loading Images

The lazy loading images app demonstrates how to use the React render prop/children as a function pattern and the intersection observer API to make a lazy loading component. This only exists on the `master` branch.

- [A non-React specific guide to image lazy loading](https://css-tricks.com/the-complete-guide-to-lazy-loading-images/)
