/* Code By David Clews */

/**
 * convertToLocalTime
 * 
 * Converts a UTC string to Your Local Time Setting By Your Operating System/Browser
 * 
 * @param {string} a The date time string to convert "2019-05-05 19:58:04"
 * 
 * @return {string} The local time string
 */
function convertToLocalDateTime(a) {
    let b = new Date(a),
        c = new Date(Date.UTC(
          b.getFullYear(),
          b.getMonth(),
          b.getDate(),
          b.getHours(),
          b.getMinutes(),
          b.getSeconds()
        ));

    if(c.toLocaleTimeString() === "Invalid Date" || c.toLocaleDateString() === "Invalid Date"){
        throw "Error Converting The Time";
    }else{
        return c.toLocaleTimeString()+" - "+c.toLocaleDateString();
    }
    
}
