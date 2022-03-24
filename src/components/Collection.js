function Collection({ items, filter }) {
  let filteredItems = items.filter(item => item.category.title === filter);

  return (
    <div className="">
      {filteredItems.map(item => <div key={item.id}>{item.title}</div>)}
    </div>
  );
}

export default Collection;
