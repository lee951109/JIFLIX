// import React, { useState } from "react";
// import { useEffect } from "react";
// import styled from "styled-components";

// const Pagination2 = ({ paginate, page, setPage }) => {

//   const postsPerPage = 20;
//   const totalPosts = 400;
//   const limit = 5;

//   const [currentPageArray, setCurrentPageArray] = useState([]);
//   const [totalPageArray, setTotalPageArray] = useState([]);

//   useEffect(() => {
//     if (page % limit === 1) {
//       setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
//     } else if (page % limit === 0) {
//       setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
//     }
//   }, [page]);

//   useEffect(() => {
//     const slicedPageArray = sliceArrayByLimit(totalPage, limit);
//     setTotalPageArray(slicedPageArray);
//     setCurrentPageArray(slicedPageArray[0]);
//   }, [totalPage]);

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

// export default Pagination2;
