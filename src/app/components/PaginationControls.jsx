'use client';

import { useRouter, useSearchParams } from 'next/navigation';
const PaginationControls = ({ totalPages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = searchParams.get('page') ?? '1';
  const itemsPerPage = searchParams.get('itemsPerPage') ?? '15';

  const handleNextPage = () => {
    if (currentPage <= totalPages) {
      router.push(
        `?page=${Number(currentPage) + 1}&itemsPerPage=${itemsPerPage}`
      );
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      router.push(
        `?page=${Number(currentPage) - 1}&itemsPerPage=${itemsPerPage}`
      );
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePreviousPage} disabled={currentPage < 2}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNextPage} disabled={currentPage == totalPages}>
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
