import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  supportLanguages = ['en', 'tr'];

  constructor(
    private config: PrimeNGConfig,
    private translateService: TranslateService,
    private confirmationService: ConfirmationService
  ) {
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('en');

  }

  selectedLanguage!: string;

  ngOnInit(): void {
    this.selectedLanguage = this.supportLanguages[0];
  }

  useLang(lang: any) {
    this.translateService.use(lang.value);
    this.translateService
    .get('primeng')
    .subscribe((res) => {
      this.config.setTranslation(res)
    });
   
  }

  confirm1() {
    this.confirmationService.confirm({
      message: this.translateService.instant('confirm.message'),
      header: this.translateService.instant('confirm.header'),
      icon: 'pi pi-exclamation-triangle',
      accept: () => {},
      reject: () => {},
    });
  }
}
