<template>
  <the-modal v-if="Deleteing" @confirm="ConfirmDeleting(true)" @undo="ConfirmDeleting(false)"></the-modal>
    <div class="commentHolder" data-aos="fade-right">
      <div class="likes">
        <span class="plus icon" :class="Added ? 'done': ''" @click="ManipulateScore('Adding')">
          <font-awesome-icon icon="plus" />        
        </span>
        <span class="likesCount"> {{ comment.score }}</span>
        <span class="minus icon" :class="Subtracted ? 'done': ''" @click="ManipulateScore('subtracting')">
          <font-awesome-icon icon="minus" />
        </span>
      </div>
      <div class="authorInfo">
        <img :src="comment.user.image.png" />
        <p class="CommentOwner">{{ comment.user.username }}</p>
        <span class="CurrentUser" v-if="comment.user.username === currentuser.username"
          >You</span
        >
        <span class="CreatedAt">{{ comment.createdAt }}</span>
      </div>
      <div class="headerContent">
        <span
          class="replyBtn"
          v-if="comment.user.username !== currentuser.username"
          @click="ActiveReply = !ActiveReply"
          ><font-awesome-icon icon="reply" /> Reply
        </span>
        <span
          v-if="comment.user.username === currentuser.username"
          class="deleteBtn myicon"
          @click="Deleteing = true"
        >
          <font-awesome-icon icon="trash" />
          Delete
        </span>
        <span
          v-if="comment.user.username === currentuser.username"
          class="editBtn myicon"
          @click="EditMine = !EditMine"
        >
          <font-awesome-icon icon="pen" />
          Edit
        </span>
      </div>
      <div class="comment">
        <p class="commentContent" v-if="!EditMine">{{ comment.content }}</p>
        <the-author-comment
          v-else
          btnText="SAVE"
          placeHolder="Edit Your Reply"
          :content="comment.content"
          :type="'EditOwnReply'"
          @EditMyReply="EditContent"
        ></the-author-comment>  
      </div>
    </div>
    <the-author-comment
      v-if="ActiveReply"
      btnText="REPLY"
      placeHolder="Please Enter Your Reply"
      :content="`@${comment.user.username}`"
      :type="'ReplyToComment'"
      :to="comment.user.username"
      :commentId="comment.id"
      @closeCommentReply="ActiveReply=false"
    ></the-author-comment>
  <div class="repBorder" v-if="comment.replies.length > 0">
      <div class="replyCont">
        <the-reply
          v-for="reply in comment.replies"
          :key="reply.id"
          :reply="reply"
          :commentId="comment.id"
        ></the-reply>
      </div>
  </div>

</template>

<script>
  import TheReply from './TheReply.vue';
  export default {
    inject: ['currentuser', 'DeleteComment'],
    components: {
      TheReply,
    },
    props: [
      'comment'
    ],
    data() {
      return {
        ActiveReply: false,
        Added:false,
        Subtracted:false,
        EditMine:false,
        Deleteing:false,
      };
    },
    methods:{
      ManipulateScore(type){
        if (type == 'Adding' && !this.Added){
          this.Added = true
          if (this.Subtracted){
            this.comment.score += 2
            this.Subtracted = false
            return 
          }
          this.Subtracted = false
          this.comment.score += 1
        }else if (type =='subtracting' && !this.Subtracted){
          this.Subtracted = true
          if (this.Added){
            this.Added = false            
            this.comment.score -= 2
            return 
          }
          this.Added = false
          this.comment.score -= 1
        }else if (type =='subtracting' && this.Subtracted){
          this.Subtracted = false
          this.comment.score += 1
        }else if (type =='Adding' && this.Added){
          this.Added = false
          this.comment.score -= 1
        }
      },
      EditContent(newContent) {
        this.EditMine = false;
        this.comment.content = newContent;
      },
      ConfirmDeleting (status){
        if(status){
          this.DeleteComment(this.comment.id)
          this.Deleteing = false
        }else{
          this.Deleteing = false
        }
      }


    }
  };
</script>

<style scoped>
@import url(../style/TheComment.css);

</style>
