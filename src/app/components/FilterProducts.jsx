'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import './FilterProducts.css';
import { useMemo } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const FilterProducts = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const sortType = searchParams.get('sortBy') ?? '';

  const sortOptions = [
    { name: 'Not sorted', value: '' },
    { name: 'Name (A - Z)', value: 'title-asc' },
    { name: 'Name (Z - A)', value: 'title-desc' },
    { name: 'Price: Low to High', value: 'price-asc' },
    { name: 'Price: High to Low', value: 'price-desc' },
  ];

  // const memoizedSearchParams = useMemo(
  //   () => new URLSearchParams(searchParams),
  //   [searchParams]
  // );

  function handleSortChange(e) {
    const memoizedSearchParams = new URLSearchParams(searchParams);
    const sortOption = e.target.value;
    memoizedSearchParams.set('sortBy', sortOption);
    router.push(`${pathname}?${memoizedSearchParams.toString()}`);
  }

  const handleSearch = useDebouncedCallback((e) => {
    const memoizedSearchParams = new URLSearchParams(searchParams);
    const searchValue = e.target.value;
    console.log(searchValue);
    memoizedSearchParams.set('search', e.target.value);
    router.push(`${pathname}?${memoizedSearchParams.toString()}`);
  }, 500);

  return (
    <div className="filter-container">
      <label htmlFor="search" className="search-label">
        Search
      </label>
      <input
        type="text"
        id="search"
        className="search-input"
        placeholder="Search product..."
        onChange={handleSearch}
      />
      <label htmlFor="sort-select" className="sort-label">
        Sort by
      </label>
      <select
        id="sort-select"
        className="sort-select"
        name="sort"
        value={sortType}
        onChange={handleSortChange}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterProducts;
