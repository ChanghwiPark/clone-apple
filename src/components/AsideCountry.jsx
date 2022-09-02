import "./AsideCountry.css"

function AsideCountry(props) {
    return(
        <aside className={"o-asideCountry " + props.position}>
        <div className="o-asideCountry__containerMain">
          <div className="a-textCountry">현재 계신 국가에 맞는 콘텐츠를 확인하거나 온라인 쇼핑을 하려면 해당 국가 또는 지역을 선택하세요.</div>
          <div className="o-asideCountry__containerDropdown">
            <div className="m-dropdownCountry">
              <span className="m-dropdownCountry__iconCheck"><img src="./assets/icons/checkmark.png" alt="checkmark"/></span>
              <span className="m-dropdownCountry__textcountry" ></span>
              <span className="m-dropdownCountry__iconDrop" ></span>
            </div>
            <a id="a-buttonCountry -continue" href="https://www.apple.com/kr/">계속</a>
            <button className="a-buttonCountry -cancel" >x</button>
          </div>
        </div>
      </aside>
    )
}

export default AsideCountry;