var getScriptPromisify = (src) => {
  return new Promise(resolve => {
    $.getScript(src, resolve)
  })
}

(function () {
  const prepared = document.createElement('template')
  prepared.innerHTML = `
      <style>
      </style>
      <div id="root" style="width: 100%; height: 100%;">
      </div>
    `
  class SamplePieChart extends HTMLElement {
    constructor () {
      super()

      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._shadowRoot.appendChild(prepared.content.cloneNode(true))

      this._root = this._shadowRoot.getElementById('root')

      this._props = {}

      this.render()
    }

    onCustomWidgetResize (width, height) {
      this.render()
    }



      ////////////////////////////////////////////////////////////
     ////First comment: Place the first part of the script here//
    ////////////////////////////////////////////////////////////


    async render () {
      await getScriptPromisify('https://cdn.bootcdn.net/ajax/libs/echarts/5.0.0/echarts.min.js')


      /////////////////////////////////////////////////////////////
     ///Second comment: Place the second part of the script here//
    /////////////////////////////////////////////////////////////


      const myChart = echarts.init(this._root, 'wight')

      ////////////////////////////////////////////////////////////
     ///Third comment: Place the third part of the script here///
    ////////////////////////////////////////////////////////////


  customElements.define('com-sap-sample-echarts-pie_chart_demo_xx', SamplePieChart)
})()
