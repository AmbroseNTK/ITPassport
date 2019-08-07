'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">itpassport documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountPageModule.html" data-type="entity-link">AccountPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountPageModule-118a93fb5de58bc0991cde3e9d1332ac"' : 'data-target="#xs-components-links-module-AccountPageModule-118a93fb5de58bc0991cde3e9d1332ac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountPageModule-118a93fb5de58bc0991cde3e9d1332ac"' :
                                            'id="xs-components-links-module-AccountPageModule-118a93fb5de58bc0991cde3e9d1332ac"' }>
                                            <li class="link">
                                                <a href="components/AccountPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdPagePageModule.html" data-type="entity-link">AdPagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdPagePageModule-7e4a0a61b08c337f9da155ae6cf5c1cd"' : 'data-target="#xs-components-links-module-AdPagePageModule-7e4a0a61b08c337f9da155ae6cf5c1cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdPagePageModule-7e4a0a61b08c337f9da155ae6cf5c1cd"' :
                                            'id="xs-components-links-module-AdPagePageModule-7e4a0a61b08c337f9da155ae6cf5c1cd"' }>
                                            <li class="link">
                                                <a href="components/AdPagePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdPagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2b187b8fc7dcd249656bf330a667d832"' : 'data-target="#xs-components-links-module-AppModule-2b187b8fc7dcd249656bf330a667d832"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2b187b8fc7dcd249656bf330a667d832"' :
                                            'id="xs-components-links-module-AppModule-2b187b8fc7dcd249656bf330a667d832"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BeforeStartPageModule.html" data-type="entity-link">BeforeStartPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BeforeStartPageModule-9482b23003407679d3813fc4460460ff"' : 'data-target="#xs-components-links-module-BeforeStartPageModule-9482b23003407679d3813fc4460460ff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BeforeStartPageModule-9482b23003407679d3813fc4460460ff"' :
                                            'id="xs-components-links-module-BeforeStartPageModule-9482b23003407679d3813fc4460460ff"' }>
                                            <li class="link">
                                                <a href="components/BeforeStartPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BeforeStartPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CatInfoModalPageModule.html" data-type="entity-link">CatInfoModalPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CatInfoModalPageModule-ca842b5b576101625989d65d7aad0937"' : 'data-target="#xs-components-links-module-CatInfoModalPageModule-ca842b5b576101625989d65d7aad0937"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CatInfoModalPageModule-ca842b5b576101625989d65d7aad0937"' :
                                            'id="xs-components-links-module-CatInfoModalPageModule-ca842b5b576101625989d65d7aad0937"' }>
                                            <li class="link">
                                                <a href="components/CatInfoModalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CatInfoModalPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChallengePageModule.html" data-type="entity-link">ChallengePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChallengePageModule-895ea5dda6202917dff3f6f624ad741e"' : 'data-target="#xs-components-links-module-ChallengePageModule-895ea5dda6202917dff3f6f624ad741e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChallengePageModule-895ea5dda6202917dff3f6f624ad741e"' :
                                            'id="xs-components-links-module-ChallengePageModule-895ea5dda6202917dff3f6f624ad741e"' }>
                                            <li class="link">
                                                <a href="components/ChallengePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChallengePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditProfileModalPageModule.html" data-type="entity-link">EditProfileModalPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EditProfileModalPageModule-59149330864396029a31185317129546"' : 'data-target="#xs-components-links-module-EditProfileModalPageModule-59149330864396029a31185317129546"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EditProfileModalPageModule-59149330864396029a31185317129546"' :
                                            'id="xs-components-links-module-EditProfileModalPageModule-59149330864396029a31185317129546"' }>
                                            <li class="link">
                                                <a href="components/EditProfileModalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditProfileModalPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link">LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-eaf8e347e79c30f9afacdb036edbfec3"' : 'data-target="#xs-components-links-module-LoginPageModule-eaf8e347e79c30f9afacdb036edbfec3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-eaf8e347e79c30f9afacdb036edbfec3"' :
                                            'id="xs-components-links-module-LoginPageModule-eaf8e347e79c30f9afacdb036edbfec3"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignUpPageModule.html" data-type="entity-link">SignUpPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignUpPageModule-3d0b8d287f5e50ee98fc895319ef0fa7"' : 'data-target="#xs-components-links-module-SignUpPageModule-3d0b8d287f5e50ee98fc895319ef0fa7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignUpPageModule-3d0b8d287f5e50ee98fc895319ef0fa7"' :
                                            'id="xs-components-links-module-SignUpPageModule-3d0b8d287f5e50ee98fc895319ef0fa7"' }>
                                            <li class="link">
                                                <a href="components/SignUpPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignUpPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageModule.html" data-type="entity-link">Tab1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab1PageModule-850f5d8cdc7ceeea7981735aadd79805"' : 'data-target="#xs-components-links-module-Tab1PageModule-850f5d8cdc7ceeea7981735aadd79805"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab1PageModule-850f5d8cdc7ceeea7981735aadd79805"' :
                                            'id="xs-components-links-module-Tab1PageModule-850f5d8cdc7ceeea7981735aadd79805"' }>
                                            <li class="link">
                                                <a href="components/Tab1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageModule.html" data-type="entity-link">Tab2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab2PageModule-a467cdf4e90abe92e30cac6845035cc9"' : 'data-target="#xs-components-links-module-Tab2PageModule-a467cdf4e90abe92e30cac6845035cc9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab2PageModule-a467cdf4e90abe92e30cac6845035cc9"' :
                                            'id="xs-components-links-module-Tab2PageModule-a467cdf4e90abe92e30cac6845035cc9"' }>
                                            <li class="link">
                                                <a href="components/Tab2Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageModule.html" data-type="entity-link">Tab3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab3PageModule-a4d8a6e7679fa53e0b113808156cfca7"' : 'data-target="#xs-components-links-module-Tab3PageModule-a4d8a6e7679fa53e0b113808156cfca7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-a4d8a6e7679fa53e0b113808156cfca7"' :
                                            'id="xs-components-links-module-Tab3PageModule-a4d8a6e7679fa53e0b113808156cfca7"' }>
                                            <li class="link">
                                                <a href="components/Tab3Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link">TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsPageModule-6cd76d7b4dabac675c5bd4b609307cd8"' : 'data-target="#xs-components-links-module-TabsPageModule-6cd76d7b4dabac675c5bd4b609307cd8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-6cd76d7b4dabac675c5bd4b609307cd8"' :
                                            'id="xs-components-links-module-TabsPageModule-6cd76d7b4dabac675c5bd4b609307cd8"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link">TabsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestResultPageModule.html" data-type="entity-link">TestResultPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestResultPageModule-791b1ea55f56777b4b32a34666f77670"' : 'data-target="#xs-components-links-module-TestResultPageModule-791b1ea55f56777b4b32a34666f77670"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestResultPageModule-791b1ea55f56777b4b32a34666f77670"' :
                                            'id="xs-components-links-module-TestResultPageModule-791b1ea55f56777b4b32a34666f77670"' }>
                                            <li class="link">
                                                <a href="components/TestResultPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestResultPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestRoomPageModule.html" data-type="entity-link">TestRoomPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestRoomPageModule-fc6e5e43fa0eeda31f015f793a30bf91"' : 'data-target="#xs-components-links-module-TestRoomPageModule-fc6e5e43fa0eeda31f015f793a30bf91"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestRoomPageModule-fc6e5e43fa0eeda31f015f793a30bf91"' :
                                            'id="xs-components-links-module-TestRoomPageModule-fc6e5e43fa0eeda31f015f793a30bf91"' }>
                                            <li class="link">
                                                <a href="components/TestRoomPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestRoomPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TrainingPageModule.html" data-type="entity-link">TrainingPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TrainingPageModule-63b9ee94f33eb2cb4b832bf8d87071ef"' : 'data-target="#xs-components-links-module-TrainingPageModule-63b9ee94f33eb2cb4b832bf8d87071ef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TrainingPageModule-63b9ee94f33eb2cb4b832bf8d87071ef"' :
                                            'id="xs-components-links-module-TrainingPageModule-63b9ee94f33eb2cb4b832bf8d87071ef"' }>
                                            <li class="link">
                                                <a href="components/TrainingPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TrainingPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VerifyEmailPageModule.html" data-type="entity-link">VerifyEmailPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VerifyEmailPageModule-ab49d968df784e6845a7fab5d615ade8"' : 'data-target="#xs-components-links-module-VerifyEmailPageModule-ab49d968df784e6845a7fab5d615ade8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VerifyEmailPageModule-ab49d968df784e6845a7fab5d615ade8"' :
                                            'id="xs-components-links-module-VerifyEmailPageModule-ab49d968df784e6845a7fab5d615ade8"' }>
                                            <li class="link">
                                                <a href="components/VerifyEmailPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerifyEmailPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WelcomePageModule.html" data-type="entity-link">WelcomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WelcomePageModule-015d1a43f272e19f16703a0e034d10e0"' : 'data-target="#xs-components-links-module-WelcomePageModule-015d1a43f272e19f16703a0e034d10e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WelcomePageModule-015d1a43f272e19f16703a0e034d10e0"' :
                                            'id="xs-components-links-module-WelcomePageModule-015d1a43f272e19f16703a0e034d10e0"' }>
                                            <li class="link">
                                                <a href="components/WelcomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WelcomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/EditInfo.html" data-type="entity-link">EditInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditInfoFailed.html" data-type="entity-link">EditInfoFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditInfoSuccess.html" data-type="entity-link">EditInfoSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/Fetch.html" data-type="entity-link">Fetch</a>
                            </li>
                            <li class="link">
                                <a href="classes/Fetch-1.html" data-type="entity-link">Fetch</a>
                            </li>
                            <li class="link">
                                <a href="classes/Fetch-2.html" data-type="entity-link">Fetch</a>
                            </li>
                            <li class="link">
                                <a href="classes/Fetch-3.html" data-type="entity-link">Fetch</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchFailed.html" data-type="entity-link">FetchFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchFailed-1.html" data-type="entity-link">FetchFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchGeneratedLog.html" data-type="entity-link">FetchGeneratedLog</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchGeneratedLogSuccess.html" data-type="entity-link">FetchGeneratedLogSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchSuccess.html" data-type="entity-link">FetchSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchSuccess-1.html" data-type="entity-link">FetchSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchSuccess-2.html" data-type="entity-link">FetchSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchSuccess-3.html" data-type="entity-link">FetchSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/ForgotPassword.html" data-type="entity-link">ForgotPassword</a>
                            </li>
                            <li class="link">
                                <a href="classes/ForgotPasswordSentFailed.html" data-type="entity-link">ForgotPasswordSentFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/ForgotPasswordSentSuccess.html" data-type="entity-link">ForgotPasswordSentSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetInfo.html" data-type="entity-link">GetInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetInfoFailed.html" data-type="entity-link">GetInfoFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetInfoSuccess.html" data-type="entity-link">GetInfoSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/InitInfo.html" data-type="entity-link">InitInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login.html" data-type="entity-link">Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginFailed.html" data-type="entity-link">LoginFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginG.html" data-type="entity-link">LoginG</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginGFailed.html" data-type="entity-link">LoginGFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginGSuccess.html" data-type="entity-link">LoginGSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginSuccess.html" data-type="entity-link">LoginSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/PayCredits.html" data-type="entity-link">PayCredits</a>
                            </li>
                            <li class="link">
                                <a href="classes/PayCreditsSuccess.html" data-type="entity-link">PayCreditsSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignIn.html" data-type="entity-link">SignIn</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInFailed.html" data-type="entity-link">SignInFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInSuccess.html" data-type="entity-link">SignInSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignOut.html" data-type="entity-link">SignOut</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCredit.html" data-type="entity-link">UpdateCredit</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCreditFailed.html" data-type="entity-link">UpdateCreditFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCreditSuccess.html" data-type="entity-link">UpdateCreditSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGeneratedLog.html" data-type="entity-link">UpdateGeneratedLog</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGeneratedLogSuccess.html" data-type="entity-link">UpdateGeneratedLogSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateInfo.html" data-type="entity-link">UpdateInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLog.html" data-type="entity-link">UpdateLog</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLogFailed.html" data-type="entity-link">UpdateLogFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLogSuccess.html" data-type="entity-link">UpdateLogSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/Write.html" data-type="entity-link">Write</a>
                            </li>
                            <li class="link">
                                <a href="classes/WriteFailed.html" data-type="entity-link">WriteFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/WriteSuccess.html" data-type="entity-link">WriteSuccess</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CategoryEffects.html" data-type="entity-link">CategoryEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link">CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigEffects.html" data-type="entity-link">ConfigEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link">DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HistoryEffects.html" data-type="entity-link">HistoryEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HistoryService.html" data-type="entity-link">HistoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuestionEffects.html" data-type="entity-link">QuestionEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuestionService.html" data-type="entity-link">QuestionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SysLogEffects.html" data-type="entity-link">SysLogEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SyslogService.html" data-type="entity-link">SyslogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeService.html" data-type="entity-link">TimeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserEffects.html" data-type="entity-link">UserEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/BeforeTestGuard.html" data-type="entity-link">BeforeTestGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/InTestGuard.html" data-type="entity-link">InTestGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/OnFinishTestGuard.html" data-type="entity-link">OnFinishTestGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link">Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Config.html" data-type="entity-link">Config</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/History.html" data-type="entity-link">History</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppState.html" data-type="entity-link">IAppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Question.html" data-type="entity-link">Question</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SysLog.html" data-type="entity-link">SysLog</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});