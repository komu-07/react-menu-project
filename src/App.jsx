import items from './data';
import { useState } from 'react';
import Title from './Title';
import Menu from './Menu';
import Categories from './Categories';

// const tempCategories = items.map((item) => item.category);
// console.log(tempCategories);
// const tempSet = new Set(tempCategories);
// console.log(tempSet);
// const tempItems = ['all', ...tempSet];
// console.log(tempItems);
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
