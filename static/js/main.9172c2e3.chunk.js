(this["webpackJsonpcovid19-kerala"]=this["webpackJsonpcovid19-kerala"]||[]).push([[0],{232:function(e,t,a){e.exports=a(442)},237:function(e,t,a){},442:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(192),r=a.n(o),l=(a(237),a(20)),i=a(15),c=a(198),m=a(91),d=a(54),f=a.n(d);var p=function(e){var t=e.districts,a=Object(n.useState)({}),o=Object(l.a)(a,2),r=o[0],d=o[1],p=Object(n.useState)({}),u=Object(l.a)(p,2),x=u[0],v=u[1],h=f()(),g=Object(n.useRef)(null);return Object(n.useEffect)((function(){if(Object.keys(t).length>0&&g.current){var e=Object.keys(t)[0];d({name:e,under_observation:t[e].under_observation,under_home_isolation:t[e].under_home_isolation,total_hospitalised:t[e].total_hospitalised,hospitalised_today:t[e].hospitalised_today,corona_positive:t[e].corona_positive,cured_discharged:t[e].cured_discharged,deaths:t[e].deaths});var a=0,n=1e5,s=0;for(var o in t)a+=t[o].corona_positive,t[o].corona_positive<n&&(n=t[o].corona_positive),t[o].corona_positive>s&&(s=t[o].corona_positive);v({total:a,maxConfirmed:s,minConfirmed:n});var r=i.g(g.current),f=i.b().center([76.8,9.7]).scale(6400).translate([225,400]),p=i.c(f);var u=i.f(i.d).domain([0,x.maxConfirmed/.8]);r.append("g").attr("class","legend").attr("transform","translate(10, 375)");var h=Math.floor(x.maxConfirmed/5),E=Array.from(Array(6).keys()).map((function(e){return e*h})),_=Object(c.a)().shapeWidth(30).cells(E).titleWidth(3).labels((function(e){var t=e.i,a=e.genLength,n=e.generatedLabels;if(t===a-1){var s=Math.floor(n[t]);return"".concat(s,"+")}var o=Math.floor(n[t]),r=Math.floor(n[t+1]);return"".concat(o," - ").concat(r)})).title("Confirmed Cases").orient("vertical").scale(u);r.select(".legend").call(_);var y=[i.e("/kerala.json")];Promise.all(y).then((function(e){var a=Object(l.a)(e,1)[0];r.append("g").attr("class","kerala").selectAll("path").data(m.a(a,a.objects.kerala).features).enter().append("path").attr("fill",(function(e){var a=t[e.properties.DISTRICT].corona_positive;return i.d(e.confirmed=.05*(a>0)+a/x.maxConfirmed*.8)})).attr("d",p).attr("pointer-events","all").on("mouseenter",(function(e){if(t[e.properties.DISTRICT]){var a=e.properties.DISTRICT;d({name:a,under_observation:t[a].under_observation,under_home_isolation:t[a].under_home_isolation,total_hospitalised:t[a].total_hospitalised,hospitalised_today:t[a].hospitalised_today,corona_positive:t[a].corona_positive,cured_discharged:t[a].cured_discharged,deaths:t[a].deaths})}var n=i.a.target;i.g(n.parentNode.appendChild(n)).attr("stroke","#ff073a").attr("stroke-width",2)})).on("mouseleave",(function(e){var t=i.a.target;i.g(t).attr("stroke","None")})).style("cursor","pointer").append("title").text((function(e){return parseFloat(parseInt(t[e.properties.DISTRICT].corona_positive)/x.total*100).toFixed(2)+"% from "+e.properties.DISTRICT})),r.append("path").attr("stroke","#ff073a20").attr("fill","none").attr("stroke-width",2).attr("d",p(m.b(a,a.objects.kerala)))}))}}),[t,x.maxConfirmed,x.total]),s.a.createElement("div",{className:"flex flex-nowrap sm:flex-wrap"},s.a.createElement("div",{className:"flex flex-col sm:flex-row text-gray-800 text-left"},s.a.createElement("svg",{className:"font-sans text-base self-center sm:self-start",id:"chart",height:"575",width:"300",ref:g}),s.a.createElement("div",{className:"w-48 min-w-0 sm:min-w-full md:min-w-0 lg:min-w-0 xl:min-w-0 flex-grow sm:flex-grow-"}),s.a.createElement("div",{className:"flex flex-row sm:flex-col flex-wrap sm:flex-nowrap text-gray-800 w-auto sm:w-56 min-w-0 sm:min-w-full md:min-w-0 lg:min-w-0 xl:min-w-0 text-left sm:text-left md:text-right lg:text-right xl:text-right self-center"},s.a.createElement("div",{className:"flex flex-col p-2 mb-1 font-semibold"},s.a.createElement("p",{className:"font-sans text-lg"},r.name)),h<650&&s.a.createElement("div",{className:"w-screen"}),s.a.createElement("div",{className:"flex flex-col py-0 sm:py-2 px-2 my-0 sm:my-1 text-red-500"},s.a.createElement("p",{className:"font-sans text-base"},"Confirmed"),s.a.createElement("p",{className:"font-sans text-lg"},r.corona_positive)),s.a.createElement("div",{className:"flex flex-col py-0 sm:py-2 px-2 my-0 sm:my-1 text-yellow-500"},s.a.createElement("p",{className:"font-sans text-base"},"Active"),s.a.createElement("p",{className:"font-sans text-lg"},r.total_hospitalised)),s.a.createElement("div",{className:"flex flex-col py-0 sm:py-2 px-2 my-0 sm:my-1 text-green-500"},s.a.createElement("p",{className:"font-sans text-base"},"Recovered"),s.a.createElement("p",{className:"font-sans text-lg"},r.cured_discharged)),s.a.createElement("div",{className:"flex flex-col py-0 sm:py-2 px-2 my-0 sm:my-1 text-gray-800"},s.a.createElement("p",{className:"font-sans text-base"},"Deaths"),s.a.createElement("p",{className:"font-sans text-lg"},r.deaths)),s.a.createElement("div",{className:"flex flex-col py-0 sm:py-2 px-2 my-0 sm:my-1 text-gray-800"},s.a.createElement("p",{className:"font-sans text-base"},"Today"),s.a.createElement("p",{className:"font-sans text-lg"},r.hospitalised_today)),s.a.createElement("div",{className:"flex flex-col py-0 sm:py-2 px-2 my-0 sm:my-1 text-gray-800"},s.a.createElement("p",{className:"font-sans text-base"},"Under Observation"),s.a.createElement("p",{className:"font-sans text-lg"},r.under_observation)),s.a.createElement("div",{className:"flex flex-col pb-0 sm:py-2 px-2 my-0 sm:my-1 text-gray-800"},s.a.createElement("p",{className:"font-sans text-base"},"Home Isolation"),s.a.createElement("p",{className:"font-sans text-lg"},r.under_home_isolation)))))},u=a(199),x=a(14),v=a.n(x);var h=function(e){var t=e.districts,a=Object(n.useState)([]),o=Object(l.a)(a,2),r=o[0],i=o[1],c=f()(),m={district:"District",under_observation:"Under Observation",under_home_isolation:"Home Isolation",total_hospitalised:"Active",hospitalised_today:"Today",corona_positive:"Confirmed",cured_discharged:"Recovered",deaths:"Deaths"},d=function(e){var t=e.title;return s.a.createElement("span",{className:"text-right text-red-500"},m[t])};return Object(n.useEffect)((function(){if(Object.keys(t).length>0){var e=[];for(var a in t)e.push(Object(u.a)({district:a},t[a]));i(e)}}),[t]),s.a.createElement("div",{className:"flex text-base px-1 mt-4 sm:mt-0"},s.a.createElement(v.a,{data:r,components:{Layout:function(e){var t=e.Table;return s.a.createElement("div",null,s.a.createElement(t,null))}},plugins:[x.plugins.LocalPlugin],sortProperties:[{id:"corona_positive",sortAscending:!1}]},s.a.createElement(x.RowDefinition,null,s.a.createElement(x.ColumnDefinition,{id:"district",customHeadingComponent:d,customComponent:function(e){var t=e.value;return s.a.createElement("span",{className:"text-right text-blue-500"},t)}}),s.a.createElement(x.ColumnDefinition,{id:"corona_positive",customHeadingComponent:d}),s.a.createElement(x.ColumnDefinition,{id:"total_hospitalised",customHeadingComponent:d}),s.a.createElement(x.ColumnDefinition,{id:"cured_discharged",customHeadingComponent:d}),s.a.createElement(x.ColumnDefinition,{id:"deaths",customHeadingComponent:d}),c>650&&s.a.createElement(x.ColumnDefinition,{id:"under_observation",customHeadingComponent:d}),c>650&&s.a.createElement(x.ColumnDefinition,{id:"under_home_isolation",customHeadingComponent:d}),c>650&&s.a.createElement(x.ColumnDefinition,{id:"hospitalised_today",customHeadingComponent:d}))))},g=a(197),E=a.n(g);var _=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!1),i=Object(l.a)(r,2),c=i[0],m=i[1];return Object(n.useEffect)((function(){!1===c&&E.a.get("https://volunteer.coronasafe.network/api/reports").then((function(e){o(e.data.kerala),m(!0)})).catch((function(e){console.log(e)}))}),[c]),s.a.createElement("div",{className:"app"},!c&&s.a.createElement("div",{className:"spinner mx-auto my-auto w-screen h-screen"}),c&&s.a.createElement("div",null,s.a.createElement("div",{className:"flex flex-col items-center m-5"},s.a.createElement("p",{className:"items-center font-sans text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl"},"Kerala COVID-19 Tracker"),s.a.createElement("div",{className:"flex flex-wrap w-screen"},s.a.createElement("div",{className:"flex w-auto sm:w-1/2 flex-col items-center"},s.a.createElement(p,{districts:a})),s.a.createElement("div",{className:"flex w-auto sm:w-1/2 flex-col items-center self-center order-last sm:order-first"},s.a.createElement(h,{districts:a}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[232,1,2]]]);
//# sourceMappingURL=main.9172c2e3.chunk.js.map