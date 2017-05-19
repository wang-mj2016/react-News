/*
 * @file component Deskmark
 */

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

import CreateBar from '../CreateBar';
import List from '../List';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';

import './style.scss';
const propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
class Deskmark extends React.Component {

  componentDidMount() {
    this.props.actions.fetchEntryList();
  }
 
  render() {
    // const state = this.props.state;
    // const actions = this.props.actions;
    // console.log(actions);
    const { state, actions } = this.props;
    const { isEditing, selectedId } = state.editor;
    const items = state.items;
    const item = items.find(
      ({ id }) => id === selectedId
    );
    const mainPart = isEditing
      ? (
        <ItemEditor
          item={item}
          onSave={actions.saveEntry}
          onCancel={actions.cancelEdit}
        />
      )
      : (
        <ItemShowLayer
          item={item}
          onEdit={actions.editEntry}
          onDelete={actions.deleteEntry}
        />
      );

    return (
      <section className="deskmark-component">
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <a className="navbar-brand" href="#">Deskmark App</a>
        </nav>
        {<div className="container">
          <div className="row">
            <div className="col-md-4 list-group">
              <CreateBar onClick={actions.cerateNewEntry} />
              <List
                items={items}
                onSelect={actions.selectEntry}
              />
            </div>
            {mainPart}
          </div>
        </div>}
      </section>
    );
  }
}

Deskmark.propTypes = propTypes;

export default connect(
  state => ({ state }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch),
  })
)(Deskmark);

