export async function marksAvg(marks) {
    let avg = 0;
    for (let i = 0; i < marks.length; i++) {
        avg += marks[i]['grade'];
    }
    avg /= marks.length;
    return avg;
}

export async function marksList(marks) {
    let marks_list = [];
    for (let i = 0; i < marks.length; i++) {
        marks_list.push(marks[i]['grade']);
    }
    return marks_list;
}
