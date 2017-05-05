import React, { PropTypes } from 'react';

function ItemShowLayer({ item }) {
  return (
    <div className="col-md-8 item-show-layer-component">
      <div className="control-area">
        <button className="btn btn-primary">编辑</button>
        <button className="btn btn-danger">删除</button>
      </div>
      <h2>{item.title}</h2>
      <div className="item-text">
        <div>{item.content}</div>
      </div>
    </div>
  );
}

ItemShowLayer.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemShowLayer;
