(function (global, $) {
    if($('.form-group--radio').length > 0) {
        $('.form-group--radio > input').on('click', function() {
            $('.form-group--radio').removeClass('display');
            $(this).parent().addClass('display');
        });
    
        $('.option--sub > input').on('click', function() {
            $('.option--sub').removeClass('display');
            $(this).parent().addClass('display');
        });
    
    } else {
        $('input:radio').click(function() {
            $('input:radio[name='+$(this).attr('name')+']').parent().removeClass('active');
                $(this).parent().addClass('active');
        });
    }
});