export const ALL_LECTURES = [{
    id: 1,
    name: 'Angular UI-Router'
}, {
    id: 2,
    name: 'Lecture 2'
}, {
    id: 3,
    name: 'Lecture 3'
}];

class LectureService {
    get() {
        return ALL_LECTURES;
    }
}

export default new LectureService();