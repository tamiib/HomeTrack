import { Pagination } from "@mui/material";
import styles from "./PaginationContainer.module.scss";
import React from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

const PaginationContainer = ({ currentPage }) => {
  const router = useRouter();

  const StyledPagination = styled(Pagination)({
    "& .MuiPaginationItem-root": {
      border: "none",
      color: "#084338",
      padding: "8px 14px",
      borderRadius: "6px",
    },
    "& .Mui-selected, & .MuiPaginationItem-root:hover": {
      backgroundColor: "#F3FFFD",
      color: "#22C55E",
      fontSize: "14px",
      lineHeight: "20px"
    },
    "& .MuiPagination-ul li:last-child": {
        marginLeft: "16px",
    },
    "& .MuiPagination-ul li:last-child button::before": {
        content: "'Next'",
        marginRight: "8px",
    },
    "& .MuiPagination-ul li:first-child": {
        marginRight: "16px",
    },
    "& .MuiPagination-ul li:first-child button::after": {
        content: "'Previous'",
        marginLeft: "8px",
    }
  });

  const handleChange = (e, value) => {
    if(value === 1) {
      router.push(`/blog`);
    } else {
      router.push(`/blog/page/${value}`);
    }
  }

  return (
    <div className={styles.container}>
      <StyledPagination
        count={20}
        page={+currentPage}
        boundaryCount={1}
        siblingCount={1}
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
};

export default PaginationContainer;
