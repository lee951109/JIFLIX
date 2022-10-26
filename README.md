# <p style="color:red;">JIFLIX</p>

[JIFLIX Page](https://jiflix.netlify.app/)

클론 코딩은 해두고 막상 다시 보지 않은 내가 한심해서 정리해보는 README.. 😑


## API 🧾
> TMDB의 OPEN API를 사용했습니다.<br/>
API 호출 방식은 axios를 사용했습니다. <br/>
baseURL : "https://api.themoviedb.org/3"
- 인기 영화 : /movie/popular?api_key=${API_KEY}&language=en-US&page=1
- 상위 영화 : /movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1
- 미개봉 영화 : /movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1
- 영화 장르 : /genre/movie/list?api_key=${API_KEY}&language=ko-KR /* 영화 장르 키워드를 가져오는 API*/
- 영화 디테일 : /movie/${id}?api_key=${API_KEY}&language=ko-KR
- 영화 비디오 : movie/${id}/videos?api_key=${API_KEY}&language=ko-KR
- 추천 영화 : movie/${id}/recommendations?api_key=${API_KEY}&language=ko-KR&page=1
- 현재 상영작 : /movie/popular?api_key=${API_KEY}&language=ko-KR&page=${pageNum}
- 영화 검색 : /search/movie?api_key=${API_KEY}&language=ko-KR&page=1&query=${query}

## 기능 ⚙
> 해당 프로젝트를 만들면서 사용한 React library 정리.<br/>
자세한 내용은 제 [velog](https://velog.io/@lee951109) 작성할 예정입니다.
- Loding
  - react-spinners 를 사용.
- Carousel(슬라이드 메뉴)
  - react-slick 를 사용.
- YouYube(영화 디테일 페이지의 예고편)
  - react-youtube 를 사용.
- pagination
  - 여러 사이트를 참고해서 직접 만듦.
- 검색기능
  - TMDB의 search api 를 사용하여 작업.
