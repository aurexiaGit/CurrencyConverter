(this.webpackJsonpconverter=this.webpackJsonpconverter||[]).push([[0],{27:function(e,t,r){},35:function(e,t,r){"use strict";r.r(t);var s=r(0),a=r.n(s),c=r(15),n=r.n(c),i=(r(27),r(28),r(16)),j=r(17),h=r(8),d=r(22),b=r(20),o=r(14),u=r(21),l=r(19),x=r(18),O=r(9),v=r(10),y=r(6),C=r(11),m=r(1),g=function(e){Object(d.a)(r,e);var t=Object(b.a)(r);function r(){var e;return Object(i.a)(this,r),(e=t.call(this)).state={override:!1,trueRate:1.1,fxRate:0,baseCurrency:"EUR",convertToCurrency:"USD",baseAmount:0,result:0,history:[]},e.changeBaseCurrency=e.changeBaseCurrency.bind(Object(h.a)(e)),e.changeConvertToCurrency=e.changeConvertToCurrency.bind(Object(h.a)(e)),e.changeBaseAmount=e.changeBaseAmount.bind(Object(h.a)(e)),e.changeRate=e.changeRate.bind(Object(h.a)(e)),e.addHistory=e.addHistory.bind(Object(h.a)(e)),e.getConvertedCurrency=e.getConvertedCurrency.bind(Object(h.a)(e)),e.switchCurrencies=e.switchCurrencies.bind(Object(h.a)(e)),e}return Object(j.a)(r,[{key:"generateRandomNumber",value:function(e,t){return Math.random()*(t-e)+e}},{key:"addHistory",value:function(e){this.state.history.push(Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Number.parseFloat(this.state.trueRate).toFixed(3)}),Object(m.jsx)("td",{children:Number.parseFloat(this.state.override?this.state.fxRate:this.state.trueRate).toFixed(3)}),Object(m.jsxs)("td",{children:[this.state.baseAmount," ",this.state.baseCurrency]}),Object(m.jsxs)("td",{children:[e," ",this.state.convertToCurrency]})]},this.state.history.length))}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.setState({trueRate:e.state.trueRate+e.generateRandomNumber(-.05,.05),override:Math.abs(e.state.fxRate-e.state.trueRate)<.02*e.state.trueRate})}),3e3)}},{key:"changeBaseCurrency",value:function(e){this.setState({baseCurrency:e.target.value})}},{key:"changeConvertToCurrency",value:function(e){this.setState({convertToCurrency:e.target.value})}},{key:"changeBaseAmount",value:function(e){this.setState({baseAmount:e.target.value})}},{key:"changeRate",value:function(e){this.setState({fxRate:e.target.value,override:Math.abs(this.state.fxRate-this.state.trueRate)<.02*this.state.trueRate})}},{key:"getConvertedCurrency",value:function(){var e=this.state.override?this.state.fxRate:this.state.trueRate,t=Number.parseFloat("USD"===this.state.baseCurrency?this.state.baseAmount*e:this.state.baseAmount/e).toFixed(3);this.setState({result:t}),this.addHistory(t)}},{key:"switchCurrencies",value:function(e){this.setState({baseAmount:this.state.result,result:this.state.baseAmount,baseCurrency:this.state.convertToCurrency,convertToCurrency:this.state.baseCurrency})}},{key:"render",value:function(){var e=this.state,t=e.trueRate,r=e.fxRate,s=e.baseCurrency,a=e.convertToCurrency,c=e.baseAmount,n=e.override,i=e.history,j=e.result;return Object(m.jsxs)(x.a,{children:[Object(m.jsx)(O.a,{children:Object(m.jsx)("h1",{style:{color:"#2d7962"},children:"Currency Converter"})}),Object(m.jsx)("br",{}),Object(m.jsx)(O.a,{children:Object(m.jsx)(v.a,{children:Object(m.jsxs)(u.a,{className:"text-center",body:!0,children:[Object(m.jsxs)(O.a,{children:[Object(m.jsx)(v.a,{children:Object(m.jsxs)(y.a,{size:"sm",className:"mb-3",children:[Object(m.jsx)(y.a.Prepend,{children:Object(m.jsx)(y.a.Text,{children:"fx rate:"})}),Object(m.jsx)(C.a,{value:Number.parseFloat(t).toFixed(3),readOnly:!0})]})}),Object(m.jsx)(v.a,{children:Object(m.jsxs)(y.a,{size:"sm",className:"mb-3",children:[Object(m.jsx)(y.a.Prepend,{children:Object(m.jsx)(y.a.Text,{children:"Override fx rate:"})}),Object(m.jsx)(C.a,{value:r,onChange:this.changeRate,required:!0}),Object(m.jsx)(y.a.Append,{children:Object(m.jsx)(y.a.Text,{style:n?{backgroundColor:"#2d7962",color:"white"}:{},children:n?"Activated":"Deactivated"})})]})})]}),Object(m.jsx)("br",{}),Object(m.jsx)(O.a,{className:"ml-1",children:Object(m.jsxs)("h3",{children:["Convert from: ",s," to ",a]})}),Object(m.jsx)("br",{}),Object(m.jsxs)(O.a,{children:[Object(m.jsx)(v.a,{children:Object(m.jsxs)(y.a,{size:"sm",className:"mb-3",children:[Object(m.jsx)(C.a,{value:c,onChange:this.changeBaseAmount,required:!0}),Object(m.jsx)(y.a.Append,{children:Object(m.jsx)(y.a.Text,{children:s})})]})}),Object(m.jsx)(v.a,{children:Object(m.jsx)(o.a,{onClick:this.switchCurrencies,variant:"secondary",children:"Switch"})}),Object(m.jsx)(v.a,{children:Object(m.jsxs)(y.a,{size:"sm",className:"mb-3",children:[Object(m.jsx)(C.a,{value:j,readOnly:!0}),Object(m.jsx)(y.a.Append,{children:Object(m.jsx)(y.a.Text,{children:a})})]})})]}),Object(m.jsx)("br",{}),Object(m.jsx)(O.a,{className:"ml-1",children:Object(m.jsx)(o.a,{variant:"success",onClick:this.getConvertedCurrency,children:"Convert"})})]})})}),Object(m.jsx)("br",{}),Object(m.jsx)(O.a,{children:Object(m.jsx)("h2",{children:"History"})}),Object(m.jsx)("br",{}),Object(m.jsx)(O.a,{children:Object(m.jsxs)(l.a,{size:"sm",responsive:!0,striped:!0,bordered:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Real time fx Rate"}),Object(m.jsx)("td",{children:"Overrided Rate"}),Object(m.jsx)("td",{children:"Base Amount"}),Object(m.jsx)("td",{children:"Converted Amount"})]})}),Object(m.jsx)("tbody",{children:i})]})})]})}}]),r}(a.a.Component);var f=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(g,{})})},R=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,36)).then((function(t){var r=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;r(e),s(e),a(e),c(e),n(e)}))};n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),R()}},[[35,1,2]]]);
//# sourceMappingURL=main.ab2f19ea.chunk.js.map