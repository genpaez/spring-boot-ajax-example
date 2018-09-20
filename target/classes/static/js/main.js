$(document).ready(function () {

    $("#search-form").submit(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();

        shoot_ajax_submit();
//        fire_ajax_submit();

    });
    

});



function shoot_ajax_submit() {
	
	var search = {}
    search["username"] = $("#username").val();
	
    $("#btn-search").prop("disabled", true);	
	
	
    $.ajax({
    	type: "POST",
        contentType: "application/json",
        url: "/api/search",
        data: JSON.stringify(search),
        dataType: 'json',
        cache: false,
        timeout: 600000,
    		}).then(function(data) {
    			$('.result').text(JSON.stringify(data, null, 1));
    		});
    
    $("#btn-search").prop("disabled", false);
}



function fire_ajax_submit() {

    var search = {}
    search["username"] = $("#username").val();
    //search["email"] = $("#email").val();

    $("#btn-search").prop("disabled", true);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/api/search",
        data: JSON.stringify(search),
        dataType: 'json',
        cache: false,
        timeout: 600000,




        success: function (data) {

            var json = "<h10>Ajax Response</h10><pre>"
                + JSON.stringify(data, null, 1) + "</pre>";
            $('#feedback').html(json);



            console.log("SUCCESS : DATA", data);
            $("#btn-search").prop("disabled", false);

        },

        error: function (e) {

            var json = "<h10>Ajax Error</h10><pre>"
                + e.responseText + "</pre>";
            $('#feedback').html(json);

            console.log("ERROR : ", e);
            $("#btn-search").prop("disabled", false);

        }
    });

}