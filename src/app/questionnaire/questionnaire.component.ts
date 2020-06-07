import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as questionaireData from '../../assets/questionnaire.json';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  questionnaireControl = new FormControl('');

  constructor() { }

  data: any = (questionaireData as any).default;

  ngOnInit(): void {
    console.log('questionaire data', questionaireData.date);
  }

}
