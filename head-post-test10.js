const nPLPro = {
  arr: [],
  compile: function() {
    let currentUrl = window.location.href.split("?")[0];
    let currentIndex = this.arr.findIndex(item => {
      let itemUrl = item.link.split("?")[0];
      return itemUrl === currentUrl;
    });

    if (currentIndex !== -1) {
      let prevIndex = currentIndex + 1;
      let nextIndex = currentIndex - 1;
      let prevHtml = "";
      let nextHtml = "";

      if (nextIndex < this.arr.length) {
        nextHtml = `<a href="${this.arr[nextIndex].link}">‹ Trước kia</a>`;
      }

      if (prevIndex >= 0) {
        prevHtml = `<a href="${this.arr[prevIndex].link}">Kế tiếp ›</a>`;
      }

      jQuery(".nPL-show").html(`
        <select onchange="location = this.value;" id="nPL_select">
          ${this.arr.map((item, index) => `
            <option value="${item.link}" ${index === currentIndex ? "selected" : ""}>${item.title}</option>
          `).join("")}
        </select>
        <div class="inner_nPL">${prevHtml}${nextHtml}</div>
      `);
    }
  },
  create: function(category, startIndexes = []) {
    let promises = startIndexes.map(startIndex => {
      let url = `/feeds/posts/summary/-/${category}?alt=json-in-script&start-index=${startIndex}&max-results=150`;
      return jQuery.ajax({
        type: "get",
        url: url,
        dataType: "jsonp"
      }).promise();
    });

    Promise.all(promises).then(results => {
      results.forEach(result => {
        if ("entry" in result.feed) {
          result.feed.entry.forEach(entry => {
            let url = entry.link.find(link => link.rel === "alternate").href.split("?")[0];
            this.arr.push({
              title: entry.title.$t,
              link: url
            });
          });
        }
      });

      if (this.arr.length > 0) {
        this.compile();
      } else {
        console.log("Error: no entries found.");
      }
    }).catch(error => console.log(error));
  },
  run: function(category, startIndexes = []) {
    if (typeof jQuery === "function" && document.getElementById("nPL")) {
      this.create(category, startIndexes);
    } else {
      console.log("Error: not function or element not found.");
    }
  }
};
const PrefetchChapter={arr:[],compile:function(){let e=this.arr.findIndex(e=>e.link===window.location.href.split("?")[0]);if(-1!==e){let t=e-1,r=e+1,n=e-2,i=e+2,l="";if(t>=0){let s=this.arr[t].link.split("?")[0];l+=`<link href="${s}" rel="prefetch" as="document"><link href="${s}" rel="prerender" as="document">`}if(r<this.arr.length){let a=this.arr[r].link.split("?")[0];l+=`<link href="${a}" rel="prefetch" as="document"><link href="${a}" rel="prerender" as="document">`}if(n>=0){let h=this.arr[n].link.split("?")[0];l+=`<link href="${h}" rel="prefetch" as="document"><link href="${h}" rel="prerender" as="document">`}if(i<this.arr.length){let o=this.arr[i].link.split("?")[0];l+=`<link href="${o}" rel="prefetch" as="document"><link href="${o}" rel="prerender" as="document">`}document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",l)}},create:function(e,t=[]){let r=[];t.forEach(t=>{let n=`/feeds/posts/summary/-/${this.settings.cat}?alt=json-in-script&start-index=${t}&max-results=150`;r.push(e.ajax({type:"get",url:n,dataType:"jsonp"}).promise())}),Promise.all(r).then(e=>{e.forEach(e=>{"entry"in e.feed&&e.feed.entry.forEach(e=>{this.arr.push({title:e.title.$t,link:e.link.find(e=>"alternate"===e.rel).href})})}),this.arr.length>0?this.compile():console.log("Error: no entries found.")}).catch(e=>console.log(e))},run:function(e,t=[]){"function"==typeof jQuery&&document.getElementsByTagName("head")[0]?(this.settings.cat=e,this.create(jQuery,t)):console.log("Error: jQuery not found or head element not found.")},settings:{cat:""}};
const limitHistory=100,histories=function(){function i(i,t,e){this.id=i,this.title=t,this.link=e}function t(){localStorage.setItem("History",JSON.stringify(list))}return list=[],null!=localStorage.getItem("History")&&(list=JSON.parse(localStorage.getItem("History"))),(obj={}).addHistory=function(e,s,l){var n=new i(e,s,l);if(null!=list){if(same=list.find(i=>i.id==e),list.length<100){if(same)for(let o in list)list[o].id===e&&list.splice(list.length,0,list.splice(o,1)[0]),t();else list.push(n),t()}else if(same)for(let r in list)list[r].id===e&&list.splice(list.length,0,list.splice(r,1)[0]),t();else list.splice(0,1),list.push(n),t()}else list.push(n),t()},obj}();
