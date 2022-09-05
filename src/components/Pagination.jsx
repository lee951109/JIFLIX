// import React, { useState } from "react";
// import { useEffect } from "react";
// import styled from "styled-components";

// const Pagination = ({ paginate }) => {
//   const [totalPageArray, setTotalPageArray] = useState([]);
//   const [currentPageArray, setCurrentPageArray] = useState([]);
//   const pageNumbers = []; // 총 페이지 수
//   const postsPerPage = 20;
//   const totalPosts = 600;
//   const limit = 5;

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   useEffect(() => {
//     const slicedPageArray = sliceArrayByLimit(totalPage, limit);
//     setTotalPageArray(slicedPageArray);
//     setCurrentPageArray(slicedPageArray[0]);
//   }, [totalPage]);

//   // 페이지네이션 할 때, 특정 숫자까지의 배열을 만들고 limit 기준으로 자른 배열 만들기
//   const sliceArrayByLimit = (totalPage, limit) => {
//     const totalPageArray = Array(totalPage)
//       .fill()
//       .map((_, i) => i);
//     console.log("totalPageArray : ", totalPageArray);
//     return Array(Math.ceil(totalPage / limit))
//       .fill()
//       .map(() => totalPageArray.splice(0, limit));
//   };

//   return (
//     <div>
//       <nav>
//         <PageUl className="pagination">
//           {pageNumbers.map((number) => (
//             <PageLi key={number} className="page-item">
//               <PageSpan onClick={() => paginate(number)} className="page-link">
//                 {number}
//               </PageSpan>
//             </PageLi>
//           ))}
//         </PageUl>
//       </nav>
//     </div>
//   );
// };

// const PageUl = styled.ul`
//   float: left;
//   list-style: none;
//   text-align: center;
//   border-radius: 3px;
//   color: white;
//   padding: 1px;
//   border-top: 3px solid #186ead;
//   border-bottom: 3px solid #186ead;
//   background-color: rgba(0, 0, 0, 0.4);
// `;

// const PageLi = styled.li`
//   display: inline-block;
//   font-size: 17px;
//   font-weight: 600;
//   padding: 5px;
//   border-radius: 5px;
//   width: 25px;
//   &:hover {
//     cursor: pointer;
//     color: white;
//     background-color: #263a6c;
//   }
//   &:focus::after {
//     color: white;
//     background-color: #263a6c;
//   }
// `;

// const PageSpan = styled.span`
//   &:hover::after,
//   &:focus::after {
//     border-radius: 100%;
//     color: white;
//     background-color: #263a6c;
//   }
// `;

// export default Pagination;
