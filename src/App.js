import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/actions';


// import counter from './redux/reducers/counter';

const App = props => (<div>{props.showCount}
  <button onClick={props.dispatchIncrement}>Increment</button>
  <button onClick={props.dispatchDecrement}>Decrement</button>
</div>);

const mapStateToProps = state => ({
  showCount: state.counter.count,
});

const mapDispatchToProps = dispatch => ({
  dispatchIncrement: () => dispatch(increment()),
  dispatchDecrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
