import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavigationComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  exports: [NavigationComponent, HeaderComponent, FooterComponent],
})
export class CoreModule {}
