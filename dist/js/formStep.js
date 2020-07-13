let  bathroom, house, whenLooking, finish, time;
$(document).ready(function(){
    //      ProcessingAnimation();


    $('#Safety').click(function(){
        $('#Reason-bathroom').removeClass('active');
        $('#myHouse').addClass('active');
        $('#americanStandard').addClass('startForm');
        bathroom = 'Safety';

    });
    $('#Therapeutic').click(function(){
        $('#Reason-bathroom').removeClass('active');
        $('#myHouse').addClass('active');
        $('#americanStandard').addClass('startForm');
        bathroom = 'Therapeutic';

    });
    $('#Both').click(function(){
        $('#Reason-bathroom').removeClass('active');
        $('#myHouse').addClass('active');
        $('#americanStandard').addClass('startForm');
        bathroom = 'Both';

    });
    $('#Other-Reasons').click(function(){
        $('#Reason-bathroom').removeClass('active');
        $('#myHouse').addClass('active');
        $('#americanStandard').addClass('startForm');
        bathroom = 'Other Reasons';

    });
    
    $('#Yes').click(function(){
        $('#myHouse').removeClass('active');
        $('#whenLooking').addClass('active');
        house = 'Yes';

    });
    $('#No').click(function(){
        $('#myHouse').removeClass('active');
        $('#whenLooking').addClass('active');
        house = 'No';

    });

    $('#Immediately').click(function(){
        $('#whenLooking').removeClass('active');
        $('#Process').addClass('active');
        whenLooking = 'Immediately';
        ProcessingAnimation();
    });
    $('#6Months').click(function(){
        $('#whenLooking').removeClass('active');
        $('#Process').addClass('active');
        whenLooking = 'Within 6 Months';
        ProcessingAnimation();
    });
    $('#NotSure').click(function(){
        $('#whenLooking').removeClass('active');
        $('#Process').addClass('active');
        whenLooking = 'Not Sure I Need Assistance';
        ProcessingAnimation();
    });

    $('#getQuote').click(function(){
        $('#freeForm').removeClass('active');
        $('#finish').addClass('active');
        finish = 'finish';
        
    });

})

function ProcessingAnimation(){

    $('.bathroom-text').text(bathroom);
    $('.house-text').text(house);
    $('.whenLooking-text').text(whenLooking);
    time = 3000;
    // $_GET('t');
    setTimeout(function(){
        // $('#bathroom-spin').fadeIn("slow", function(){
        //     $('#bathroom-spin').css('background-image', 'url(/images/check.svg)');
        // })

    },time/3);
    setTimeout(function(){
        // $('#house-spin').fadeIn("slow", function(){
        //     $('#house-spin').css('background-image', 'url(/images/check.svg)');
        // })

    },time/2);
    setTimeout(function(){
        // $('#whenLooking-spin').fadeIn("slow", function(){
        //     $('#whenLooking-spin').css('background-image', 'url(/images/check.svg)');
        // })

    },time/1.5);
    setTimeout(function(){
        $('#Process').removeClass('active');
        $('#freeForm').addClass('active');

    },time);


}
