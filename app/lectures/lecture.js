import LectureService from './lecture.service';

export default class Lecture {
    constructor($state, lectures) {
        this.$state = $state;
        this.lecturesList = lectures || [];
    }

    navigateToDetails(lectureId) {
        this.$state.go('labs.lectures.details', { lectureId });
    }
}