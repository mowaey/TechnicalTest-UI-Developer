import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public flag: string;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.flag = 'unitedKingdomFlag';
  }

  changeFlag(language){
    if(language === 'unitedKingdomFlag') this.translate.setDefaultLang('en');
    else if(language === 'spainFlag') this.translate.setDefaultLang('es');
    this.flag = language;
  }
}
