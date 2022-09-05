import React from "react";

const Pagination = ({
  limit,
  page,
  setPage,
  blockNum,
  setBlockNum,
  counts,
}) => {
  const createArry = (n) => {
    // 새로운 배열을 만들기 위한 함수.
    const iArry = new Array(n);
    for (let i = 0; i < n; i++) iArry[i] = i + 1;
    return iArry;
  };

  const pageLimit = 10; // 보여줄 페이지네이션 개수
  const totalPage = Math.ceil(counts / limit); // //총 데이터의 개수(counts)를 한 페이지의 보여줄 데이터(limit)로 나눠 올림을 하면 전체 페이지의 개수가 나온다.
  const blockArea = Number(blockNum * pageLimit); // 화면 전환 할 때 보여줄 페이지네이션 개수를 구역으로 지정한다.
  const nArry = createArry(Number(totalPage)); // nArry 함수에 전체 페이지의 개수를 배열로 담는다.
  let pArry = nArry?.slice(blockArea, Number(pageLimit) + blockArea); // 페이지네이션 구역을 nArr 함수에 slice하여 원하는 페이지네이션 block 만 보여 줄 수 있게 설정

  const firstPage = () => {
    setPage(1);
    setBlockNum(0);
  };

  const lastPage = () => {
    setPage(totalPage);
    setBlockNum(Math.ceil(totalPage / pageLimit) - 1);
  };

  const prevPage = () => {
    if (page <= 1) {
      return;
    } // page가 1보다 작거나 같으면 아무 것도 리턴하지 않는다.
    if (page - 1 <= pageLimit * blockNum) {
      setBlockNum((n) => n - 1);
    } // 현재 페이지 - 1 이 보여줄 페이지네이션 개수(pageLimit) * blockNum 보다 작거나 같으면 setBlockNum에 - 1 을 작동시킨다.
    setPage((n) => n - 1); // setPage를 현재 페이지에서 -1 로 이동시킨다.
  };

  const nextPage = () => {
    if (page >= totalPage) {
      return;
    } // page가 마지막 페이지보다 크거나 같으면 아무 것도 리턴하지 않는다.
    if (pageLimit * Number(blockNum + 1) < Number(page + 1)) {
      setBlockNum((n) => n + 1);
    } //보여줄 페이지네이션 개수(pageLimit) * (blockNum+1) 가 page + 1보다 작다면 setBlockNum은 현재 페이지 + 1을 한다.
    setPage((n) => n + 1); //setPage에 현재 페이지 + 1을 한다.
  };

  return (
    <div className="ListPagenationWrapper">
      <button
        className="moveToFirstPage"
        onClick={() => {
          firstPage();
        }}
      >
        &lt;&lt;
      </button>
      <button
        className="moveToPreviousPage"
        onClick={() => {
          prevPage();
        }}
        disabled={page === 1}
      >
        &lt;
      </button>
      <div className="pageBtnWrapper">
        {pArry.map((n) => (
          <button
            className="pageBtn"
            key={n}
            onClick={() => {
              setPage(n);
            }}
            aria-current={page === n ? "page" : undefined}
          >
            {n}
          </button>
        ))}
      </div>
      <button
        className="moveToNextPage"
        onClick={() => {
          nextPage();
        }}
        disabled={page === totalPage}
      >
        &gt;
      </button>
      <button
        className="moveToLastPage"
        onClick={() => {
          lastPage();
        }}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
