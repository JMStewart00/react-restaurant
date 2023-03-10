import MenuItem from "./MenuItem";

function Collection({ items, filter }) {
  let filteredItems = items.filter(item => item.category === filter);

  return (
    <>
      {filteredItems.map(item => <MenuItem key={item.id} item={item} />)}
    </>
  );
}

export default Collection;
