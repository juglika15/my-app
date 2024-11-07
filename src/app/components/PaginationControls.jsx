'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const PaginationControls = ({ totalPages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentPage = useMemo(
    () => searchParams.get('page') ?? '1',
    [searchParams]
  );
  const itemsPerPage = searchParams.get('itemsPerPage') ?? '15';

  const newSearchParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  const navigateToPage = (page) => {
    newSearchParams.set('page', page);
    newSearchParams.set('itemsPerPage', itemsPerPage);

    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      navigateToPage(Number(currentPage) + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      navigateToPage(Number(currentPage) - 1);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}
        aria-label="Previous Page"
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
