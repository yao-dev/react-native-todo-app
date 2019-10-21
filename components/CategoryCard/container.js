import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks.filter(i => i.categoryId === ownProps.id)
  }
}

export default container = (Component) => connect(
  mapStateToProps,
)(Component)
