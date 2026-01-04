export const formatDate = (timeSpecification) => {
    const newDate = timeSpecification ? new Date(timeSpecification) : new Date();
    const year = String(newDate.getFullYear()).padStart(4,'0');
    const month = String(newDate.getMonth() +1).padStart(2, '0');
    const date = String(newDate.getDate()).padStart(2, '0');
    const time = String(newDate.getHours()).padStart(2, '0');
    const minutes = String(newDate.getMinutes()).padStart(2, '0');
    const seconds = String(newDate.getSeconds()).padStart(2, '0');
    const getTime = newDate.getTime();

    return {
        y: year,
        m: month,
        d: date,
        t: time,
        mi: minutes,
        s: seconds,
        getTime,
        getDate : `${year}-${month}-${date}`,
    }
}