export default $stateProvider => {
    $stateProvider.state('labs', {
        url: '/labs',
        views: {
            '': {
                template: `
                <div ui-view="header@labs"></div>
                <ui-view><h1>Welcome to the LABS app!</h1></ui-view>
                `
            },
            'header@labs': {
                template: `
                    <div class="labs-header">
                        <div class="labs-header__item">
                            <div class="labs-header__item-info">
                                Navigating to the state using <b>ui-sref</b>
                                <br/>
                                and <b>ui-sref-opts="{ reload: true }"</b>
                                <br/>
                                <code>ui-sref="labs"</code>
                                <br/>
                            </div>
                            <a href="#" ui-sref="labs" ui-sref-opts="{ reload: true }">LABS</a>
                        </div>
                        <div class="labs-header__item">
                            <div class="labs-header__item-info">
                                Navigating to the state using <b>ui-sref</b>
                                <br/>
                                <code>ui-sref="labs.lectures"</code>
                                <br/>
                            </div>
                            <a href="#" ui-sref="labs.lectures">LECTURES</a>
                        </div>
                        <div class="labs-header__item">
                            <div class="labs-header__item-info">
                                or using <b>ng-click</b> with controller's method
                                <br/>
                                <code>ng-click="header.navigateTo('labs.students')"</code>
                                <br/>
                            </div>
                            <a href="#" ng-click="header.navigateTo('labs.students')">STUDENTS</a>
                        </div>
                    </div>`,
                controller: $state => {
                    return {
                        navigateTo: state => {
                            $state.go(state);
                        }
                    }
                },
                controllerAs: 'header'
            }
        }
    })
};