import React, { PropTypes } from 'react';

function ListItem({ item }) {
  return (
    <a
      href="#"
      className="list-group-item item-component"
    >
      <span className="label label-default label-pill pull-xs-right">
        {item.time}
      </span>
      <span className="item-title">{item.title}</span>
    </a>
  );
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};
export default ListItem;
