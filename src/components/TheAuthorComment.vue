
<template>
  <div class="commentHolder" :class="type == 'EditOwnReply' ? 'NoMarg' : ''" data-aos="fade-right">
    <div class="userImage" v-if="type != 'EditOwnReply'"><img :src="currentuser.image.png" /></div>
    <div class="AuthortextArea" :class="type == 'EditOwnReply' ? 'JustifyIt' : ''">
      <textarea
        :placeholder="placeHolder"
        class="AuthorCommentSection"
        rows="5"
        v-model="myCont"
      ></textarea>
    </div>
    <button class="submitBtn" @click="StartJob" :ref="'btnType'" :data-type="type">{{ btnText }}</button>
  </div>
</template>

<script>
export default {
  props:['placeHolder', 'btnText', 'content', 'type', 'to', 'commentId'],
  inject: ["currentuser", 'addReply', 'AddComment'],
  data(){
    return {
      myCont: this.content,
    }
  },
  methods:{
    StartJob(){
      const BtnType = this.$refs.btnType.getAttribute('data-type')
      switch (BtnType){
        case 'EditOwnReply':
          this.$emit('EditMyReply', this.myCont)
          break
        case 'ReplyToReply':
          this.addReply(this.myCont, this.to, this.commentId)
          this.$emit('closeReply')
          break
        case 'ReplyToComment':
            this.addReply(this.myCont, this.to, this.commentId)
            this.$emit('closeCommentReply')
          break
        case 'AddNewComment':
          this.AddComment(this.myCont)
          this.myCont = ''
          break

      }
    }
  }
};
</script>

<style scoped>
@import url(../style/TheAuthorComment.css);
</style>
