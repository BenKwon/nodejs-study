### jwt 동작 박식
[사용이유](http://velopert.com/2389)  
1. 가입(register)
2. 로그인 -> jwt 토큰 생성 ( user의 id와 admin 여부 포함)  
3. 업데이트 요청
4. 토큰 검증 -> 브라우저가 보낸 토큰을 검증하고 해당 토큰의 주인 id를 req 객체에 추가
5. req 객체에 추가 된 user의 id와 수정하려고 쿼리스트링 등으로 요청된 id를 비교해서 같다면 검증 완료
6. 업데이트 동작 수행