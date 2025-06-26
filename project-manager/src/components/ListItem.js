import PropTypes from 'prop-types';

function ListItem({
  taskName = 'No task defined',
  owner = 'Unassigned',
  devPoints = 0
}) {
  return (
    <li>{taskName} - Owner: {owner} - DevPoints: {devPoints}</li>
  );
}

ListItem.propTypes = {
  taskName: PropTypes.string,
  owner: PropTypes.string,
  devPoints: PropTypes.number
};

export default ListItem;
