(function (global, $) {

    var LCC = global.LCC || {};
    LCC.formConditionals = LCC.formConditionals || {};
    
    LCC.formConditionals.radio = function() {
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
    }

    LCC.formConditionals.select = function() {
        // Select - other
        if( $('.form-control').length > 0 ) {
            $('select').on('change', function() {
                $(this).parent().removeClass('active');
                var value = this.value;
                if( value == 'Other' ) {
                    $(this).parent().addClass('active');
                }
            });
        }
    }

    LCC.formConditionals.addressEdit = function() {
        if( $('.form-group-link').length > 0 ) {
            $('.address').on('click', '.address--edit', function() {
                $(this).removeClass('address--edit');
                $(this).addClass('address--save');
                $(this).closest('form').removeClass('disabledInput');
                $(this).closest('form').find('input').removeAttr('disabled');
                $(this).html('Save');
            });
            $('.address').on('click', '.address--save', function() {
                $(this).removeClass('address--save');
                $(this).addClass('address--edit');
                $(this).closest('form').addClass('disabledInput');
                $(this).closest('form').find('input').attr('disabled', 'true');
                $(this).html('Edit');
            });
        }
    }

    global.LCC = LCC;
})(window, jQuery);