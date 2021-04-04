function updateLight(lightId, dimLevel) {
    let data = {};
    data.lightId = lightId;
    data.dimLevel = dimLevel;
    $ajax: {
        //calling an API for updating the burning status of Light
        success: {
            //change the color of the Light
        }
        error: {
            //Try again
        }
    }
}

updateLight(84, 1) //here dimlevel 1 means Light is ON