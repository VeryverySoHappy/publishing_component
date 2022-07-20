import './ipin.css'

function showIpin() {
  var txt ='아이핀 인증으로 실명확인을 진행하려면 아래<span>"아이핀 인증받기"</span>를 클릭해 주세요.';
  document.getElementById('txtContainer').innerHTML=txt;
  var btn = '<a href="">아이핀 인증받기</a>'
  document.getElementById('btnContainer').innerHTML=btn;
}

function showCellPhone() {
  var txt = '소지하고 계신 핸드폰 번호를 입력해서 인증받는 방법입니다.<br/>';
  txt+='아래<span>"휴대폰 인증받기"</span>를 클릭해 주세요';
  document.getElementById('txtContainer').innerHTML=txt;
  var btn = '<a href="">휴대폰 인증받기</a>'
  document.getElementById('btnContainer').innerHTML=btn;
}


export default function Ipin() {
  return (
    <>
    <div className='wrap'>
      <div className='typeBox'>
        <span>
          <input type="radio" name="selectType" checked="checked" id="celIp" id="celIp" onclick="showIpin()"/>
          <label htmlFor='celIp'>아이핀(i-pin)</label>
        </span>
        <span>
          <input type='radio' name='selectType' id='celPhone' onclick='showCellPhone()'/>
          <label htmlFor='celPhone'>휴대폰</label>
        </span>
      </div>
      <div className="info" id="txtContainer">
      아이핀 인증으로 실명확인을 진행하려면 아래<span> 아이핀 인증받기</span>를 클릭해주세요.
    </div>
    <div className="okBtn" id="btnContainer">
      <a href="javascript:void(0)">
        아이핀 인증받기
      </a>
    </div>
    </div>
    </>
  )
}