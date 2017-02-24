import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import { fetchBenches } from '../actions/bench_actions';
import { asArray } from '../reducers/selectors';

const mapStateToProps = ({ benches }) => ({
  benches: asArray(benches)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
