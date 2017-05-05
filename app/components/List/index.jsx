import React, { PropTypes } from 'react';
import ListItem from '../ListItem';

function List({ items }) {
  const itemsContent = items.map((item) => <ListItem item={item} key={item.id} />);
  return (
    <div className="list-component">
      {itemsContent}
    </div>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;
