import './GeneralInfo.css';

export function GeneralInfo() {
    return (
        <div className="general-info">
            <div className="row">
              <div className="element">
                <div className="element-title">Feels like</div>
                <div className="element-value">64 °</div>
              </div>
              <div className="element">
                <div className="element-title">Humidity</div>
                <div className="element-value">46 %</div>
              </div>
            </div>
            <div className="row">
              <div className="element">
                <div className="element-title">Wind</div>
                <div className="element-value">9 mph</div>
              </div>
              <div className="element">
                <div className="element-title">Precepitation</div>
                <div className="element-value">0 in</div>
              </div>
            </div>
          </div>
    )
}