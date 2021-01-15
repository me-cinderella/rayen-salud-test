export const dateFormatter = (date) => {
    let d;

    if (date === 'current') {
        d = new Date();
    } else {
        d = new Date(date);
    }

    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    
    return `${da}-${mo}-${ye}`;
}

export const dateFormatterMonthName = (date) => {
    const d = new Date(date);

    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    
    return `${da}-${mo}-${ye}`;
}