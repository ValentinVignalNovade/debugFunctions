function printDaterange(daterange) {
    if (daterange.start) {
        console.log('start: ' + new Date(daterange.start));
    } else {
        console.log('no start');
    }
    if (daterange.end) {
        console.log('end: ' + new Date(daterange.end));
    } else {
        console.log('no end');
    }
}