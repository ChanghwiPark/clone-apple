import styled from "styled-components";

export default function AsideCountry({ position }) {
    return(
        <OAsideCountry position={position}>
        <ContainerCenter>
          <Text>현재 계신 국가에 맞는 콘텐츠를 확인하거나 온라인 쇼핑을 하려면 해당 국가 또는 지역을 선택하세요.</Text>
          <ContainerDropdown>
            <div className="m-dropdownCountry">
              <span className="m-dropdownCountry__iconCheck">􀆅</span>
              <span className="m-dropdownCountry__textcountry" >대한민국</span>
              <span className="m-dropdownCountry__iconDrop" >􀆈</span>
            </div>
            <AButtonContinue>계속</AButtonContinue>
            <AButtonCancel>􀆄</AButtonCancel>
          </ContainerDropdown>
        </ContainerCenter>
      </OAsideCountry>
    )
}


const ContainerCenter = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
`

const Text = styled.div`
  font-size: 12px;
  line-height: 1.41667;
`

const ContainerDropdown = styled.div`
  height: 36px;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding-inline-start: 32px;

  .m-dropdownCountry {
    padding: 0 14px;
    height: 36px;
    line-height: 35px;
    flex: 1;
    max-width: 343px;
    min-width: 246px;
    border: 1px solid #ffffff3d;
    border-radius: 8px;

    &__textcountry {
      display: inline-block;
      box-sizing: border-box;
      width: calc(100% - 48px);
      padding-inline-start: 11px;
    }
    &__iconDrop {
      font-weight: 300;
      color: rgba(255,255,255,0.56);
    }
  }
`

const AButtonContinue = styled.a.attrs({
  href: "https://www.apple.com/kr/"
})`
  background: #0071e3;
  border-radius: 8px;
  color: #fff;
  font-size: 17px;
  line-height: 1.17648;
  padding: 8px 16px;
  margin-left: 16px;
`
const AButtonCancel = styled.button`
  font-weight: 200;
  line-height: 18px;
  color: rgba(255,255,255,0.56);
  opacity: 0.8;
  margin-inline-start: 15px;
  margin-inline-end: -2px;
`

const OAsideCountry = styled.aside`
	position: ${props => props.position || "static"};
  z-index: 99;
  background: #424245;
  width: 100vw;

  ${ContainerCenter} {
    max-width: 1024px;
    height: 70px;
    padding: 0px 22px;
    color: rgba(255, 255, 255, 0.92);
    
    ${Text} {
      height: 34px;
      max-width: 430px;
      margin-right: 19.594px;
      flex: 1;
    }
  }
`