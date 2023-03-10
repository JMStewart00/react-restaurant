import { Stack } from 'react-bootstrap';

function MenuItem({ item }) {
  return (
    <Stack gap={1} className="mb-5">
        <h2
          style={{
            fontFamily: 'Amatic SC',
            fontWeight: '700',
            borderTop: '2px solid black',
            borderBottom: '2px solid black',
            paddingLeft: '10px',
          }}
        >
          {item.title.toUpperCase()}
        </h2>
        <h4>{`$${item.price}  |  ${"🌶️".repeat(item.spicy_level) || '🧊'}`}</h4>
        <div>{item.description}</div>
    </Stack>
  );
}

export default MenuItem;