import './ipin.css'

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