import './GeneralInfo.css';

export function GeneralInfo() {
    return (
        <div class="general-info">
            <div class="row">
              <div class="element">
                <div class="element-title">Feels like</div>
                <div class="element-value">64 °</div>
              </div>
              <div class="element">
                <div class="element-title">Humidity</div>
                <div class="element-value">46 %</div>
              </div>
            </div>
            <div class="row">
              <div class="element">
                <div class="element-title">Wind</div>
                <div class="element-value">9 mph</div>
              </div>
              <div class="element">
                <div class="element-title">Precepitation</div>
                <div class="element-value">0 in</div>
              </div>
            </div>
          </div>
    )
}