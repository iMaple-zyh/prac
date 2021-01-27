<template>
    <div class="bolg-remark">
 <p> 说说你想说的</p>
      <textarea
        name=""
        id=""
        cols="70"
        rows="10"
        v-model="content"
      ></textarea>

        <p>
            <button @click="doRemark" class="btn">提交</button>
        </p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                content: "",
            }
        },
        created(){},
        methods:{
            doReark(){
               let loginUser = this.$store.state.loginUser;
      if (loginUser) {
        this.$http
          .post("/blog/detail", {
            content: this.content,
            userId: loginUser.user_id,
            blogId:   blog_id ,
            posttime: new Date()
          })
          .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              this.$router.push("/");
            } else {
              alert("发表评论失败!");
            }
          });
      }else{
          alert('当键盘侠也得先登录啊');
          this.$router.push('/login');
      }
            },
        },
    }
</script>