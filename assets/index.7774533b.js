import{r as _,o as i,c as l,a as f,b as m,d as r,n as C,e as u,t as h,f as v,F as A,g as w,w as I,v as T,T as D,p as x,h as M,l as O,_ as B,i as N,j,A as H}from"./vendor.269b011c.js";const Y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}};Y();const L={image:{png:"images/avatars/image-juliusomo.png",webp:"images/avatars/image-juliusomo.webp"},username:"juliusomo"},U=[{id:1,content:"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",createdAt:"1 month ago",score:12,user:{image:{png:"images/avatars/image-amyrobson.png",webp:"images/avatars/image-amyrobson.webp"},username:"amyrobson"},replies:[]},{id:2,content:"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",createdAt:"2 weeks ago",score:5,user:{image:{png:"images/avatars/image-maxblagun.png",webp:"images/avatars/image-maxblagun.webp"},username:"maxblagun"},replies:[{id:3,content:"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",createdAt:"1 week ago",score:4,replyingTo:"maxblagun",user:{image:{png:"images/avatars/image-ramsesmiron.png",webp:"images/avatars/image-ramsesmiron.webp"},username:"ramsesmiron"}},{id:4,content:"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",createdAt:"2 days ago",score:2,replyingTo:"ramsesmiron",user:{image:{png:"images/avatars/image-juliusomo.png",webp:"images/avatars/image-juliusomo.webp"},username:"juliusomo"}}]}];var k={currentUser:L,comments:U};var b=(s,e)=>{const n=s.__vccOpts||s;for(const[c,t]of e)n[c]=t;return n};const P={inject:["currentuser","DeleteReply"],props:["reply","commentId"],data(){return{ActiveReply:!1,EditMine:!1,Added:!1,Subtracted:!1,Deleteing:!1}},methods:{EditContent(s){this.EditMine=!1,this.reply.content=s},ManipulateScore(s){if(s=="Adding"&&!this.Added){if(this.Added=!0,this.Subtracted){this.reply.score+=2,this.Subtracted=!1;return}this.Subtracted=!1,this.reply.score+=1}else if(s=="subtracting"&&!this.Subtracted){if(this.Subtracted=!0,this.Added){this.Added=!1,this.reply.score-=2;return}this.Added=!1,this.reply.score-=1}else s=="subtracting"&&this.Subtracted?(this.Subtracted=!1,this.reply.score+=1):s=="Adding"&&this.Added&&(this.Added=!1,this.reply.score-=1)},ConfirmDeleting(s){s?(this.DeleteReply(this.commentId,this.reply.id),this.Deleteing=!1):this.Deleteing=!1}}},V={class:"replyHolder","data-aos":"fade-left"},J={class:"likes"},F={class:"likesCount"},W={class:"authorInfo"},q=["src"],z={class:"CommentOwner"},K={key:0,class:"CurrentUser"},G={class:"CreatedAt"},Q={class:"headerContent"},X=v(" Reply "),Z=v(" Delete "),$=v(" Edit "),ee={class:"comment"},te={key:0,class:"commentContent"},ne={class:"RepliedTo"};function se(s,e,n,c,t,o){const a=_("the-modal"),d=_("font-awesome-icon"),g=_("the-author-comment");return i(),l(A,null,[t.Deleteing?(i(),f(a,{key:0,onConfirm:e[0]||(e[0]=y=>o.ConfirmDeleting(!0)),onUndo:e[1]||(e[1]=y=>o.ConfirmDeleting(!1))})):m("",!0),r("div",V,[r("div",J,[r("span",{class:C(["plus icon",t.Added?"done":""]),onClick:e[2]||(e[2]=y=>o.ManipulateScore("Adding"))},[u(d,{icon:"plus"})],2),r("span",F,h(n.reply.score),1),r("span",{class:C(["minus icon",t.Subtracted?"done":""]),onClick:e[3]||(e[3]=y=>o.ManipulateScore("subtracting"))},[u(d,{icon:"minus"})],2)]),r("div",W,[r("img",{src:n.reply.user.image.png},null,8,q),r("span",z,h(n.reply.user.username),1),n.reply.user.username===o.currentuser.username?(i(),l("span",K,"You")):m("",!0),r("span",G,h(n.reply.createdAt),1)]),r("div",Q,[n.reply.user.username!==o.currentuser.username?(i(),l("span",{key:0,class:"replyBtn",onClick:e[4]||(e[4]=y=>t.ActiveReply=!t.ActiveReply)},[u(d,{icon:"reply"}),X])):m("",!0),n.reply.user.username===o.currentuser.username?(i(),l("span",{key:1,class:"deleteBtn myicon",onClick:e[5]||(e[5]=y=>t.Deleteing=!0)},[u(d,{icon:"trash"}),Z])):m("",!0),n.reply.user.username===o.currentuser.username?(i(),l("span",{key:2,class:"editBtn myicon",onClick:e[6]||(e[6]=y=>t.EditMine=!t.EditMine)},[u(d,{icon:"pen"}),$])):m("",!0)]),r("div",ee,[t.EditMine?(i(),f(g,{key:1,btnText:"SAVE",placeHolder:"Edit Your Reply",content:n.reply.content,type:"EditOwnReply",onEditMyReply:o.EditContent},null,8,["content","onEditMyReply"])):(i(),l("p",te,[r("span",ne,"@ "+h(n.reply.replyingTo),1),v(" "+h(n.reply.content),1)]))])]),t.ActiveReply?(i(),f(g,{key:1,btnText:"REPLY",placeHolder:"Please Enter Your Reply",content:`@${n.reply.user.username}`,type:"ReplyToReply",to:n.reply.user.username,commentId:n.commentId,onCloseReply:e[7]||(e[7]=y=>t.ActiveReply=!1)},null,8,["content","to","commentId"])):m("",!0)],64)}var oe=b(P,[["render",se],["__scopeId","data-v-e7d5c0fa"]]);const re={inject:["currentuser","DeleteComment"],components:{TheReply:oe},props:["comment"],data(){return{ActiveReply:!1,Added:!1,Subtracted:!1,EditMine:!1,Deleteing:!1}},methods:{ManipulateScore(s){if(s=="Adding"&&!this.Added){if(this.Added=!0,this.Subtracted){this.comment.score+=2,this.Subtracted=!1;return}this.Subtracted=!1,this.comment.score+=1}else if(s=="subtracting"&&!this.Subtracted){if(this.Subtracted=!0,this.Added){this.Added=!1,this.comment.score-=2;return}this.Added=!1,this.comment.score-=1}else s=="subtracting"&&this.Subtracted?(this.Subtracted=!1,this.comment.score+=1):s=="Adding"&&this.Added&&(this.Added=!1,this.comment.score-=1)},EditContent(s){this.EditMine=!1,this.comment.content=s},ConfirmDeleting(s){s?(this.DeleteComment(this.comment.id),this.Deleteing=!1):this.Deleteing=!1}}},ie={class:"commentHolder","data-aos":"fade-right"},le={class:"likes"},ae={class:"likesCount"},me={class:"authorInfo"},ce=["src"],de={class:"CommentOwner"},ue={key:0,class:"CurrentUser"},pe={class:"CreatedAt"},he={class:"headerContent"},ye=v(" Reply "),_e=v(" Delete "),fe=v(" Edit "),ge={class:"comment"},ve={key:0,class:"commentContent"},Ce={key:2,class:"repBorder"},be={class:"replyCont"};function Ae(s,e,n,c,t,o){const a=_("the-modal"),d=_("font-awesome-icon"),g=_("the-author-comment"),y=_("the-reply");return i(),l(A,null,[t.Deleteing?(i(),f(a,{key:0,onConfirm:e[0]||(e[0]=p=>o.ConfirmDeleting(!0)),onUndo:e[1]||(e[1]=p=>o.ConfirmDeleting(!1))})):m("",!0),r("div",ie,[r("div",le,[r("span",{class:C(["plus icon",t.Added?"done":""]),onClick:e[2]||(e[2]=p=>o.ManipulateScore("Adding"))},[u(d,{icon:"plus"})],2),r("span",ae,h(n.comment.score),1),r("span",{class:C(["minus icon",t.Subtracted?"done":""]),onClick:e[3]||(e[3]=p=>o.ManipulateScore("subtracting"))},[u(d,{icon:"minus"})],2)]),r("div",me,[r("img",{src:n.comment.user.image.png},null,8,ce),r("p",de,h(n.comment.user.username),1),n.comment.user.username===o.currentuser.username?(i(),l("span",ue,"You")):m("",!0),r("span",pe,h(n.comment.createdAt),1)]),r("div",he,[n.comment.user.username!==o.currentuser.username?(i(),l("span",{key:0,class:"replyBtn",onClick:e[4]||(e[4]=p=>t.ActiveReply=!t.ActiveReply)},[u(d,{icon:"reply"}),ye])):m("",!0),n.comment.user.username===o.currentuser.username?(i(),l("span",{key:1,class:"deleteBtn myicon",onClick:e[5]||(e[5]=p=>t.Deleteing=!0)},[u(d,{icon:"trash"}),_e])):m("",!0),n.comment.user.username===o.currentuser.username?(i(),l("span",{key:2,class:"editBtn myicon",onClick:e[6]||(e[6]=p=>t.EditMine=!t.EditMine)},[u(d,{icon:"pen"}),fe])):m("",!0)]),r("div",ge,[t.EditMine?(i(),f(g,{key:1,btnText:"SAVE",placeHolder:"Edit Your Reply",content:n.comment.content,type:"EditOwnReply",onEditMyReply:o.EditContent},null,8,["content","onEditMyReply"])):(i(),l("p",ve,h(n.comment.content),1))])]),t.ActiveReply?(i(),f(g,{key:1,btnText:"REPLY",placeHolder:"Please Enter Your Reply",content:`@${n.comment.user.username}`,type:"ReplyToComment",to:n.comment.user.username,commentId:n.comment.id,onCloseCommentReply:e[7]||(e[7]=p=>t.ActiveReply=!1)},null,8,["content","to","commentId"])):m("",!0),n.comment.replies.length>0?(i(),l("div",Ce,[r("div",be,[(i(!0),l(A,null,w(n.comment.replies,p=>(i(),f(y,{key:p.id,reply:p,commentId:n.comment.id},null,8,["reply","commentId"]))),128))])])):m("",!0)],64)}var Re=b(re,[["render",Ae],["__scopeId","data-v-625c754b"]]);const ke={props:["placeHolder","btnText","content","type","to","commentId"],inject:["currentuser","addReply","AddComment"],data(){return{myCont:this.content}},methods:{StartJob(){switch(this.$refs.btnType.getAttribute("data-type")){case"EditOwnReply":this.$emit("EditMyReply",this.myCont);break;case"ReplyToReply":this.addReply(this.myCont,this.to,this.commentId),this.$emit("closeReply");break;case"ReplyToComment":this.addReply(this.myCont,this.to,this.commentId),this.$emit("closeCommentReply");break;case"AddNewComment":this.AddComment(this.myCont),this.myCont="";break}}}},we={key:0,class:"userImage"},Se=["src"],Ee=["placeholder"],Ie=["data-type"];function Te(s,e,n,c,t,o){return i(),l("div",{class:C(["commentHolder",n.type=="EditOwnReply"?"NoMarg":""]),"data-aos":"fade-right"},[n.type!="EditOwnReply"?(i(),l("div",we,[r("img",{src:o.currentuser.image.png},null,8,Se)])):m("",!0),r("div",{class:C(["AuthortextArea",n.type=="EditOwnReply"?"JustifyIt":""])},[I(r("textarea",{placeholder:n.placeHolder,class:"AuthorCommentSection",rows:"5","onUpdate:modelValue":e[0]||(e[0]=a=>t.myCont=a)},null,8,Ee),[[T,t.myCont]])],2),r("button",{class:"submitBtn",onClick:e[1]||(e[1]=(...a)=>o.StartJob&&o.StartJob(...a)),ref:"btnType","data-type":n.type},h(n.btnText),9,Ie)],2)}var S=b(ke,[["render",Te],["__scopeId","data-v-18ea05be"]]);const De={components:{TheAuthorComment:S,TheComment:Re},data(){return{comments:k.comments,currentuser:k.currentUser,commContent:""}},provide(){return{comments:this.comments,currentuser:this.currentuser,addReply:this.AddReply,DeleteReply:this.DeleteReply,DeleteComment:this.DeleteComment,AddComment:this.AddComment}},methods:{AddReply(s,e,n){const c={id:new Date().toISOString(),content:s.substring(s.indexOf(" ")+1),createdAt:"just now",score:0,replyingTo:e,user:this.currentuser};let t=this.comments.findIndex(o=>o.id==n);this.comments[t].replies.push(c)},DeleteReply(s,e){let n=this.comments.findIndex(t=>t.id==s),c=this.comments[n].replies.findIndex(t=>t.id==e);this.comments[n].replies.splice(c,1)},DeleteComment(s){let e=this.comments.findIndex(n=>n.id==s);this.comments.splice(e,1)},AddComment(s){const e={id:new Date().toISOString(),content:s,createdAt:"Just Now",score:0,user:this.currentuser,replies:[]};this.comments.push(e)},reset(){this.commContent="",console.log(this.commContent)}}},xe={class:"container"};function Me(s,e,n,c,t,o){const a=_("the-comment"),d=_("the-author-comment");return i(),l("div",xe,[(i(!0),l(A,null,w(t.comments,g=>(i(),f(a,{comment:g,key:g.id},null,8,["comment"]))),128)),u(d,{content:t.commContent,onResetcomment:o.reset,btnText:"SEND",placeHolder:"Add Comment",type:"AddNewComment"},null,8,["content","onResetcomment"])])}var Oe=b(De,[["render",Me]]);const Be={emits:["confirm","undo"]},E=s=>(x("data-v-33b43682"),s=s(),M(),s),Ne={class:"modal"},je=E(()=>r("h3",{class:"modalHeader"},"Delete Comment",-1)),He=E(()=>r("p",{class:"disclaimer"},"Are You Sure You Want To Delete This Comment? This Will Remove The Comment And Can't Be Undone",-1)),Ye={class:"btnCont"};function Le(s,e,n,c,t,o){return i(),f(D,{to:"body"},[r("div",{class:"modal-container",onClick:e[2]||(e[2]=a=>s.$emit("undo"))},[r("div",Ne,[je,He,r("div",Ye,[r("button",{class:"Undo",onClick:e[0]||(e[0]=a=>s.$emit("undo"))},"NO, CANCEL"),r("button",{class:"Remove",onClick:e[1]||(e[1]=a=>s.$emit("confirm"))},"YES, DELETE")])])])])}var Ue=b(Be,[["render",Le],["__scopeId","data-v-33b43682"]]);O.add(B);const R=N(Oe);R.component("font-awesome-icon",j);R.component("the-author-comment",S);R.component("the-modal",Ue);R.mount("#app");H.init();
