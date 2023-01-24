// 일반 변수 함수에 사용
// JSX타입지정
// let 박수 : JSX.Element = <div></div>
// 컴포넌트 만들때 타입지정
// useState는 자동으로 타입을 지정해준다.
/*function App(){
  let [user,setUSer] = useState('kim')
  //string | number인 usestate를 만들고싶다
  let [user,setUser] = useState<string|number>('kim')
  return(
    <div>
      <h4></h4>
      <Profile name='철수'></Profile>
    </div>
  )
}
// JSX.Element 리턴
function Profile(props:{name:string,age:number}) : JSX.Element{
  return(
    <div>{props.name}프로필</div>
  )
}*/
