export default function findItemById(elements, id) {
  return elements.find((e) => e.name === id);
}