(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/airplane.3090c865.jpg"},24:function(e,t,a){e.exports=a(53)},53:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),i=a.n(r),c=a(4),s=a(5),o=a(7),d=a(6),u=a(8),m=a(55),p=a(56),w=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{class:"w3-top"},l.a.createElement("div",{class:"w3-bar w3-white w3-padding w3-wide w3-card"},l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("a",{href:"/",class:"w3-bar-item w3-button w3-padding-large"},l.a.createElement("b",null,"A"),"llez",l.a.createElement("b",null,"O"),"ust"),l.a.createElement("div",{class:"w3-right w3-hide-small"},l.a.createElement("a",{href:"/voyages",class:"w3-bar-item w3-button w3-padding-large"},"Voyages"),l.a.createElement("a",{href:"/connexion",class:"w3-bar-item w3-button w3-padding-large"},"Connexion"),l.a.createElement("a",{href:"/inscription",class:"w3-bar-item w3-button w3-padding-large"},"Inscription")))))}}]),t}(n.Component),h=a(22),E=a.n(h),b=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement("div",{class:"w3-display-container w3-wide"},l.a.createElement("img",{class:"w3-image",src:E.a,alt:"Agence de voyages"}),l.a.createElement("div",{class:"w3-display-middle w3-margin-top w3-center"},l.a.createElement("h1",{class:"w3-xxlarge w3-text-white"},l.a.createElement("span",{class:"w3-padding w3-black w3-opacity-min"},l.a.createElement("b",null,"A"),"llez",l.a.createElement("b",null,"O"),"ust"),l.a.createElement("br",null),l.a.createElement("span",{class:"w3-hide-small w3-text-light-grey"}," Voyagez dans le temps")))))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={destinations:{},types:{},prix:{},voyages:{},errors:{}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement("div",{class:"w3-container w3-margin-top w3-padding-48 w3-teal"},l.a.createElement("form",null,l.a.createElement("div",{class:"w3-row-padding w3-section w3-stretch"},l.a.createElement("select",{class:"w3-select w3-white w3-third w3-padding",name:"pays"},l.a.createElement("option",{value:"",disabled:!0,selected:!0},"Destination")),l.a.createElement("select",{class:"w3-select w3-white w3-third w3-padding",name:"sejour"},l.a.createElement("option",{value:"",disabled:!0,selected:!0},"Type de S\xe9jours"),l.a.createElement("option",{value:"1"},"S\xe9jour"),l.a.createElement("option",{value:"2"},"Circuit"),l.a.createElement("option",{value:"3"},"Croisi\xe8re"),l.a.createElement("option",{value:"4"},"Location"),l.a.createElement("option",{value:"5"},"Club-Vacances")),l.a.createElement("select",{class:"w3-select w3-white w3-third w3-padding",name:"prix"},l.a.createElement("option",{value:"",disabled:!0,selected:!0},"Prix"),l.a.createElement("option",{value:"1"},"- 300 euros"),l.a.createElement("option",{value:"2"},"- 600 euros"),l.a.createElement("option",{value:"3"},"- 1000 euros"),l.a.createElement("option",{value:"3"},"- 2000 euros"),l.a.createElement("option",{value:"3"},"- 5000 euros"),l.a.createElement("option",{value:"3"},"+ 5000 euros"))),l.a.createElement("div",{class:"w3-display-container"},l.a.createElement("bouton",{class:"w3-btn w3-white w3-middle"},"Rechercher")))))}}]),t}(n.Component),v=a(12),f=a(9),y=a(13),j=a.n(y),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(d.a)(t).call(this))).state={identifiant:"",password:"",errors:{}},e.handleInputChange=e.handleInputChange.bind(Object(f.a)(Object(f.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(f.a)(Object(f.a)(e))),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleInputChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={identifiant:this.state.identifiant,password:this.state.password};console.log(t),j.a.post("/Connexion",this.state.identifiant,this.state.password).then(function(e){console.log("Je suis dans React : "+JSON.stringify(e.data))})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement("div",{class:"w3-display-middle w3-margin-top w3-center w3-card-4"},l.a.createElement("div",{class:"w3-container w3-teal"},l.a.createElement("h2",null,"Connexion")),l.a.createElement("form",{class:"w3-container w3-padding-24",onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("p",null),l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Identifiant",class:"w3-input w3-border w3-round w3-light-grey",name:"identifiant",required:!0,onChange:this.handleInputChange,value:this.state.identifiant})),l.a.createElement("p",null),l.a.createElement("div",null,l.a.createElement("input",{type:"password",placeholder:"Mot de passe",class:"w3-input w3-border w3-round w3-light-grey",name:"password",required:!0,onChange:this.handleInputChange,value:this.state.password})),l.a.createElement("p",null),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",class:"w3-button w3-round-xxlarge w3-medium w3-border w3-padding-large w3-ripple"},"Connectez-vous !"))))))}}]),t}(n.Component),C=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(d.a)(t).call(this))).state={identifiant:"",email:"",nom:"",prenom:"",password:"",password_confirm:"",errors:{}},e.handleInputChange=e.handleInputChange.bind(Object(f.a)(Object(f.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(f.a)(Object(f.a)(e))),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleInputChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={identifiant:this.state.identifiant,nom:this.state.nom,prenom:this.state.prenom,email:this.state.email,password:this.state.password,password_confirm:this.state.password_confirm};console.log(t),j.a.post("http://localhost:9000/api/register",{user:t}).then(function(e){console.log(e),"400"===e.data.code?alert(e.data.failed):200===e.data.code?document.location.href="/inscrit":alert(e.data.success)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement("div",{class:"w3-display-middle w3-margin-top w3-center w3-card-4"},l.a.createElement("div",{class:"w3-container w3-teal"},l.a.createElement("h2",null,"Inscription")),l.a.createElement("form",{class:"w3-container  w3-padding-24",onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("p",null),l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Identifiant",class:"w3-input w3-border w3-round w3-light-grey",name:"identifiant",required:!0,onChange:this.handleInputChange,value:this.state.identifiant})),l.a.createElement("p",null),l.a.createElement("div",null,l.a.createElement("input",{type:"email",placeholder:"Email",class:"w3-input w3-border w3-round w3-light-grey",name:"email",required:!0,onChange:this.handleInputChange,value:this.state.email})),l.a.createElement("p",null),l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Nom",class:"w3-input w3-border w3-round w3-light-grey",name:"nom",required:!0,onChange:this.handleInputChange,value:this.state.nom})),l.a.createElement("p",null),l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Prenom",class:"w3-input w3-border w3-round w3-light-grey",name:"prenom",required:!0,onChange:this.handleInputChange,value:this.state.prenom})),l.a.createElement("p",null),l.a.createElement("div",null,l.a.createElement("input",{type:"password",placeholder:"Mot de Passe",class:"w3-input w3-border w3-round w3-light-grey",name:"password",required:!0,onChange:this.handleInputChange,value:this.state.password})),l.a.createElement("p",null),l.a.createElement("div",null,l.a.createElement("input",{type:"password",placeholder:"Confirmation MotDePasse",class:"w3-input w3-border w3-round w3-light-grey",name:"password_confirm",required:!0,onChange:this.handleInputChange,value:this.state.password_confirm})),l.a.createElement("p",null),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",class:"w3-center w3-button w3-round-xxlarge w3-medium w3-border w3-padding-large w3-ripple"},"Inscrivez-vous !"))))))}}]),t}(n.Component),x=(a(49),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(p.a,{exact:!0,path:"/",component:b}),l.a.createElement(p.a,{path:"/voyages",component:g}),l.a.createElement(p.a,{path:"/connexion",component:O}),l.a.createElement(p.a,{path:"/inscription",component:C})))}}]),t}(n.Component));i.a.render(l.a.createElement(x,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0d3da6e4.chunk.js.map