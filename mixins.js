export default {
  computed: {
    isLogined(){
      return !!this.$one.uc.api.isLogined() // 判断是否已经登录
    },
    tenantId(){
      return this.$one.uc.token.getCurTenant()?.tenantId
    }
  },
}
