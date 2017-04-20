import { connect } from 'react-redux';

import LoginPage from '../../components/login-page';
import { login } from '../../actions-creators/auth';

const mapStateToProps = (state, ownProps) => ({
  user: state.auth.token,
  loginError: state.ui.error,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: sn => dispatch(login(sn)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
