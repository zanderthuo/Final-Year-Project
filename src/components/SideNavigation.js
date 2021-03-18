import React from 'react'
import NavigationItem from './NavigationItem';

import '../styles/SideNavigation.css'

const femaleCategories = [
  {
    category: 'female',
    content: 'Women',
    linkType: 'main'
  },
  {
    category: 'women-coats',
    content: 'Coats'
  },
  {
    category: 'women-jackets',
    content: 'Jackets',
  },
  {
    category: 'women-suits',
    content: 'Suits',
  },
  {
    category: 'women-shirts',
    content: 'Shirts',
  },
  {
    category: 'women-t-shirts',
    content: 'T-shirts',
  },
  {
    category: 'women-shoes',
    content: 'Shoes',
  },
  {
    category: 'women-hats',
    content: 'Hats',
  },
  {
    category: 'male',
    content: 'Men',
    linkType: 'main'
  },
  {
    category: 'men-coats',
    content: 'Coats',
  },
  {
    category: 'men-jackets',
    content: 'Jackets',
  },
  {
    category: 'men-suits',
    content: 'Suits',
  },
  {
    category: 'men-shirts',
    content: 'Shirts',
  },
  {
    category: 'men-t-shirts',
    content: 'T-shirts',
  },
  {
    category: 'men-shoes',
    content: 'Shoes',
  },
  {
    category: 'men-hats',
    content: 'Hats',
  },
];

const SideNavigation = ({children}) => (
  <nav className="side__navigation">
    <ul className="side__navigation__list">
      {femaleCategories.map(femaleCategory => {
        const {category, linkType, content} = femaleCategory;

        return (
          <NavigationItem
            key={category}
            linkType={linkType}
            link={`/shop/${category}`}>
            {content}
          </NavigationItem>
        )
      })}
      {children}
    </ul>
  </nav>
);

export default SideNavigation
