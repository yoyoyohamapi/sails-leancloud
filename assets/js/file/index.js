define(['jquery-form'],function(){
    return {
        run: function(){
            $("button").click(function(){
                $("form").ajaxSubmit({
                    url: $("form").attr("action"),
                    type: $("form").attr("method"),
                    dataType: 'json',
                    success: function(data){
                        alert(data);
                    }
                });
            });
        }
    };

});