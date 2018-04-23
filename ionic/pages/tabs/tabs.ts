import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import{LookmessagePage} from'../lookmessage/lookmessage'
import { MinePage } from '../mine/mine';
import { MessagesPage } from '../messages/messages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root =LookmessagePage;
  tab3Root = MessagesPage;
  tab4Root =MinePage;
  constructor() {

  }
}
