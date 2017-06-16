<template>
  <div></div>
</template>

<script>
  import 'static/plugins/umeditor1.2.3/themes/default/css/umeditor.min.css'
  import 'static/plugins/umeditor1.2.3/third-party/template.min';
  import 'static/plugins/umeditor1.2.3/umeditor.config';
  import 'static/plugins/umeditor1.2.3/umeditor.min';
  import 'static/plugins/umeditor1.2.3/lang/zh-cn/zh-cn'

  export default {
    name: 'umeditor',
    data () {
      return {
        id: 'editor_' + (Math.random() * 100000000000000000),
      }
    },
    props: {
      value: String,
      config: Object
    },
    mounted() {
      this.$nextTick(function f1() {
        // 保证 this.$el 已经插入文档

        this.$el.id = this.id;
        this.editor = UM.getEditor(this.id, this.config);

        this.editor.ready(function f2() {
          if(this.value)
            this.editor.setContent(this.value);

          this.editor.addListener('contentChange', function () {
            let content = this.editor.getContent();
            if(content)
              this.$emit('input', content);
          }.bind(this));

          this.$emit('ready', this.editor);
        }.bind(this));
      });
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
