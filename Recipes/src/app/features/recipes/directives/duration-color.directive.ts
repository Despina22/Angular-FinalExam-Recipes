import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDurationColor]',
})
export class DurationColorDirective implements OnInit {
  @Input('appDurationColor') duration!: number;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.durationColor();
  }

  private durationColor() {
    if (this.duration < 30) {
      this.setStyle('#a7c957');
    } else if (this.duration >= 30 && this.duration <= 60) {
      this.setStyle('#cbf3f0');
    } else {
      this.setStyle('#fefee3');
    }
  }

  setStyle(backgroundColor: string) {
    const style = { 'background-color': backgroundColor };
    Object.assign(this.elementRef.nativeElement.style, style);
  }
}
