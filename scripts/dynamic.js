// document.querySelector('.form').addEventListener('submit' , (e) => {
    // e.preventDefault();
    $(document).ready(function() {  
        // price fields 
        const max_fields      = 10; //maximum input boxes allowed
        let wrapper         = $(".dynamic-price"); //Fields wrapper
        let add_button      = $("#price-btn"); //Add button ID
        
        let x = 1; //initlal text box count
        $(add_button).click(function(e){ //on add input button click
            e.preventDefault();
            if(x < max_fields){ //max input box allowed
                x++; //text box increment
                $(wrapper).append('<div> <input type="text" name="price[' + x + ']"/>  <input type="text" name="color['+ x +']"/>  <a href="#" class="remove_field">Remove</a> </div>' ); // add input boxes.
            } else {
                $('.error-message').append('<div class="error"> Only 10 Choices Allowed </div>')
            }
        });
        
        $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
            e.preventDefault(); $(this).parent('div').remove(); x--;
        })

        // offers fields
        const max_fields1      = 10; //maximum input boxes allowed
        let wrapper1         = $(".dynamic-offers"); //Fields wrapper
        let add_button1     = $("#offers-btn"); //Add button ID

        let y = 1; 

        $(add_button1).click(function(e) {
            e.preventDefault();
            if(y < max_fields1) {
                y++;
                $(wrapper1).append('<div> <input type="text" name="offer['+ y +']"/>  <input type="text" name="color['+ y +']"/>  <a href="#" class="remove_field">Remove </a> </div>')
            } else {
                $('.error-message').append('<div class="error"> Only 10 Choices Allowed </div>')
            }

            $(wrapper1).on('click' , '.remove_field' , function(e) {
                e.preventDefault(); $(this).parent('div').remove(); y--;
            })
        })


        // colors fields
        const max_fields2      = 10; //maximum input boxes allowed
        let wrapper2         = $(".dynamic-colors"); //Fields wrapper
        let add_button2     = $("#colors-btn"); //Add button ID

        let z = 1; 

        $(add_button2).click(function(e) {
            e.preventDefault();
            if(z < max_fields2) {
                z++;
                $(wrapper2).append('<div> <input type="text" name="color['+ z +']"/> <input type="text" name="color['+ z +']"/> <a href="#" class="remove_field">Remove </a>  </div>')
            } else {
                $('.error-message').append('<div class="error"> Only 10 Choices Allowed </div>')
            }

            $(wrapper2).on('click' , '.remove_field' , function(e) {
                e.preventDefault(); $(this).parent('div').remove(); z--;
            })
        })

        // accessories fields 
        const max_fields3      = 10; //maximum input boxes allowed
        let wrapper3         = $(".dynamic-accessory"); //Fields wrapper
        let add_button3     = $("#accessory-btn"); //Add button ID

        let a = 1; 

        $(add_button3).click(function(e) {
            e.preventDefault();
            if(a < max_fields3) {
                a++;
                $(wrapper3).append('<div> <input type="text" name="color['+ a +']"/>  <input type="text" name="color['+ a +']"/> <a href="#" class="remove_field">Remove </a> </div>')
            } else {
                $('.error-message').append('<div class="error"> Only 10 Choices Allowed </div>')
            }

            $(wrapper3).on('click' , '.remove_field' , function(e) {
                e.preventDefault(); $(this).parent('div').remove(); a--;
            })
        })

        // extra benefits
        
        const max_fields4      = 10; //maximum input boxes allowed
        let wrapper4         = $(".dynamic-extra"); //Fields wrapper
        let add_button4     = $("#extrabtn"); //Add button ID

        let b = 1; 

        $(add_button4).click(function(e) {
            e.preventDefault();
            if(b < max_fields4) {
                b++;
                $(wrapper4).append('<div> <input type="text" name="color['+ b +']"/>  <input type="text" name="color['+ b +']"/> <a href="#" class="remove_field">Remove </a> </div>')
            } else {
                $('.error-message').append('<div class="error"> Only 10 Choices Allowed </div>')
            }

            $(wrapper4).on('click' , '.remove_field' , function(e) {
                e.preventDefault(); $(this).parent('div').remove(); b--;
            })
        })

    })
  

// })


