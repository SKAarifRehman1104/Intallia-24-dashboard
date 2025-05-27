import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-between space-x-2 mt-2">
      <Button
        variant="ghost"
        className="gap-2 w-[111px] h-[37px] bg-[#06B2E1] text-white p-[2px] rounded-full py-2 pl-2 pr-4"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-4 h-4 text-black" />
        Previous
      </Button>

      {/* Page Numbers */}
      <div className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <Button
              key={page}
              variant={page === currentPage ? "secondary" : "ghost"}
              className="w-10 h-10 p-0"
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          ),
        )}
      </div>

      <Button
        variant="ghost"
        className="gap-2 w-[83px] h-[37px] bg-[#06B2E1] text-white p-[2px] rounded-full py-2 pr-2 pl-4"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
        <ChevronRight className="w-4 h-4 text-black" />
      </Button>
    </div>
  );
};

export default Pagination;
