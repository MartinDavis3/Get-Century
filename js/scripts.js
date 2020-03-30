const getCentury = ( year ) => {
    var ordinalIndicator = 'th';
    var century = Math.floor( ( year + 99 ) / 100 );
    if (century > 20 ) { 
        ordinalIndicator = 'st';
    }
    return `${century}${ordinalIndicator} century`
}