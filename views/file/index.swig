{% extends '../partial/layout.swig' %}
{% set module='file/index' -%}
{% block title %}文件上传测试{% endblock %}
{% block content -%}
<div style="margin:0 auto">
    <form action="/file/upload" method="post">
        <label for="file">文件</label>
        <input id="file" type="file" name="file" />
        <label for="name">文件名</label>
        <input id="name" type="text" name="name"/>
        <button type="button">上传</button>
    </form>
</div>
{%- endblock %}
