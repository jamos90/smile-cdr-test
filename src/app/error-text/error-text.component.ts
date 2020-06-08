import { Component, OnInit } from '@angular/core';
import { ErrorTextService } from '../services/error-text.service';

@Component({
  selector: 'app-error-text',
  templateUrl: './error-text.component.html',
  styleUrls: ['./error-text.component.scss']
})
export class ErrorTextComponent implements OnInit {

  constructor(public errorText: ErrorTextService) { }


  ngOnInit(): void {
  }

}
