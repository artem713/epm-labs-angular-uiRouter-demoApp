import lecture from './lecture';
import lectureDetails from './lectureDetails';
import lectureService from './lecture.service';

const lecturesModule = angular.module('labs.lectures', ['ui.router']);

lecturesModule.config($stateProvider => {
    $stateProvider.state('labs.lectures', {
        url: '/lectures',
        resolve: {
            lectures: () => {
                return lectureService.get();
            }
        },
        views: {
            '': {
                templateUrl: './app/lectures/lectures.list.html',
                controller: lecture,
                controllerAs: 'lectureCtrl'
            }
        }
    }).state('labs.lectures.details', {
        url: '/:lectureId/details',
        params: {
            lectureId: null
        },
        resolve: {
            lecture: (lectures, $stateParams) => {
                return lectures.find(lecture => lecture.id.toString() === $stateParams.lectureId);
            }
        },
        views: {
            'details': {
                templateUrl: './app/lectures/lectures.details.html',
                controller: lectureDetails,
                controllerAs: 'lectureDetailsCtrl'
            }
        }
    });
});

export default lecturesModule.name;