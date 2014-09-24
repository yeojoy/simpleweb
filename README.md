# simple web server with node.js
## 구조
\> README.md  
\> app.js  
\> __bin__  
\> __libs__  
\> __node_modules__  
\> package.json  
\> __public__  
\> __routes__  
\> __views__  

#### app.js
express의 메인 파일로 웹 서버 생선, 라우팅 등을 모두 app.js에서 처리한다.
#### bin
web server를 실행하는 script가 있다.
#### libs
express에서 사용할 library를 넣는다. 현재 db pool을 관리하는 .js파일이 있다.
#### node_module
express에서 필요한 외부 package가 있고 이 package목록은 package.json에 나와있다.
#### package.json
앞에서 언급했듯이 project에서 필요한 외부 package 목록이다.
#### public
css, javascript, images 등의 정적 파일을 모아두는 
#### routes
라우팅 관련 함수, 즉 URL에 따라 호출할 함수를 모아두는 디렉토리다. 라우팅에 있는 파일들을 app.js에서 불러와 웹 서버에 라우팅을 연결한다.
#### views
view 파일이 위치하는 디렉토리다. java라면 jsp파일이 위치하는 디렉토리와 같고 예제에서는 jade template을 사용하므로 .jade 파일이 위치한다.

