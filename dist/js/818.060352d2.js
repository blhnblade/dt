"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[818],{9818:function(t,a,i){i.r(a),i.d(a,{default:function(){return I}});var e=i(3396),n=i(9242),s=i(7139);const l=t=>((0,e.dD)("data-v-c5159ee2"),t=t(),(0,e.Cn)(),t),c={class:"main"},r={class:"container"},o={class:"main-wrapper"},u=l((()=>(0,e._)("div",{class:"heading d-flex align-items-center"},[(0,e._)("div",{class:"page-heading"},"Мои профиль")],-1))),h={key:1,class:"d-flex flex-column"},v={class:"d-flex settings-wrapper"},d={class:"d-flex flex-column align-items-center settings-avatar-container"},p={class:"settings-avatar",src:"",ref:"avatar"},g={class:"d-flex flex-column settings-container-right"},m={class:"d-flex flex-column settings-input-container"},f=l((()=>(0,e._)("div",{class:"settings-input-heading"},"Имя пользователя",-1))),y={class:"d-flex flex-column settings-input-container"},k=l((()=>(0,e._)("div",{class:"settings-input-heading"},"Город",-1))),_=["disabled"];function x(t,a,i,l,x,b){const C=(0,e.up)("Loader");return(0,e.wg)(),(0,e.iD)("div",c,[(0,e._)("div",r,[(0,e._)("div",o,[u,x.loading?((0,e.wg)(),(0,e.j4)(C,{key:0,wrapper:!0})):((0,e.wg)(),(0,e.iD)("div",h,[(0,e._)("form",{action:"#",onSubmit:a[6]||(a[6]=(0,n.iM)(((...t)=>b.saveChanges&&b.saveChanges(...t)),["prevent"])),class:"d-flex flex-column"},[(0,e._)("div",v,[(0,e._)("div",d,[(0,e._)("img",p,null,512),(0,e._)("div",{class:"settings-avatar-upload",onClick:a[0]||(a[0]=(...t)=>b.clickInputFile&&b.clickInputFile(...t))}," Загрузить аватар "),(0,e._)("input",{class:"settings-avatar-input",type:"file",ref:"inputFile",onChange:a[1]||(a[1]=t=>{b.uploadAvatar(t),b.unlockBtnSave()})},null,544)]),(0,e._)("div",g,[(0,e._)("div",m,[f,(0,e.wy)((0,e._)("input",{type:"text",class:"settings-input form-input","onUpdate:modelValue":a[2]||(a[2]=t=>x.name=t),onInput:a[3]||(a[3]=(...t)=>b.unlockBtnSave&&b.unlockBtnSave(...t))},null,544),[[n.nr,x.name]])]),(0,e._)("div",y,[k,(0,e.wy)((0,e._)("input",{type:"text",class:"settings-input form-input","onUpdate:modelValue":a[4]||(a[4]=t=>x.city=t),onInput:a[5]||(a[5]=(...t)=>b.unlockBtnSave&&b.unlockBtnSave(...t))},null,544),[[n.nr,x.city]])])])]),(0,e._)("input",{type:"submit",value:"Сохранить",class:(0,s.C_)(["settings-btn-save",{"settings-btn-save-lock":x.btnSaveLock}]),disabled:x.btnSaveLock},null,10,_)],32)]))])])])}i(8858),i(1318),i(3228);var b=i(4519),C={data(){return{loading:!0,avatar:null,name:"",city:"",initialName:null,initialCity:null,initialAvatar:null,btnSaveLock:!0}},computed:{info(){return this.$store.getters.info}},watch:{info(t){let{name:a,city:i}=t;this.name=a,this.city=i,this.fillInitialValues()}},methods:{uploadAvatar(t){if(t.target.files[0]){let a=t.target.files[0];this.$refs.avatar.src=URL.createObjectURL(a),this.avatar=a,console.log(this.avatar,this.avatar===this.initialAvatar)}},async saveChanges(){try{console.log("save"),await this.$store.dispatch("saveChanges",{avatar:this.avatar===b?null:this.avatar,name:this.name===this.initialName?null:this.name,city:this.city===this.initialCity?null:this.city}),this.fillInitialValues(!0),this.btnSaveLock=!0}catch(t){console.log(t)}},fillInitialValues(t=!1){this.initialName=this.name,this.initialCity=this.city,t&&(this.initialAvatar=this.avatar)},clickInputFile(){this.$refs.inputFile.click()},getUserData(){return this.$store.getters.info},unlockBtnSave(){this.btnSaveLock=!0,(this.initialName!==this.name||this.initialCity!==this.city||this.initialAvatar!==this.avatar)&&(this.btnSaveLock=!1)}},async mounted(){try{this.avatar=await this.$store.dispatch("getAvatar"),this.initialAvatar=this.avatar,console.log(this.avatar),setTimeout((()=>{this.$refs.avatar.src=this.avatar}),0);const t=this.getUserData();t&&(this.name=t.name,this.city=t.city,this.initialName=t.name,this.initialCity=t.city),this.loading=!1}catch(t){console.log(t)}}},w=i(89);const S=(0,w.Z)(C,[["render",x],["__scopeId","data-v-c5159ee2"]]);var I=S}}]);
//# sourceMappingURL=818.060352d2.js.map