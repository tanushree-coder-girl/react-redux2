import Home from './../components/Home';
import { connect } from 'react-redux';
import {counting, minuscounting} from './../services/Actions/action';

const mapStateToProps = state => ({
    data: state.countReducer
})

const mapDispatchToProps = dispatch => ({
    countHandler:data => dispatch(counting(data)),
    countMinusHandler:data => dispatch(minuscounting(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
//export default Home;