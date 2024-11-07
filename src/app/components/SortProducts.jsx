'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import './SortProducts.css';
import { useMemo } from 'react';

const SortProducts = () => {
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

  const memoizedSearchParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  function handleSortChange(e) {
    const sortOption = e.target.value;
    memoizedSearchParams.set('sortBy', sortOption);
    router.push(`${pathname}?${memoizedSearchParams.toString()}`);
  }

  return (
    <div className="sort-container">
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

export default SortProducts;
