import React from 'react'
import { Calendar } from 'antd'
function Calenderwidget() {
    function onPanelChange(value, mode) {
        console.log(value, mode);
      }
    return (
        <div>
            <div className="site-calendar-demo-card">
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>
        </div>
    )
}

export default Calenderwidget
