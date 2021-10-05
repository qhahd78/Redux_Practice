import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as actions from '../redux/action/index';

// ---- 상태를 연결 ------

// store 안의 state 값을 props 로 연결.
// store 안의 값을 props 로 전달해줌.
const mapStateToProps = state => ({
  number: state.number,
});

// ---- 액션함수를 연결 ----

// 액션 생성자로 액션 생성,
// 해당 액션 dispatch 함수 생성, props 로 연결
// 액션 객체를 생성한 후 스토어에 dispatch를 전달.
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(actions.addCat()),
  onDecrement: () => dispatch(actions.delCat()),
});

// ---- Counter 컴포넌트를 전달. ----

// counter 컴포넌트를 묶어준다.
// Counter 컴포넌트에 리덕스 스토어를 연결
const CounterContainers = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainers;
