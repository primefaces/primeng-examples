import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [CommonModule, RouterModule, HttpClientModule, TranslateModule, FormsModule, DropdownModule, ButtonModule, ConfirmDialogModule],
    providers: [TranslateService, ConfirmationService]
})
export class AppComponent implements OnInit {
    supportLanguages = ['en', 'tr'];

    constructor(private config: PrimeNGConfig, private translateService: TranslateService, private confirmationService: ConfirmationService) {
        this.translateService.addLangs(this.supportLanguages);
        this.translateService.setDefaultLang('en');
    }

    selectedLanguage!: string;

    ngOnInit(): void {
        this.selectedLanguage = this.supportLanguages[0];
    }

    useLang(lang: any) {
        this.translateService.use(lang.value);
        this.translateService.get('primeng').subscribe((res) => {
            this.config.setTranslation(res);
        });
    }

    confirm1() {
        this.confirmationService.confirm({
            message: this.translateService.instant('confirm.message'),
            header: this.translateService.instant('confirm.header'),
            icon: 'pi pi-exclamation-triangle',
            accept: () => {},
            reject: () => {}
        });
    }
}
