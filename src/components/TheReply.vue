<template>
  <the-modal v-if="Deleteing" @confirm="ConfirmDeleting(true)" @undo="ConfirmDeleting(false)"></the-modal>
  <div class="replyHolder" data-aos="fade-left">
    <div class="likes">
      <span class="plus icon" :class="Added ? 'done': ''" @click="ManipulateScore('Adding')">
        <font-awesome-icon icon="plus" />      
      </span>
      <span class="likesCount"> {{ reply.score }}</span>
      <span class="minus icon" :class="Subtracted ? 'done': ''" @click="ManipulateScore('subtracting')">
        <font-awesome-icon icon="minus" />      
      </span>
    </div>
    <div class="authorInfo">
      <img :src="reply.user.image.png" />
      <span class="CommentOwner">{{ reply.user.username }}</span>
      <span
        class="CurrentUser"
        v-if="reply.user.username === currentuser.username"
        >You</span
      >
      <span class="CreatedAt">{{ reply.createdAt }}</span>
    </div>
    <div class="headerContent">
      <span
        class="replyBtn"
        v-if="reply.user.username !== currentuser.username"
        @click="ActiveReply = !ActiveReply"
      >
        <font-awesome-icon icon="reply" /> Reply
      </span>
      <span
        v-if="reply.user.username === currentuser.username"
        class="deleteBtn myicon"
        @click="Deleteing = true"
      >
        <font-awesome-icon icon="trash" />
        Delete
      </span>
      <span
        v-if="reply.user.username === currentuser.username"
        class="editBtn myicon"
        @click="EditMine = !EditMine"
      >
        <font-awesome-icon icon="pen" />
        Edit
      </span>
    </div>
    <div class="comment">
        <p class="commentContent" v-if="!EditMine">
          <span class="RepliedTo">@ {{ reply.replyingTo }}</span>
          {{ reply.content }}
        </p>
        <the-author-comment
          v-else
          btnText="SAVE"
          placeHolder="Edit Your Reply"
          :content="reply.content"
          :type="'EditOwnReply'"
          @EditMyReply="EditContent"
        ></the-author-comment>    
    </div>
  </div>
    <the-author-comment
      v-if="ActiveReply"
      btnText="REPLY"
      placeHolder="Please Enter Your Reply"
      :content="`@${reply.user.username}`"
      :type="'ReplyToReply'"
      :to="reply.user.username"
      :commentId="commentId"
      @closeReply="ActiveReply = false"
    ></the-author-comment>

</template>

<script>
  export default {
    inject: ['currentuser', 'DeleteReply'],
    props: ['reply', 'commentId'],
    data() {
      return {
        ActiveReply: false,
        EditMine: false,
        Added: false,
        Subtracted: false,
        Deleteing: false,
      };
    },
    methods: {
      EditContent(newContent) {
        this.EditMine = false;
        this.reply.content = newContent;
      },
      ManipulateScore(type){
        if (type == 'Adding' && !this.Added){
          this.Added = true
          if (this.Subtracted){
            this.reply.score += 2
            this.Subtracted = false
            return 
          }
          this.Subtracted = false
          this.reply.score += 1
        }else if (type =='subtracting' && !this.Subtracted){
          this.Subtracted = true
          if (this.Added){
            this.Added = false            
            this.reply.score -= 2
            return 
          }
          this.Added = false
          this.reply.score -= 1
        }else if (type =='subtracting' && this.Subtracted){
          this.Subtracted = false
          this.reply.score += 1
        }else if (type =='Adding' && this.Added){
          this.Added = false
          this.reply.score -= 1
        }
      },
      ConfirmDeleting (status){
        if(status){
          this.DeleteReply(this.commentId, this.reply.id)
          this.Deleteing = false
        }else{
          this.Deleteing = false
        }
      }
    },
  };
</script>

<style scoped>
@import url(../style/TheReply.css);
</style>
