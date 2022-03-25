<template>
  <div class="container">
    <the-comment
      v-for="comment in comments"
      :comment="comment"
      :key="comment.id"
    >
    </the-comment>
    <the-author-comment :content="commContent" @resetcomment="reset" btnText="SEND" placeHolder="Add Comment" :type="'AddNewComment'" ></the-author-comment>
  </div>
</template>

<script>
import datas from "../public/data.json";
import TheComment from "./components/TheComment.vue";
import TheAuthorComment from "./components/TheAuthorComment.vue";

export default {
  components: {
    TheAuthorComment,
    TheComment,
  },
  data() {
    return {
      comments: datas.comments,
      currentuser: datas.currentUser,
      commContent: ''
    };
  },

  provide() {
    return {
      comments: this.comments,
      currentuser: this.currentuser,
      addReply: this.AddReply,
      DeleteReply: this.DeleteReply,
      DeleteComment: this.DeleteComment,
      AddComment: this.AddComment
    };
  },
  methods:{
    AddReply(content, to, commentId){
      const newReply = {
        id: new Date().toISOString(),
        content: content.substring(content.indexOf(" ") + 1),
        createdAt: 'just now',
        score:0,
        replyingTo: to,
        user: this.currentuser
      }
      let commentIndex = this.comments.findIndex((comment) => comment.id == commentId)
      this.comments[commentIndex].replies.push(newReply)
    },
    DeleteReply(commentId, repId){
      let commentIndex = this.comments.findIndex((comment) => comment.id == commentId)
      let replyIndex = this.comments[commentIndex].replies.findIndex((reply) => reply.id == repId)
      this.comments[commentIndex].replies.splice(replyIndex, 1)
    },
    DeleteComment(commentId){
      let commentIndex = this.comments.findIndex((comment) => comment.id == commentId)
      this.comments.splice(commentIndex, 1)
    },
    AddComment(content){
      const newComemnt = {
        id: new Date().toISOString(),
        content: content,
        createdAt: "Just Now",
        score: 0,
        user: this.currentuser,
        replies: []
      }
      this.comments.push(newComemnt)
    },
    reset(){
      this.commContent = ''
      console.log(this.commContent)
    }
  }
};
</script>

<style>
@import url(./style/main.css);
</style>
