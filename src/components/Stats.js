export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list💥</em>
      </footer>
    );
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const precentage = Math.round((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      <em>
        {precentage === 100 ? (
          "You have everything ready to go🚀"
        ) : (
          <>
            💼You have {totalItems} items on your list, and you already packed{" "}
            {packedItems} ({precentage || 0}%){" "}
          </>
        )}
      </em>
    </footer>
  );
}
