<script>
    var app = {};
    //    如果指明了预调用模块，则为app设置动作
    {% if module -%}
    app.action = '{{ module }}';
    {%- endif  %}
</script>

{# requirejs  #}
<script data-main="{{ path.script }}/common/main" src="{{ path.bower }}/requirejs/require.js"></script>

