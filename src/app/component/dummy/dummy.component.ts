import { Component, input, output, } from "@angular/core";

@Component({
  selector: 'crm-dummy',
  imports: [],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css'
})
export class DummyComponent {
  public label = input.required<string>();
  public clicked = output<string>();
  
  constructor() { }

  onClicked(): void {
    this.clicked.emit(this.label());
  }

}
