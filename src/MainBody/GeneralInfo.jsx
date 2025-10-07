import './GeneralInfo.css';

export function GeneralInfo({weather}) {
    return (
        <div className="general-info">
            <div className="row">
              <div className="element">
                <div className="element-title">Feels like</div>
                <div className="element-value">{weather?.current?.apparent_temperature || 0} °</div>
              </div>
              <div className="element">
                <div className="element-title">Humidity</div>
                <div className="element-value">{weather?.current?.relative_humidity_2m || 0} %</div>
              </div>
            </div>
            <div className="row">
              <div className="element">
                <div className="element-title">Wind</div>
                <div className="element-value">{weather?.current?.wind_speed_10m || 2} kmh</div>
              </div>
              <div className="element">
                <div className="element-title">Precepitation</div>
                <div className="element-value">{weather?.current?.precipitation ?? 1} mm</div>
              </div>
            </div>
          </div>
    )
}