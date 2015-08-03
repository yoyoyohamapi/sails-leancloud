<!DOCTYPE html>
<html>
    <head><title>Todo列表</title></head>
<body>
<div>
    <form action="/todo/create" method="post">
        <input id="content" name="content" type="text" required="required" placeholder="输入内容"/>
        <input type="submit" value="创建">
    </form>
</div>
<div>
    <ul>
        {% for todo in todos %}
            <li>{{ todo.get('content') }}</li>
        {% endfor %}
    </ul>
</div>
</body>
</html>