import React, { useMemo, useState, useEffect } from "react";
import {
  Container,
  PagesColumn,
  Page,
  LeftIconContainer,
  RightIconContainer,
  NextIconPage,
  PreviousIconPage,
} from "./styles";

const Paginator = ({
  totalPages,
  currentPage,
  onChange,
  pagesToShow,
  showMoreContent = true,
  paginationLabel,
}) => {
  const [count, setCount] = useState(1);
  const [lastIndex, setLastIndex] = useState(0);

  useEffect(() => {
    if (currentPage > lastIndex) {
      setCount(count + pagesToShow);
    } else if (currentPage <= lastIndex - pagesToShow) {
      setCount(count - pagesToShow);
    }
  }, [currentPage]);

  const pages = useMemo(() => {
    //generate the array of pages
    const lastPage = pagesToShow > totalPages ? totalPages : pagesToShow;
    const pagesArray = Array.from(
      { length: lastPage },
      (_, index) => index + count
    );

    setLastIndex(pagesArray[pagesArray.length - 1]);

    //if is not the last page, add the ellipsis and the last page to the array
    if (pagesArray[pagesArray.length - 1] < totalPages && showMoreContent) {
      pagesArray.push("...");
      pagesArray.push(totalPages);
    }

    return pagesArray;
  }, [totalPages, count]);

  console.log(currentPage);

  return (
    <div>
      <Container>
        <PagesColumn>
          <LeftIconContainer>
            <PreviousIconPage
              onClick={() => {
                if (onChange && currentPage > 1) {
                  onChange(currentPage - 1);
                }
              }}
              disabled={currentPage === 1}
            />
          </LeftIconContainer>

          {pages.map((index) => {
            return (
              <Page
                isSelected={index === currentPage}
                onClick={() => {
                  if (onChange && Number.isInteger(index)) {
                    onChange(index);
                  }
                }}
              >
                {index}
              </Page>
            );
          })}

          <RightIconContainer>
            <NextIconPage
              onClick={() => {
                if (onChange && currentPage < totalPages) {
                  onChange(currentPage + 1);
                }
              }}
              disabled={currentPage === totalPages}
            />
          </RightIconContainer>
        </PagesColumn>

        {paginationLabel && <PagesColumn>{paginationLabel}</PagesColumn>}
      </Container>
    </div>
  );
};

export default Paginator;
